import React, { useEffect, useState } from 'react';
import './JishoMeaningsModal.scss';
import Loading from '../../Loading';
import Button from '../../Button';
import { B_URL } from '../../../constants';
import { buildWordFromJisho } from './helpers';

function JishoMeaningsModal({
  filters,
  handleToggleModal,
  setJishoWord,
  setSelectedItemIndex,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [jishoData, setJishoData] = useState([]);
  const [selectedWord, setSelectedWord] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchData(term) {
      await fetch(`${B_URL}/jisho/word/${term.toLocaleLowerCase()}`)
        .then((res) => res.json())
        .then((json) => {
          setErrorMessage(null);
          setIsLoading(false);
          setJishoData(json);
        })
        .catch((err) => {
          setErrorMessage(err);
          setIsLoading(false);
        });
    }
    if (filters && filters.text) fetchData(filters.text);
  }, []);

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  const handleConfirmClick = () => {
    const newWord = buildWordFromJisho(selectedWord);
    setJishoWord(newWord);
    setSelectedItemIndex(-1);
    handleToggleModal('listItemModal');
  };

  const noResults = !jishoData || !jishoData.length;
  const jishoUrl = `https://jisho.org/search/${filters.text.toLocaleLowerCase()}`;
  const placholder = `Serch for "${filters.text}" in `;

  return (
    <div className="jisho-meanings-modal">
      <div className="jisho-meanings-modal__content">
        {isLoading && <div className="jisho-meanings-modal__content__loading"><Loading /></div>}
        {!!errorMessage && (
          <div className="jisho-meanings-modal__content__error">
            {errorMessage}
          </div>
        )}
        {!isLoading && noResults && (
        <div className="jisho-meanings-modal__content__fallback">
          <span>
            {placholder}
            <a href={jishoUrl} target="blank">Jisho</a>
          </span>

        </div>
        )}
        {jishoData.map((data) => (
          <div
            key={data.id}
            className={`jisho-meanings-modal__content__word${selectedWord.id === data.id ? ' selected' : ''}`}
            role="button"
            onClick={() => handleWordClick(data)}
          >
            <span className="jisho-meanings-modal__content__word__jp">
              {data.jp.split('').map((char, index) => (
                <div key={`${index}-${char}`} className="jisho-meanings-modal__content__word__jp__char">
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
              {data.meanings.map((mean, index) => (
                <div key={`${index}-${mean}`} className="jisho-meanings-modal__content__word__meanings__meaning">
                  <span className="jisho-meanings-modal__content__word__meanings__meaning__type">
                    {mean[0]}
                  </span>
                  <span className="jisho-meanings-modal__content__word__meanings__meaning__text">
                    {mean[1]}
                  </span>
                </div>
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
