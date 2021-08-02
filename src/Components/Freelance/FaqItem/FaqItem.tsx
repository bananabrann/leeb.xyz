import React, { useState } from "react";
import Separator from "../../Separator/Separator";
import "./FaqItem.scss";

interface IFaqItemProps {
  question: string;
  answer: string;
  readMoreTitle?: string;
  readMoreBody?: string;
}

const FaqItem: React.FC<any> = (props: IFaqItemProps) => {
  const [isReadMoreDisplayed, setIsReadMoreDisplayed] =
    useState<boolean>(false);

  function handleDisplayReadMore() {
    setIsReadMoreDisplayed(!isReadMoreDisplayed);
  }

  return (
    <div className="FaqItem">
      <div className="question-container">
        <i className="fas fa-quote-left fa-1x"></i>
        <div>{props.question}</div>
        <i className="fas fa-quote-right fa-1x"></i>
      </div>

      <div className="answer-container">
        <p className="answer-prefix">Answer: </p>
        <p>{props.answer}</p>
      </div>

      <div className="readmore-container">
        <p className="readmore-title" onClick={handleDisplayReadMore}>
          {props.readMoreTitle}
        </p>
        {isReadMoreDisplayed ? (
          <p className="readmore-body">{props.readMoreBody}</p>
        ) : (
          <div />
        )}
      </div>

      <Separator />
    </div>
  );
};

export default FaqItem;
