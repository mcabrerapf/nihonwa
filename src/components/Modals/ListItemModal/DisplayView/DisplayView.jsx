import React, { useEffect, useState } from "react";
import "./DisplayView.scss";
import { getWordSentences } from "../../../../utils";
import DisplayViewHeader from "./DisplayViewHeader";
import DisplayViewGeneral from "./DisplayViewGeneral";
import DisplayViewSentences from "./DisplayViewSentences";
import DisplayViewNotes from "./DisplayViewNotes";
import DisplayViewFooter from "./DisplayViewFooter";
import getKanjiFromString from "../../../../utils/getKanjiFromString";
import DisplayViewKanji from "./DisplayViewKanji";

const DisplayView = ({
  listItemData,
  listItemType,
  isFirstItem,
  isLastItem,
  allSentences,
  handleListItemChange,
}) => {
  const [view, setView] = useState("general");
  const { jp, furi, en, tags, notes } = listItemData;
  const wordSentences =
    listItemType === "word" ? getWordSentences(jp, allSentences) : [];
  const hasSentences = wordSentences && wordSentences.length;
  const hasNotes = notes && !!notes.length;
  const kanjis = getKanjiFromString(jp);
  const hasKanji = !!kanjis;

  useEffect(() => {
    setView("general");
  }, [listItemData]);

  return (
    <div className="list-item-modal-display-view">
      <DisplayViewHeader text={jp} furi={furi} />
      <div className="list-item-modal-content">
        {view === "general" && <DisplayViewGeneral tags={tags} en={en} />}
        {view === "sentences" && (
          <DisplayViewSentences jpWord={jp} wordSentences={wordSentences} />
        )}
        {view === "notes" && <DisplayViewNotes notes={notes} />}
        {view === "kanji" && <DisplayViewKanji kanjis={kanjis} />}
      </div>
      <DisplayViewFooter
        listItemType={listItemType}
        hasKanji={hasKanji}
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        hasNotes={hasNotes}
        hasSentences={hasSentences}
        handleListItemChange={handleListItemChange}
        setView={setView}
      />
    </div>
  );
};

export default DisplayView;
