import { useToastContext } from '../../../contexts/ToastContext';
import { useModalContext } from '../../../contexts/ModalContext';

function useListItemModal({
  listItemIndex,
  listData,
  jishoWord,
  handleUpdateWordsList,
}) {
  const { closeModal, setCloseOnBgClick } = useModalContext();
  const { createToast } = useToastContext();

  const onDelete = (res) => {
    createToast({ text: res.data.jp, type: 'delete' });
    closeModal();
  };

  const onError = (err) => {
    createToast({ text: err.message || 'ERROR', type: 'error' });
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
