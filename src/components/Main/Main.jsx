import React from 'react';
import './Main.scss';
import MainList from '../MainList';
import useMain from './useMain';
import Loading from '../Loading';

function Main() {
  const {
    loading,
    wordList,
    updateWordsList,
  } = useMain();

  if (loading) return <div className="main-loading-container"><Loading /></div>;

  return (
  // <main className="main-container">
    <MainList
      wordList={wordList}
      updateWordsList={updateWordsList}
    />
  // </main>
  );
}

export default Main;
