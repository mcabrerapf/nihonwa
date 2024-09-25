import React, { useContext, useEffect, useState } from 'react';
import './EditView.scss';
import EditViewFooter from './EditViewFooter';
import Button from '../../../Button';
import { ModalWrapperContext } from '../../../ModalWrapper/ModalWrapperContext';
import { getServiceToUse } from '../../../../Services';
import { getEditStepHeaderText, renderEditStepComponent } from './helpers';
import { deepCompare, updateWordTags } from '../../../../utils';

function EditView({
  listItemData,
  listData,
  setModalView,
  updateWordsList,
}) {
  const { closeModal } = useContext(ModalWrapperContext);
  const [currentEditStep, setCurrentEditStep] = useState(0);
  const [currentData, setCurrentData] = useState(listItemData);
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
    const itemId = listItemData.id;
    const serviceName = itemId ? 'update' : 'create';
    const serviceToUse = getServiceToUse('word', serviceName);
    if (deepCompare(listItemData, currentData)) {
      return setModalView('display');
    }
    await serviceToUse({ input: currentData });
    await updateWordsList();
    return itemId ? setModalView('display') : closeModal();
  };

  const editStepComponentProps = {
    listItemData: currentData,
    wordList: listData,
    itemAlreadyExists,
    isFirstItem: true,
    isLastItem: true,
    modalView: 'edit',
    currentData,
    currentEditStep,
    setModalView: () => {},
    handleListItemChange: () => {},
    setCurrentData,
    setCurrentEditStep,
  };

  return (
    <div className="list-item-modal-edit-view">
      <div className="list-item-modal-edit-view__header">
        <span>{headerText}</span>
        <Button onClick={() => closeModal()}>
          X
        </Button>
      </div>
      <div className="list-item-modal-edit-view__content">
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
