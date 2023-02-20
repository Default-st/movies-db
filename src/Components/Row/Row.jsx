import React from "react";
import Card from "../Card/Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const imgUrl = "https://image.tmdb.org/t/p/original";
const Row = ({ title, arr }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <Splide
        className="splide"
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        <div className="slide">
          {arr.map((item, i) => {
            return (
              <SplideSlide key={item.id}>
                <Card id={item.id} img={`${imgUrl}/${item.poster_path}`} />
              </SplideSlide>
            );
          })}
        </div>
      </Splide>
    </div>
  );
};

export default Row;
