import { useEffect, useRef, useState } from 'react';
import { copyToClipboard } from '../../../utils';

const useMainListHeader = ({
  filters,
  wordList,
  orderedListLength,
  handleFiltersChange,
  handleToggleModal,
}) => {
  const pressTimer = useRef(null);
  const [isLongPress, setIsLongPress] = useState(false);
  const { text, tags } = filters;
  const hasActiveFilters = !!tags.length;
  const headerText = '語句';
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
    handleFiltersChange({ text: value, tags });
  };

  const resetFilters = () => {
    handleFiltersChange({ text: '', tags: [] });
  };
  const resetTextFilter = () => {
    handleFiltersChange({ text: '', tags: filters.tags });
  };

  const handleKanaButtonClick = (selectedKana) => {
    handleToggleModal(selectedKana);
  };

  const handleJishoNavigate = () => {
    if (!filters || !filters.text) return;
    window.open(`https://jisho.org/search/${filters.text}`, '_blank');
  };

  const handleShowFiltersModal = () => handleToggleModal('filters');

  return {
    textFilter: text,
    hasActiveFilters,
    headerText,
    headerCount,
    resetTextFilter,
    resetFilters,
    handleJishoNavigate,
    handleSearchTextChange,
    handleKanaButtonClick,
    handleShowFiltersModal,
    handleMouseUp,
    handleMouseDown,
    handleMouseLeave,
  };
};

export default useMainListHeader;
