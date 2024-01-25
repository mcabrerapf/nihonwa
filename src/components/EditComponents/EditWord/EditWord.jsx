import React, { useRef, useState } from 'react';
import './EditWord.scss';
import Button from '../../Button';
import { romajiToKana } from '../../../utils';

function EditWord({
  currentData,
  setCurrentData,
  itemAlreadyExists,
  setCurrentEditStep,
}) {
  const inputRef = useRef(null);
  const [currentString, setCurrentString] = useState(currentData.jp);
  const [selectedKana, setSelectedKana] = useState('hi');
  const { jp } = currentData;

  // useEffect(() => {
  //   if (inputRef.current && !currentString) {
  //     inputRef.current.focus();
  //   }
  // }, [inputRef]);

  const handleParseWord = (kanaKey) => {
    if (!currentString) return;
    const kana = romajiToKana(currentString, kanaKey || selectedKana);
    setCurrentData({ ...currentData, jp: kana });
    setCurrentString(kana);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      event.preventDefault();
      handleParseWord();
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      const newKana = selectedKana === 'hi' ? 'ka' : 'hi';
      setSelectedKana(newKana);
    }
  };

  const handleKanaClick = (kana) => {
    setSelectedKana(kana);
    handleParseWord(kana);
  };

  const handleGoToFuriEditStep = () => {
    setCurrentEditStep(1);
  };

  return (
    <div className="edit-word">
      <div className="edit-word-display">
        <span>{jp}</span>
        {itemAlreadyExists && (
          <span className="edit-word-error-message">Word already exists</span>
        )}
      </div>
      <div className="edit-word-actions">
        <div className="add-furi-button">
          <Button
            isDisabled={itemAlreadyExists || !jp}
            onClick={handleGoToFuriEditStep}
          >
            振り仮名
          </Button>
        </div>
        <div className="edit-word-input">
          <input
            ref={inputRef}
            onChange={(e) => setCurrentString(e.target.value)}
            onKeyDown={handleKeyPress}
            value={currentString}
          />
          <div className="edit-word-input-buttons">
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
    </div>
  );
}

export default EditWord;
