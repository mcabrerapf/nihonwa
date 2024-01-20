import React, { useState } from "react";
import "./WordModal.scss";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import WORDS from "../../../constants";
import DisplayView from "./DisplayView/DisplayView";
import EditView from "./EditView";

const WordModal = ({ closeModal, wordIndex, words }) => {
  const isNewItem = wordIndex === -1;
  const [selectedWordIndex, setSelectedWordIndex] = useState(wordIndex);
  const [modalView, setModalView] = useState(isNewItem ? "edit" : "display");
  const listToUse = words || WORDS || [];
  const listLength = listToUse.length;
  const wordData = listToUse[selectedWordIndex] || {};
  const isLastItem = selectedWordIndex + 1 >= listLength;
  const isFirstItem = selectedWordIndex <= 0;

  const handleWordChange = (next) => {
    if (next && !isLastItem) {
      setSelectedWordIndex(selectedWordIndex + 1);
      setModalView("display");
    }
    if (!next && !isFirstItem) {
      setSelectedWordIndex(selectedWordIndex - 1);
      setModalView("display");
    }
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="word-modal">
        {modalView === "display" && (
          <DisplayView
            isLastItem={isLastItem}
            isFirstItem={isFirstItem}
            wordData={wordData}
            modalView={modalView}
            setModalView={setModalView}
            handleWordChange={handleWordChange}
          />
        )}
        {modalView === "edit" && (
          <EditView
            isLastItem={isLastItem}
            isFirstItem={isFirstItem}
            wordData={wordData}
            closeModal={closeModal}
            handleWordChange={handleWordChange}
          />
        )}
      </div>
    </ModalWrapper>
  );
};

export default WordModal;
