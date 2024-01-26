function useEditSelectOptions({
  currentData,
  setCurrentData,
  optionKey,
  options,
}) {
  const { [optionKey]: selectedOptions } = currentData;

  const handleOptionChange = ({ target: { value } }) => {
    const isSelected = !!selectedOptions.find((slectedOption) => slectedOption === value);
    const updatedSelectedOptionns = isSelected
      ? selectedOptions.filter((selectedOption) => selectedOption !== value)
      : [...selectedOptions, value];
    setCurrentData({ ...currentData, [optionKey]: updatedSelectedOptionns });
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
