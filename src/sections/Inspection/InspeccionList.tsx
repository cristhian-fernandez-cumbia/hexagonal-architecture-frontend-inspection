import styles from "./../../styles/inspectionCard.module.css";
import InspectionCard from "./InspectionCard";
import { useInspectionsContext } from "./InspectionsContext";

const InspeccionList = () => {
    const { inspections } = useInspectionsContext();
    console.log('inspections:::', inspections)

  return (
    <section>
        <div className={styles.list}>
            {inspections.map((inspection) => (
                <InspectionCard key={inspection.id} inspection={inspection} />
            ))}
        </div>
    </section>
  )
}

export default InspeccionList