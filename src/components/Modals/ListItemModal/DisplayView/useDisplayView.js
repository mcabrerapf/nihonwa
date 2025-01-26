import { useEffect, useState } from 'react';
import { calculateSuccessRate } from '../../../../utils';
import { useListItemContext } from '../../../../contexts/ListItemContext';

function useDisplayView({
  // TODO eveuntualy remove this
  currentData,
  hideFooter,
}) {
  const { word } = useListItemContext();
  const {
    id, jp, furi, en, notes, tags, hits, misses,
  } = currentData || word;
  const [displayView, setDisplayView] = useState('general');
  const [selectedKanji, setSelectedKanji] = useState('');
  const successPercentage = calculateSuccessRate(hits, misses);

  useEffect(() => {
    setDisplayView('general');
    setSelectedKanji('');
  }, [word]);

  return {
    id,
    jp,
    en,
    furi,
    notes,
    tags,
    displayView,
    selectedKanji,
    successPercentage,
    hideFooter,
    setSelectedKanji,
    setDisplayView,
  };
}

export default useDisplayView;
