import React from "react";
import "./DisplayViewSentences.scss";
import { copyToClipboard } from "../../../../../utils";

const DisplayViewSentences = ({ jp, wordSentences }) => {
  return (
    <div className="display-view-sentences">
      {wordSentences.map((sentence, i) => {
        const { jp } = sentence;
        return (
          <div key={i} className="display-view-sentence">
            <div
              className="display-view-sentence-jp"
              onClick={() => copyToClipboard(jp)}
            >
              <span>{jp}</span>;
            </div>
            <span>{sentence.en}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayViewSentences;
