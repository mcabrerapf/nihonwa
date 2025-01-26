import React, { useEffect, useState } from 'react';
import './JishoMeaningsModal.scss';
import Loading from '../../Loading';
import Button from '../../Button';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';
import ModalFooter from '../ModalFooter';
import { useMainContext } from '../../../contexts/MainContext';
import { useModalContext } from '../../../contexts/ModalContext';
import { B_URL } from '../../../constants';
import { buildWordFromJisho } from './helpers';

function JishoMeaningsModal({
  handleToggleModal,
}) {
  const {
    filters,
    setJishoWord,
    setSelectedItemIndex,
  } = useMainContext();
  const { closeModal } = useModalContext();
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

  const handleClose = async (e) => {
    if (e) e.preventDefault();
    closeModal();
  };

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
    <Modal modifier="jisho-meanings-modal">
      <ModalHeader childrenAlign="r">
        <Button modifier="no-border" onClick={handleClose}>X</Button>
      </ModalHeader>
      <Loading isLoading={isLoading}>
        <div className="jisho-meanings-modal__content">
          {!!errorMessage && (
          <div className="jisho-meanings-modal__content__error">
            {errorMessage}
          </div>
          )}
          {noResults && (
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
      </Loading>
      <ModalFooter childrenAlign="r">
        <Button onClick={handleConfirmClick} isDisabled={!selectedWord.id}>O</Button>
      </ModalFooter>
    </Modal>
  );
}

export default JishoMeaningsModal;
