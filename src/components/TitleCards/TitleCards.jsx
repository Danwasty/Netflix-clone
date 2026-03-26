import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmM4NWI5NDAzMDRlZDk5NWJhYjY4N2JmZDI4ZTY2YyIsIm5iZiI6MTc2ODA1OTIyOC42MDYwMDAyLCJzdWIiOiI2OTYyNzE1YzViYTRkOTYzOTYxNzE5YTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3H7AE3UndUk5FpFCzqa77mq1oUlWkYJeHdz1tLJTL5E",
        },
      };

  useEffect(() => {
    const el = cardsRef.current;
    el.addEventListener("wheel", handleWheel);
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category: "now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, [category]);

  function handleWheel(e) {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
