<h1 align="left">
  node-huntglitch
  <img src="https://app.huntglitch.com/images/logo.svg" align="right" width="140" height="140"/>
</h1>

![npm](https://img.shields.io/npm/v/node-huntglitch)
![downloads](https://img.shields.io/npm/dt/node-huntglitch)
![license](https://img.shields.io/npm/l/node-huntglitch)

A lightweight, plug-and-play Node.js utility to send structured error logs directly to the [HuntGlitch](https://huntglitch.com) error logging platform.

Designed to streamline error monitoring across services, this tool handles HTTP context, headers, and classification with minimal setup.

---

## 🚀 Motivation

Manually handling error logging across microservices is repetitive and error-prone. This package simplifies the process into a single function call with environment-specific keys. Ideal for debugging APIs, tracking failed requests, and improving observability.

---

## 📦 Installation

```bash
npm install node-huntglitch
```

---

## 🔐 Environment Setup

Create a `.env` file in your project root:

```env
PROJECT_KEY=your_project_key
DELIVERABLE_KEY=your_deliverable_key
```

You can obtain these from the [HuntGlitch Portal](https://huntglitch.com).

---

## 🛠️ Usage

```js
const { Log } = require("node-huntglitch");

exports.controller = async () => {
  try {
    // Your business logic here
  } catch (error) {
    await Log({
      error,
      logType: 5, 
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET",
      endPoint: "http://127.0.0.1:8000/api/test/addLog",
      requestIp: "192.168.1.55"
    });
  }
};
```

---

## 📋 Props Reference

| Prop        | Type     | Description                                                                  | Example                                 |
|-------------|----------|------------------------------------------------------------------------------|-----------------------------------------|
| `error`     | `object` | JavaScript error object to log                                               | `error`                                  |
| `logType`   | `number` | 1 = debug, 2 = warning, 3 = notice, 4 = info, 5 = error (default is 5)        | `5`                                      |
| `method`    | `string` | HTTP method of the request causing the error                                 | `GET`, `POST`, `PUT`, etc.              |
| `endPoint`  | `string` | API endpoint involved                                                        | `http://127.0.0.1:8000/api/test/addLog` |
| `requestIp` | `string` | IP address from which the request originated                                 | `192.168.1.55`                           |
| `headers`   | `object` | Optional headers associated with the request                                 | `{ "Content-Type": "application/json" }` |

---

## 📊 Example Use Cases

- Log failed API requests with trace context
- Track errors by endpoint and client IP
- Attach request headers and log level
- Enable observability in serverless, monolith, or microservices

---

## 🙌 Acknowledgements

Thanks to the HuntGlitch team and community for helping improve API logging visibility across development teams.