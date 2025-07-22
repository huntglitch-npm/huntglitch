<h1 align="left">
  node-huntglitch
  <img src="https://app.huntglitch.com/images/logo.svg" align="right" width="140" height="140"/>
</h1>

![npm](https://img.shields.io/npm/v/node-huntglitch)
![downloads](https://img.shields.io/npm/dt/node-huntglitch)
![license](https://img.shields.io/npm/l/node-huntglitch)

HuntGlitch is a developer-first app monitoring platform that helps you instantly detect and fix bugs, broken code, crashes, and false API calls with ease. It gives you answers—not vague hints—so you can move faster and build with confidence.

Built to streamline error tracking across services, HuntGlitch automatically captures HTTP context, request headers, and classifies issues intelligently—all with minimal setup.

---

## 🚀 Motivation

Manually managing error logging across microservices is repetitive, time-consuming, and prone to mistakes. This package streamlines the process into a single function call using environment-specific keys—perfect for debugging APIs, tracking failed requests, and enhancing overall observability.

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
      endPoint: "https://api.huntglitch.com/add-log",
      requestIp: "User's IP goes here"
    });
  }
};
```

---

## 📋 Props Reference

| Prop        | Type     | Description                                                     | Example                                              |
|-------------|----------|-----------------------------------------------------------------|------------------------------------------------------|
| `error`     | object   | JavaScript error object to log                                  | `error`                                              |
| `logType`   | number   | Log level: `1=debug`, `2=warning`, `3=notice`, `4=info`, `5=error` (default) | `5`                          |
| `method`    | string   | HTTP method used in the request                                 | `GET`, `POST`, `PUT`                                 |
| `endPoint`  | string   | Full API endpoint where the error occurred                      | <code>https://api.huntglitch.com/add-log</code>      |
| `requestIp` | string   | IP address from which the request originated                    | `User's IP goes here`                                      |
| `headers`   | object   | Optional headers sent with the request                          | `{ "Content-Type": "application/json" }`             |

## 📊 Example Use Cases

- Log failed API requests with trace context
- Track errors by endpoint and client IP
- Attach request headers and log level
- Enable observability in serverless, monolith, or microservices

---

## 🙌 Acknowledgements

Thanks to the HuntGlitch team and community for helping improve API logging visibility across development teams.