import React from 'react';
import './Main.scss';
import MainList from '../MainList';
import useMain from './useMain';

function Main() {
  const {
    allLists,
    updateWordsList,
    updateSentencesList,
  } = useMain();
  if (!allLists) return null;

  return (
  // <main className="main-container">
    <MainList
      wordsList={allLists[0]}
      sentencesList={allLists[1]}
      updateWordsList={updateWordsList}
      updateSentencesList={updateSentencesList}
    />
  // </main>
  );
}

export default Main;
