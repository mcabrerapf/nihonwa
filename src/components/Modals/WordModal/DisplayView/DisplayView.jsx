import React, { useState } from "react";
import "./DisplayView.scss";
import { getWordSentences } from "../../../../utils";
import WordModalHeader from "./WordModalHeader";
import WordModalSentences from "./WordModalSentences";
import WordModalFooter from "./WordModalFooter";
import WordModalNotes from "./WordModalNotes";
import WordModalGeneral from "./WordModalGeneral";

const DisplayView = ({
  isLastItem,
  isFirstItem,
  wordData,
  modalView,
  setModalView,
  handleWordChange,
}) => {
  const [view, setView] = useState("general");
  const { jp, furi, en, tags, types, notes } = wordData;
  const wordSentences = getWordSentences(jp);
  const hasSentences = wordSentences && wordSentences.length;
  const hasNotes = notes && !!notes.length;

  const handleWordChangeReset = (forward) => {
    setView("general");
    handleWordChange(forward);
  };

  return (
    <div className="word-modal-display-view">
      <WordModalHeader
        text={jp}
        furi={furi}
      />
      <div className="word-modal-content">
        {view === "general" && (
          <WordModalGeneral tags={tags} types={types} en={en} />
        )}
        {view === "sentences" && (
          <WordModalSentences jpWord={jp} wordSentences={wordSentences} />
        )}
        {view === "notes" && <WordModalNotes notes={notes} />}
      </div>
      <WordModalFooter
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        hasNotes={hasNotes}
        hasSentences={hasSentences}
        modalView={modalView}
        handleWordChange={handleWordChangeReset}
        setView={setView}
        setModalView={setModalView}
      />
    </div>
  );
};

export default DisplayView;
