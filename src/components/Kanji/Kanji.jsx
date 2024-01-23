import React, { useEffect, useRef, useState } from "react";
import "./Kanji.scss";
import { loadKanjiWriter } from "./helpers";

const Kanji = ({ kanji, kanjiId }) => {
  const kanjiRef = useRef(null);
  const [kanjiWriter, setKanjiWriter] = useState(null);
  const [hasError, setHasError] = useState();
  const idToUse = kanjiId || kanji;

  useEffect(() => {
    const loadKanji = async () => {
      const loadedWriter = await loadKanjiWriter(kanji, idToUse, setHasError);
      loadedWriter.animateCharacter();
      setKanjiWriter(loadedWriter);
    };
    if (!kanjiRef.current || kanjiWriter !== null) return;
    loadKanji();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kanjiRef, kanjiWriter]);

  const handleKanjiClick = () => {
    if (kanjiWriter) kanjiWriter.animateCharacter();
  };

  const failedToLoad = !!kanjiWriter && hasError;
  const containerClassName = failedToLoad ? "hidden" : "kanji-container";

  return (
    <>
      <div
        ref={kanjiRef}
        id={idToUse}
        className={containerClassName}
        onClick={handleKanjiClick}
      ></div>
      {failedToLoad && <div className="kanji-failsafe">{kanji}</div>}
    </>
  );
};

export default Kanji;
