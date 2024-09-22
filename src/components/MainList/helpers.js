import {
  FiltersModal, KanaModal, ListItemModal, ExamModal, JishoMeaningsModal,
} from '../Modals';

const getModalToUse = (modalKey) => {
  switch (modalKey) {
    case 'kanaModal':
      return KanaModal;
    case 'filtersModal':
      return FiltersModal;
    case 'examModal':
      return ExamModal;
    case 'listItemModal':
      return ListItemModal;
    case 'jishoMeaningsModal':
      return JishoMeaningsModal;
    default:
      return () => {};
  }
};

export {
  getModalToUse,
};
