import React, { useState } from "react";
import "./EditView.scss";
import {
  EditWord,
  EditWordFuri,
  EditListString,
  EditSelectOptions,
} from "../../../EditComponents";
import EditViewFooter from "./EditViewFooter";
import DisplayView from "../DisplayView/DisplayView";
import { EDIT_STEP_HEADERS } from "./constants";
import { initWordData } from "../../../../utils";
import { TAGS, TYPES } from "../../../../constants";

const EditView = ({ closeModal, wordData, updateWordsList }) => {
  const [currentEditStep, setCurrentEditStep] = useState(0);
  const [currentData, setCurrentData] = useState(initWordData(wordData));
  const headerText = EDIT_STEP_HEADERS[currentEditStep];

  const handleSave = () => {
    updateWordsList(currentData);
    closeModal();
  };

  return (
    <div className="word-modal-edit-view">
      <div className="edit-view-header">{headerText}</div>
      <div className="edit-view-content">
        {currentEditStep === 0 && (
          <EditWord currentData={currentData} setCurrentData={setCurrentData} />
        )}
        {currentEditStep === 1 && (
          <EditWordFuri
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 2 && (
          <EditListString
            currentData={currentData}
            setCurrentData={setCurrentData}
            listKey={"en"}
          />
        )}
        {currentEditStep === 3 && (
          <EditListString
            currentData={currentData}
            setCurrentData={setCurrentData}
            listKey={"notes"}
          />
        )}
        {currentEditStep === 4 && (
          <EditSelectOptions
            currentData={currentData}
            setCurrentData={setCurrentData}
            optionKey={"types"}
            options={TYPES}
          />
        )}
        {currentEditStep === 5 && (
          <EditSelectOptions
            currentData={currentData}
            setCurrentData={setCurrentData}
            optionKey={"tags"}
            options={TAGS}
          />
        )}
        {currentEditStep === 6 && (
          <DisplayView
            isLastItem={true}
            isFirstItem={true}
            wordData={currentData}
            modalView={"edit"}
            handleWordChange={() => {}}
          />
        )}
      </div>
      <EditViewFooter
        currentEditStep={currentEditStep}
        currentData={currentData}
        setCurrentData={setCurrentData}
        handleSave={handleSave}
        setCurrentEditStep={setCurrentEditStep}
      />
    </div>
  );
};

export default EditView;
