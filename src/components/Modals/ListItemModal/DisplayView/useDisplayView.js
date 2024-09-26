import { useContext, useEffect, useState } from 'react';
import './DisplayView.scss';
import { calculateSuccessRate } from '../../../../utils';
import { ListItemModalContext } from '../ListItemModalContext';

function useDisplayView({
  listData,
  // TODO eveuntualy remove this
  currentData,
}) {
  const { word } = useContext(ListItemModalContext);
  const {
    id, jp, furi, en, notes, tags, hits, misses,
  } = currentData || word;
  const [view, setView] = useState('general');
  const [selectedKanji, setSelectedKanji] = useState('');
  const successPercentage = calculateSuccessRate(hits, misses);

  useEffect(() => {
    setView('general');
  }, [word]);

  return {
    id,
    jp,
    en,
    furi,
    notes,
    tags,
    view,
    selectedKanji,
    successPercentage,
    listData,
    setSelectedKanji,
    setView,
  };
}

export default useDisplayView;
