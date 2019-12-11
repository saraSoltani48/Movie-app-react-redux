import { ADD_MOVIE, DELETE_MOVIE,SEARCH_MOVIE,SEARCH_STAR,EDIT_MOVIE } from "./ActionType";

export function addMovie(payload) {
  return { type: ADD_MOVIE, payload };
}
export function DeleteMovie(payload) {
  return { type: DELETE_MOVIE, payload };
}

export function SearchMovie(payload) {
  return { type: SEARCH_MOVIE, payload };
}



export function EditMovie(payload) {
  return { type: EDIT_MOVIE, payload };
}
export function SearchStar(payload){
    return {type:SEARCH_STAR,payload}
}


