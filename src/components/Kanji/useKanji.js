import { useEffect, useRef, useState } from 'react';
import './Kanji.scss';
import { loadKanjiWriter } from './helpers';

function useKanji({
  kanji, kanjiId, animateOnLoad = false, disableAnimation = false,
}) {
  const kanjiRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [kanjiWriter, setKanjiWriter] = useState(null);
  const [hasError, setHasError] = useState(null);
  const idToUse = kanjiId || kanji;

  useEffect(() => {
    const loadKanji = async () => {
      const loadedWriter = await loadKanjiWriter(kanji, idToUse, setHasError);
      if (animateOnLoad) loadedWriter.animateCharacter();
      setKanjiWriter(loadedWriter);
      setIsLoading(false);
    };
    if (!kanjiRef.current) return;
    loadKanji();
  }, [kanji]);

  const handleKanjiClick = () => {
    if (disableAnimation) return;
    if (kanjiWriter) kanjiWriter.animateCharacter();
  };

  const failedToLoad = hasError;
  const containerClassName = failedToLoad ? 'hidden' : 'kanji-container';

  return {
    kanji,
    kanjiRef,
    idToUse,
    containerClassName,
    failedToLoad,
    isLoading,
    handleKanjiClick,
  };
}

export default useKanji;
