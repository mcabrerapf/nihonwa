import { useState, useRef, useEffect } from 'react';
import { romajiToKana, getCharWithFuri } from '../../../utils';

function useEditWordFuri({ currentData, setCurrentData }) {
  const { jp, furi } = currentData;
  const inputRef = useRef(null);
  const [currentString, setCurrentString] = useState('');
  const [selectedKana, setSelectedKana] = useState('hi');
  const [selectedCharIndex, setSelectedCharIndex] = useState(0);
  const isHiraganaSelected = selectedKana === 'hi';
  const isKatakanaSelected = selectedKana === 'ka';

  useEffect(() => {
    if (!furi.length) {
      setCurrentData({ ...currentData, furi: jp.split('').fill('') });
    }
  }, []);

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

  const handleOnChange = ({ target: { value } }) => {
    setCurrentString(value);
  };

  const handleKeyDown = (event) => {
    // if (event.key === 'Enter') {
    //   handleParseWord();
    // }
    if (event.key === 'Tab') {
      event.preventDefault();
      const newKana = selectedKana === 'hi' ? 'ka' : 'hi';
      setSelectedKana(newKana);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleParseWord();
  };

  const handleKanaClick = ({ target: { value } }) => {
    setSelectedKana(value);
    handleParseWord(value);
  };

  const handleCharSelect = (index, furiToCheck) => {
    setSelectedCharIndex(index);
    if (furiToCheck) setCurrentString(furiToCheck);
    if (inputRef.current) inputRef.current.focus();
  };

  const kanaWithFuri = getCharWithFuri(jp, furi).map((kanaGroup, i) => {
    const className = `kana-with-furi ${
      i === selectedCharIndex ? 'selected-kana' : ''
    }`;
    const key = `${kanaGroup[0]}-${i}`;
    const handleDeleteFuri = () => handleUpdateFuri('', i);
    const handleSelectFuri = () => handleCharSelect(i, kanaGroup[1]);

    return {
      key,
      className,
      kanaGroup,
      handleDeleteFuri,
      handleSelectFuri,
    };
  });

  return {
    inputRef,
    currentString,
    kanaWithFuri,
    isHiraganaSelected,
    isKatakanaSelected,
    handleOnChange,
    handleKeyDown,
    handleOnSubmit,
    handleKanaClick,
  };
}

export default useEditWordFuri;
