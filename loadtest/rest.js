import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "20s", target: 100 },
    { duration: "20s", target: 500 },
    { duration: "20s", target: 100 },
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
  };

  const res = http.post(url, payload, params);
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
