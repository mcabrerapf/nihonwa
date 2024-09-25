import './DisplayViewHeader.scss';
import { copyToClipboard } from '../../../../../utils';

function useDisplayViewHeader({
  text,
  canDelete,
  modalView,
  selectedKanji,
  setModalView,
}) {
  const handleCharacterCopy = () => {
    copyToClipboard(selectedKanji || text);
  };

  const handleJishoNavigate = () => {
    window.open(`https://jisho.org/search/${selectedKanji || text}`, '_blank');
  };

  return {
    modalView,
    canDelete,
    setModalView,
    handleCharacterCopy,
    handleJishoNavigate,
  };
}

export default useDisplayViewHeader;
