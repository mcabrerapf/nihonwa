import React, { useState } from "react";
import "./WordModal.scss";
import ModalWrapper from "../../ModalWrapper";
import DisplayView from "./DisplayView";
import EditView from "./EditView";
import WORDS from "../../../constants";
import Button from "../../Button";
import { deleteWord } from "../../../Services";

const WordModal = ({ closeModal, wordIndex, words, updateWordsList }) => {
  const isNewItem = wordIndex === -1;
  const [selectedWordIndex, setSelectedWordIndex] = useState(wordIndex);
  const [canDelete, setCanDelete] = useState(true);
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

  const handleDelete = async () => {
    setCanDelete(false);
    await deleteWord(wordData);
    updateWordsList();
    closeModal();
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="word-modal">
        {modalView === "delete" && (
          <div className="word-modal-delete-view">
            <Button isDisabled={!canDelete} onClick={handleDelete}>
              D
            </Button>
          </div>
        )}
        {modalView === "display" && (
          <>
            <div className="word-actions-buttons">
              <Button
                isDisabled={!canDelete}
                onClick={() => setModalView("delete")}
              >
                D
              </Button>
              <Button onClick={() => setModalView("edit")}>E</Button>
            </div>
            <DisplayView
              isLastItem={isLastItem}
              isFirstItem={isFirstItem}
              wordData={wordData}
              modalView={modalView}
              setModalView={setModalView}
              handleWordChange={handleWordChange}
            />
          </>
        )}
        {modalView === "edit" && (
          <EditView
            isLastItem={isLastItem}
            isFirstItem={isFirstItem}
            wordData={wordData}
            closeModal={closeModal}
            handleWordChange={handleWordChange}
            updateWordsList={updateWordsList}
          />
        )}
      </div>
    </ModalWrapper>
  );
};

export default WordModal;
