import React, { useState } from "react";
import "./EditView.scss";
import {
  EditListString,
  EditSelectOptions,
  EditSentence,
} from "../../../EditComponents";
import EditViewFooter from "./EditViewFooter";
import DisplayView from "../DisplayView";
import { EDIT_STEP_HEADERS } from "./constants";
import { initSentenceData } from "../../../../utils";
import { TAGS, TYPES } from "../../../../constants";

const EditView = ({ closeModal, sentenceData, updateSentencesList }) => {
  const [currentEditStep, setCurrentEditStep] = useState(0);
  const [currentData, setCurrentData] = useState(
    initSentenceData(sentenceData)
  );
  const headerText = EDIT_STEP_HEADERS[currentEditStep];

  const handleSave = () => {
    updateSentencesList(currentData);
    closeModal();
  };

  return (
    <div className="sentence-modal-edit-view">
      <div className="edit-view-header">{headerText}</div>
      <div className="edit-view-content">
        {currentEditStep === 0 && (
          <EditSentence
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 1 && (
          <EditListString
            currentData={currentData}
            setCurrentData={setCurrentData}
            listKey={"en"}
          />
        )}
        {currentEditStep === 2 && (
          <EditListString
            currentData={currentData}
            setCurrentData={setCurrentData}
            listKey={"notes"}
          />
        )}
        {currentEditStep === 3 && (
          <EditSelectOptions
            currentData={currentData}
            setCurrentData={setCurrentData}
            optionKey={"types"}
            options={TYPES}
          />
        )}
        {currentEditStep === 4 && (
          <EditSelectOptions
            currentData={currentData}
            setCurrentData={setCurrentData}
            optionKey={"tags"}
            options={TAGS}
          />
        )}
        {currentEditStep === 5 && (
          <DisplayView
            isLastItem={true}
            isFirstItem={true}
            sentenceData={currentData}
            modalView={"edit"}
          />
        )}
      </div>
      <EditViewFooter
        currentEditStep={currentEditStep}
        currentData={currentData}
        handleSave={handleSave}
        setCurrentEditStep={setCurrentEditStep}
      />
    </div>
  );
};

export default EditView;
