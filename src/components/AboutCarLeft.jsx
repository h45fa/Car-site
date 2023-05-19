import React from "react";
import styles from "../styles/AboutUs.module.scss";
//img
import golosovie from "../img/golosovanie.svg";
import carWash from "../img/carWash.svg";
import pshlk from "../img/pshukalka.svg";
import nextP from "../img/next.svg";
import prevP from "../img/prev.svg";
import aboutC from "../img/AboutCart.png";
const AboutCarLeft = () => {
  return (
    <section className={styles.AboutCar}>
      <div>
        <div className={styles.AboutCar_right}>
          <ul>
            <li>
              <h3>
                <img src={golosovie} alt="alt" />
                материалы от лучших компаний
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pretium, rutrum est, molestie proin tristique duis sed. Morbi
                suspendisse amet nisl vestibulum risus. Quis pretium
              </p>
            </li>
            <li>
              <h3>
                <img src={pshlk} alt="alt" />
                Опытные мастера
              </h3>
              <p className={styles.lastP}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                donec elementum egestas vitae ullamcorper. Amet volutpat ornare
                pharetra amet adipiscing orci, lectus aenean ultricies. Erat
                viverra eget blandit ornare. Molestie ipsum commodo faucibus
                rhoncus
              </p>
            </li>
            <li>
              <h3>
                <img src={carWash} alt="alt" />
                Гарантия на все виды работы
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum volutpat.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.AboutCar_left} style={{ marginRight: 0 }}>
          <img src={aboutC} alt="" />
          <div>
            <button>
              <img src={prevP} alt="" />
            </button>
            <h3>
              Neque metus vitae urna purus aliquam. Felis nullam pellentesque ac
              mi commodo, amet, porta in. Dui.
            </h3>
            <button>
              <img src={nextP} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCarLeft;
