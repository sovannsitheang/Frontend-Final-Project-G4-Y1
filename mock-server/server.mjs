import { createServer } from "node:http";
import { randomBytes } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  getCourses,
  getCourse,
  getLessons,
  addCourse,
  patchCourse,
  removeCourse,
  addLessons,
  patchLesson,
  removeLesson,
  addEnrolledStudent,
  addMaterial,
} from "./data.mjs";

const PORT = Number(process.env.PORT ?? 3001);
const USERS_FILE = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "users.json",
);

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Authorization",
};

const users = existsSync(USERS_FILE)
  ? JSON.parse(readFileSync(USERS_FILE, "utf8"))
  : (() => {
      const seed = [
        {
          _id: "demo0001",
          name: "Demo Student",
          email: "demo@example.com",
          password: "secretPass123",
          role: "student",
          points: 0,
          badges: [],
          __v: 0,
        },
        {
          _id: "admin0001",
          name: "Demo Admin",
          email: "admin@example.com",
          password: "adminPass123",
          role: "admin",
          points: 0,
          badges: [],
          __v: 0,
        },
      ];
      writeFileSync(USERS_FILE, JSON.stringify(seed, null, 2));
      return seed;
    })();

function saveUsers() {
  writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

function sendJson(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json",
    ...CORS_HEADERS,
  });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 5e6) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

function fakeToken(user) {
  const header = Buffer.from(JSON.stringify({ alg: "none", typ: "JWT" }));
  const payload = Buffer.from(
    JSON.stringify({ _id: user._id, iat: Math.floor(Date.now() / 1000) }),
  );
  return `${header.toString("base64url")}.${payload.toString("base64url")}.${randomBytes(12).toString("base64url")}`;
}

function publicUser(user) {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    points: user.points,
    badges: user.badges,
    __v: user.__v,
  };
}

function handleAuthRegister(body) {
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body?.password === "string" ? body.password : "";
  const role = typeof body?.role === "string" ? body.role : "student";

  if (!name || !email || !password) {
    return { status: 400, body: { error: "Name, email and password are required" } };
  }
  if (password.length < 8) {
    return { status: 400, body: { error: "Password must be at least 8 characters long" } };
  }
  if (password.toLowerCase().includes("password")) {
    return { status: 400, body: { error: 'Password must not contain the word "password"' } };
  }
  if (users.some((u) => u.email === email)) {
    return { status: 400, body: { error: "User validation failed: email: A user with this email already exists" } };
  }

  const user = {
    _id: randomBytes(12).toString("hex"),
    name,
    email,
    role,
    points: 0,
    badges: [],
    __v: 0,
  };
  user.password = password;
  users.push(user);
  saveUsers();
  return { status: 201, body: { user: publicUser(user), token: fakeToken(user) } };
}

function handleAuthLogin(body) {
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body?.password === "string" ? body.password : "";
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return { status: 401, body: { error: "Invalid email or password" } };
  }
  return { status: 200, body: { user: publicUser(user), token: fakeToken(user) } };
}

