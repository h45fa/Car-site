//components
import BoxAbout from "./components/BoxAbout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WorkCar from "./components/WorkCar";
import AboutCar from "./components/AboutCar";
//styles
import "./styles/reset.css";
import styles from "./styles/Carusel.module.scss";
//img
import slidercar1 from "./img/Group23.png";
import slidercar2 from "./img/Group24.png";
import slidercar3 from "./img/sliderCar3.png";
import nextP from "./img/next.svg";
import prevP from "./img/prev.svg";
function App() {
  return (
    <div className="App">
      <Header />
      <BoxAbout />
      <section className={styles.Carusel}>
        <div className={styles.CaruselDiv}>
          <button>
            <img src={prevP} alt="" />
          </button>
          <div className={styles.carsel}>
            <div>
              <img src={slidercar1} alt="" />
            </div>
            <div>
              <img src={slidercar2} alt="" />
            </div>
            <div>
              <img src={slidercar3} alt="" />
            </div>
          </div>
          <button>
            <img src={nextP} alt="" />
          </button>
        </div>
      </section>
      <AboutCar />
      <WorkCar />
      <Footer />
    </div>
  );
}

export default App;
