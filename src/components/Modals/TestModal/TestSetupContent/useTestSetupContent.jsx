import './TestSetupContent.scss';
import { buildQuestions } from '../helpers';

function useTestSetupContent({
  testSetupOptions,
  wordsList,
  setTestSetupOptions,
  handleTestStart,
}) {
  const { questionLimit, questionLanguage } = testSetupOptions;
  const reachedMax = questionLimit >= 50;
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

  return {
    questionLimit,
    reachedMin,
    reachedMax,
    isJpEnabled,
    isEnEnabled,
    handleQuestionLimitChange,
    handleLanguageButtonClick,
    handleBuildQuestions,
  };
}

export default useTestSetupContent;
