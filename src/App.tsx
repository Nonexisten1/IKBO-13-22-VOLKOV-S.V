import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import reactSelect from "react-select";

function App() {
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
        <h1>Интернет вещей</h1>
        <h2>Что такое Интернет вещей?</h2>
        <p>
          Интернет вещей (IoT) - это сеть устройств, соединенных между собой и с
          интернетом, которые могут обмениваться данными и управляться удаленно.
        </p>

        <h3>Преимущества IoT:</h3>
        <ul itemType="circle">
          <li>
            <strong>Увеличение эффективности</strong>: Связанные устройства
            могут автоматизировать процессы и улучшить производительность.
          </li>
          <li>
            <strong>Экономия ресурсов</strong>: IoT может помочь экономить
            энергию и ресурсы.
          </li>
          <li>
            <strong>Улучшенная безопасность</strong>: Мониторинг в реальном
            времени и предупреждения об опасностях.
          </li>
          <li>
            <strong>Комфорт и удобство</strong>: Умные дома и устройства
            обеспечивают комфорт и удобство пользователей.
          </li>
          <li>
            <strong>Инновации</strong>: IoT способствует развитию новых
            технологий и приложений.
          </li>
        </ul>

        <p>
          Подробнее о
          <a
            target="_blank"
            href="https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82_%D0%B2%D0%B5%D1%89%D0%B5%D0%B9"
          >
            {" "}
            Интернете вещей
          </a>
          .
        </p>

        <div style={{ textAlign: "center" }}>
          <img
            style={{ borderRadius: "1.75em" }}
            src="https://auroraevernet.ru/upload/medialibrary/ab4/q3dy2sgaz9z99ott83h7vs264q5rvdfy.jpg"
            alt="Изображение-карта"
            useMap="#imagemap"
            width="1024"
            height="576"
          />
          <map name="imagemap">
            <area
              target="_blank"
              alt="холодильник"
              title="холодильник"
              href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BC%D0%B0%D1%80%D1%82-%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA"
              coords="905,226,903,70,946,43,997,74,998,226,955,251"
              shape="poly"
            />
            <area
              target="_blank"
              alt="дом"
              title="дом"
              href="https://msk.tele2.ru/journal/article/internet-of-things-for-home"
              coords="442,491,438,413,554,342,604,407,597,481,511,531"
              shape="poly"
            />
            <area
              target="_blank"
              alt="тачка"
              title="тачка"
              href="https://www.biz4intellia.com/blog/iot-applications-in-automotive-industry/"
              coords="143,506,96,495,80,474,85,450,111,427,130,400,177,376,201,376,222,389,238,400,259,418,263,432,245,455"
              shape="poly"
            />
            <area
              target="_blank"
              alt="стиральная машина"
              title="стиральная машина"
              href="https://bosch-iot-suite.com/iot-devices/bosch-washing-machines-dryers/"
              coords="65,399,13,371,13,284,78,244,129,273,131,363"
              shape="poly"
            />
            <area
              target="_blank"
              alt="роутер"
              title="роутер"
              href="https://aws.amazon.com/ru/what-is/iot/"
              coords="465,134,541,89,594,121,525,169"
              shape="poly"
            />
            <area
              target="_blank"
              alt="ноутбук"
              title="ноутбук"
              href="https://www.arm.com/glossary/iot-devices#:~:text=IoT%20devices%20are%20pieces%20of,the%20internet%20or%20other%20networks."
              coords="630,142,689,104,689,32,775,82,776,153,719,193"
              shape="poly"
            />
          </map>
        </div>

        <div>
          <h2>Термины IoT</h2>
          <dl>
            <dt>
              <strong>Датчик</strong>
            </dt>
            <dd>Устройство для сбора данных из окружающей среды.</dd>

            <dt>
              <strong>Микроконтроллер</strong>
            </dt>
            <dd>Маленький вычислительный модуль для управления устройством.</dd>

            <dt>
              <strong>Смарт-город</strong>
            </dt>
            <dd>Город, оптимизированный с использованием IoT-технологий.</dd>

            <dt>
              <strong>М2М (Machine-to-Machine)</strong>
            </dt>
            <dd>
              Технология для взаимодействия между устройствами без участия
              человека.
            </dd>

            <dt>
              <strong>Облако данных</strong>
            </dt>
            <dd>Сервер для хранения и анализа данных IoT.</dd>
          </dl>
        </div>

        <p>
          Свяжитесь с нами по телефону:
          <a href="tel:+123456789"> +1 (234) 567-89</a>
        </p>

        <p>
          Напишите нам на почту:
          <a href="mailto:info@example.com"> info@example.com</a>
        </p>
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
}

export default App;
