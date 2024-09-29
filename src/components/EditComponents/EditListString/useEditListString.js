import { useEffect } from 'react';

function useEditListString({
  currentData,
  setCurrentData,
  listKey,
  currentEditStep,
  setCurrentEditStep,
}) {
  const { [listKey]: listValues } = currentData;
  const isMeaningsList = listKey === 'en';
  const isListEmpty = !listValues.filter(Boolean).length;

  useEffect(() => {
    if (!listValues.length) {
      setCurrentData({ ...currentData, [listKey]: [''] });
    } else {
      setCurrentData({ ...currentData, [listKey]: listValues });
    }
  }, [listKey]);

  const handleAddItem = () => {
    if (listValues.length > 0 && !listValues[listValues.length - 1]) return;
    const updatedListValues = [...listValues, ''];
    setCurrentData({ ...currentData, [listKey]: updatedListValues });
  };

  const handleDelete = (valueIndex) => {
    const updatedListValues = listValues.filter((_, i) => i !== valueIndex);
    setCurrentData({
      ...currentData,
      [listKey]: updatedListValues.filter(Boolean),
    });
  };

  const handleOnChange = (value, index) => {
    const updatedListValues = [...listValues];
    updatedListValues[index] = value;
    setCurrentData({ ...currentData, [listKey]: updatedListValues });
  };

  const handleGoToNotes = () => {
    setCurrentEditStep(currentEditStep + 1);
  };

  return {
    listValues,
    isMeaningsList,
    isListEmpty,
    handleAddItem,
    handleDelete,
    handleOnChange,
    handleGoToNotes,
  };
}

export default useEditListString;
