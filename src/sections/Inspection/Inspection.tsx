import React, { useState } from 'react';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import { InspectionForm } from './InspectionForm';
import InspeccionList from './InspeccionList';

const Inspection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <h2>Lista de inspecciones</h2>
        <Button onClick={openModal}>Agregar Inspección</Button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <InspectionForm />
        </Modal>
      </div>
      <div>
        <InspeccionList/>
      </div>
    </div>
  );
};

export default Inspection;
