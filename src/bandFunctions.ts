import localforage from "localforage";
import { matchSorter } from "match-sorter";

export async function getBands(query: any) {
  let bands = await localforage.getItem("bands");
  if (!bands) bands = [];
  if (query) {
    bands = matchSorter(bands, query, { keys: ["id"] });
  }
  return bands;
}
