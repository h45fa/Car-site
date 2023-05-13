import BoxAbout from "./components/BoxAbout";
import Header from "./components/Header";
import Carousel from "react-e"
import styles from "./styles/SliderSect.module.scss";
import "./styles/reset.css";
function App() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  return (
    <div className="App">
      <Header />
      <BoxAbout/>
      <section className={styles.sliderSec}>
      </section>
    </div>
  );
}

export default App;
