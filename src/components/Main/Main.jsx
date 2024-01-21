import React, { useEffect, useState } from "react";
import "./Main.scss";
import {
  createWord,
  updateWord,
  getAllSentences,
  getAllWords,
  updateSentence,
  createSentence,
} from "../../Services";
import MainList from "../MainList";

const Main = () => {
  const [allLists, setAllLists] = useState(null);

  useEffect(() => {
    async function initMain() {
      const allWords = await getAllWords();
      const allSentences = await getAllSentences();
      setAllLists([allWords, allSentences]);
    }

    initMain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateWordsList = async (newWordData) => {
    if (newWordData) {
      const serviceToUse = newWordData.id ? updateWord : createWord;
      await serviceToUse(newWordData);
    }
    const allWords = await getAllWords();
    setAllLists([allWords, allLists[1]]);
  };

  const updateSentencesList = async (newSentenceData) => {
    if (newSentenceData) {
      const serviceToUse = newSentenceData.id ? updateSentence : createSentence;
      await serviceToUse(newSentenceData);
    }
    const allSentences = await getAllSentences();
    setAllLists([allLists[0], allSentences]);
  };

  if (!allLists) return null;

  return (
    <main className="main-container">
      <MainList
        wordsList={allLists[0]}
        sentencesList={allLists[1]}
        updateWordsList={updateWordsList}
        updateSentencesList={updateSentencesList}
      />
    </main>
  );
};

export default Main;
