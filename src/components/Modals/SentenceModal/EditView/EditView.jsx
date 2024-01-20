import React, { useState } from "react";
import "./EditView.scss";
import EditViewNotes from "./EditViewNotes";
import EditViewTypes from "./EditViewTypes";
import EditViewTags from "./EditViewTags";
import EditViewFooter from "./EditViewFooter";
import DisplayView from "../DisplayView";
import { initSentenceData } from "../helpers";
import { EDIT_STEP_HEADERS } from "./constants";
import EditViewSentence from "./EditViewSentence";
import EditViewMeaning from "./EditViewMeaning";

const EditView = ({ closeModal, sentenceData }) => {
  const [currentEditStep, setCurrentEditStep] = useState(0);
  const [currentData, setCurrentData] = useState(initSentenceData(sentenceData));
  const headerText = EDIT_STEP_HEADERS[currentEditStep];

  return (
    <div className="sentence-modal-edit-view">
      <div className="edit-view-header">{headerText}</div>
      <div className="edit-view-content">
        {currentEditStep === 0 && (
          <EditViewSentence
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 1 && (
          <EditViewMeaning
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 2 && (
          <EditViewNotes
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 3 && (
          <EditViewTypes
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
        {currentEditStep === 4 && (
          <EditViewTags
            currentData={currentData}
            setCurrentData={setCurrentData}
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
        closeModal={closeModal}
        setCurrentEditStep={setCurrentEditStep}
      />
    </div>
  );
};

export default EditView;
