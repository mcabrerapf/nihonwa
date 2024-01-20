import React, { useState } from "react";
import "./EditView.scss";
import EditViewFooter from "./EditViewFooter";
import EditViewWord from "./EditViewWord";
import EditViewMeanings from "./EditViewMeanings";
import EditViewFuri from "./EditViewFuri";
import EditViewNotes from "./EditViewNotes";
import EditViewTypes from "./EditViewTypes";
import EditViewTags from "./EditViewTags";
import { initWordData } from "../helpers";
import DisplayView from "../DisplayView/DisplayView";
import { EDIT_STEP_HEADERS } from "./constants";

const EditView = ({ closeModal, wordData }) => {
  const [currentEditStep, setCurrentEditStep] = useState(0);
  const [currentData, setCurrentData] = useState(initWordData(wordData));
  const headerText = EDIT_STEP_HEADERS[currentEditStep];

  return (
    <div className="word-modal-edit-view">
      <div className="edit-view-header">{headerText}</div>
      <div className="edit-view-content">
        {currentEditStep === 0 && (
          <EditViewWord
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 1 && (
          <EditViewFuri
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 2 && (
          <EditViewMeanings
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 3 && (
          <EditViewNotes
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 4 && (
          <EditViewTypes
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 5 && (
          <EditViewTags
            currentData={currentData}
            setCurrentData={setCurrentData}
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
        closeModal={closeModal}
        setCurrentEditStep={setCurrentEditStep}
      />
    </div>
  );
};

export default EditView;
