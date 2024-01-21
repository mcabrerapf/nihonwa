import React, { useState } from "react";
import "./EditView.scss";
import {
  EditWord,
  EditWordFuri,
  EditMeanings,
  EditNotes,
  EditTags,
  EditTypes,
} from "../../../EditComponents";
import EditViewFooter from "./EditViewFooter";
import DisplayView from "../DisplayView/DisplayView";
import { EDIT_STEP_HEADERS } from "./constants";
import { initWordData } from "../../../../utils";

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
          <EditMeanings
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 3 && (
          <EditNotes
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 4 && (
          <EditTypes
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 5 && (
          <EditTags currentData={currentData} setCurrentData={setCurrentData} />
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
        handleSave={handleSave}
        setCurrentEditStep={setCurrentEditStep}
      />
    </div>
  );
};

export default EditView;
