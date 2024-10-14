import React, { useEffect, useState } from 'react';
import './EditView.scss';
import { getServiceToUse } from '../../../../Services';
import { updateWordTags } from '../../../../utils';
import { useToastContext } from '../../../../contexts/ToastContext';
import { useModalContext } from '../../../../contexts/ModalContext';
import DisplayView from '../DisplayView';
import Button from '../../../Button';
import EditViewFooter from './EditViewFooter';
import { getEditStepHeaderText, getEditStepComponent } from './helpers';
import { TAGS } from '../../../../constants';
import { useListItemContext } from '../../../../contexts/ListItemContext';
import { useMainContext } from '../../../../contexts/MainContext';

function EditView() {
  const { updateWordsList } = useMainContext();
  const { closeModal } = useModalContext();
  const { addToast } = useToastContext();
  const {
    listItemView,
    word: cWord,
    setListItemView,
  } = useListItemContext();

  const [currentEditStep, setCurrentEditStep] = useState(0);
  const [currentData, setCurrentData] = useState(cWord);
  const word = currentData.jp;
  const headerText = getEditStepHeaderText('word', currentEditStep, word);

  useEffect(() => {
    if (currentEditStep !== 0)setCurrentEditStep(0);
  }, [listItemView]);

  useEffect(() => {
    if (currentEditStep !== 5) return;
    const updatedTags = updateWordTags(word, currentData.tags);
    setCurrentData({ ...currentData, tags: updatedTags });
  }, [currentEditStep]);

  const handleSave = async () => {
    const itemId = cWord.id;
    const serviceName = itemId ? 'update' : 'create';
    const serviceToUse = getServiceToUse('word', serviceName);

    await serviceToUse({ input: currentData })
      .then(async (res) => {
        await updateWordsList(res.data.id);
        addToast({ text: res.data.jp, type: 'success' });
        setListItemView('display');
      })
      .catch((err) => addToast({ text: err.message || 'ERROR', type: 'error' }));
  };

  const handleClose = () => {
    if (!cWord.id) closeModal();
    else setListItemView('display');
  };

  if (listItemView !== 'edit') return null;

  const editStepComponentProps = {
    currentData,
    currentEditStep,
    listKey: currentEditStep === 2 ? 'en' : 'notes',
    optionKey: 'tags',
    options: TAGS,
    setCurrentData,
    setCurrentEditStep,
  };
  const EditStepComponent = getEditStepComponent(currentEditStep);

  return (
    <div className="edit-view">
      <div className="edit-view__header">
        <span>{headerText}</span>
        <Button onClick={handleClose}>
          X
        </Button>
      </div>
      <div className="edit-view__content">
        <EditStepComponent
          {...editStepComponentProps}
        />
      </div>
      {currentEditStep === 5 && <DisplayView currentData={currentData} forceShow />}
      <EditViewFooter
        currentData={currentData}
        currentEditStep={currentEditStep}
        setCurrentData={setCurrentData}
        setCurrentEditStep={setCurrentEditStep}
        handleSave={handleSave}
      />
    </div>
  );
}

export default EditView;
