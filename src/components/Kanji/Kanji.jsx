import React, { useEffect, useRef, useState } from 'react';
import './Kanji.scss';
import { loadKanjiWriter } from './helpers';

function Kanji({ kanji, kanjiId }) {
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
  }, [kanjiRef, kanjiWriter]);

  const handleKanjiClick = () => {
    if (kanjiWriter) kanjiWriter.animateCharacter();
  };

  const failedToLoad = !!kanjiWriter && hasError;
  const containerClassName = failedToLoad ? 'hidden' : 'kanji-container';

  return (
    <>
      <div
        role="button"
        ref={kanjiRef}
        id={idToUse}
        className={containerClassName}
        onClick={handleKanjiClick}
      />
      {failedToLoad && <div className="kanji-failsafe">{kanji}</div>}
    </>
  );
}

export default Kanji;
