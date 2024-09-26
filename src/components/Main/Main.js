import React from 'react';
import './Main.scss';
import MainList from '../MainList';
import useMain from './useMain';
import Loading from '../Loading';

function Main() {
  const {
    loading,
    wordList,
    handleUpdateWordsList,
  } = useMain();

  if (loading) return <div className="main-loading-container"><Loading /></div>;

  return (
    <MainList
      wordList={wordList}
      handleUpdateWordsList={handleUpdateWordsList}
    />
  );
}

export default Main;
