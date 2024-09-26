import './DisplayViewHeader.scss';
import { copyToClipboard } from '../../../../../utils';

function useDisplayViewHeader({
  text,
  selectedKanji,
}) {
  const handleCharacterCopy = () => {
    copyToClipboard(selectedKanji || text);
  };

  const handleJishoNavigate = () => {
    window.open(`https://jisho.org/search/${selectedKanji || text}`, '_blank');
  };

  return {
    handleCharacterCopy,
    handleJishoNavigate,
  };
}

export default useDisplayViewHeader;
