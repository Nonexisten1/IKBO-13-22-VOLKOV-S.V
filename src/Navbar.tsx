import { Link } from "react-router-dom";
import { Transition, Menu } from "@headlessui/react";
import { useState } from "react";
import "./App.css";
import { act } from "react-dom/test-utils";

function Navbar() {
  const [isShowing, setShowing] = useState(false);
  //document.getElementById("theme-toggle")?.addEventListener('click', () => {document.body.classList.toggle('white-theme')})
  return (
    <>
      <div className="Menu">
        <Link to={"/"}>
          <button className="barButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="currentColor"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </button>
        </Link>
        <Link to={"/example"}>
          <button className="barButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="currentColor"
            >
              <path d="M320-704 200-824l56-56 120 120-56 56Zm320 0-56-56 120-120 56 56-120 120Zm-200-56v-200h80v200h-80ZM160 0q-17 0-28.5-11.5T120-40v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800 0h-40q-17 0-28.5-11.5T720-40v-40H240v40q0 17-11.5 28.5T200 0h-40Zm72-440h496l-42-120H274l-42 120Zm-32 280v-200 200Zm100-40q25 0 42.5-17.5T360-260q0-25-17.5-42.5T300-320q-25 0-42.5 17.5T240-260q0 25 17.5 42.5T300-200Zm360 0q25 0 42.5-17.5T720-260q0-25-17.5-42.5T660-320q-25 0-42.5 17.5T600-260q0 25 17.5 42.5T660-200Zm-460 40h560v-200H200v200Z" />
            </svg>
          </button>
        </Link>
        <Link to={"/example2"}>
          <button className="barButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="currentColor"
            >
              <path d="M240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q14 0 26 3t23 8l57-71q-28-31-39-70t-5-78l-81-27q-17 25-43 40t-58 15q-50 0-85-35T0-580q0-50 35-85t85-35q50 0 85 35t35 85v8l81 28q20-36 53.5-61t75.5-32v-87q-39-11-64.5-42.5T360-840q0-50 35-85t85-35q50 0 85 35t35 85q0 42-26 73.5T510-724v87q42 7 75.5 32t53.5 61l81-28v-8q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-32 0-58.5-15T739-515l-81 27q6 39-5 77.5T614-340l57 70q11-5 23-7.5t26-2.5q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-20 6.5-38.5T624-232l-57-71q-41 23-87.5 23T392-303l-56 71q11 15 17.5 33.5T360-160q0 50-35 85t-85 35ZM120-540q17 0 28.5-11.5T160-580q0-17-11.5-28.5T120-620q-17 0-28.5 11.5T80-580q0 17 11.5 28.5T120-540Zm120 420q17 0 28.5-11.5T280-160q0-17-11.5-28.5T240-200q-17 0-28.5 11.5T200-160q0 17 11.5 28.5T240-120Zm240-680q17 0 28.5-11.5T520-840q0-17-11.5-28.5T480-880q-17 0-28.5 11.5T440-840q0 17 11.5 28.5T480-800Zm0 440q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm240 240q17 0 28.5-11.5T760-160q0-17-11.5-28.5T720-200q-17 0-28.5 11.5T680-160q0 17 11.5 28.5T720-120Zm120-420q17 0 28.5-11.5T880-580q0-17-11.5-28.5T840-620q-17 0-28.5 11.5T800-580q0 17 11.5 28.5T840-540ZM480-840ZM120-580Zm360 120Zm360-120ZM240-160Zm480 0Z" />
            </svg>
          </button>
        </Link>
        <Link to={"/example3"}>
          <button className="barButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="currentColor"
            >
              <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
            </svg>
          </button>
        </Link>
        <Menu>
          <Menu.Button
            className={"dropButton"}
            onClick={() => setShowing((isShowing) => !isShowing)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="currentColor"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </Menu.Button>
          <Transition
            appear={true}
            show={isShowing}
            enter="transition-opacity"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items className={"menuItems"}>
              <Menu.Item>
                <Menu.Button
                  className={"barButton"}
                  onClick={() => setShowing((isShowing) => !isShowing)}
                >
                  <a className={"usualButton"}>Item</a>
                </Menu.Button>
              </Menu.Item>
              <Menu.Item>
                <Menu.Button
                  className={"barButton"}
                  id="theme-toggle"
                  onClick={() => setShowing((isShowing) => !isShowing)}
                >
                  <a className={"usualButton"}>Theme</a>
                </Menu.Button>
              </Menu.Item>
              <Menu.Button
                className={"barButton"}
                onClick={() => setShowing((isShowing) => !isShowing)}
              >
                <a className={"usualButton"}>Item</a>
              </Menu.Button>
              <Menu.Button
                className={"barButton"}
                onClick={() => setShowing((isShowing) => !isShowing)}
              >
                <a className={"usualButton"}>Item</a>
              </Menu.Button>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
}

export default Navbar;
