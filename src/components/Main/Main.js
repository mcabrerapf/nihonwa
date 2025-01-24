import React from 'react';
import './Main.scss';
import MainList from '../MainList';
import Loading from '../Loading';

import { useMainContext } from '../../contexts/MainContext';

function Main() {
  const {
    loading,
  } = useMainContext();

  return (
    <Loading isLoading={loading}>
      <MainList />
    </Loading>
  );
}

export default Main;
