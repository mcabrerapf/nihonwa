import React from "react";
import "./WordModalSentences.css";

const WordModalSentences = ({ jpWord, wordSentences }) => {
  return (
    <div className="word-sentences">
      {wordSentences.map((sentence, i) => {
        return (
          <div key={i} className="word-sentence">
            <div className="word-sentence-jp">
              {sentence.jpWords.map((word, i) => {
                const wordClassName =
                  word === jpWord
                    ? "word-sentence-jp-word word-match"
                    : "word-sentence-jp-word";

                return (
                  <span key={`${word}-${i}`} className={wordClassName}>
                    {word}
                  </span>
                );
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
