import React from 'react';
import './Main.scss';
import MainList from '../MainList';
import useMain from './useMain';

function Main() {
  const {
    loading,
    wordList,
    kanjiDictionary,
    updateWordsList,
  } = useMain();

  if (loading) return null;

  return (
  // <main className="main-container">
    <MainList
      wordList={wordList}
      kanjiDictionary={kanjiDictionary}
      updateWordsList={updateWordsList}
    />
  // </main>
  );
}

export default Main;
