import React, { useState, useRef } from "react";
import "./EditListString.scss";
import Button from "../../Button";

const EditListString = ({ currentData, setCurrentData, listKey }) => {
  const inputRef = useRef(null);
  const [currentString, setCurrentString] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { [listKey]: listValues } = currentData;
  const hasLastItemEmpty = listValues[listValues.length - 1];
  const hasOnlyOneItem = listValues.length <= 1;
  
  const handleUpdateItem = () => {
    if (!currentString) return;
    const updatedListValues = [...listValues, ''];
    updatedListValues[selectedItemIndex] = currentString;
    setCurrentData({ ...currentData, [listKey]: updatedListValues });
    setSelectedItemIndex(updatedListValues.length - 1);
    setCurrentString("");
  };

  const handleAddItem = () => {
    const updatedListValues = [...listValues, ""];
    setCurrentData({ ...currentData, [listKey]: updatedListValues });
    setSelectedItemIndex(updatedListValues.length - 1);
    if (inputRef.current) inputRef.current.focus();
  };

  const handleDelete = (valueIndex) => {
    const updatedListValues = listValues.filter((_, i) => i !== valueIndex);
    setCurrentData({ ...currentData, [listKey]: updatedListValues });
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
                  isDisabled={hasOnlyOneItem}
                  onClick={() => handleDelete(i)}
                >
                  X
                </Button>
     
              <Button
                modifier={`${isItemSelected ? "" : " ghost"}`}
                onClick={() => handleItemClick(i, value)}
              >
                {value}
              </Button>
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
          onBlur={() => {
            if(hasOnlyOneItem) return;
            const updatedListValues = listValues.filter(Boolean);
            setCurrentData({ ...currentData, [listKey]: updatedListValues });
          }}
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
