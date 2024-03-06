import React, { useState } from 'react';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import { InspectionForm } from './InspectionForm';
import InspeccionList from './InspeccionList';
import styles from "./../../styles/inspection.module.css";

const Inspection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div></div>
        <h1 className={styles.header__title}>Lista de inspecciones</h1>
        <Button onClick={openModal} className={styles.header__button}>Agregar Inspección</Button>
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
