import Button from '../../components/button/Button';
import styles from './../../styles/inspectionForm.module.css';
interface InspectionDeleteProps {
  handleDeleteConfirmation: () => Promise<void>;
}

const InspectionDelete: React.FC<InspectionDeleteProps> = ({ handleDeleteConfirmation }) => {
  return (
    <section className={styles.message__delete}>
        <p>¿Desea confirmar la eliminación de la inspección?</p>
        <div>
            <Button onClick={handleDeleteConfirmation} className={styles.button__delete}>Si</Button>
        </div>
    </section>
  );
};

export default InspectionDelete;
