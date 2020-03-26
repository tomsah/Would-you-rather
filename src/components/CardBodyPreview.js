import React from "react";
import { Link } from "react-router-dom";

const CardBodyPreview = ({ question }) => {
  return (
    <div className="card__preview">
      <h2>Would you rather...</h2>
      <p>{`...${question.optionOne.text}...`}</p>
      <Link to={`/question/${question.id}`}>View questions</Link>
    </div>
  );
};

export default CardBodyPreview;
