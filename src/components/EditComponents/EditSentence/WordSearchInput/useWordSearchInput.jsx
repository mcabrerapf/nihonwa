import { useState, useRef, useEffect } from 'react';
import { getWordPronunciation, romajiToKana } from '../../../../utils';

function useWordSearchInput({
  sentence, allWords, currentData, setCurrentData,
}) {
  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(sentence);
  const [selectedKana, setSelectedKana] = useState('hi');
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);
  const [cursorStartPosition, setCursorStartPosition] = useState(0);
  const [cursorEndPosition, setCursorEndPosition] = useState(0);

  const isHiraganaSelected = selectedKana === 'hi';
  const isKatakanaSelected = selectedKana === 'ka';
  const searchValue = currentValue.substring(
    cursorStartPosition,
    cursorEndPosition,
  ).trim();

  const filteredWords = allWords.filter((word) => {
    const parsedPronunciation = getWordPronunciation(word);
    return parsedPronunciation.indexOf(searchValue.toLowerCase()) !== -1;
  });

  useEffect(() => {
    if (textareaRef.current && !currentValue) {
      textareaRef.current.focus();
    }
  }, [textareaRef]);

  useEffect(() => {
    if (selectedWordIndex > filteredWords.length - 1) setSelectedWordIndex(0);
  }, [filteredWords, selectedWordIndex]);

  useEffect(() => {
    if (cursorStartPosition > currentValue.length) setCursorStartPosition(currentValue.length);
  }, [currentValue]);

  const handleUpdateData = (newSentence) => {
    setCurrentData({ ...currentData, jp: newSentence });
  };

  const getCurrentCursorPosition = () => {
    if (textareaRef.current) return textareaRef.current.selectionStart;
    return 0;
  };

  const updateCursorPosition = () => {
    const currentCursorPosition = getCurrentCursorPosition();
    setCursorStartPosition(currentCursorPosition);
    setCursorEndPosition(currentCursorPosition);
  };

  const handleParseWord = (addSpace) => {
    const kana = romajiToKana(searchValue, selectedKana);
    const kanaWithSpace = `${kana}${addSpace ? ' ' : ''}`;
    const resultString = currentValue.replace(searchValue, kanaWithSpace);
    setCurrentValue(resultString);
    setSelectedWordIndex(0);
    setCursorStartPosition(resultString.length);
    setCursorEndPosition(resultString.length);
    handleUpdateData(resultString);
  };

  const handleKanaClick = ({ target: { value } }) => {
    const resultString = romajiToKana(currentValue, value);
    setSelectedKana(value);
    setCurrentValue(resultString);
    setSelectedWordIndex(0);
    handleUpdateData(resultString);
    if (textareaRef.current) textareaRef.current.focus();
  };

  const handleSelectWord = ({ target: { innerText: word } }) => {
    if (!word) return;
    const resultString = currentValue.replace(searchValue, `${word} `);
    setCursorStartPosition(resultString.length);
    setCursorEndPosition(resultString.length);
    setCurrentValue(resultString);
    handleUpdateData(resultString);
  };

  const handleOnChange = ({ target: { value } }) => {
    const currentCursorPosition = getCurrentCursorPosition();
    if (currentCursorPosition < cursorStartPosition) setCursorStartPosition(currentCursorPosition);
    setCursorEndPosition(currentCursorPosition);
    setCurrentValue(value);
  };

  const handleKeyDown = (e) => {
    const { key } = e;

    if (key === ' ') handleParseWord();

    if (key === 'Enter') {
      e.preventDefault();
      handleParseWord(true);
      // const wordMatch = filteredWords[selectedWordIndex];
      // !!wordMatch ? handleSelectWord(wordMatch.jp) : handleParseWord();
    }

    if (key === 'Backspace' && cursorEndPosition > 0) {
      setCursorEndPosition(cursorEndPosition - 1);
    }

    if (key === 'Tab') {
      e.preventDefault();
      const newKana = selectedKana === 'hi' ? 'ka' : 'hi';
      setSelectedKana(newKana);
    }

    if (key === 'ArrowUp' && selectedWordIndex > 0) {
      e.preventDefault();
      setSelectedWordIndex(selectedWordIndex - 1);
    }

    if (key === 'ArrowDown' && selectedWordIndex < filteredWords.length - 1) {
      e.preventDefault();
      setSelectedWordIndex(selectedWordIndex + 1);
    }
  };

  return {
    textareaRef,
    currentValue,
    selectedWordIndex,
    searchValue,
    isHiraganaSelected,
    isKatakanaSelected,
    filteredWords,
    updateCursorPosition,
    handleSelectWord,
    handleOnChange,
    handleKeyDown,
    handleKanaClick,
  };
}

export default useWordSearchInput;
