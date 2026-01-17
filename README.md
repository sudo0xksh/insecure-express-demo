# ⚠️ Insecure Express Demo

Insecure Express Demo is a deliberately vulnerable Node.js application
built to demonstrate common backend security mistakes in Express-based APIs.

This project is intended strictly for **learning and security awareness**.
It shows how small coding mistakes can lead to critical vulnerabilities
if proper validation and security practices are ignored.

---

## Overview

Many real-world security issues exist not because attackers are extremely skilled,
but because developers unknowingly write unsafe code.

This demo intentionally includes insecure patterns so learners can:
- Understand how vulnerabilities are introduced
- Learn what **not** to do in backend development
- Think like a security tester when analyzing APIs

---

## What This Project Demonstrates

This application demonstrates multiple insecure coding practices, including:
- Trusting user input blindly
- Modifying server-side objects directly
- Executing user-controlled code

The goal is to **observe, understand, and learn** — not to deploy.

---

## Vulnerabilities Demonstrated

### 1. Unsafe Object Assignment

User input is directly merged into a server-side object using `Object.assign()`
without any validation or filtering.

This can lead to:
- Privilege escalation (e.g. setting `isAdmin: true`)
- Overwriting sensitive properties
- Logic manipulation

---

### 2. Remote Code Execution (eval)

The application uses `eval()` on user-supplied input.

This allows arbitrary JavaScript code to be executed on the server,
which is one of the most dangerous backend vulnerabilities.

Even a single `eval` can fully compromise an application.

---

## API Routes

### POST `/update`

Updates the internal `user` object using request body data.

Example request body:
```json
{
  "isAdmin": true
}
This demonstrates how unsafe object merging can change application behavior.

POST /calc
Evaluates JavaScript code sent in the request body.

Example request body:

json
Copy code
{
  "code": "2 + 2"
}
This route exists purely to demonstrate why eval should never be used
with untrusted input.
```

Usage
Install dependencies:

bash
Copy code
npm install express body-parser
Start the server:

bash
Copy code
node app.js
The server will run on:

arduino
Copy code
http://localhost:3000
Important Warning
This application is intentionally insecure.

Do NOT deploy this code

Do NOT expose it to the internet

Use only in local or lab environments

Do NOT reuse these patterns in production systems

Learning Outcome
This project helps you understand:

Common backend security mistakes

Why input validation is critical

How insecure patterns lead to real-world exploits

How attackers analyze poorly written APIs

Final Thoughts
Security is not about writing complex code.
It is about avoiding dangerous shortcuts.

If you can identify what is wrong in this project,
you are already thinking like a security engineer.
