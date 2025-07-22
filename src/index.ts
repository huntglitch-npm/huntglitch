import axios from "axios";

interface LogParams {
  error: Error;
  method: string;
  endPoint: string;
  requestIp: string;
  headers?: Record<string, string>;
  logType?: number;
}

export const Log = ({
  error,
  method,
  endPoint,
  requestIp,
  headers,
  logType
}: LogParams): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!process.env.PROJECT_KEY || !process.env.DELIVERABLE_KEY) {
      reject("PROJECT_KEY or DELIVERABLE_KEY is not defined in .env file");
      return;
    }

    if (!error || !endPoint || !method || !requestIp) {
      reject("Missing 'error' or 'method' or 'endPoint' or 'requestIp'");
      return;
    }

    const match = error.stack?.match(/\/([\/\w\-_.]+\.js):(\d*):(\d*)/);
    const [, filename, , column] = match || [];

    const body = {
      vp: process.env.PROJECT_KEY,
      vd: process.env.DELIVERABLE_KEY,
      o: logType ?? 5,
      a: JSON.stringify({
        b: {
          c: error.message,
          d: filename,
          f: column,
          g: 0,
          h: "Error"
        },
        i: error.stack,
        k: headers,
        m: endPoint,
        n: method,
        j: process.versions
      }),
      r: requestIp
    };

    axios
      .post("https://api.huntglitch.com/add-log", body, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resolve)
      .catch(reject);
  });
};
