import React from 'react';
import './KanjiReadings.scss';
import useKanjiReadings from './useKanjiReadings';
import Loading from '../Loading';
import SimpleList from '../SimpleList/SimpleList';

function KanjiReadings(props) {
  const {
    onYomi,
    meanings,
    kunYomi,
    isLoading,
  } = useKanjiReadings(props);

  return (
    <Loading isLoading={isLoading}>
      <div className="kanji-readings">
        <SimpleList list={onYomi} header="音読み" />
        <SimpleList list={meanings} header="Meanings" />
        <SimpleList list={kunYomi} header="訓読み" />
      </div>
    </Loading>

  );
}

export default KanjiReadings;
