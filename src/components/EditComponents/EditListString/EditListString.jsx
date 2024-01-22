import React, { useState, useEffect, useRef } from "react";
import "./EditListString.scss";
import Button from "../../Button";

const EditListString = ({ currentData, setCurrentData, listKey }) => {
  const inputRef = useRef(null);
  const [currentString, setCurrentString] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { [listKey]: listValues } = currentData;
  const hasLastItemEmpty = listValues[listValues.length - 1] !==  '';

  useEffect(() => {
    if (!listValues.length) {
      setCurrentData({ ...currentData, [listKey]: [""] });
      setSelectedItemIndex(0);
    } else {
      const updatedListValues = [...listValues, ""];
      setCurrentData({ ...currentData, [listKey]: updatedListValues });
      setSelectedItemIndex(updatedListValues.length - 1);
    }
    setCurrentString("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listKey]);

  const handleUpdateItem = () => {
    if (!currentString) return;
    const updatedListValues = [...listValues, ""];
    updatedListValues[selectedItemIndex] = currentString;
    setCurrentData({ ...currentData, [listKey]: updatedListValues });
    setSelectedItemIndex(updatedListValues.length - 1);
    setCurrentString("");
  };

  const handleAddItem = () => {
    const updatedListValues = [...listValues, ""];
    setCurrentData({ ...currentData, [listKey]: updatedListValues });
    setSelectedItemIndex(updatedListValues.length - 1);
    setCurrentString("");
    if (inputRef.current) inputRef.current.focus();
  };

  const handleDelete = (valueIndex) => {
    const updatedListValues = listValues.filter((_, i) => i !== valueIndex);
    setCurrentData({
      ...currentData,
      [listKey]: updatedListValues.filter(Boolean),
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleUpdateItem();
    }
  };

  const handleItemClick = (i, item) => {
    if (!item) return;
    const updatedListValues = listValues.filter(Boolean);
    setCurrentData({ ...currentData, [listKey]: updatedListValues });
    setCurrentString(item);
    setSelectedItemIndex(i);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="edit-list-string">
      <div className="edit-list-string-display">
        {listValues.map((value, i) => {
          const isItemSelected = i === selectedItemIndex;

          return (
            <div key={`${value}-${i}`} className="edit-list-string-item">
              <Button
                modifier="delete-item-button"
                onClick={() => handleDelete(i)}
              >
                X
              </Button>

              <span
                className={`${isItemSelected ? "selected-item" : ""}`}
                onClick={() => handleItemClick(i, value)}
              >
                {value}
              </span>
            </div>
          );
        })}
        <div>
          {hasLastItemEmpty && <button onClick={handleAddItem}>+</button>}
        </div>
      </div>
      <div className="edit-list-string-input">
        <input
          ref={inputRef}
          onChange={(e) => setCurrentString(e.target.value)}
          onKeyDown={handleKeyPress}
          value={currentString}
        />
        <div className="edit-list-string-input-buttons">
          <Button
            isDisabled={!currentString}
            onClick={() => handleUpdateItem()}
          >
            O
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditListString;
