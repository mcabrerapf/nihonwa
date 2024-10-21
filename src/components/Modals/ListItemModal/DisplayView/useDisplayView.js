import { useEffect, useState } from 'react';
import './DisplayView.scss';
import { calculateSuccessRate } from '../../../../utils';
import { useListItemContext } from '../../../../contexts/ListItemContext';

function useDisplayView({
  // TODO eveuntualy remove this
  currentData,
  forceShow,
}) {
  const { word } = useListItemContext();
  const {
    id, jp, furi, en, notes, tags, hits, misses,
  } = currentData || word;
  const [view, setView] = useState('general');
  const [selectedKanji, setSelectedKanji] = useState('');
  const successPercentage = calculateSuccessRate(hits, misses);

  useEffect(() => {
    setView('general');
    setSelectedKanji('');
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
    forceShow,
    setSelectedKanji,
    setView,
  };
}

export default useDisplayView;
