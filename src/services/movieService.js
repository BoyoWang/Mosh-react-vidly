import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export const deleteMovie = (id) => {
  return http.delete(apiEndpoint + "/" + id);
};

export function getMovie(id) {
  return http.get(apiEndpoint + "/" + id);
}

export function saveMovie(movie) {}
