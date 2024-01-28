import React, { useContext, useEffect, useState } from 'react';
import './EditView.scss';
import EditViewFooter from './EditViewFooter';
import Button from '../../../Button';
import { getEditStepHeaderText, renderEditStepComponent } from './helpers';
import { deepCompare } from '../../../../utils';
import { ModalWrapperContext } from '../../../ModalWrapper/ModalWrapperContext';
import { getServiceToUse } from '../../../../Services';

function EditView({
  listItemData,
  listItemType,
  allWords,
  allSentences,
  setModalView,
  updateListService,
}) {
  const { closeModal } = useContext(ModalWrapperContext);
  const [currentEditStep, setCurrentEditStep] = useState(0);
  const [currentData, setCurrentData] = useState(listItemData);
  const [itemAlreadyExists, setItemAlreadyExists] = useState('');
  const word = currentData.jp;
  const headerText = getEditStepHeaderText(listItemType, currentEditStep, word);

  const handleSave = async () => {
    const itemId = listItemData.id;
    const serviceName = itemId ? 'update' : 'create';
    const serviceToUse = getServiceToUse(listItemType, serviceName);
    if (deepCompare(listItemData, currentData)) {
      return setModalView('display');
    }
    await serviceToUse({ input: currentData });
    await updateListService();
    return itemId ? setModalView('display') : closeModal();
  };

  useEffect(() => {
    if (!word) setItemAlreadyExists(false);
    const listToCheck = listItemType === 'word' ? allWords : allSentences;
    const alreadyExists = !!listToCheck.find((itemToCheck) => {
      if (itemToCheck.id === currentData.id) return false;
      return itemToCheck.jp === word;
    });
    setItemAlreadyExists(alreadyExists);
  }, [word]);

  const editStepComponentProps = {
    listItemData: currentData,
    listItemType,
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
    allSentences,
    allWords,
  };

  return (
    <div className="list-item-modal-edit-view">
      <div className="edit-view-header">
        <span>{headerText}</span>
        <Button className="edit-view-header-close-button" onClick={() => closeModal()}>
          x
        </Button>
      </div>
      <div className="edit-view-content">
        {renderEditStepComponent(
          listItemType,
          currentEditStep,
          editStepComponentProps,
        )}
      </div>
      <EditViewFooter
        listItemType={listItemType}
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
