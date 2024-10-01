import { useEffect, useState } from 'react';
import { TEST_SETUP_INIT_STATE } from './constants';
import { useModalContext } from '../../../contexts/ModalContext';

function useExamModal({ wordList, handleUpdateWordsList }) {
  const { closeModal, setCloseOnBgClick } = useModalContext();
  const [view, setView] = useState('setup');
  const [questions, setQuestions] = useState([]);
  const [testSetupOptions, setTestSetupOptions] = useState(
    TEST_SETUP_INIT_STATE,
  );

  useEffect(() => {
    setCloseOnBgClick(view === 'setup');
  }, [view]);

  const handleTestStart = (builtQuestions) => {
    setQuestions(builtQuestions);
    setView('inProgress');
  };

  const handleClose = async (e) => {
    if (e) e.preventDefault();
    closeModal();
  };

  return {
    view,
    wordList,
    testSetupOptions,
    questions,
    setQuestions,
    setTestSetupOptions,
    setView,
    closeModal,
    handleUpdateWordsList,
    handleClose,
    handleTestStart,
  };
}

export default useExamModal;
