import React from 'react';
import './Main.scss';
import MainList from '../MainList';
import Loading from '../Loading';

import { useMainContext } from '../../contexts/MainContext';

function Main() {
  const {
    loading,
  } = useMainContext();

  if (loading) return <div className="main-loading-container"><Loading /></div>;

  return <MainList />;
}

export default Main;
