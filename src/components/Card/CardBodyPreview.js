import React from "react";
import { Link } from "react-router-dom";

const CardBodyPreview = ({ question }) => {
  const questionPreview = question.optionOne.text
  return (
    <div className="card__preview">
      <h2>would you rather...</h2>
      <p>{`...${questionPreview.toLocaleLowerCase()}...`}</p>
      <Link to={`/question/${question.id}`} className='neon-button'>
        <span />
        <span />
        <span />
        <span />
        decide you must
      </Link>
    </div>
  );
};

export default CardBodyPreview;
