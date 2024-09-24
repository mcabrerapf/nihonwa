import React from 'react';
import './Kanji.scss';
import useKanji from './useKanji';

function Kanji(props) {
  const {
    kanji,
    kanjiRef,
    idToUse,
    containerClassName,
    failedToLoad,
    handleKanjiClick,
  } = useKanji(props);

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
