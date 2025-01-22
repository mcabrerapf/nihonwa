import {
  FiltersModal,
  KanaModal,
  KanjiModal,
  RandomKanjiModal,
  ListItemModal,
  ExamModal,
  JishoMeaningsModal,
} from '../Modals';

const getModalToUse = (modalKey) => {
  switch (modalKey) {
    case 'kanaModal':
      return KanaModal;
    case 'kanjiModal':
      return KanjiModal;
    case 'RandomKanjiModal':
      return RandomKanjiModal;
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
