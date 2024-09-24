import { useEffect } from 'react';
import { containsKanji, containsKatakana } from '../../../utils';

function useEditSelectOptions({
  currentData,
  setCurrentData,
  optionKey,
  options,
}) {
  const { [optionKey]: selectedOptions, jp } = currentData;
  useEffect(() => {
    const hasKanji = containsKanji(jp);
    const hasKataKana = containsKatakana(jp);
    if (!hasKanji && !hasKataKana) return;
    const isKanjiSelected = selectedOptions.includes('kanji');
    const isKatakanaSelected = selectedOptions.includes('katakana');
    const updatedOptions = [...selectedOptions];
    if (!isKanjiSelected && hasKanji)updatedOptions.push('kanji');
    if (!isKatakanaSelected && hasKataKana)updatedOptions.push('katakana');
    setCurrentData({ ...currentData, [optionKey]: updatedOptions });
  }, []);

  const handleOptionChange = ({ target: { value } }) => {
    const isSelected = !!selectedOptions.find((slectedOption) => slectedOption === value);
    const updatedSelectedOptions = isSelected
      ? selectedOptions.filter((selectedOption) => selectedOption !== value)
      : [...selectedOptions, value];
    setCurrentData({ ...currentData, [optionKey]: updatedSelectedOptions });
  };

  const optionsWithIsSelected = options.map((option) => {
    const isSelected = selectedOptions.find(
      (selectedType) => selectedType === option,
    );
    return {
      value: option,
      isSelected,
    };
  });

  return {
    options: optionsWithIsSelected,
    handleOptionChange,
  };
}

export default useEditSelectOptions;
