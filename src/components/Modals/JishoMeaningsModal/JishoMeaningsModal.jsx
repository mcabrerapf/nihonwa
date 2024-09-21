import React, { useEffect, useState } from 'react';
import './JishoMeaningsModal.scss';
import Loading from '../../Loading';
import Button from '../../Button';

function JishoMeaningsModal({
  filters,
  handleToggleModal,
  setJishoWord,
  setSelectedItemIndex,
}) {
  const [jishoData, setJishoData] = useState(null);
  const [selectedWord, setSelectedWord] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchData(term) {
      await fetch(`https://afternoon-gorge-77049-a1de8dd15ce4.herokuapp.com/jisho/word/${term.toLocaleLowerCase()}`)
        .then((res) => res.json())
        .then((json) => {
          setErrorMessage(null);
          setJishoData(json);
        })
        .catch((err) => setErrorMessage(err));
    }
    if (filters && filters.text) fetchData(filters.text);
  }, []);

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  const handleConfirmClick = () => {
    const en = selectedWord.meanings.map((meaning) => meaning[1]);

    const parsedWord = {
      jp: selectedWord.jp,
      furi: selectedWord.furi,
      en,
    };

    setJishoWord(parsedWord);
    setSelectedItemIndex(-1);
    handleToggleModal('listItem');
  };

  return (
    <div className="jisho-meanings-modal">
      <div className="jisho-meanings-modal__content">
        {!jishoData && <div className="jisho-meanings-modal__content__loading"><Loading /></div>}
        {!!errorMessage && (
          <div className="jisho-meanings-modal__content__error">
            {errorMessage}
          </div>
        )}
        {!!jishoData && !errorMessage && jishoData.map((data) => (
          <div
            key={data.id}
            className={`jisho-meanings-modal__content__word${selectedWord.id === data.id ? ' selected' : ''}`}
            role="button"
            onClick={() => handleWordClick(data)}
          >
            <span className="jisho-meanings-modal__content__word__jp">
              {data.jp.split('').map((char, index) => (
                <div className="jisho-meanings-modal__content__word__jp__char">
                  <div className="jisho-meanings-modal__content__word__jp__char__furi">
                    {data.furi[index]}
                  </div>
                  <div className="jisho-meanings-modal__content__word__jp__char__kana">
                    {char}
                  </div>
                </div>
              ))}
            </span>
            <div className="jisho-meanings-modal__content__word__meanings">
              {data.meanings.map((mean) => (
                <span className="jisho-meanings-modal__content__word__meanings__meaning">
                  {mean[1]}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="jisho-meanings-modal__footer">
        <Button onClick={handleConfirmClick} isDisabled={!selectedWord.id}>O</Button>
      </div>
    </div>
  );
}

export default JishoMeaningsModal;
