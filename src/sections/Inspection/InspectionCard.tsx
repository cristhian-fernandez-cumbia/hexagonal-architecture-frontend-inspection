import { useState } from "react";
import Button from "../../components/button/Button";
import { Inspection } from "../../modules/inspection/domain/Inspection";
import styles from "./../../styles/inspection.module.css";
import { useInspectionsContext } from "./InspectionsContext";
import Modal from "../../components/modal/Modal";
import InspectionDelete from "./InspectionDelete";
import { InspectionForm } from "./InspectionForm";

const InspectionCard = ({ inspection }: { inspection: Inspection }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const { deleteInspection } = useInspectionsContext();
    const resultColor = inspection.result === 'OBSERVADO' ? styles.observed : styles.correct;

    const handleUpdateInspection = () => {
        setIsUpdateModalOpen(true)
    }
    const handleDeleteInspection = () => {
        setIsDeleteModalOpen(true);
    }

    const handleDeleteConfirmation = async () => {
        await deleteInspection(inspection.id);
        setIsDeleteModalOpen(false);
    };
    
    const handleCloseModal = () => {
        setIsDeleteModalOpen(false);
        setIsUpdateModalOpen(false);
    };

    return (
        <div className={`${styles.inspectionCard} ${resultColor}`}>
            <div>
                <div className={styles.inspectionCard__description}>
                    <span>Inspector:</span>
                    <h4>{inspection.inspector.firstName} {inspection.inspector.lastName}</h4>
                </div>
                <div className={styles.inspectionCard__description}>
                    <span>Resultado:</span>
                    <h4 className={styles.inspectionCard__result}>{inspection.result}</h4>
                </div>
            </div>
            <div>
                <Button onClick={handleUpdateInspection} className={styles.button__update}>Editar</Button>
                <Button onClick={handleDeleteInspection} className={styles.button__delete}>Eliminar</Button>
            </div>
            {isDeleteModalOpen && (
                <Modal isOpen={isDeleteModalOpen} onClose={handleCloseModal}>
                    <InspectionDelete handleDeleteConfirmation={handleDeleteConfirmation}/>
                </Modal>  
            )}
            {isUpdateModalOpen && (
                <Modal isOpen={isUpdateModalOpen} onClose={handleCloseModal}>
                    <InspectionForm inspection={inspection}/>
                </Modal>  
            )}
        </div>
    )
}

export default InspectionCard