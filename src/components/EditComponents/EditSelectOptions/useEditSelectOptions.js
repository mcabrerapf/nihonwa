function useEditSelectOptions({
  currentData = {},
  optionKey = '',
  options = [],
  setCurrentData = () => {},
}) {
  const { [optionKey]: selectedOptions } = currentData;

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
