import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Rating from "./Rating.jsx";
import Card from "./Card.jsx";
import { Characters } from "./data.jsx";
import "./reset.css";
import "./style.css";
import "./header.css";
import "./character-ratings.css";
import "./character-cards.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Rating characters={Characters} />
    <Card characters={Characters} />
  </React.StrictMode>
);
