# node-huntglitch

A simple Node.js utility to send error logs to [HuntGlitch](https://huntglitch.com).

---

## 🚀 Motivation

Instead of manually calling the HuntGlitch log API every time, this package wraps it in a simple function — making error logging centralized and reusable across your Node.js apps.

---

## ⚙️ Getting Started

### 📋 Requirements
Register on [HuntGlitch](https://huntglitch.com) and create a project to get your:
- **Project Key**
- **Deliverable Key**

Then place them in your `.env` file:

```env
PROJECT_KEY=your_project_key
DELIVERABLE_KEY=your_deliverable_key
```

---

## 📦 Installation

```bash
npm install node-huntglitch
```

---

## 🛠️ Usage

```js
const { Log } = require("node-huntglitch");
```

---

## 💡 Example

```js
const { Log } = require("node-huntglitch");

exports.controller = async () => {
  try {
    // your code here
  } catch (error) {
    await Log({
      error: error,
      logType: 5,
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET",
      endPoint: "http://127.0.0.1:8000/api/test/addLog",
      requestIp: "192.168.1.55"
    }).then(res => {
      console.log(res, "res");
    }).catch(err => {
      console.log(err, "err");
    });
  }
};
```

---

## 📋 Props

| Prop       | Description                                      | Example                                |
|------------|--------------------------------------------------|----------------------------------------|
| `error`    | Error trace object                               | `error`                                 |
| `logType`  | 1=debug, 2=warn, 3=notice, 4=info, 5=error (default: 5) | `5`                          |
| `method`   | HTTP request method                              | `GET`, `POST`, `PUT`, etc.             |
| `endPoint` | API endpoint related to the error                | `http://127.0.0.1:8000/api/test/addLog`|
| `requestIp`| Request IP address                               | `192.168.1.1`                           |
| `headers`  | Optional request headers                         | `{ "Content-Type": "application/json" }` |

---

## 🙌 Thanks

Special thanks to the HuntGlitch team for their powerful logging platform.