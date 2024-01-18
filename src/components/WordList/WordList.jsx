import React, { useState } from "react";
import "./WordList.css";
import WORDS from "../../constants";
import WordModal from "./WordModal";
import KanaModal from "./KanaModal";


const WordList = () => {
  const [showWordModal, setShowWordModal] = useState(false);
  const [showKanaModal, setShowKanaModal] = useState(null);
  const [wordData, setWordData] = useState(null);

  const handleOpenWordModal = (word) => {
    setWordData(word);
    setShowWordModal(true);
  };

  const handleCloseWordModal = () => {
    setShowWordModal(false);
    setWordData(null);
  };

  return (
    <div className="word-list-container">
      {showWordModal && (
        <WordModal closeModal={handleCloseWordModal} wordData={wordData} />
      )}
       {showKanaModal && (
        <KanaModal closeModal={()=>setShowKanaModal(null)} kanaMode={showKanaModal} />
      )}
      <div className="word-list-header">
        <span>言葉</span>
        <div className="word-list-header-buttons">
            <button onClick={()=> setShowKanaModal('hi')}>か</button>
            <button onClick={()=> setShowKanaModal('ka')}>カ</button>
        </div>
      </div>
      <ul className="word-list">
        {WORDS.map((word) => {
          const { kanji, kana } = word;
          return (
            <li
              key={word.kana}
              className="word-list-item"
              onClick={() => handleOpenWordModal(word)}
            >
              <span>{kanji || kana}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WordList;
