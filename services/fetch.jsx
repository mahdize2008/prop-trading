import axios from "axios";

export async function api() {
  const { cookies } = await import("next/headers");
  const fetch = axios.create({
    baseURL: "https://api.novaprop.org/api/",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  fetch.interceptors.request.use(
    (request) => {
      const token = cookies().get("token")?.value;

      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }

      return request;
    },
    (error) => console.log(error)
  );

  fetch.interceptors.response.use(
    (response) => response,
    (error) => console.log(error)
  );

  return fetch;
}
const authFetch = axios.create({
  baseURL: "https://api.novaprop.org/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

authFetch.interceptors.request.use(
  (request) => request,
  (error) => console.log(error)
);

authFetch.interceptors.response.use(
  (response) => response,
  (error) => error.response
);

export {api,authFetch};
