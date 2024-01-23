import React, { useState } from "react";
import "./KanaModal.scss";
import ModalWrapper from "../../ModalWrapper";
import Button from "../../Button";
import { HIRAGANA, KATAKANA } from "../../../constants";
import { copyToClipboard } from "../../../utils";

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
  const mainKana = kanaToUse[0];

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
                    <Button
                      key={`${kana}-${i}`}
                      modifier="ghost"
                      onClick={() => copyToClipboard(kana)}
                    >
                      {kana}
                    </Button>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="kana-modal-footer">
          <Button onClick={handleKanaToggle}>{kanaModalButtonText}</Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default KanaModal;
