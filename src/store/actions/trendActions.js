import { FETCH_TRENDS, FETCH_TREND, UPDATE_TREND_LIKES } from "./types";
import { API_URL } from "../../config";
import { handleResponse } from "../../helpers.js";

export const fetchTrends = page => dispatch => {
  fetch(`${API_URL}/?page=${page}`)
    .then(handleResponse)
    .then(data => {
      dispatch({ type: FETCH_TRENDS, payload: data });
    });
};

export const fetchTrend = id => dispatch => {
  fetch(`${API_URL}/${id}`)
    .then(handleResponse)
    .then(data => {
      dispatch({ type: FETCH_TREND, payload: data });
    });
};

export const updateTrendLikes = cardId => dispatch => {
  fetch(`${API_URL}/${cardId}/like`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(() => {
    dispatch({ type: UPDATE_TREND_LIKES, payload: cardId });
  });
};
