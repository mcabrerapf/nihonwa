import React, { useState } from "react";
import "./DisplayView.scss";
import { getWordSentences } from "../../../../utils";
import DisplayViewHeader from "./DisplayViewHeader";
import DisplayViewGeneral from "./DisplayViewGeneral";
import DisplayViewSentences from "./DisplayViewSentences";
import DisplayViewNotes from "./DisplayViewNotes";
import DisplayViewFooter from "./DisplayViewFooter";

const DisplayView = ({
  listItemData,
  listItemType,
  isFirstItem,
  isLastItem,
  allSentences,
  handleListItemChange,
}) => {
  const [view, setView] = useState("general");
  const { jp, jpWords, furi, en, tags, notes } = listItemData;
  const wordSentences = getWordSentences(jp, allSentences);
  const hasSentences = wordSentences && wordSentences.length;
  const hasNotes = notes && !!notes.length;
  const headerText = jp || jpWords.join("");

  const handleListItemChangeReset = (forward) => {
    setView("general");
    handleListItemChange(forward);
  };

  return (
    <div className="list-item-modal-display-view">
      <DisplayViewHeader text={headerText} furi={furi} />
      <div className="list-item-modal-content">
        {view === "general" && (
          <DisplayViewGeneral tags={tags} en={en} />
        )}
        {view === "sentences" && (
          <DisplayViewSentences jpWord={jp} wordSentences={wordSentences} />
        )}
        {view === "notes" && <DisplayViewNotes notes={notes} />}
      </div>
      <DisplayViewFooter
        listItemType={listItemType}
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        hasNotes={hasNotes}
        hasSentences={hasSentences}
        handleListItemChangeReset={handleListItemChangeReset}
        setView={setView}
      />
    </div>
  );
};

export default DisplayView;
