
import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 2000,
  duration: "30s",
};

export default function () {
  const response = http.get(
    "https://luxorio.vercel.app/"
  );

  check(response, {
    "Website is working": (r) => r.status === 200,
  });

  sleep(1);
}
