//components
import BoxAbout from "./components/BoxAbout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WorkCar from "./components/WorkCar";
import AboutCar from "./components/AboutCar";
import Carusel from "./components/Carusel";
import AboutCarLeft from "./components/AboutCarLeft";
//styles
import "./styles/reset.css";
import styles from "./styles/Usluge.module.scss";
//img
import golosovie from "./img/golosovanie.svg";
import carWash from "./img/carWash.svg";
import pshlk from "./img/pshukalka.svg";
function App() {
  return (
    <div className="App">
      <Header />
      <BoxAbout />
      <Carusel />
      <AboutCarLeft />
      <section className={styles.uslugeMain}>
        <div className={styles.uslugeDiv}>
          <div className={styles.uslugeTitle}>
            <h3>Наши услуги</h3>
            <div>
              <button>Оклейка</button>
              <button>Детейлинг</button>
            </div>
          </div>
          <div className={styles.uslugeCart}>
            <div>
              <img src={carWash} alt="alt" />
              <h4>Защитные пленки</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
              </p>
              <button>Подробнее</button>
            </div>
            <div>
              <img src={carWash} alt="alt" />
              <h4>Защитные пленки</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
              </p>
              <button>Подробнее</button>
            </div>
            <div>
              <img src={carWash} alt="alt" />
              <h4>Защитные пленки</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
              </p>
              <button>Подробнее</button>
            </div>
            <div>
              <img src={carWash} alt="alt" />
              <h4>Защитные пленки</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
              </p>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
      </section>
      <AboutCar />
      <WorkCar />
      <Footer />
    </div>
  );
}

export default App;
