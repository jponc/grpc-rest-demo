import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 150 },
    { duration: "30s", target: 300 },
    { duration: "30s", target: 300 },
    { duration: "30s", target: 150 },
    { duration: "30s", target: 0 },
  ],
};

export default function () {
  const url = "http://localhost:8080/hello";
  const payload = JSON.stringify({
    name: "julian",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
    compression: "gzip",
  };

  const res = http.post(url, payload, params);
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
