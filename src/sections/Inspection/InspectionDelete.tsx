import Button from '../../components/button/Button';

interface InspectionDeleteProps {
  handleDeleteConfirmation: () => Promise<void>;
}

const InspectionDelete: React.FC<InspectionDeleteProps> = ({ handleDeleteConfirmation }) => {
  return (
    <>
        <p>¿Desea confirmar la eliminación de la inspección?</p>
        <div>
            <Button onClick={handleDeleteConfirmation}>Si</Button>
        </div>
    </>
  );
};

export default InspectionDelete;