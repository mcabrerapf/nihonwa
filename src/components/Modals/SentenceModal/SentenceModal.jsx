import React, { useState } from "react";
import "./SentenceModal.scss";
import ModalWrapper from "../../ModalWrapper";
import DisplayView from "./DisplayView";
import EditView from "./EditView";
import Button from "../../Button";
import { deleteSentence } from "../../../Services";

const SentenceModal = ({
  closeModal,
  sentenceIndex,
  sentences,
  wordsList,
  updateSentencesList,
}) => {
  const isNewItem = sentenceIndex === -1;
  const [selectedSentenceIndex, setSelectedSentenceIndex] =
    useState(sentenceIndex);
  const [canDelete, setCanDelete] = useState(true);
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

  const handleDelete = async () => {
    setCanDelete(false);
    await deleteSentence(currentSentence);
    updateSentencesList();
    closeModal();
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="sentence-modal">
        {modalView === "delete" && (
          <div className="sentence-modal-delete-view">
            <Button isDisabled={!canDelete} onClick={handleDelete}>
              D
            </Button>
          </div>
        )}
        {modalView === "display" && (
          <>
            <div className="sentence-actions-buttons">
              <Button
                isDisabled={!canDelete}
                onClick={() => setModalView("delete")}
              >
                D
              </Button>
              <Button onClick={() => setModalView("edit")}>E</Button>
            </div>
            <DisplayView
              sentenceData={currentSentence}
              modalView={modalView}
              setModalView={setModalView}
              isFirstItem={isFirstItem}
              isLastItem={isLastItem}
              handleSentenceChange={handleSentenceChange}
            />
          </>
        )}
        {modalView === "edit" && (
          <EditView
            sentenceData={currentSentence}
            closeModal={closeModal}
            updateSentencesList={updateSentencesList}
            wordsList={wordsList}
          />
        )}
      </div>
    </ModalWrapper>
  );
};

export default SentenceModal;
