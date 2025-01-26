import { useEffect, useRef, useState } from 'react';
import { loadKanjiWriter } from './helpers';

function useKanji({
  kanji, kanjiId, animateOnLoad = false, disableAnimation = false,
}) {
  const kanjiRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [kanjiWriter, setKanjiWriter] = useState(null);
  const [hasError, setHasError] = useState(null);
  const idToUse = kanjiId || kanji;

  useEffect(() => {
    const loadKanji = async () => {
      await loadKanjiWriter(kanji, idToUse, setHasError)
        .then((loadedWriter) => {
          if (animateOnLoad) loadedWriter.animateCharacter();
          setKanjiWriter(loadedWriter);
          setIsLoading(false);
        });
    };
    if (!kanjiRef.current) return;
    setIsLoading(true);
    loadKanji();
  }, []);

  // TODO: fix this
  useEffect(
    () => {
      setHasError(true);
    },
    [kanji, kanji],
  );

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
