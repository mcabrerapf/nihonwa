import { useEffect, useState } from 'react';
import './DisplayView.scss';
import { calculateSuccessRate, checkIfCharIsKanji, getKanjiArrayFromString } from '../../../../utils';

function useDisplayView({
  listItemData,
  isFirstItem,
  isLastItem,
  canDelete,
  similarWords,
  modalView,
  listData,
  setModalView,
  handleGoToItem,
  handleListItemChange,
}) {
  const {
    jp, furi, en, tags, notes, hits, misses,
  } = listItemData;
  const [view, setView] = useState('general');
  const [selectedKanji, setSelectedKanji] = useState('');
  const kanjis = [...new Set(getKanjiArrayFromString(jp))];
  const hasKanji = !!kanjis && !!kanjis.length;
  const successPercentage = calculateSuccessRate(hits, misses);
  const sortedTags = tags.sort((a, b) => a.localeCompare(b));

  useEffect(() => {
    const newFirstKanji = jp.split('').find((char) => checkIfCharIsKanji(char));
    setSelectedKanji(newFirstKanji);
    setView('general');
  }, [listItemData]);

  return {
    jp,
    en,
    furi,
    tags,
    notes,
    isLastItem,
    isFirstItem,
    sortedTags,
    view,
    similarWords,
    selectedKanji,
    hasKanji,
    canDelete,
    modalView,
    successPercentage,
    listData,
    setModalView,
    setSelectedKanji,
    setView,
    handleGoToItem,
    handleListItemChange,
  };
}

export default useDisplayView;
