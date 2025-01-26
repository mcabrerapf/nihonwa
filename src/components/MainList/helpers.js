import {
  FiltersModal,
  KanaModal,
  AllKanjisModal,
  RandomWordModal,
  RandomKanjiModal,
  ListItemModal,
  ExamModal,
  JishoMeaningsModal,
} from '../Modals';

const getModalToUse = (modalKey) => {
  switch (modalKey) {
    case 'kanaModal':
      return KanaModal;
    case 'allKanjisModal':
      return AllKanjisModal;
    case 'randomWordModal':
      return RandomWordModal;
    case 'randomKanjiModal':
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
