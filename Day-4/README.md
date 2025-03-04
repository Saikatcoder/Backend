##  **Defination of Middleware**

Middleware is Express.js a function that executed during the request-response cycle. It has access to the **Request Object** ('req'), the **Response Object** ('res'), and the **next middleware function** in the pipeline. Middleware functions can be used to;

1. Execute code.
2. modify the request response object.
3. End the request-reesponse cycle.
4. passs control through the next middleware.

In simple terms, middle ware acts as abridge that process request before they rech the final route handler ofr after the response is send back.

## **key Features of middleware**
1.Middleware can be apply **globally** or to specific routes.
2. They can perform **login** and **authentication** , **error handeling**, etc .
3.Middleware functions are executed in the order they are defined in the code


## **Global Middleware in Express.js (Detailed Explanation)**
## What is Middleware?
--Middleware in Express.js is a function that runs before the final request handler. It can:
--✅ Modify the request (req) or response (res) objects.
--✅ Execute any code before sending a response.
--✅ Call the next middleware using next().

## **What is Global Middleware?**
--Global Middleware is middleware that runs on every request (for all routes). It is applied at the application level using app.use().

**📌 Example:**

js
Copy
Edit
const express = require("express");
const app = express();

// Global Middleware (runs before all routes)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);
    next(); // Move to the next middleware or route handler
});

// Sample Route
app.get("/", (req, res) => {
    res.send("Welcome to Express!");
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
🔹 How It Works?
Before hitting any route ("/", "/about", etc.), the middleware logs request details (HTTP method, URL, and timestamp).
next() ensures the request moves forward to the next middleware or route handler.
Types of Global Middleware in Express.js
1️⃣ Built-in Middleware (Comes with Express)
Express provides some built-in middleware that can be used globally.

📌 Example: express.json() (Parses JSON body)
js
Copy
Edit
app.use(express.json()); 
✅ Ensures that incoming JSON data in req.body is parsed.
✅ Required for handling POST and PUT requests with JSON payloads.

📌 Example: express.urlencoded() (Parses form data)
js
Copy
Edit
app.use(express.urlencoded({ extended: true }));
✅ Parses form data sent using application/x-www-form-urlencoded.

📌 Example: express.static() (Serves static files)
js
Copy
Edit
app.use(express.static("public"));
✅ Allows Express to serve HTML, CSS, JS, images, etc. from the "public" folder.

2️⃣ Custom Global Middleware
You can create custom middleware to apply logic globally.

📌 Example: Logging Middleware
js
Copy
Edit
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware or route
});
📌 Example: Authentication Middleware
js
Copy
Edit
app.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
});
✅ This middleware blocks requests without an Authorization header.

3️⃣ Third-Party Global Middleware
Express allows you to use third-party middleware like morgan, cors, and helmet.

📌 Example: Using morgan for Logging
js
Copy
Edit
const morgan = require("morgan");

app.use(morgan("dev")); // Logs every request
✅ Logs requests with details like response time, status, and URL.

📌 Example: Using cors to Enable Cross-Origin Requests
js
Copy
Edit
const cors = require("cors");

app.use(cors()); // Enables CORS for all routes
✅ Allows API access from different domains.

Order of Middleware Execution
Middleware runs in the order they are defined in your code.
📌 Example:

js
Copy
Edit
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});
🔹 Execution Order:
1️⃣ Middleware 1 logs "Middleware 1"
2️⃣ Middleware 2 logs "Middleware 2"
3️⃣ Final Route Handler sends "Hello World!"

Full Example of Global Middleware in Express.js
js
Copy
Edit
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// 🔹 Global Middlewares
app.use(morgan("dev")); // Logs request details
app.use(cors()); // Enables CORS
app.use(express.json()); // Parses JSON body
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// 🔹 Routes
app.get("/", (req, res) => {
    res.send("Welcome to our API!");
});

app.post("/data", (req, res) => {
    console.log("Received Data:", req.body);
    res.json({ message: "Data received" });
});

// 🔹 Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
Summary
✔ Global middleware applies to all requests.
✔ Used for logging, authentication, parsing, security, and more.
✔ Can be built-in, custom, or third-party.
✔ Order matters – middleware executes in sequence.

Would you like help implementing middleware in your project? 🚀












