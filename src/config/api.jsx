import ky from "ky";
const apiClient = ky.create({
  retry: 0,
  prefixUrl: "http://localhost:3000",
  headers: {
    "content-type": "application/json"
  }
});
const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
