import './DisplayViewHeader.scss';
import { checkIfCharIsKanji, copyToClipboard, getCharWithFuri } from '../../../../../utils';
import { getHeaderTextClassName } from './helpers';

function useDisplayViewHeader({
  successPercentage,
  text,
  furi,
  canDelete,
  modalView,
  view,
  setSelectedKanji,
  setModalView,
  setView,
}) {
  const headerCharacters = getCharWithFuri(text, furi, true);

  const handleCharacterCopy = () => {
    copyToClipboard(text);
  };

  const handleJishoNavigate = () => {
    window.open(`https://jisho.org/search/${text}`, '_blank');
  };
  // 10 char turn to 2rem
  // 30 char turn to 1.5rem
  const kanaClassName = getHeaderTextClassName(headerCharacters);

  const handleCharClick = (char) => {
    if (checkIfCharIsKanji(char)) {
      setSelectedKanji(char);
      setView('kanji');
    }
  };

  return {
    headerCharacters,
    kanaClassName,
    successPercentage,
    modalView,
    canDelete,
    view,
    setModalView,
    handleCharacterCopy,
    handleJishoNavigate,
    handleCharClick,
  };
}

export default useDisplayViewHeader;
