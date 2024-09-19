import {
  FiltersModal, KanaModal, ListItemModal, SortModal, TestModal, JishoMeaningsModal,
} from '../Modals';

const getModalToUse = (modalKey) => {
  switch (modalKey) {
    case 'hi':
      return KanaModal;
    case 'ka':
      return KanaModal;
    case 'filters':
      return FiltersModal;
    case 'sort':
      return SortModal;
    case 'test':
      return TestModal;
    case 'listItem':
      return ListItemModal;
    case 'jishoMeanings':
      return JishoMeaningsModal;
    default:
      return () => {};
  }
};

export {
  getModalToUse,
};
