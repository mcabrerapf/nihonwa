import './TestSetupContent.scss';
import { buildQuestions } from '../helpers';

function useTestSetupContent({
  testSetupOptions,
  wordsList,
  setTestSetupOptions,
  handleTestStart,
}) {
  const { questionLimit, questionLanguage, questionTags } = testSetupOptions;
  const reachedMax = questionLimit >= 25;
  const reachedMin = questionLimit <= 5;
  const isJpEnabled = !!questionLanguage.find((lan) => lan === 'jp');
  const isEnEnabled = !!questionLanguage.find((lan) => lan === 'en');

  const handleBuildQuestions = () => {
    const builtQuestions = buildQuestions(testSetupOptions, wordsList);
    handleTestStart(builtQuestions);
  };

  const handleLanguageButtonClick = ({ target: { value } }) => {
    if (value === 'en') {
      if (isJpEnabled) {
        const updatedOptions = isEnEnabled ? ['jp'] : ['en', 'jp'];
        setTestSetupOptions({ ...testSetupOptions, questionLanguage: updatedOptions });
      }
    }
    if (value === 'jp') {
      if (isEnEnabled) {
        const updatedOptions = isJpEnabled ? ['en'] : ['en', 'jp'];
        setTestSetupOptions({ ...testSetupOptions, questionLanguage: updatedOptions });
      }
    }
  };

  const handleQuestionLimitChange = (increase) => {
    if (increase && !reachedMax) {
      setTestSetupOptions({
        ...testSetupOptions,
        questionLimit: questionLimit + 5,
      });
    }
    if (!increase && !reachedMin) {
      setTestSetupOptions({
        ...testSetupOptions,
        questionLimit: questionLimit - 5,
      });
    }
  };

  const handleTagClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { target: { innerText: tag } } = e;
    const isSelected = questionTags.includes(tag);

    if (isSelected) {
      setTestSetupOptions({
        ...testSetupOptions,
        questionTags: questionTags.filter((sTag) => sTag !== tag),
      });
    } else {
      setTestSetupOptions({
        ...testSetupOptions,
        questionTags: [...questionTags, tag],
      });
    }
  };

  return {
    questionLimit,
    reachedMin,
    reachedMax,
    isJpEnabled,
    isEnEnabled,
    questionTags,
    handleQuestionLimitChange,
    handleLanguageButtonClick,
    handleBuildQuestions,
    handleTagClick,
  };
}

export default useTestSetupContent;
