import { get, post, destroy } from "../config/api";

export const Tools = {
  index: () => get("tools").json(),
  single: id => get(`users/${id}`).json(),
  byQuery: query => get(`tools?q=${query}`).json(),
  byTag: tags => get(`tools?tags_like=${tags}`).json(),
  create: params => post("tools", { json: params }).json(),
  remove: id => destroy(`tools/${id}`).json()
};
