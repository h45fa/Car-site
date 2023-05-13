import React from "react";
import navMenu from "../img/menu.svg";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header_main}>
        <nav>
          <ul>
            <li className={styles.nav_recall}>
              <a href="/">Главная</a>
            </li>
            <li className={styles.nav_recall}>
              <a href="/">Оклейка автомобилей</a>
            </li>
            <li className={styles.nav_recall}>
              <a href="/">Детейлинг автомобилей</a>
            </li>
            <li className={styles.nav_recall}>
              <a href="/">Галерея работ</a>
            </li>
          </ul>
          <button>
            <img src={navMenu} alt="menu" />
          </button>
        </nav>
        <div className={styles.mainContent}>
          <h1>CAR MUSC</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci
            urna amet penatibus.
          </p>
          <button className={styles.CustomBtn}>Наши услуги</button>
        </div>
      </div>
      <div className={styles.Headerfooter}>
        <div className={styles.Headerfooter_contet1}>
          <h3>адрес:</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </div>
        <div className={styles.Headerfooter_contet2}>
          <h3>телефон:</h3>
          <p>8 (812) 123-45-67{<br />}8-911-123-45-67</p>
        </div>
        <div className={styles.Headerfooter_contet3}>
          <h3>Режим работы:</h3>
          <p>пн-пт : 10:00 - 20:00{<br />}сб-вск : 12:00 - 20:00</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
