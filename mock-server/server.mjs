import { createServer } from "node:http";
import { randomBytes } from "node:crypto";
import { getCourses, getCourse, getLessons } from "./data.mjs";

const PORT = Number(process.env.PORT ?? 3001);

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
};

const users = [];

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
      if (raw.length > 1e6) {
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

  if (req.method !== "GET") {
    sendJson(res, 405, { error: "Method Not Allowed" });
    return;
  }

  const matchList = url.pathname.match(/^\/api\/courses\/?$/);
  const matchDetail = url.pathname.match(/^\/api\/courses\/([^/]+)\/?$/);
  const matchLessons = url.pathname.match(/^\/api\/courses\/([^/]+)\/lessons\/?$/);

  if (matchList) {
    sendJson(res, 200, getCourses());
    return;
  }

  if (matchDetail) {
    const course = getCourse(decodeURIComponent(matchDetail[1]));
    if (!course) {
      sendJson(res, 404, { error: "Course not found" });
      return;
    }
    sendJson(res, 200, course);
    return;
  }

  if (matchLessons) {
    const id = decodeURIComponent(matchLessons[1]);
    const course = getCourse(id);
    const lessons = getLessons(id);
    if (!course || !lessons) {
      sendJson(res, 404, { error: "Course not found" });
      return;
    }
    sendJson(res, 200, { ...course, lessons });
    return;
  }

  sendJson(res, 404, { error: "Not found" });
}

const server = createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Mock API listening on http://localhost:${PORT}`);
});