import styles from "./../../styles/inspection.module.css";
import InspectionCard from "./InspectionCard";
import { useInspectionsContext } from "./InspectionsContext";

const InspeccionList = () => {
    const { inspections } = useInspectionsContext();

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