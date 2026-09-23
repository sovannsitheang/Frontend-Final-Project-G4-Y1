const rawCourses = [
  {
    "_id": "6ab1ff9371a197efc2412936",
    "title": "Intro to React",
    "description": "Learn the fundamentals of React",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10",
    "lessons": [
      {
        "_id": "6ab1ffd671a197efc241294c",
        "title": "What is React?",
        "content": "This lesson introduces React as a JavaScript library for building user interfaces out of small, reusable pieces called components. You'll learn why React was created, how it compares to plain JavaScript and other frameworks, and what problems it solves for developers building complex, interactive UIs. We'll explore the idea of the virtual DOM and why re-rendering only what has changed makes apps faster and easier to reason about. By the end, you should understand React's core philosophy: describe what the UI should look like for a given state, and let React handle updating the actual page."
      },
      {
        "_id": "6ab1ffd671a197efc241294d",
        "title": "JSX Syntax",
        "content": "Here we dive into JSX, the syntax extension that lets you write HTML-like markup directly inside JavaScript. You'll learn how JSX gets compiled into regular JavaScript function calls behind the scenes, how to embed dynamic expressions using curly braces, and the rules that differ from standard HTML, like using className instead of class. We'll also cover common beginner mistakes, such as forgetting to close tags or returning multiple elements without a wrapper, and how tools like fragments solve that last problem cleanly."
      },
      {
        "_id": "6ab1ffd671a197efc241294e",
        "title": "Components and Props",
        "content": "This lesson focuses on building your first functional components and understanding how data flows through an application using props. You'll practice creating components that accept props, render them conditionally, and pass callback functions down to children. We'll also discuss component composition, how to break a large UI into smaller, reusable pieces, and best practices for naming and organizing components in a real project so your codebase stays maintainable as it grows."
      },
      {
        "_id": "6ab1ffd671a197efc241294f",
        "title": "State and useState",
        "content": "You'll learn how components remember information between renders using the useState hook. This lesson walks through declaring state variables, updating them in response to user actions, and understanding why React re-renders a component whenever its state changes. We'll cover common patterns like toggling booleans, updating objects and arrays immutably, and troubleshooting stale state issues that often trip up beginners when working with closures inside event handlers."
      },
      {
        "_id": "6ab1ffd671a197efc2412950",
        "title": "Handling Events",
        "content": "This lesson covers how React normalizes browser events into what's called the synthetic event system, giving you a consistent API across different browsers. You'll practice attaching click, change, and submit handlers to elements, passing arguments to event handlers, and preventing default browser behavior like page reloads on form submission. We'll also look at patterns for lifting event handlers up to parent components so multiple children can share the same logic."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc2412937",
    "title": "JavaScript Essentials",
    "description": "Master the core concepts of modern JavaScript",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfEwx1H8j2zexUWHq2l_A0KIJYidOw7e6_5NAflEWbaQV2kxDs9IuD_I&s=10",
    "lessons": [
      {
        "_id": "6ab2000171a197efc2412954",
        "title": "Variables and Data Types",
        "content": "This lesson lays the groundwork for everything else in JavaScript by covering how to declare variables with var, let, and const, and when to use each one. You'll explore JavaScript's primitive types, including strings, numbers, booleans, null, and undefined, as well as reference types like objects and arrays. We'll also touch on type coercion, a quirky but important part of JavaScript, and how the strict equality operator helps you avoid unexpected bugs caused by implicit type conversion."
      },
      {
        "_id": "6ab2000171a197efc2412955",
        "title": "Functions and Scope",
        "content": "Here you'll learn the different ways to define functions in JavaScript, including function declarations, function expressions, and arrow functions, along with the subtle differences between them. We'll explore lexical scope and closures in depth, showing how inner functions can access variables from their enclosing scope even after that outer function has finished running. This concept is foundational for understanding more advanced JavaScript patterns you'll encounter later, including in frameworks like React."
      },
      {
        "_id": "6ab2000171a197efc2412956",
        "title": "Arrays and Objects",
        "content": "This lesson covers the two most commonly used data structures in JavaScript: arrays and objects. You'll practice using array methods like map, filter, reduce, and forEach to transform and iterate over collections of data, as well as object methods for accessing, updating, and iterating over key-value pairs. We'll also introduce destructuring and the spread operator, two features that make working with arrays and objects far more concise and readable in modern JavaScript code."
      },
      {
        "_id": "6ab2000171a197efc2412957",
        "title": "Asynchronous JavaScript",
        "content": "Asynchronous programming is one of the trickiest parts of JavaScript to master, and this lesson breaks it down step by step. You'll start with callbacks and see why they can lead to messy, hard-to-follow code, then move on to promises as a cleaner alternative for handling operations that take time, like network requests. Finally, we'll cover async and await syntax, which lets you write asynchronous code that reads almost like synchronous code, along with proper error handling using try and catch."
      },
      {
        "_id": "6ab2000171a197efc2412958",
        "title": "The DOM and Events",
        "content": "This lesson shows you how to interact with the Document Object Model using vanilla JavaScript, without any frameworks or libraries. You'll learn how to select elements using methods like querySelector, modify their content and styles dynamically, and create new elements on the fly. We'll also cover attaching and removing event listeners, understanding event bubbling and capturing, and using event delegation to efficiently handle events on many elements at once."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc2412938",
    "title": "Python for Beginners",
    "description": "Get started with Python programming from scratch",
    "thumbnail": "https://i.pinimg.com/736x/8b/d5/84/8bd584c33be266060ebf247c8d8d5a31.jpg",
    "lessons": [
      {
        "_id": "6ab2003471a197efc241295c",
        "title": "Python Syntax Basics",
        "content": "This lesson introduces the fundamentals of writing Python code, starting with how indentation defines code blocks instead of curly braces like many other languages. You'll learn how to declare variables, work with basic data types like strings, integers, and floats, and use Python's built-in functions like print and input to interact with users. We'll also cover comments, naming conventions, and general style guidelines that make Python code easy to read and maintain."
      },
      {
        "_id": "6ab2003471a197efc241295d",
        "title": "Control Flow",
        "content": "Here you'll learn how to make decisions and repeat actions in your code using conditional statements and loops. We'll cover if, elif, and else statements for branching logic, along with for and while loops for iterating over sequences or repeating actions until a condition is met. You'll also practice using break and continue to control loop execution, and see how these building blocks combine to solve real problems like searching through data or validating user input."
      },
      {
        "_id": "6ab2003471a197efc241295e",
        "title": "Functions and Modules",
        "content": "This lesson covers how to define your own functions in Python, including using default arguments, keyword arguments, and returning multiple values. You'll learn why breaking code into functions makes it more reusable and easier to test, and then move on to organizing related functions into modules that can be imported into other files. We'll also introduce Python's standard library and how to install and use third-party packages with pip."
      },
      {
        "_id": "6ab2003471a197efc241295f",
        "title": "Lists, Tuples, and Dictionaries",
        "content": "This lesson takes a practical, hands-on look at Python's core built-in data structures. You'll learn the differences between mutable lists, immutable tuples, and key-value dictionaries, along with when each one is the right tool for the job. We'll practice common operations like slicing lists, iterating over dictionary items, and nesting these structures to represent more complex data, such as a list of dictionaries representing multiple records."
      },
      {
        "_id": "6ab2003471a197efc2412960",
        "title": "File Handling and Errors",
        "content": "Here you'll learn how to read from and write to files using Python's built-in open function, along with best practices like using context managers to ensure files are properly closed. We'll also cover exception handling using try, except, and finally blocks, showing you how to gracefully handle errors like missing files or invalid input instead of letting your program crash unexpectedly."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc2412939",
    "title": "Advanced CSS Techniques",
    "description": "Take your styling skills to the next level with modern CSS",
    "thumbnail": "https://i.pinimg.com/736x/bf/2f/5b/bf2f5b9cd7fbe5a193141b39cc4a2460.jpg",
    "lessons": [
      {
        "_id": "6ab2006571a197efc2412964",
        "title": "Flexbox Deep Dive",
        "content": "This lesson takes you beyond the basics of Flexbox and into real-world layout problems. You'll learn how properties on the flex container, like justify-content and align-items, interact with properties on flex items, like flex-grow and flex-shrink, to create flexible, responsive one-dimensional layouts. We'll work through practical examples like navigation bars, card layouts, and centering content both vertically and horizontally without relying on hacks."
      },
      {
        "_id": "6ab2006571a197efc2412965",
        "title": "CSS Grid Mastery",
        "content": "Here we explore CSS Grid, the powerful layout system designed for two-dimensional designs involving both rows and columns. You'll learn how to define grid templates, name grid areas for readable layouts, and use fractional units to create flexible tracks that adapt to available space. We'll also compare Grid and Flexbox directly, helping you understand when each tool is the better choice for a given design problem."
      },
      {
        "_id": "6ab2006571a197efc2412966",
        "title": "CSS Variables and Theming",
        "content": "This lesson introduces CSS custom properties, commonly known as CSS variables, and shows how they enable dynamic, maintainable theming systems. You'll learn how to define variables at the root level, override them within specific components or media queries, and use JavaScript to update them at runtime for features like dark mode toggles. We'll also discuss best practices for organizing a scalable design token system using variables."
      },
      {
        "_id": "6ab2006571a197efc2412967",
        "title": "Animations and Transitions",
        "content": "Here you'll learn how to bring interfaces to life using CSS transitions and keyframe animations. We'll cover the difference between transitions, which animate between two states, and full keyframe animations, which allow multi-step sequences with fine control over timing. You'll also learn about performance considerations, like animating transform and opacity instead of properties that trigger expensive layout recalculations."
      },
      {
        "_id": "6ab2006571a197efc2412968",
        "title": "Responsive Design Patterns",
        "content": "This lesson covers modern techniques for building layouts that adapt gracefully across screen sizes. You'll practice writing media queries for different breakpoints, using fluid typography with relative units, and exploring the newer container query feature, which lets components respond to their own container's size rather than the viewport. We'll tie it all together with a mobile-first approach to building responsive interfaces."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc241293a",
    "title": "Node.js Fundamentals",
    "description": "Build scalable backend applications with Node.js",
    "thumbnail": "https://i.pinimg.com/1200x/a4/22/c1/a422c15025eb156516c67e0bbdd2f382.jpg",
    "lessons": [
      {
        "_id": "6ab2008871a197efc241296c",
        "title": "Node.js Runtime Basics",
        "content": "This lesson introduces Node.js as a JavaScript runtime that allows you to run JavaScript outside the browser, typically on a server. You'll learn about the event loop and how Node handles asynchronous operations without blocking, the module system for organizing code into reusable files, and the global objects available in a Node environment. We'll also cover the difference between Node's runtime and the browser environment you may already be familiar with."
      },
      {
        "_id": "6ab2008871a197efc241296d",
        "title": "Working with npm",
        "content": "Here you'll learn how to use npm, the default package manager for Node.js, to manage your project's dependencies. We'll cover the structure of a package.json file, how to install and remove packages, the difference between dependencies and devDependencies, and how to define custom scripts to automate common tasks like starting a server or running tests."
      },
      {
        "_id": "6ab2008871a197efc241296e",
        "title": "Building an HTTP Server",
        "content": "This lesson walks you through creating a basic web server using Node's built-in http module, without relying on any external frameworks. You'll learn how to handle incoming requests, read request data, and send back responses with the appropriate status codes and headers. This foundational knowledge will help you understand what frameworks like Express are actually doing under the hood."
      },
      {
        "_id": "6ab2008871a197efc241296f",
        "title": "File System Operations",
        "content": "Here we explore Node's fs module, which allows you to read, write, and manipulate files directly from your JavaScript code. You'll practice both synchronous and asynchronous file operations, understand why asynchronous methods are generally preferred in server environments, and learn how to watch files for changes and handle common errors like missing files."
      },
      {
        "_id": "6ab2008871a197efc2412970",
        "title": "Intro to Express",
        "content": "This lesson introduces Express, the most popular web framework for Node.js, and shows how it simplifies building servers compared to using the raw http module. You'll learn how to define routes for different HTTP methods, use middleware to process requests before they reach your route handlers, and structure a small Express application in a way that scales as your project grows."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc241293b",
    "title": "TypeScript Crash Course",
    "description": "Add type safety to your JavaScript projects",
    "thumbnail": "https://i.pinimg.com/1200x/54/a2/43/54a24310f75e8c5b77a88f60776ae4c3.jpg",
    "lessons": [
      {
        "_id": "6ab200ab71a197efc2412974",
        "title": "Why TypeScript?",
        "content": "This lesson explains what TypeScript adds on top of JavaScript and why so many teams have adopted it for larger projects. You'll learn how TypeScript's static type system catches errors at compile time rather than at runtime, how the TypeScript compiler transforms your code into plain JavaScript, and how tooling like autocomplete and inline documentation becomes dramatically better with types in place."
      },
      {
        "_id": "6ab200ab71a197efc2412975",
        "title": "Basic Types and Interfaces",
        "content": "Here you'll learn how to annotate variables, function parameters, and return values with specific types like string, number, and boolean. We'll also introduce interfaces, which let you define the expected shape of an object, including optional properties and readonly fields. You'll practice writing type-safe code that catches mismatched data early, before it causes bugs elsewhere in your application."
      },
      {
        "_id": "6ab200ab71a197efc2412976",
        "title": "Functions and Generics",
        "content": "This lesson covers how to properly type functions, including parameters, default values, and return types, and then introduces generics as a way to write flexible, reusable code that still maintains type safety. You'll learn how generics let you create functions and components that work with multiple types while preserving the specific type information at each call site."
      },
      {
        "_id": "6ab200ab71a197efc2412977",
        "title": "Union and Intersection Types",
        "content": "Here you'll explore two powerful ways to combine types in TypeScript. Union types let a value be one of several possible types, which is useful for representing things like a request that can either succeed or fail. Intersection types combine multiple types into one, useful for merging shared properties across different object shapes. We'll work through practical examples of each."
      },
      {
        "_id": "6ab200ab71a197efc2412978",
        "title": "TypeScript with React",
        "content": "This lesson brings together everything you've learned by applying TypeScript to a React project. You'll learn how to type component props and state, correctly type event handlers for things like form inputs and button clicks, and use generic types with hooks like useState to ensure your state remains type-safe throughout your component's lifecycle."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc241293c",
    "title": "Vue.js in Depth",
    "description": "Build reactive web apps with Vue.js",
    "thumbnail": "https://i.pinimg.com/736x/d3/7f/8b/d37f8b7c12b26ddea7bfff799ecc6d58.jpg",
    "lessons": [
      {
        "_id": "6ab200cd71a197efc241297c",
        "title": "Vue Instance and Templates",
        "content": "This lesson introduces the core building block of a Vue application, the Vue instance, and its template syntax for binding data to the DOM. You'll learn how to display dynamic data using mustache syntax, bind attributes with v-bind, and use directives like v-if and v-for to conditionally render or loop over content in your templates."
      },
      {
        "_id": "6ab200cd71a197efc241297d",
        "title": "Reactivity System",
        "content": "Here you'll dig into how Vue's reactivity system works under the hood, tracking which parts of your data are used where so it knows exactly what to update when something changes. We'll explore how this differs from React's approach, and why Vue's reactivity feels more automatic, requiring less boilerplate to keep your UI in sync with your underlying data."
      },
      {
        "_id": "6ab200cd71a197efc241297e",
        "title": "Components and Props",
        "content": "This lesson covers how to break a Vue application into reusable components, defining props to pass data from parent to child and emitting custom events to send data back up. You'll practice building a small component hierarchy and understand best practices for keeping components focused and easy to test."
      },
      {
        "_id": "6ab200cd71a197efc241297f",
        "title": "Computed Properties and Watchers",
        "content": "Here you'll learn the difference between computed properties, which automatically recalculate based on their dependencies and are cached for performance, and watchers, which let you run side effects in response to specific data changes. We'll cover practical use cases for each, such as formatting data for display versus triggering an API call when a value changes."
      },
      {
        "_id": "6ab200cd71a197efc2412980",
        "title": "Vue Router Basics",
        "content": "This lesson introduces Vue Router, the official routing library for building single-page applications with multiple views. You'll learn how to define routes, link between pages without full reloads, pass parameters through the URL, and organize nested routes for more complex application structures."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc241293d",
    "title": "SQL for Data Analysis",
    "description": "Query and analyze data using SQL",
    "thumbnail": "https://i.pinimg.com/736x/72/81/f4/7281f4ba7567c6e3366c3d86c1948349.jpg",
    "lessons": [
      {
        "_id": "6ab200f471a197efc2412984",
        "title": "SELECT and Filtering",
        "content": "This lesson covers the foundation of SQL querying: the SELECT statement. You'll learn how to choose specific columns, filter rows using the WHERE clause with various comparison and logical operators, and sort your results using ORDER BY. We'll also cover limiting the number of rows returned, which is especially useful when exploring large datasets."
      },
      {
        "_id": "6ab200f471a197efc2412985",
        "title": "Joins Explained",
        "content": "Here you'll learn how to combine data from multiple tables using different types of joins. We'll cover INNER JOIN for matching records in both tables, LEFT and RIGHT JOIN for including unmatched records from one side, and how to visualize these relationships to avoid common mistakes when writing multi-table queries."
      },
      {
        "_id": "6ab200f471a197efc2412986",
        "title": "Aggregate Functions",
        "content": "This lesson introduces functions like COUNT, SUM, AVG, MIN, and MAX for summarizing data across rows. You'll learn how to use the GROUP BY clause to calculate these aggregates for different categories within your data, and how the HAVING clause lets you filter based on the results of an aggregate, unlike WHERE, which filters individual rows."
      },
      {
        "_id": "6ab200f471a197efc2412987",
        "title": "Subqueries and CTEs",
        "content": "Here you'll learn how to write queries within queries to solve more complex problems, starting with subqueries embedded directly in SELECT, WHERE, or FROM clauses. We'll then move on to common table expressions, or CTEs, which let you define named, reusable result sets that make complex queries far more readable and easier to debug."
      },
      {
        "_id": "6ab200f471a197efc2412988",
        "title": "Window Functions",
        "content": "This lesson covers window functions, an advanced but incredibly useful SQL feature for calculations like running totals, rankings, and comparisons between rows without collapsing your result set like GROUP BY does. You'll practice using functions like ROW_NUMBER, RANK, and SUM with an OVER clause to solve real analytical problems."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc241293e",
    "title": "Docker & Containers 101",
    "description": "Understand containerization and deploy with Docker",
    "thumbnail": "https://i.pinimg.com/736x/e3/9e/36/e39e3661d1b4710424ae660bec3a0654.jpg",
    "lessons": [
      {
        "_id": "6ab2010f71a197efc241298c",
        "title": "What is a Container?",
        "content": "This lesson explains the concept of containerization and why it has become such a central part of modern software deployment. You'll learn how containers package an application along with its dependencies into a single, portable unit, and how this differs from traditional virtual machines, which each require their own full operating system."
      },
      {
        "_id": "6ab2010f71a197efc241298d",
        "title": "Writing a Dockerfile",
        "content": "Here you'll learn the syntax for writing a Dockerfile, the recipe that defines how to build a container image. We'll cover common instructions like FROM, COPY, RUN, and CMD, along with best practices for keeping images small and builds fast, such as layering and using appropriate base images."
      },
      {
        "_id": "6ab2010f71a197efc241298e",
        "title": "Images and Containers",
        "content": "This lesson clarifies the relationship between Docker images and containers, explaining that an image is a static blueprint while a container is a running instance of that image. You'll practice essential Docker CLI commands for building images, running containers, listing what's active, and cleaning up unused resources."
      },
      {
        "_id": "6ab2010f71a197efc241298f",
        "title": "Docker Compose Basics",
        "content": "Here you'll learn how to use Docker Compose to define and manage applications made up of multiple containers, such as a web server and a database, using a single YAML configuration file. We'll cover defining services, setting environment variables, and starting or stopping your entire application stack with one command."
      },
      {
        "_id": "6ab2010f71a197efc2412990",
        "title": "Volumes and Networking",
        "content": "This lesson covers two essential aspects of running real-world containerized applications: persisting data and enabling communication between containers. You'll learn how volumes let data survive beyond a container's lifecycle, and how Docker's networking features allow containers to discover and talk to each other securely."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc241293f",
    "title": "Git & GitHub Mastery",
    "description": "Version control workflows for modern development",
    "thumbnail": "https://i.pinimg.com/1200x/e9/7f/52/e97f52c36a9cb1e2ff4f2f7e4d39dfd1.jpg",
    "lessons": [
      {
        "_id": "6ab2013171a197efc2412994",
        "title": "Git Basics",
        "content": "This lesson introduces the fundamentals of Git, starting with initializing a repository and understanding the staging area. You'll learn how to track changes to your files, write meaningful commit messages, and view your project's history, building the foundation you'll need before moving on to more advanced Git workflows."
      },
      {
        "_id": "6ab2013171a197efc2412995",
        "title": "Branching and Merging",
        "content": "Here you'll learn how branches let you work on new features or fixes without affecting the main codebase. We'll cover creating and switching between branches, merging changes back together, and resolving merge conflicts when Git can't automatically combine changes from two different branches."
      },
      {
        "_id": "6ab2013171a197efc2412996",
        "title": "Working with Remotes",
        "content": "This lesson covers how to connect your local repository to a remote one, such as on GitHub, so you can collaborate with others. You'll learn how to push your local commits, pull down changes made by others, and keep your local and remote repositories in sync."
      },
      {
        "_id": "6ab2013171a197efc2412997",
        "title": "Pull Requests and Code Review",
        "content": "Here you'll learn the collaborative workflow most teams use for reviewing and merging code changes. We'll cover creating a pull request from a feature branch, requesting feedback from teammates, addressing review comments, and the different strategies for merging a pull request once it's approved."
      },
      {
        "_id": "6ab2013171a197efc2412998",
        "title": "Undoing Changes",
        "content": "This lesson covers the various ways to undo mistakes in Git, from unstaging a file to completely rewriting history. You'll learn the differences between git reset, git revert, and git checkout, and when to use each one safely, especially when working on a shared branch with other collaborators."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc2412940",
    "title": "Machine Learning Basics",
    "description": "An introduction to core machine learning concepts",
    "thumbnail": "https://i.pinimg.com/1200x/a2/3d/8d/a23d8d20c42ea0bb7555acb955d77da1.jpg",
    "lessons": [
      {
        "_id": "6ab2015371a197efc241299c",
        "title": "What is Machine Learning?",
        "content": "This lesson introduces machine learning at a conceptual level, explaining how it differs from traditional programming by learning patterns from data rather than following explicit rules. You'll get an overview of the three main categories, supervised, unsupervised, and reinforcement learning, along with real-world examples of each to build your intuition before diving into the math."
      },
      {
        "_id": "6ab2015371a197efc241299d",
        "title": "Data Preprocessing",
        "content": "Here you'll learn why raw data almost always needs to be cleaned and transformed before it can be used to train a model. We'll cover handling missing values, normalizing numerical features so they're on a comparable scale, encoding categorical variables, and splitting your dataset into training and testing sets to properly evaluate performance."
      },
      {
        "_id": "6ab2015371a197efc241299e",
        "title": "Linear Regression",
        "content": "This lesson walks through one of the simplest and most foundational machine learning algorithms, linear regression. You'll learn how the algorithm fits a line to your data by minimizing prediction error, how to interpret the resulting coefficients, and how to evaluate the model's performance using metrics like mean squared error."
      },
      {
        "_id": "6ab2015371a197efc241299f",
        "title": "Classification Basics",
        "content": "Here you'll move from predicting continuous values to predicting categories, starting with logistic regression as an accessible introduction to classification. We'll cover how the algorithm outputs probabilities, how a decision threshold turns those probabilities into class predictions, and how to evaluate classification performance."
      },
      {
        "_id": "6ab2015371a197efc24129a0",
        "title": "Model Evaluation",
        "content": "This lesson covers how to properly evaluate a machine learning model beyond just looking at accuracy. You'll learn about precision, recall, and the trade-offs between them, how a confusion matrix helps visualize model performance, and common pitfalls like overfitting, where a model performs well on training data but poorly on new, unseen data."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc2412941",
    "title": "Data Structures & Algorithms",
    "description": "Strengthen your problem-solving foundations",
    "thumbnail": "https://i.pinimg.com/1200x/46/34/c2/4634c2b2743e8ec94fffc832854a9eb5.jpg",
    "lessons": [
      {
        "_id": "6ab2017271a197efc24129a4",
        "title": "Arrays and Linked Lists",
        "content": "This lesson compares two foundational data structures, arrays and linked lists, examining how they store data in memory and the trade-offs that come with each approach. You'll learn about time complexity for common operations like insertion, deletion, and access, and understand why the right choice depends heavily on how your data will be used."
      },
      {
        "_id": "6ab2017271a197efc24129a5",
        "title": "Stacks and Queues",
        "content": "Here you'll learn about two structures built on top of arrays or linked lists that enforce a specific order of access. Stacks follow a last-in, first-out pattern useful for things like undo functionality, while queues follow a first-in, first-out pattern useful for tasks like task scheduling. We'll cover implementing both from scratch."
      },
      {
        "_id": "6ab2017271a197efc24129a6",
        "title": "Trees and Binary Search Trees",
        "content": "This lesson introduces tree structures, starting with general tree concepts like nodes, roots, and leaves, before focusing specifically on binary search trees. You'll learn how BSTs maintain a sorted order that enables efficient searching, insertion, and deletion, along with different traversal methods for visiting every node."
      },
      {
        "_id": "6ab2017271a197efc24129a7",
        "title": "Sorting Algorithms",
        "content": "Here you'll walk through several classic sorting algorithms, including bubble sort, merge sort, and quick sort, implementing each one and comparing their time and space complexity. We'll discuss why some algorithms perform better in practice despite having similar theoretical complexity, and when you'd choose one over another."
      },
      {
        "_id": "6ab2017271a197efc24129a8",
        "title": "Graph Basics",
        "content": "This lesson introduces graphs as a way to represent relationships between data points, covering both directed and undirected graphs along with common representations like adjacency lists and matrices. You'll practice implementing breadth-first search and depth-first search, two fundamental traversal algorithms used throughout computer science."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc2412942",
    "title": "Next.js for Production",
    "description": "Build fast, SEO-friendly React apps with Next.js",
    "thumbnail": "https://i.pinimg.com/736x/5d/91/65/5d91653dadc207fb95ec2ddcd746ebe2.jpg",
    "lessons": [
      {
        "_id": "6ab2018971a197efc24129ac",
        "title": "Next.js Project Structure",
        "content": "This lesson introduces how a Next.js project is organized, focusing on its file-based routing system where the structure of your files and folders directly determines your application's URL structure. You'll learn how to create pages, nested routes, and dynamic routes that respond to URL parameters."
      },
      {
        "_id": "6ab2018971a197efc24129ad",
        "title": "Server-Side Rendering",
        "content": "Here you'll learn how server-side rendering works in Next.js, where pages are rendered to HTML on the server for each request rather than in the browser. We'll cover why this improves both initial load performance and search engine optimization, and how to fetch the data a page needs before it's rendered."
      },
      {
        "_id": "6ab2018971a197efc24129ae",
        "title": "Static Site Generation",
        "content": "This lesson covers static site generation, where pages are rendered to HTML once at build time rather than on every request. You'll learn when this approach makes sense compared to server-side rendering, how to fetch data at build time, and how incremental static regeneration lets you update static pages without a full rebuild."
      },
      {
        "_id": "6ab2018971a197efc24129af",
        "title": "API Routes",
        "content": "Here you'll learn how to build backend functionality directly within your Next.js application using API routes, without needing a separate server. We'll cover handling different HTTP methods, reading request bodies, and connecting these routes to external services or databases."
      },
      {
        "_id": "6ab2018971a197efc24129b0",
        "title": "Deployment Best Practices",
        "content": "This lesson covers what it takes to move a Next.js application from your local machine to a production environment. You'll learn about environment variables, image and font optimization, caching strategies, and general checklist items to review before shipping a Next.js app to real users."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc2412943",
    "title": "GraphQL Fundamentals",
    "description": "Design and consume flexible APIs with GraphQL",
    "thumbnail": "https://i.pinimg.com/1200x/66/ec/d4/66ecd45c7b6a7a76cd3c2c1e16b14ea0.jpg",
    "lessons": [
      {
        "_id": "6ab201af71a197efc24129b4",
        "title": "GraphQL vs REST",
        "content": "This lesson compares GraphQL to the more traditional REST approach to building APIs, highlighting how GraphQL lets clients request exactly the data they need in a single request, avoiding both over-fetching and under-fetching. You'll learn about the trade-offs each approach involves and when GraphQL's added flexibility is worth the complexity."
      },
      {
        "_id": "6ab201af71a197efc24129b5",
        "title": "Schemas and Types",
        "content": "Here you'll learn how to define a GraphQL schema, the contract that describes exactly what data clients can query and what shape that data will take. We'll cover scalar types, object types, and how to define relationships between different types in your schema."
      },
      {
        "_id": "6ab201af71a197efc24129b6",
        "title": "Queries and Mutations",
        "content": "This lesson covers the two primary operations in GraphQL: queries for fetching data and mutations for modifying it. You'll practice writing queries that select specific fields and nested relationships, and mutations that create, update, or delete data while returning the updated result."
      },
      {
        "_id": "6ab201af71a197efc24129b7",
        "title": "Resolvers Explained",
        "content": "Here you'll learn how resolver functions connect the fields defined in your schema to actual data, whether that's a database, another API, or a computed value. We'll cover how resolvers are structured, how arguments are passed to them, and how they work together to fulfill a complete query."
      },
      {
        "_id": "6ab201af71a197efc24129b8",
        "title": "Building a GraphQL Server",
        "content": "This lesson walks you through setting up a basic GraphQL server, defining your schema and resolvers, and connecting a client to send queries against it. You'll get hands-on experience with the full request lifecycle, from a client sending a query to the server returning exactly the requested data."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc2412944",
    "title": "AWS Cloud Practitioner",
    "description": "Get hands-on with core AWS cloud services",
    "thumbnail": "https://i.pinimg.com/736x/7b/ca/6e/7bca6e18ec0d136d0428a81b602e8f36.jpg",
    "lessons": []
  },
  {
    "_id": "6ab1ff9371a197efc2412945",
    "title": "UI/UX Design Principles",
    "description": "Design intuitive and beautiful user interfaces",
    "thumbnail": "https://i.pinimg.com/736x/25/a6/59/25a659b2b4a496766fcb14202e7dcd9d.jpg",
    "lessons": [
      {
        "_id": "6ab201d471a197efc24129bc",
        "title": "Cloud Computing Basics",
        "content": "This lesson introduces the fundamental concepts of cloud computing, explaining the differences between infrastructure as a service, platform as a service, and software as a service. You'll learn why organizations move to the cloud, covering benefits like scalability, cost efficiency, and reduced infrastructure management overhead."
      },
      {
        "_id": "6ab201d471a197efc24129bd",
        "title": "AWS Core Services Overview",
        "content": "Here you'll get a broad overview of the AWS ecosystem, focusing on three foundational services: EC2 for compute, S3 for storage, and IAM for managing access and permissions. This lesson sets the stage for the more focused, hands-on lessons that follow."
      },
      {
        "_id": "6ab201d471a197efc24129be",
        "title": "Storage on AWS",
        "content": "This lesson dives deeper into Amazon S3, covering how to create buckets, understand the different storage classes available for different cost and access patterns, and manage permissions to control who can read or write your stored objects."
      },
      {
        "_id": "6ab201d471a197efc24129bf",
        "title": "Compute with EC2",
        "content": "Here you'll learn how to launch and manage virtual servers using Amazon EC2, covering instance types, choosing an operating system image, configuring security groups to control network access, and connecting to your instance once it's running."
      },
      {
        "_id": "6ab201d471a197efc24129c0",
        "title": "AWS Pricing and Billing",
        "content": "This lesson explains how AWS pricing works across different services, covering concepts like pay-as-you-go pricing, reserved instances for predictable workloads, and free tier limits for new accounts. You'll also learn about tools like AWS Cost Explorer and billing alerts for keeping your cloud spending under control."
      }
    ]
  },
  {
    "_id": "6ab1ff9371a197efc2412946",
    "title": "MongoDB Essentials",
    "description": "Work with NoSQL databases using MongoDB",
    "thumbnail": "https://i.pinimg.com/736x/e5/ee/e3/e5eee315a17de0d7f56117077eb71fa9.jpg",
    "lessons": []
  },
  {
    "_id": "6ab1ff9371a197efc2412947",
    "title": "Rust Programming Basics",
    "description": "Learn systems programming with Rust",
    "thumbnail": "https://media.geeksforgeeks.org/wp-content/uploads/20240314130301/The-Future-of-Rust-Top-Trends-and-Predictions.webp",
    "lessons": []
  },
  {
    "_id": "6ab1ff9371a197efc2412948",
    "title": "Testing with Jest",
    "description": "Write reliable unit and integration tests in JavaScript",
    "thumbnail": "https://decentro.tech/blog/wp-content/uploads/Jest-Tech-Blog.jpeg",
    "lessons": []
  },
  {
    "_id": "6ab1ff9371a197efc2412949",
    "title": "DevOps Fundamentals",
    "description": "CI/CD, automation, and deployment best practices",
    "thumbnail": "https://i.pinimg.com/1200x/aa/29/8d/aa298d9cb4f43d07f177246d5f99a029.jpg",
    "lessons": []
  },
  {
    "_id": "6ab326bb71a197efc24129f0",
    "title": "Intro to React",
    "description": "Learn the fundamentals of React",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10",
    "lessons": []
  },
  {
    "_id": "6ab326be71a197efc24129f2",
    "title": "Intro to React",
    "description": "Learn the fundamentals of React",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10",
    "lessons": []
  }
];

const courses = rawCourses.map((course, index) => ({
  _id: course._id,
  title: course.title,
  description: course.description,
  thumbnail: course.thumbnail,
  enrolledStudents: Array.from(
    { length: ((index + 1) * 137) % 420 + 25 },
    () => ({}),
  ),
  lessons: course.lessons.map((l) => l._id),
}));

export function getCourses() {
  return courses;
}

export function getCourse(id) {
  return courses.find((course) => course._id === id) ?? null;
}

export function getLessons(id) {
  const course = getCourse(id);
  if (!course) return null;
  const raw = rawCourses.find((c) => c._id === id);
  return raw.lessons.map((l) => ({ ...l, course: id }));
}