async function handleRequest(req, res) {
  if (req.method === "OPTIONS") {
    res.writeHead(204, CORS_HEADERS);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/api/auth/register" && req.method === "POST") {
    try {
      const body = await readBody(req);
      const result = handleAuthRegister(body);
      sendJson(res, result.status, result.body);
    } catch (err) {
      sendJson(res, 400, { error: err.message });
    }
    return;
  }

  if (url.pathname === "/api/auth/login" && req.method === "POST") {
    try {
      const body = await readBody(req);
      const result = handleAuthLogin(body);
      sendJson(res, result.status, result.body);
    } catch (err) {
      sendJson(res, 400, { error: err.message });
    }
    return;
  }

  const matchList = url.pathname.match(/^\/api\/courses\/?$/);
  const matchCourse = url.pathname.match(/^\/api\/courses\/([^/]+)\/?$/);
  const matchLessons = url.pathname.match(/^\/api\/courses\/([^/]+)\/lessons\/?$/);
  const matchLesson = url.pathname.match(/^\/api\/courses\/([^/]+)\/lessons\/([^/]+)\/?$/);
  const matchEnroll = url.pathname.match(/^\/api\/courses\/([^/]+)\/enroll\/?$/);
  const matchMaterials = url.pathname.match(/^\/api\/courses\/([^/]+)\/materials\/?$/);

  if (matchList) {
    if (req.method === "GET") {
      sendJson(res, 200, getCourses());
    } else if (req.method === "POST") {
      try {
        const body = await readBody(req);
        const created = Array.isArray(body)
          ? body.map((item) => addCourse(item)).filter(Boolean)
          : addCourse(body);
        if (!created || (Array.isArray(created) && created.length === 0)) {
          sendJson(res, 400, { error: "Title and description are required" });
          return;
        }
        sendJson(res, 201, created);
      } catch (err) {
        sendJson(res, 400, { error: err.message });
      }
    } else {
      sendJson(res, 405, { error: "Method Not Allowed" });
    }
    return;
  }

  if (matchCourse) {
    const id = decodeURIComponent(matchCourse[1]);
    if (req.method === "GET") {
      const course = getCourse(id);
      if (!course) {
        sendJson(res, 404, { error: "Course not found" });
        return;
      }
      sendJson(res, 200, course);
      return;
    }
    if (req.method === "PATCH") {
      try {
        const body = await readBody(req);
        const updated = patchCourse(id, body);
        if (!updated) {
          sendJson(res, 404, { error: "Course not found" });
          return;
        }
        sendJson(res, 200, updated);
      } catch (err) {
        sendJson(res, 400, { error: err.message });
      }
      return;
    }
    if (req.method === "DELETE") {
      if (removeCourse(id)) {
        sendJson(res, 200, { message: "Course deleted successfully" });
      } else {
        sendJson(res, 404, { error: "Course not found" });
      }
      return;
    }
    sendJson(res, 405, { error: "Method Not Allowed" });
    return;
  }

  if (matchLessons) {
    const id = decodeURIComponent(matchLessons[1]);
    if (req.method === "GET") {
      const course = getCourse(id);
      const lessons = getLessons(id);
      if (!course || !lessons) {
        sendJson(res, 404, { error: "Course not found" });
        return;
      }
      sendJson(res, 200, { ...course, lessons });
      return;
    }
    if (req.method === "POST") {
      try {
        const body = await readBody(req);
        const result = addLessons(id, body);
        if (!result) {
          sendJson(res, 404, { error: "Course not found" });
          return;
        }
        sendJson(res, 201, result);
      } catch (err) {
        sendJson(res, 400, { error: err.message });
      }
      return;
    }
    sendJson(res, 405, { error: "Method Not Allowed" });
    return;
  }

  if (matchLesson) {
    const courseId = decodeURIComponent(matchLesson[1]);
    const lessonId = decodeURIComponent(matchLesson[2]);
    if (req.method === "PATCH") {
      try {
        const body = await readBody(req);
        const updated = patchLesson(courseId, lessonId, body);
        if (!updated) {
          sendJson(res, 404, { error: "Lesson not found" });
          return;
        }
        sendJson(res, 200, updated);
      } catch (err) {
        sendJson(res, 400, { error: err.message });
      }
      return;
    }
    if (req.method === "DELETE") {
      if (removeLesson(courseId, lessonId)) {
        sendJson(res, 200, { message: "Lesson deleted successfully" });
      } else {
        sendJson(res, 404, { error: "Lesson not found" });
      }
      return;
    }
    sendJson(res, 405, { error: "Method Not Allowed" });
    return;
  }

  if (matchEnroll && req.method === "POST") {
    const id = decodeURIComponent(matchEnroll[1]);
    if (!addEnrolledStudent(id)) {
      sendJson(res, 404, { error: "Course not found" });
      return;
    }
    sendJson(res, 200, { message: "Enrolled successfully" });
    return;
  }

  if (matchMaterials && req.method === "POST") {
    const id = decodeURIComponent(matchMaterials[1]);
    if (!addMaterial(id)) {
      sendJson(res, 404, { error: "Course not found" });
      return;
    }
    sendJson(res, 200, { message: "Material uploaded successfully" });
    return;
  }

  sendJson(res, 404, { error: "Not found" });
}

const server = createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Mock API listening on http://localhost:${PORT}`);
});