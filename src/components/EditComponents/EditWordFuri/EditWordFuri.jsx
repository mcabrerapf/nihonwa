import React, { useState, useRef } from 'react';
import './EditWordFuri.scss';
import Button from '../../Button';
import { romajiToKana, getCharWithFuri } from '../../../utils';

function EditWordFuri({ currentData, setCurrentData }) {
  const [currentString, setCurrentString] = useState('');
  const [selectedKana, setSelectedKana] = useState('hi');
  const [selectedCharIndex, setSelectedCharIndex] = useState(0);
  const inputRef = useRef(null);
  const { jp, furi } = currentData;

  const handleUpdateFuri = (value, i) => {
    const indexToUse = i !== undefined ? i : selectedCharIndex;
    const updatedFuri = [...furi];
    updatedFuri[indexToUse] = value;
    setCurrentData({ ...currentData, furi: updatedFuri });
  };

  const handleParseWord = (kanaKey) => {
    if (!currentString) return;
    const kana = romajiToKana(currentString, kanaKey || selectedKana);
    handleUpdateFuri(kana);
    setCurrentString('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleParseWord();
    }
  };

  const handleKanaClick = (kana) => {
    setSelectedKana(kana);
    handleParseWord(kana);
  };

  const handleCharSelect = (index, furiToCheck) => {
    setSelectedCharIndex(index);
    if (furiToCheck) setCurrentString(furiToCheck);
    if (inputRef.current) inputRef.current.focus();
  };

  const kanaWithFuri = getCharWithFuri(jp, furi);

  return (
    <div className="edit-word-furi">
      <div className="edit-word-furi-display">
        {kanaWithFuri.map((kanaGroup, i) => (
          <div
            key={`${kanaGroup[0]}-${i}`}
            className={`kana-with-furi ${
              i === selectedCharIndex ? 'selected-kana' : ''
            }`}
          >
            {kanaGroup[1] && (
            <Button
              modifier="ghost"
              onClick={() => handleUpdateFuri('', i)}
            >
              x
            </Button>
            )}
            <span className="furi">{kanaGroup[1]}</span>
            <span
              role="button"
              className="kana"
              onClick={() => handleCharSelect(i, kanaGroup[1])}
            >
              {kanaGroup[0]}
            </span>
            <span className="furi">{kanaGroup[2]}</span>
          </div>
        ))}
      </div>
      <div className="edit-word-furi-input">
        <input
          ref={inputRef}
          onChange={(e) => setCurrentString(e.target.value)}
          onKeyDown={handleKeyPress}
          value={currentString}
        />
        <div className="edit-word-furi-input-buttons">
          <Button
            isNotSelected={selectedKana !== 'hi'}
            onClick={() => handleKanaClick('hi')}
          >
            か
          </Button>
          <Button
            isNotSelected={selectedKana !== 'ka'}
            onClick={() => handleKanaClick('ka')}
          >
            カ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditWordFuri;
