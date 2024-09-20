import { DOTS_TYPE, SPINNER_TYPE } from './constants';

const getLoaderType = (type) => {
  const supportedTypes = [DOTS_TYPE, SPINNER_TYPE];
  if (supportedTypes.find((sType) => sType === type)) return type;
  return DOTS_TYPE;
};

export { getLoaderType };
