import initSentenceData from "./initSentenceData";
import initWordData from "./initWordData";

const initItemData = (type, data) => {
  switch (type) {
    case "word":
      return initWordData(data);
    case "sentence":
      return initSentenceData(data);

    default:
      return initWordData(data);
  }
};

export default initItemData;
