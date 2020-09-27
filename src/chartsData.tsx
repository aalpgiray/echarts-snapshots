import { option } from "./option";

export const charts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => ({
  id: id.toString(),
  thumbnailUrl: "",
  name: "Chart " + id,
  option
}));
