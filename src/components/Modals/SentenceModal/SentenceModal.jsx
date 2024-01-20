import React, { useState } from "react";
import "./SentenceModal.scss";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import DisplayView from "./DisplayView";
import EditView from "./EditView";

const SentenceModal = ({ closeModal, sentenceIndex, sentences }) => {
  const isNewItem = sentenceIndex === -1;
  const [selectedSentenceIndex, setSelectedSentenceIndex] =
    useState(sentenceIndex);
  const [modalView, setModalView] = useState(isNewItem ? "edit" : "display");
  const currentSentence = sentences[selectedSentenceIndex];
  const isLastItem = selectedSentenceIndex + 1 >= sentences.length;
  const isFirstItem = selectedSentenceIndex <= 0;

  const handleSentenceChange = (next) => {
    if (next && !isLastItem) {
      setSelectedSentenceIndex(selectedSentenceIndex + 1);
      setModalView("display");
    }
    if (!next && !isFirstItem) {
      setSelectedSentenceIndex(selectedSentenceIndex - 1);
      setModalView("display");
    }
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="sentence-modal">
        {/* <div className="kana-modal-header">
          <span>{header}</span>
        </div> */}
        {modalView === "display" && (
          <DisplayView
            sentenceData={currentSentence}
            modalView={modalView}
            setModalView={setModalView}
            isFirstItem={isFirstItem}
            isLastItem={isLastItem}
            handleSentenceChange={handleSentenceChange}
          />
        )}
        {modalView === "edit" && (
          <EditView sentenceData={currentSentence} closeModal={closeModal} />
        )}
        {/* <div className="kana-modal-footer">
          <button onClick={handleKanaToggle}>{kanaModalButtonText}</button>
        </div> */}
      </div>
    </ModalWrapper>
  );
};

export default SentenceModal;
