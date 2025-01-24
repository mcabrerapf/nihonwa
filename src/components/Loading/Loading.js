import React from 'react';
import './Loading.scss';
import { DOTS_TYPE, LOADING_CLASSNAME } from './constants';
import { getLoaderType } from './helpers';

function Loading({ type, isLoading, children }) {
  const loaderType = getLoaderType(type);
  const CLASSNAME = `${LOADING_CLASSNAME}__${loaderType}`;

  if (!isLoading) return children;

  return (
    <div className={LOADING_CLASSNAME}>
      {loaderType === DOTS_TYPE && (
        <div className={CLASSNAME}>
          <div className={`${CLASSNAME}__dot`} />
          <div className={`${CLASSNAME}__dot`} />
          <div className={`${CLASSNAME}__dot`} />
        </div>
      )}
    </div>
  );
}

export default Loading;
