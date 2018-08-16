import { FETCH_TRENDS, FETCH_TREND } from "./types";
import { API_URL } from "../config";
import { handleResponse } from "../helpers.js";

export const fetchTrends = () => dispatch => {
  console.log("fetching...");
  fetch(`${API_URL}/all?page=${this.state.counter}`)
    .then(handleResponse)
    .then(data => {
      const cardsInfo = data.data;
      dispatch({
        type: FETCH_TRENDS,
        payload: cardsInfo
      });
    });
};

//   cards:
//     this.state.cards.length > 0
//       ? [...this.state.cards, ...cardsInfo]
//       : cardsInfo
// });
