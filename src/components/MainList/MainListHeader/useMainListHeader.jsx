import { useEffect, useRef, useState } from 'react';
import { copyToClipboard } from '../../../utils';

const useMainListHeader = ({
  isWordsList,
  filters,
  listToFilter,
  filteredListLength,
  handleFiltersChange,
  handleSearchTextChange,
  setShowKanaModal,
  setShowSortModal,
  setShowFiltersModal,
}) => {
  const pressTimer = useRef(null);
  const [isLongPress, setIsLongPress] = useState(false);
  const { text, tags } = filters;
  const hasActiveFilters = !!tags.length;
  const headerText = isWordsList ? '言葉' : '文';
  const listToFilterLength = listToFilter.length;
  const headerCount = filteredListLength < listToFilterLength
    ? `(${filteredListLength}) ${listToFilterLength}` : filteredListLength;

  useEffect(() => {
    if (isLongPress) {
      console.log('COPIED CURRENT LIST');
      copyToClipboard(JSON.stringify(listToFilter));
    }
  }, [isLongPress, listToFilter]);

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

  const handleTextSearchReset = () => {
    handleFiltersChange({ text: '', tags });
  };

  const handleTagsReset = () => {
    handleFiltersChange({ text, tags: [] });
  };

  const handleKanaButtonClick = (selectedKana) => {
    setShowKanaModal(selectedKana);
  };

  const handleShowSortModal = () => setShowSortModal(true);

  const handleShowFiltersModal = () => setShowFiltersModal(true);

  return {
    hasActiveFilters,
    headerText,
    headerCount,
    textFilter: text,
    handleTagsReset,
    handleTextSearchReset,
    handleSearchTextChange,
    handleShowSortModal,
    handleShowFiltersModal,
    handleKanaButtonClick,
    handleMouseUp,
    handleMouseDown,
    handleMouseLeave,
  };
};

export default useMainListHeader;
