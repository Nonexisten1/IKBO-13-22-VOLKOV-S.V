import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import "./App.css";

function Example2() {
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
        <h1>Система умный дом</h1>
        <h2>Что такое умный дом?</h2>
        <p style={{ marginLeft: "25px" }}>
          <strong>Smart home</strong> — высокотехнологичная система, которая
          позволяет полностью автоматизировать все домашние процессы. В ее
          рамках имеющиеся коммуникации объединяются в единое целое, а
          управление ими осуществляется с помощью искусственного интеллекта. Его
          можно настроить и запрограммировать в соответствии с одним или
          несколькими сценариями, а главная задача «умного дома» заключается в
          обеспечении безопасности и комфорта пользователей.
        </p>
        <h2>Преимущества системы</h2>
        <p style={{ marginLeft: "25px" }}>
          <li>
            <strong>
              Установка и контроль оптимального температурного режима
            </strong>
          </li>
          <li>
            <strong>
              Настройка автоматического освещения для разного времени суток
            </strong>
          </li>
          <li>
            <strong>Управление системами дополнительного обогрева</strong>
          </li>
          <li>
            <strong>
              Контроль работы домашних приборов и инженерных систем
            </strong>
          </li>
          <li>
            <strong>Предотвращение утечек газа и воды</strong>
          </li>
        </p>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ borderRadius: "1.75em" }}
            src="https://iks.ru/storage/app/media/news/Umnuy%20dom/smart%20home.png"
            width="1024"
            height="576"
          />
        </div>
        <h2>Основные элементы системы</h2>
        <p style={{ marginLeft: "25px" }}>
          <li>
            <strong>Контроллер</strong>: Основной элемент, которые объединяет
            все прочие блоки в единое целое. Именно контроллер оценивает работу
            компонентов, учитывает условия окружающей среды и раздает
            соответствующие команды отдельным устройствам;
          </li>
          <li>
            <strong>Датчики</strong>: Приборы, которые получают данные о
            состоянии техники и происходящем вокруг. Далее информация передается
            контроллеру. На основании этих сведений выполняются те или иные
            действия;
          </li>
          <li>
            <strong>Актуаторы</strong>: Эти модули отвечают за автоматизацию
            домашних процессов и выполняют полученные команды. Такими
            устройствами являются реле, светодиодные блоки, диммеры.
          </li>
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
export default Example2;
