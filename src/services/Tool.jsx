import { get, post, destroy } from "../config/api";

export const Tools = {
  index: () => get("tools").json(),
  single: id => get(`users/${id}`).json(),
  byQuery: (query, signal) => get(`tools?q=${query}`, { signal }).json(),
  byTag: (tags, signal) => get(`tools?tags_like=${tags}`, { signal }).json(),
  create: params => post("tools", { json: params }).json(),
  remove: id => destroy(`tools/${id}`).json()
};
