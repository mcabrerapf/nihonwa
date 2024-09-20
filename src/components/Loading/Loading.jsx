import React from 'react';
import './Loading.scss';
import { DOTS_TYPE, LOADING_CLASSNAME } from './constants';
import { getLoaderType } from './helpers';

function Loading({ type }) {
  const loaderType = getLoaderType(type);
  const CLASSNAME = `${LOADING_CLASSNAME}__${loaderType}`;

  return (
    <div className={CLASSNAME}>
      {loaderType === DOTS_TYPE && (
        <>
          <div className={`${CLASSNAME}__dot`} />
          <div className={`${CLASSNAME}__dot`} />
          <div className={`${CLASSNAME}__dot`} />
        </>
      )}
    </div>
  );
}

export default Loading;
