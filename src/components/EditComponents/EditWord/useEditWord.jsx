import { useRef, useState } from 'react';
import { romajiToKana } from '../../../utils';

const useEditWord = ({
  currentData,
  itemAlreadyExists,
  setCurrentData,
  setCurrentEditStep,
}) => {
  const inputRef = useRef(null);
  const { jp: word } = currentData;
  const [currentWord, setCurrentWord] = useState(word);
  const [selectedKana, setSelectedKana] = useState('hi');
  const isHiraganaSelected = selectedKana === 'hi';
  const isKatakanaSelected = selectedKana === 'ka';
  const isFuriButtonDisabled = itemAlreadyExists || !word;

  // useEffect(() => {
  //   if (inputRef.current && !currentWord) {
  //     inputRef.current.focus();
  //   }
  // }, [inputRef]);

  const handleParseWord = (kanaKey) => {
    if (!currentWord) return;
    const kana = romajiToKana(currentWord, kanaKey || selectedKana);
    setCurrentData({ ...currentData, jp: kana });
    setCurrentWord(kana);
  };

  const handleKeyDown = (event) => {
    // if (event.key === 'Enter' || event.keyCode === 32) {
    //   // event.preventDefault();
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

  const handleOnChange = ({ target: { value } }) => {
    setCurrentWord(value);
  };

  const handleKanaClick = (kana) => {
    setSelectedKana(kana);
    handleParseWord(kana);
  };

  const handleGoToFuriEditStep = () => {
    setCurrentEditStep(1);
  };

  return {
    inputRef,
    itemAlreadyExists,
    word,
    currentWord,
    selectedKana,
    isHiraganaSelected,
    isKatakanaSelected,
    isFuriButtonDisabled,
    handleOnChange,
    handleOnSubmit,
    handleKeyDown,
    handleKanaClick,
    handleGoToFuriEditStep,
  };
};

export default useEditWord;
