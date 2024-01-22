import React from "react";
import "./DisplayViewSentences.scss";
import { copyToClipboard } from "../../../../../utils";

const DisplayViewSentences = ({ jpWord, wordSentences }) => {
  return (
    <div className="display-view-sentences">
      {wordSentences.map((sentence, i) => {
        const { jpWords } = sentence;
        return (
          <div key={i} className="display-view-sentence">
            <div
              className="display-view-sentence-jp"
              onClick={() => copyToClipboard(jpWords.join(" "))}
            >
              {jpWords.map((word, i) => {
                return <span key={`${word}-${i}`}>{word}</span>;
              })}
            </div>
            <span>{sentence.en}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayViewSentences;
