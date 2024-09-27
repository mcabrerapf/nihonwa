import {
  GODAN, IADJECTIVE, ICHIDAN, NOUN, VERB,
} from '../../../constants/TAGS';

const getMeanigTags = (meaningTags, tags) => {
  if (meaningTags.includes('Noun') && !tags.includes(NOUN)) {
    tags.push(NOUN);
  }
  if (meaningTags.includes('Suru verb') && !tags.includes(VERB)) {
    tags.push(VERB);
  }
  if (meaningTags.includes('Godan') && !tags.includes(GODAN)) {
    tags.push(GODAN);
  }
  if (meaningTags.includes('Ichidan') && !tags.includes(ICHIDAN)) {
    tags.push(ICHIDAN);
  }
  if (meaningTags.includes('I-Adjective') && !tags.includes(IADJECTIVE)) {
    tags.push(IADJECTIVE);
  }
};

export { getMeanigTags };
