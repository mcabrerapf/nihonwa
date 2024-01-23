import React from "react";
import "./DisplayViewKanji.scss";
import Kanji from "../../../../Kanji";

const DisplayViewKanji = ({ kanjis }) => {
  return (
    <div className="display-view-kanji">
      {kanjis.split("").map((kanji, i) => {
        const kanjiId = `${kanji}-${i}`

        return (
          <div key={`${i}-${kanji}`} className="kanji">
            <Kanji kanji={kanji} kanjiId={kanjiId} />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayViewKanji;
