import { buildQuestions } from '../helpers';

function useExamSetup({
  testSetupOptions,
  wordList,
  setTestSetupOptions,
  handleTestStart,
}) {
  const { questionLimit, questionTags } = testSetupOptions;
  const reachedMax = questionLimit >= 25;
  const reachedMin = questionLimit <= 5;

  const handleBuildQuestions = () => {
    const builtQuestions = buildQuestions(testSetupOptions, wordList);
    handleTestStart(builtQuestions);
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
    questionTags,
    handleQuestionLimitChange,
    handleBuildQuestions,
    handleTagClick,
  };
}

export default useExamSetup;
