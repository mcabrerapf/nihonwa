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
  const [currentString, setCurrentString] = useState('');
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const isMeaningsList = listKey === 'en';
  const isLastItemEmpty = listValues[listValues.length - 1] !== '';
  const isListEmpty = !listValues.filter(Boolean).length;

  useEffect(() => {
    if (!listValues.length) {
      setCurrentData({ ...currentData, [listKey]: [''] });
      setSelectedItemIndex(0);
    } else {
      setCurrentData({ ...currentData, [listKey]: listValues });
      setSelectedItemIndex(listValues.length - 1);
    }

    // if (inputRef.current && !currentString && listKey === 'en') {
    //   inputRef.current.focus();
    // }
  }, [listKey, inputRef]);

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
    const updatedListValues = listValues.filter(Boolean);
    setCurrentData({ ...currentData, [listKey]: updatedListValues });
    setCurrentString(item);
    setSelectedItemIndex(i);
    if (inputRef.current) inputRef.current.focus();
  };

  const handleGoToNotes = () => {
    setCurrentEditStep(currentEditStep + 1);
  };

  const handleGoToTags = () => {
    setCurrentEditStep(currentEditStep + 2);
  };

  return {
    inputRef,
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
