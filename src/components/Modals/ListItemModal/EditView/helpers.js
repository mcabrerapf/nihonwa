import {
  EditListString,
  EditSelectOptions,
  EditWord,
  EditWordFuri,
} from '../../../EditComponents';
import { EDIT_STEP_HEADERS } from './constants';

const getEditStepHeaderText = (type, step, word) => {
  if (!type) return '';
  if (step === 0) return EDIT_STEP_HEADERS[type][step];
  if (EDIT_STEP_HEADERS[type][step]) return `${word} - ${EDIT_STEP_HEADERS[type][step]}`;
  return '';
};

const getEditStepComponent = (step) => {
  switch (step) {
    case 0:
      return EditWord;
    case 1:
      return EditWordFuri;
    case 2:
      return EditListString;
    case 3:
      return EditListString;
    case 4:
      return EditSelectOptions;
    default:
      return () => {};
  }
};

export { getEditStepHeaderText, getEditStepComponent };
