import React from "react";
import styles from "../styles/Carusel.module.scss";
//img
import slidercar1 from "../img/Group23.png";
import slidercar2 from "../img/Group24.png";
import slidercar3 from "../img/sliderCar3.png";
import nextP from "../img/next.svg";
import prevP from "../img/prev.svg";
const Carusel = () => {
  return (
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
  );
};

export default Carusel;
