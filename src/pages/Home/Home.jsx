import myImg from "../../assets/телефон-собаки-24767268.webp";
import css from "./Home.module.css";

export default function Home() {
  return (
    <div className={css.container}>
      <img src={myImg} alt="Описание изображения" className={css.image} />
      <div className={css.textContainer}>
        <h1 className={css.fadeInText}>PHONEBOOK</h1>
      </div>
    </div>
  );
}
