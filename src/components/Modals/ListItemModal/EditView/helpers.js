import { TAGS, TYPES } from "../../../../constants";
import {
  EditListString,
  EditSelectOptions,
  EditSentence,
  EditWord,
  EditWordFuri,
} from "../../../EditComponents";
import DisplayView from "../DisplayView";
import { EDIT_STEP_HEADERS } from "./constants";

const getEditStepHeaderText = (type, step, word) => {
  if (!type) return "";
  if (step === 0) return EDIT_STEP_HEADERS[type][step];
  if (EDIT_STEP_HEADERS[type][step])
    return `${EDIT_STEP_HEADERS[type][step]} - ${word}`;
  return "";
};

const getWordEditStepComponent = (step, props) => {
  switch (step) {
    case 0:
      return <EditWord {...props} />;
    case 1:
      return <EditWordFuri {...props} />;
    case 2:
      return <EditListString {...props} listKey={"en"} />;
    case 3:
      return <EditListString {...props} listKey={"notes"} />;
    case 4:
      return (
        <EditSelectOptions {...props} optionKey={"types"} options={TYPES} />
      );
    case 5:
      return <EditSelectOptions {...props} optionKey={"tags"} options={TAGS} />;
    case 6:
      return (
        <DisplayView {...props} modalView={"edit"} isFirstItem isLastItem />
      );
    default:
      return null;
  }
};


const getSentenceEditStepComponent = (step, props) => {
  switch (step) {
    case 0:
      return <EditSentence {...props} />;
    case 1:
      return <EditListString {...props} listKey={"en"} />;
    case 2:
      return <EditListString {...props} listKey={"notes"} />;
    case 3:
      return (
        <EditSelectOptions {...props} optionKey={"types"} options={TYPES} />
      );
    case 4:
      return <EditSelectOptions {...props} optionKey={"tags"} options={TAGS} />;
    case 5:
      return (
        <DisplayView {...props} modalView={"edit"} isFirstItem isLastItem />
      );
    default:
      return null;
  }
};

const renderEditStepComponent = (type, step, props) => {
  if (type === "word") return getWordEditStepComponent(step, props);
  if (type === "sentence") return getSentenceEditStepComponent(step, props);
  else return null;
};

export { getEditStepHeaderText, renderEditStepComponent };
