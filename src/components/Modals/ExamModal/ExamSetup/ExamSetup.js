import React from 'react';
import './ExamSetup.scss';
import Button from '../../../Button';
import useExamSetup from './useExamSetup';
import { TAGS } from '../../../../constants';

function ExamSetup(props) {
  const {
    questionLimit,
    reachedMin,
    reachedMax,
    questionTags,
    handleQuestionLimitChange,
    handleBuildQuestions,
    handleTagClick,
  } = useExamSetup(props);

  return (
    <>
      <div className="exam-modal-setup">
        <div className="exam-modal-setup__options-group">
          <div className="exam-modal-setup__options-group__tag-options">
            {TAGS.map((tag) => (
              <Button
                key={tag}
                onClick={handleTagClick}
                isNotSelected={!questionTags.includes(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
          <div className="exam-modal-setup__options-group__question-limit">
            <div className="exam-modal-setup__options-group__question-limit__container">
              <Button
                isDisabled={reachedMin}
                onClick={() => handleQuestionLimitChange()}
              >
                -
              </Button>
              <span>{questionLimit}</span>
              <Button
                isDisabled={reachedMax}
                onClick={() => handleQuestionLimitChange(true)}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="exam-modal__footer">
        <Button onClick={handleBuildQuestions}>O</Button>
      </footer>
    </>
  );
}

export default ExamSetup;
