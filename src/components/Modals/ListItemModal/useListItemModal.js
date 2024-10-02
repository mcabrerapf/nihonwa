import { useToastContext } from '../../../contexts/ToastContext';
import { useModalContext } from '../../../contexts/ModalContext';

function useListItemModal({
  listItemIndex,
  listData,
  jishoWord,
  handleUpdateWordsList,
}) {
  const { closeModal, setCloseOnBgClick } = useModalContext();
  const { addToast } = useToastContext();

  const onDelete = (res) => {
    addToast({ text: res.data.jp, type: 'delete' });
    closeModal();
  };

  const onError = (err) => {
    addToast({ text: err.message || 'ERROR', type: 'error' });
    closeModal();
  };

  return {
    listData,
    listItemIndex,
    jishoWord,
    handleUpdateWordsList,
    setCloseOnBgClick,
    closeModal,
    onDelete,
    onError,
  };
}

export default useListItemModal;
