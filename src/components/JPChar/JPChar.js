import React from 'react';
import './JPChar.scss';

function JPChar({
  kana,
  furi,
  en,
  modifier,
  hideFuri = false,
  hideEn = false,
  sizeModifier,
  handleClick = () => {},
}) {
  const kanaClassName = ['jp-char', modifier].filter(Boolean).join(' ');
  const kanaCharClasname = ['jp-char__char', sizeModifier].filter(Boolean).join(' ');

  return (
    <div
      role="button"
      className={kanaClassName}
      onClick={() => handleClick(kana)}
    >
      <span className="jp-char__furi">{!hideFuri && furi}</span>
      <span className={kanaCharClasname}>{kana}</span>
      <span className="jp-char__en">{!hideEn && en}</span>
    </div>
  );
}

export default JPChar;
