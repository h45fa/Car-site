//components
import BoxAbout from "./components/BoxAbout";
import Footer from "./components/Footer";
import Header from "./components/Header";

import workcar1 from "./img/workCar1.png";
import workcar2 from "./img/workCar2.png";
import workcar3 from "./img/workCar3.png";
import workcar4 from "./img/workCar4.png";
import workcar5 from "./img/workCar5.png";
import workcar6 from "./img/workCar6.png";

import styles from "./styles/WorkCar.module.scss"
import "./styles/reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BoxAbout />
      <section className={styles.workcar}>
        <h3>Наши работы</h3>
        <div>
          <img src={workcar1} alt="alt" />
          <img src={workcar2} alt="alt" />
          <img src={workcar3} alt="alt" />
          <img src={workcar4} alt="alt" />
          <img src={workcar5} alt="alt" />
          <img src={workcar6} alt="alt" />
          <img src={workcar1} alt="alt" />
          <img src={workcar2} alt="alt" />
          <img src={workcar3} alt="alt" />
          <img src={workcar4} alt="alt" />
          <img src={workcar5} alt="alt" />
          <img src={workcar6} alt="alt" />
          <img src={workcar1} alt="alt" />
          <img src={workcar2} alt="alt" />
          <img src={workcar3} alt="alt" />
          <img src={workcar4} alt="alt" />
          <img src={workcar5} alt="alt" />
          <img src={workcar6} alt="alt" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
