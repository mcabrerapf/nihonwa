import React from 'react';
import './DisplayViewKanji.scss';
import Kanji from '../../../../Kanji';
import KanjiReadings from '../../../../KanjiReadings';
import ButtonList from '../../../../ButtonList';
import { useMainContext } from '../../../../../contexts/MainContext';
import { useListItemContext } from '../../../../../contexts/ListItemContext';

function DisplayViewKanji({ setDisplayView, selectedKanji }) {
  const { orderedList } = useMainContext();
  const {
    handleGoToItem,
  } = useListItemContext();
  const similarWords = orderedList
    ? orderedList.filter(({ jp }) => jp.includes(selectedKanji)) : [];

  const kanjiWordClick = (word) => {
    handleGoToItem(word);
    setDisplayView('general');
  };

  return (
    <div className="display-view-kanji">
      <div className="display-view-kanji__top">
        <Kanji kanji={selectedKanji} kanjiId={selectedKanji} />
        <KanjiReadings kanji={selectedKanji} />
      </div>
      <div className="display-view-kanji__bottom">
        <ButtonList list={similarWords} onClick={kanjiWordClick} textKey="jp" />
      </div>
    </div>
  );
}

export default DisplayViewKanji;
