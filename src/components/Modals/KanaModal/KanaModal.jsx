import React, { useState } from "react";
import "./KanaModal.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import { HIRAGANA, KATAKANA } from "../../../constants";

const KanaModal = ({ closeModal, kanaMode }) => {
  const [view, setView] = useState(kanaMode || "hi");
  const isInHiraganaMode = view === "hi";
  const header = isInHiraganaMode ? "ひらがな" : "カタカナ";
  const kanaModalButtonText = isInHiraganaMode ? "カ" : "が";

  const handleKanaToggle = () => {
    if (view === "ka") setView("hi");
    else setView("ka");
  };
  const kanaToUse = isInHiraganaMode ? HIRAGANA : KATAKANA;
  const mainKana = kanaToUse[0]

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="kana-modal">
        <div className="kana-modal-header">
          <span>{header}</span>
        </div>
        <div className="kana-modal-content">
          <div className="kana-group">
            {mainKana.map((kanas, i) => {
              return (
                <div key={i} className="kana-list">
                  {kanas.map((kana, i) => (
                    <span key={`${kana}-${i}`}>{kana}</span>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="kana-modal-footer">
          <button onClick={handleKanaToggle}>{kanaModalButtonText}</button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default KanaModal;
