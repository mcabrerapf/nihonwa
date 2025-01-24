import React from 'react';
import './Kana.scss';

function Kana({
  kana,
  furi,
  en,
  modifier,
  hideFuri = false,
  hideEn = false,
  sizeModifier,
  handleClick = () => {},
}) {
  const kanaClassName = ['kana', modifier].filter(Boolean).join(' ');
  const kanaCharClasname = ['kana__char', sizeModifier].filter(Boolean).join(' ');

  return (
    <div
      role="button"
      className={kanaClassName}
      onClick={() => handleClick(kana)}
    >
      <span className="kana__furi">{!hideFuri && furi}</span>
      <span className={kanaCharClasname}>{kana}</span>
      <span className="kana__en">{!hideEn && en}</span>
    </div>
  );
}

export default Kana;
