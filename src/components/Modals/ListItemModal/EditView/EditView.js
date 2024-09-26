import React, { useContext, useEffect, useState } from 'react';
import './EditView.scss';
import EditViewFooter from './EditViewFooter';
import Button from '../../../Button';
import { ModalWrapperContext } from '../../../ModalWrapper/ModalWrapperContext';
import { getServiceToUse } from '../../../../Services';
import { getEditStepHeaderText, renderEditStepComponent } from './helpers';
import { deepCompare, updateWordTags } from '../../../../utils';
import { ListItemModalContext } from '../ListItemModalContext';

function EditView({
  listData,
}) {
  const { closeModal } = useContext(ModalWrapperContext);
  const { word: cWord, handleUpdateWordsList, setModalView } = useContext(ListItemModalContext);
  const [currentEditStep, setCurrentEditStep] = useState(0);
  const [currentData, setCurrentData] = useState(cWord);
  const [itemAlreadyExists, setItemAlreadyExists] = useState('');
  const word = currentData.jp;
  const headerText = getEditStepHeaderText('word', currentEditStep, word);

  useEffect(() => {
    if (!word) setItemAlreadyExists(false);
    const alreadyExists = !!listData.find((itemToCheck) => {
      if (itemToCheck.id === currentData.id) return false;
      return itemToCheck.jp === word;
    });
    setItemAlreadyExists(alreadyExists);
  }, [word]);

  useEffect(() => {
    if (currentEditStep !== 5) return;
    const updatedTags = updateWordTags(word, currentData.tags);
    setCurrentData({ ...currentData, tags: updatedTags });
  }, [currentEditStep]);

  const handleSave = async () => {
    const itemId = cWord.id;
    const serviceName = itemId ? 'update' : 'create';
    const serviceToUse = getServiceToUse('word', serviceName);
    if (deepCompare(cWord, currentData)) {
      return setModalView('display');
    }
    await serviceToUse({ input: currentData });
    await handleUpdateWordsList();
    return itemId ? setModalView('display') : closeModal();
  };

  const handleClose = () => {
    if (!cWord.id) closeModal();
    else setModalView('display');
  };

  const editStepComponentProps = {
    wordList: listData,
    itemAlreadyExists,
    currentData,
    currentEditStep,
    setCurrentData,
    setCurrentEditStep,
  };

  return (
    <div className="edit-view">
      <div className="edit-view__header">
        <span>{headerText}</span>
        <Button onClick={handleClose}>
          X
        </Button>
      </div>
      <div className="edit-view__content">
        {renderEditStepComponent(
          'word',
          currentEditStep,
          editStepComponentProps,
        )}
      </div>
      <EditViewFooter
        itemAlreadyExists={itemAlreadyExists}
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
