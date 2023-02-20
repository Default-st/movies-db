import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, img }) => {
  return (
    <Link to={`/videos/${id}`}>
      <img className="card" src={img} alt="cover" />
    </Link>
  );
};

export default Card;
