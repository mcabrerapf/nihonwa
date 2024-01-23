import React, { useEffect, useState } from "react";
import "./EditView.scss";
import EditViewFooter from "./EditViewFooter";
import { getEditStepHeaderText, renderEditStepComponent } from "./helpers";
import Button from "../../../Button";
import { deepCompare } from "../../../../utils";

const EditView = ({
  listItemData,
  listItemType,
  allWords,
  allSentences,
  updateListService,
  closeModal,
}) => {
  const [currentEditStep, setCurrentEditStep] = useState(0);
  const [currentData, setCurrentData] = useState(listItemData);
  const [itemAlreadyExists, setItemAlreadyExists] = useState("");

  const handleSave = () => {
    // TODO enable after updating all types
    // if (deepCompare(listItemData, currentData)) return closeModal();
    updateListService(currentData);
    closeModal();
  };
  const word = currentData.jpWords
    ? currentData.jpWords.join("")
    : currentData.jp;
  const headerText = getEditStepHeaderText(listItemType, currentEditStep, word);

  const editStepComponentProps = {
    listItemData: currentData,
    listItemType,
    itemAlreadyExists,
    isFirstItem: true,
    isLastItem: true,
    modalView: "edit",
    setModalView: () => {},
    handleListItemChange: () => {},
    currentData,
    setCurrentData,
    setCurrentEditStep,
    allSentences,
    allWords,
  };

  useEffect(() => {
    if (!word) setItemAlreadyExists(false);
    const listToCheck = listItemType === "word" ? allWords : allSentences;
    const alreadyExists = !!listToCheck.find((itemToCheck) => {
      if (itemToCheck.id === currentData.id) return false;
      if (listItemType === "word") return itemToCheck.jp === word;
      else return itemToCheck.jpWords[0] === word;
    });
    setItemAlreadyExists(alreadyExists);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  return (
    <div className="list-item-modal-edit-view">
      <div className="edit-view-header">
        <span>{headerText}</span>
        <Button className="edit-view-header-close-button" onClick={closeModal}>
          x
        </Button>
      </div>
      <div className="edit-view-content">
        {renderEditStepComponent(
          listItemType,
          currentEditStep,
          editStepComponentProps
        )}
      </div>
      <EditViewFooter
        listItemType={listItemType}
        itemAlreadyExists={itemAlreadyExists}
        currentData={currentData}
        currentEditStep={currentEditStep}
        setCurrentData={setCurrentData}
        setCurrentEditStep={setCurrentEditStep}
        handleSave={handleSave}
      />
    </div>
  );
};

export default EditView;
