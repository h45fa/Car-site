//components
import BoxAbout from "./components/BoxAbout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WorkCar from "./components/WorkCar";

import golosovie from "./img/golosovanie.svg";
import carWash from "./img/carWash.svg";
import pshlk from "./img/pshukalka.svg";
import nextP from "./img/next.svg";
import prevP from "./img/prev.svg";
import aboutC from "./img/AboutCar2.png";

import styles from "./styles/AboutUs.module.scss";
import "./styles/reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BoxAbout />
      <section className={styles.AboutCar}>
        <div>
          <div className={styles.AboutCar_left}>
            <img src={aboutC} alt="" />
            <div>
              <button>
                <img src={prevP} alt="" />
              </button>
              <h3>
                Neque metus vitae urna purus aliquam. Felis nullam pellentesque
                ac mi commodo, amet, porta in. Dui.
              </h3>
              <button>
                <img src={nextP} alt="" />
              </button>
            </div>
          </div>
          <div className={styles.AboutCar_right}>
            <ul>
              <li>
                <h3>
                  <img src={carWash} alt="alt" />
                  100% полироль axem
                </h3>
                <p>
                  Pharetra in bibendum id id. Sit maecenas sollicitudin est,
                  hendrerit in malesuada. Eu, et lacus nisi mus sagittis,
                  rhoncus est dictum. Gravida lectus urna, arcu, sodales. Ac.
                </p>
              </li>
              <li>
                <h3>
                  <img src={golosovie} alt="alt" />
                  выполняем работу четко по тз
                </h3>
                <p >
                  Lorem nulla non nibh quis elit odio. Dui et ultricies duis
                  mattis dictum et senectus nunc sodales. Tellus lorem risus
                  etiam quam massa lobortis convallis laoreet. Nec.
                </p>
              </li>
              <li>
                <h3>
                  <img src={pshlk} alt="alt" />у нас лучшие мастера
                </h3>
                <p className={styles.lastP}>
                  Posuere nam sodales ullamcorper bibendum justo maecenas at.
                  Ultricies bibendum morbi tempor vehicula. Ultrices erat
                  maecenas in id maecenas sed ipsum scelerisque.{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <WorkCar />
      <Footer />
    </div>
  );
}

export default App;
