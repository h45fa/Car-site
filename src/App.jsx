//components
import BoxAbout from "./components/BoxAbout";
import Header from "./components/Header";
//other
import telegram from "./img/telegram.svg";
import youtube from "./img/youtube.svg";
import vk from "./img/vk.svg";
import location from "./img/location.svg";
import phone from "./img/phone.svg";
import mail from "./img/mail.svg";
//styles
import styles from "./styles/Footer.module.scss";
import "./styles/reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BoxAbout />
      <section className={styles.footer}>
        <div>
          <h2>ответим на любой вопрос</h2>
          <div>
            <div className={styles.footer_content1}>
              <input type="text" placeholder="Имя"></input>
              <input type="text" placeholder="телефон"></input>
            </div>
            <div className={styles.footer_content2}>
              <input
                type="text"
                placeholder="Вопрос по дизайну, тюнингу и др."
              ></input>
              <ul>
                <li>
                  <a href="/">
                    <img src={telegram} alt="soc-icon" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={youtube} alt="soc-icon" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={vk} alt="soc-icon" />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_content3}>
              <button className={styles.FooterBtn}>Наши услуги</button>
              <div>
                <h4><img src={location} alt=""/> Eu faucibus et rutrum fringilla orci nunc</h4>
                <ul>
                  <li><img src={phone} alt=""/>8 (812) 123-45-67</li>
                  <li><img src={mail} alt=""/>test@test.ru</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
