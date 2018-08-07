import React, { Component } from "react";
import Cards from "./components/Cards";
import "./App.css";

const data = [
  {
    id: "Wyd4UiQAAJkaXxeh",
    uid: "unique - and - inspiring - wedding - place - cards",
    title: "Unique And Inspiring Wedding Place Cards \n",
    summary:
      "<p>Assist your guests to their seats with beautiful place cards adding to the decor of your event</p>",
    author: "Eventbree",
    category: {
      id: "WzIzET4AAPpnUvM2",
      name: "Stationaries",
      slug: "stationaries",
      url: "https://eventbreesite.loc/categories/stationaries"
    },
    culture: {
      id: "WzGbkj4AAHw4UFAA",
      name: "General",
      slug: "general",
      url: "https://eventbreesite.loc/culture/general"
    },
    eventType: {
      id: "WzGh7D4AAHw4UGxH",
      name: "Weddings",
      slug: "weddings",
      url: "https://eventbreesite.loc/event-type/weddings"
    },
    date: "2018 - 06 - 27",
    date_formatted: "27th of June 2018",
    url:
      "https://eventbreesite.loc/stationaries/unique-and-inspiring-wedding-place-cards",
    target: null,
    image:
      "https://eventbree-website.cdn.prismic.io/eventbree-website/93413f2fb57aa726e04f3ab86c6e85a74c8892db_wooden-place-cards-5.jpg",
    tags: {}
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Cards cardsInfo={data} />
      </div>
    );
  }
}

export default App;
