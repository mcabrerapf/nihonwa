import { useEffect, useRef, useState } from 'react';
import { copyToClipboard, romajiToKana } from '../../../utils';
import { useMainContext } from '../../../contexts/MainContext';

const useMainListHeader = ({
  handleFiltersChange,
  handleToggleModal,
}) => {
  const { filters, wordList, orderedListLength } = useMainContext();
  const pressTimer = useRef(null);
  const [isLongPress, setIsLongPress] = useState(false);
  const { text: textFilter, tags: tagFilters } = filters;

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

  const handleJishoNavigate = async () => {
    if (!filters || !filters.text) return;
    handleToggleModal('jishoMeaningsModal');
  };

  const handleKanaButtonClick = () => handleToggleModal('kanaModal');

  const handleKanjiButtonClick = () => handleToggleModal('kanjiModal');

  const handleShowFiltersModal = () => handleToggleModal('filtersModal');

  const handleKanaClick = (e) => {
    if (!filters.text) return;
    const kana = romajiToKana(filters.text, e.target.value);
    handleFiltersChange({ text: kana, tags: tagFilters });
  };

  return {
    textFilter,
    tagFilters,
    orderedListLength,
    handleKanaClick,
    handleJishoNavigate,
    handleSearchTextChange,
    handleKanaButtonClick,
    handleKanjiButtonClick,
    handleShowFiltersModal,
    handleRemoveTagFilter,
    handleMouseUp,
    handleMouseDown,
    handleMouseLeave,
  };
};

export default useMainListHeader;
