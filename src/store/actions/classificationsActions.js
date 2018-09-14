import { FETCH_CLASSIFICATION, UPDATE_CLASSIFICATION_LIKE } from "./types";
import { API_URL } from "../../config";
import { handleResponse } from "../../helpers.js";

export const fetchClass = (slugCategory, slugId) => dispatch => {
  fetch(`${API_URL}/${slugCategory}/${slugId}`)
    .then(handleResponse)
    .then(data => {
      dispatch({ type: FETCH_CLASSIFICATION, payload: data });
    });
};
export const updateClassLikes = cardId => dispatch => {
  fetch(`${API_URL}/${cardId}/like`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(() => {
    dispatch({ type: UPDATE_CLASSIFICATION_LIKE, payload: cardId });
  });
};
