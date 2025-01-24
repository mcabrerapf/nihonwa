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

  if (failedToLoad) return <div className="kanji-failsafe">{kanji}</div>;

  return (
    <div
      role="button"
      ref={kanjiRef}
      id={idToUse}
      className={containerClassName}
      onClick={handleKanjiClick}
    />

  );
}

export default Kanji;
