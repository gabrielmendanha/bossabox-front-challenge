import { get, post, put, destroy } from "../config/api";
export const Tools = {
  index: () => get("tools").json(),
  single: id => get(`users/${id}`),
  byQuery: query => get(`tools?q=${query}`),
  byTag: tags => get(`tools?tags_like=${tags}`),
  create: params => post("tools", params),
  remove: id => destroy(`tools/${id}`)
};
