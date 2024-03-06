import { useState } from "react";
import Button from "../../components/button/Button";
import { Inspection } from "../../modules/inspection/domain/Inspection";
import styles from "./../../styles/inspectionCard.module.css";
import { useInspectionsContext } from "./InspectionsContext";
import Modal from "../../components/modal/Modal";
import InspectionDelete from "./InspectionDelete";
import { InspectionForm } from "./InspectionForm";

const InspectionCard = ({ inspection }: { inspection: Inspection }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const { deleteInspection } = useInspectionsContext();
    const handleShowInspection = (id: string) => {
        console.log('id', id)
    }
    const handleUpdateInspection = (id: string) => {
        console.log('id', id)
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
        <div className={styles.inspectionCard}>
            <div>
                <div className={styles.inspectionCard__description}>
                    <span>Inspector</span>
                    <h3>{inspection.inspector.firstName} {inspection.inspector.lastName}</h3>
                </div>
                <div className={styles.inspectionCard__description}>
                    <span>Resultado</span>
                    <h3>{inspection.result}</h3>
                </div>
            </div>
            <div>
                <Button onClick={()=> handleShowInspection(inspection.id)}>Ver</Button>
                <Button onClick={()=> handleUpdateInspection(inspection.id)}>Editar</Button>
                <Button onClick={()=> handleDeleteInspection()}>Eliminar</Button>
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