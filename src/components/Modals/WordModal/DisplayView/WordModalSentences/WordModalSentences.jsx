import React from "react";
import "./WordModalSentences.scss";
import { copyToClipboard } from "../../../../../utils";

const WordModalSentences = ({ jpWord, wordSentences }) => {
  return (
    <div className="word-sentences">
      {wordSentences.map((sentence, i) => {
        const { jpWords } = sentence;
        return (
          <div key={i} className="word-sentence">
            <div
              className="word-sentence-jp"
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

export default WordModalSentences;
