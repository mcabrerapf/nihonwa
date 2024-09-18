import { useEffect, useRef, useState } from 'react';
import { copyToClipboard, parseHtml, romajiToKana } from '../../../utils';

const useMainListHeader = ({
  filters,
  wordList,
  orderedListLength,
  setJishoData,
  handleFiltersChange,
  handleToggleModal,
}) => {
  const pressTimer = useRef(null);
  const [isLongPress, setIsLongPress] = useState(false);
  // const [selectedKana, setSelectedKana] = useState('hi');
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

  const handleKanaButtonClick = () => {
    handleToggleModal('hi');
  };

  const handleJishoNavigate = async () => {
    if (!filters || !filters.text) return;
    await fetch(`/api/jisho/search/${filters.text}`)
      .then((res) => res.text())
      .then((html) => {
        const parssedJishoData = parseHtml(html);
        setJishoData(parssedJishoData);
        handleToggleModal('jishoMeanings');
      })
      .catch((err) => console.log(err));
    // window.open(`https://jisho.org/search/${filters.text}`, '_blank');
  };

  const handleShowFiltersModal = () => handleToggleModal('filters');

  const handleKanaClick = (e) => {
    if (!filters.text) return;
    const kana = romajiToKana(filters.text, e.target.value);
    handleFiltersChange({ text: kana, tags });
  };

  return {
    textFilter: text,
    hasActiveFilters,
    headerText,
    headerCount,
    resetTextFilter,
    resetFilters,
    // selectedKana,
    handleKanaClick,
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
