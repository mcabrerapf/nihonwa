import { useEffect, useRef, useState } from 'react';

function useEditListString({
  currentData,
  setCurrentData,
  listKey,
  currentEditStep,
  setCurrentEditStep,
}) {
  const { [listKey]: listValues } = currentData;
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const [currentString, setCurrentString] = useState('');
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const isMeaningsList = listKey === 'en';
  const isLastItemEmpty = listValues[listValues.length - 1] !== '';
  const isListEmpty = !listValues.filter(Boolean).length;

  useEffect(() => {
    if (!listValues.length) {
      setCurrentData({ ...currentData, [listKey]: [''] });
      setSelectedItemIndex(0);
      setCurrentString('');
    } else {
      setCurrentData({ ...currentData, [listKey]: listValues });
      setCurrentString(listValues[listValues.length - 1]);
      setSelectedItemIndex(listValues.length - 1);
    }
    if (inputRef.current) inputRef.current.focus();
  }, [listKey]);

  const handleUpdateItem = () => {
    if (!currentString) return;
    const updatedListValues = [...listValues, ''];
    updatedListValues[selectedItemIndex] = currentString;
    setCurrentData({ ...currentData, [listKey]: updatedListValues });
    setSelectedItemIndex(updatedListValues.length - 1);
    setCurrentString('');
  };

  const handleAddItem = () => {
    const updatedListValues = [...listValues, ''];
    setCurrentData({ ...currentData, [listKey]: updatedListValues });
    setSelectedItemIndex(updatedListValues.length - 1);
    setCurrentString('');
    if (inputRef.current) inputRef.current.focus();
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleDelete = (valueIndex) => {
    const updatedListValues = listValues.filter((_, i) => i !== valueIndex);
    setCurrentData({
      ...currentData,
      [listKey]: updatedListValues.filter(Boolean),
    });
  };

  const handleOnChange = ({ target: { value } }) => {
    setCurrentString(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleUpdateItem();
  };

  const handleItemClick = (i, item) => {
    if (inputRef.current) inputRef.current.focus();
    if (selectedItemIndex === i) return;
    const updatedListValues = listValues.filter(Boolean);
    setCurrentData({ ...currentData, [listKey]: updatedListValues });
    setCurrentString(item);
    setSelectedItemIndex(i);
  };

  const handleGoToNotes = () => {
    setCurrentEditStep(currentEditStep + 1);
  };

  const handleGoToTags = () => {
    setCurrentEditStep(currentEditStep + 2);
  };

  return {
    inputRef,
    listRef,
    currentString,
    listValues,
    selectedItemIndex,
    isLastItemEmpty,
    isMeaningsList,
    isListEmpty,
    handleAddItem,
    handleUpdateItem,
    handleDelete,
    handleOnChange,
    handleOnSubmit,
    handleItemClick,
    handleGoToNotes,
    handleGoToTags,
  };
}

export default useEditListString;
