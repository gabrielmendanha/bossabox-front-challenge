import { get, post, destroy } from "../config/api";

export const Tools = {
  index: () => get("tools").json(),
  single: id => get(`users/${id}`),
  byQuery: query => get(`tools?q=${query}`),
  byTag: tags => get(`tools?tags_like=${tags}`),
  create: params => post("tools", { json: params }).json(),
  remove: id => destroy(`tools/${id}`)
};