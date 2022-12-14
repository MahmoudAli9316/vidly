import http from "./httpServices";
import { apiUrl } from "../config.json";

const apiEndPoint = `${apiUrl}/movies`;

export function getMovies() {
  return http.get(apiEndPoint);
}
export function getMovie(movieId) {
  return http.get(`${apiEndPoint}/${movieId}`);
}
export function saveMovie(movie) {}
export function deleteMovie(movieId) {
  return http.delete(`${apiEndPoint}/${movieId}`);
}
