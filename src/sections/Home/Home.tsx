import Inspection from '../Inspection/Inspection';
import bannerImage from './../../assets/images/banner-inspeccion.jpg';
import styles from './../../styles/home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
    <picture>
      <img className={styles.bannerImage} src={bannerImage} alt="Banner Inspección" />
      <div className={styles.overlay}>
        <h1>Prueba técnica</h1>
        <button >Ver lista de pruebas</button>
      </div>
    </picture>
    <div className={styles.bottomSection}>
      <Inspection />
    </div>
  </div>
  )
}

export default Home