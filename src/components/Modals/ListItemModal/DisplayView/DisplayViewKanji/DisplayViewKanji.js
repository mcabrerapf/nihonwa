import React from 'react';
import './DisplayViewKanji.scss';
import Kanji from '../../../../Kanji';
import Loading from '../../../../Loading';
import useDisplayViewKanji from './useDisplayViewKanji';
import Button from '../../../../Button';

function DisplayViewKanji(props) {
  const {
    selectedKanji,
    onYomi,
    meanings,
    kunYomi,
    isLoading,
    similarWords,
    handleGoToItem,
  } = useDisplayViewKanji(props);

  return (
    <div className="display-view-kanji">
      <Kanji kanji={selectedKanji} kanjiId={selectedKanji} />
      {isLoading && <div className="display-view-kanji__loading"><Loading /></div>}
      {!isLoading && (
      <div className="display-view-kanji__data">
        <div className="display-view-kanji__data__container">
          <span
            className={`display-view-kanji__data__container__header${onYomi.length ? '' : ' empty-list'}`}
          >
            音読み
          </span>
          <ul className="display-view-kanji__data__container__list">
            {onYomi.map((yomi) => (
              <li key={yomi}>
                {yomi}
              </li>
            ))}
          </ul>
        </div>
        <div className="display-view-kanji__data__container">
          <span
            className={`display-view-kanji__data__container__header${meanings.length ? '' : ' empty-list'}`}
          >
            Meanings
          </span>
          <ul className="display-view-kanji__data__container__list">
            {meanings.map((meaning) => (
              <li key={meaning}>
                {meaning}
              </li>
            ))}
          </ul>
        </div>
        <div className="display-view-kanji__data__container">
          <span
            className={`display-view-kanji__data__container__header${kunYomi.length ? '' : ' empty-list'}`}
          >
            訓読み
          </span>
          <ul className="display-view-kanji__data__container__list">
            {kunYomi.map((yomi) => (
              <li key={yomi}>
                {yomi}
              </li>
            ))}
          </ul>
        </div>
      </div>
      )}
      <div className="display-view-kanji__words">
        {similarWords.map((word) => (
          <Button
            key={word.id}
            onClick={() => handleGoToItem(word)}
          >
            {word.jp}
          </Button>
        ))}

      </div>
    </div>
  );
}

export default DisplayViewKanji;
