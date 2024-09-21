import { useEffect, useRef, useState } from 'react';
import { copyToClipboard, romajiToKana } from '../../../utils';

const useMainListHeader = ({
  filters,
  wordList,
  orderedListLength,
  handleFiltersChange,
  handleToggleModal,
}) => {
  const pressTimer = useRef(null);
  const [isLongPress, setIsLongPress] = useState(false);
  const { text: textFilter, tags: tagFilters } = filters;
  const listToFilterLength = wordList.length;
  const headerCount = orderedListLength < listToFilterLength
    ? `(${orderedListLength}) ${listToFilterLength}` : orderedListLength;

  useEffect(() => {
    if (isLongPress) {
      copyToClipboard(JSON.stringify(wordList));
    }
  }, [isLongPress, wordList]);

  const handleMouseDown = () => {
    pressTimer.current = setTimeout(() => {
      setIsLongPress(true);
    }, 500);
  };

  const handleMouseUp = () => {
    clearTimeout(pressTimer.current);
    setIsLongPress(false);
  };

  const handleMouseLeave = () => {
    clearTimeout(pressTimer.current);
    setIsLongPress(false);
  };

  const handleSearchTextChange = ({ target: { value } }) => {
    handleFiltersChange({ text: value, tags: tagFilters });
  };

  const handleRemoveTagFilter = (tagToRemove) => {
    const updatedTags = tagFilters.filter((tag) => tag !== tagToRemove);
    handleFiltersChange({ text: textFilter, tags: updatedTags });
  };

  const handleKanaButtonClick = () => {
    handleToggleModal('hi');
  };

  const handleJishoNavigate = async () => {
    if (!filters || !filters.text) return;
    handleToggleModal('jishoMeanings');
  };

  const handleShowFiltersModal = () => handleToggleModal('filters');

  const handleKanaClick = (e) => {
    if (!filters.text) return;
    const kana = romajiToKana(filters.text, e.target.value);
    handleFiltersChange({ text: kana, tags: tagFilters });
  };

  return {
    textFilter,
    tagFilters,
    headerCount,
    handleKanaClick,
    handleJishoNavigate,
    handleSearchTextChange,
    handleKanaButtonClick,
    handleShowFiltersModal,
    handleRemoveTagFilter,
    handleMouseUp,
    handleMouseDown,
    handleMouseLeave,
  };
};

export default useMainListHeader;
