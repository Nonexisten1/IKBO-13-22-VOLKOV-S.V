import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import "./App.css";

function Example() {
  const [isVisible, setVisible] = useState(true);
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar></Navbar>

      <div className="cart">
        <h1>Интернет вещей в автомобильной промышленности</h1>
        <strong>Современное автомобилестроение</strong>, пожалуй, является одной из самых
        новаторских отраслей промышленности.<br/> 
        <p>За последнее время, автомобиль с
        успехом превратился из механического чудовища, поглощающего нефтяные
        ресурсы, в компьютер, который эффективно управляет электрическим
        приводом. Также известны вполне успешные коммерческие образцы
        водородного автомобиля, например, у той же Toyota. Но многие согласятся,
        что при всем этом, романтика бензинового двигателя вряд ли когда-то
        умрет. <br></br>Стоит ли стремиться к новому, виден ли сейчас прогресс в отрасли?
        Можно заметить, что даже не ограниченный запас хода электромобилей и, в
        большинстве стран, не сформированная инфраструктура заправок, например,
        водородным топливом, вряд ли тормозит прогресс развития «умного авто». В
        основном, виною тому – это жесткие меры безопасности, что действительно
        очень важно для всех нас.</p>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://habrastorage.org/webt/iq/5s/ir/iq5sirelcfwftfylorbrsgpnkxs.jpeg"
            className="mapPic"
          />
        </div>
        С другой стороны, компьютерные сети и Интернет
        вплотную охватили весь мир, но при этом автомобиль и Интернет вещей
        (IoT) пока достаточно далекие друг от друга понятия. В предыдущей статье
        "Разъем диагностики OBD-II, как интерфейс для IoT" было высказано
        мнение, что фактически для любого автомобиля адаптер на базе интерфейса
        диагностики OBD-II, GPS-приемника, 3-х осевого датчика ускорений,
        совмещенного с гироскопом и, конечно, с выходом в Интернет, фактически
        решает задачу «подключенного авто» (Connected Car). <br></br>Далее – это не
        сколько технологии, а механизмы взаимодействия автомобиля и устройств
        IoT. В настоящей публикации хочется рассмотреть не сколько механизмы
        построения платформы IoT для участников дорожного движения или углубится
        в вопросы безопасности на дорогах, что несомненно важно, а просто
        рассмотреть, что уже есть в мире автопрома, применительно для других
        отраслей или своих разработок.
      </div>
      <div className="up">
        <button
          className="button"
          style={
            !isVisible ? { visibility: "hidden" } : { visibility: "visible" }
          }
          onClick={scrollTop}
        >
          <a
            href="#top"
            style={{ color: "currentColor", textDecoration: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="currentColor"
            >
              <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
            </svg>
          </a>
        </button>
      </div>
      <div className="cart">
        <footer>
          <p>&copy; 2023 Example Company. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};
export default Example;
