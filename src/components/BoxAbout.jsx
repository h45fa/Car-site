import React from "react";
import kubok from "../img/kubok.svg";
import styles from "../styles/BoxAbout.module.scss";

const BoxAbout = () => {
  return (
    <div className={styles.BoxAbout}>
      <div className={styles.BoxAboutBorder}>
        <div className={styles.BoxTitle}>
          <h2>наши достижения от кубка россии до чемпионатов мира</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
            tincidunt aliquam tincidunt pretium sodales. Tristique odio
            pellentesque et tincidunt posuere arcu purus lobortis risus. Urna,
            ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus
            tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis
            pretium, volutpat.{" "}
          </p>
        </div>
        <div className={styles.boxcontent}>
          <div className={styles.boxcontent_inside1}>
            <div>
              <h3>#1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div>
              <h3>#2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div>
              <h3>#3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div>
              <h3>#4</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
          </div>
          <div className={styles.boxcontent_inside2}>
            <div>
              <h3>#5</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div>
              <h3>#6</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div>
              <h3>#7</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div>
              <h3>
                <img src={kubok} alt="kubok" />
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxAbout;
