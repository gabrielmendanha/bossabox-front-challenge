import ky from "ky";
const apiClient = ky.create({
  retry: 0,
  prefixUrl: "http://192.168.0.166:3000",
  headers: {
    "content-type": "application/json",
  },
});
const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
