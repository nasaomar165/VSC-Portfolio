import { Fragment, useState } from "react";
import { SidebarButton } from "../../components/SidebarButton";
import { Tabs } from "../../containers/Tabs";
import { menuItems } from "./menuItems";
import Logo from "../../assets/images/logo.png";
import DoubleArrow from "../../assets/icons/double-arrow.svg";
import { ActionInterface } from "../../globalTypes";

interface LayoutProps {
  dispatch: React.Dispatch<ActionInterface>;
}

const Layout: React.FC<LayoutProps> = ({ children, dispatch }): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const handleToggle = () => setIsSidebarOpen((prev) => !prev);
  const handleRouting = (route: string) =>
    dispatch({ type: "ROUTE", payload: route });

  return (
    <Fragment>
      <header className="header">
        <nav className="header__navbar">
          <button className="header__logo--icon">
            <img src={Logo} alt="" />
          </button>

          <button className="header__logo--arrows" onClick={handleToggle}>
            <img src={DoubleArrow} alt="" />
          </button>

          <ul className="header__menu">
            {menuItems.map((menu, index) => {
              return (
                <li className="menu-items" key={index}>
                  <span>{menu.title}</span>
                </li>
              );
            })}
          </ul>
        </nav>

        <span className="header__file-title">
          Omar Ibrahim-master - Visual Studio Code
        </span>

        <div className="header__window-btns">
          <button><title>Minimize</title></button>
          <button><title>Maximize</title></button>
          <button><title>Exit</title></button>
        </div>
      </header>

      <main className={`main ${isSidebarOpen && "open"}`}>
        <section className="main__sidebar">
          <div>
            <SidebarButton route="/" onclick={handleRouting}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <title>Home</title>
                <path d="M13.968 3.76l-2.976-2.96c-0.256-0.256-0.576-0.385-0.928-0.385l-4.895-0.016c0 0 0 0 0 0-0.352 0-0.689 0.144-0.944 0.385-0.239 0.256-0.385 0.592-0.385 0.944v0.88h-0.88c-0.352 0-0.688 0.144-0.944 0.385s-0.385 0.576-0.385 0.944v10.352c0 0.736 0.592 1.327 1.327 1.327h7.872c0.736 0 1.327-0.592 1.327-1.327v-0.88h0.88c0.736 0 1.327-0.592 1.327-1.327v-7.377c-0.016-0.352-0.144-0.689-0.399-0.944zM10.752 1.76l2.24 2.24h-2.016c-0.112 0-0.225-0.096-0.225-0.224v-2.016zM11.296 14.272c0 0.256-0.208 0.464-0.464 0.464h-7.856c-0.256 0-0.464-0.208-0.464-0.464v-10.352c0-0.128 0.048-0.239 0.144-0.32 0.081-0.096 0.208-0.144 0.32-0.144h0.88v8.608c0 0.736 0.592 1.327 1.327 1.327h6.129v0.88zM13.040 12.544h-7.872c-0.256 0-0.464-0.208-0.464-0.464v-10.352c0-0.128 0.048-0.239 0.144-0.336 0.079-0.081 0.208-0.128 0.32-0.128 0 0 0 0 0 0l4.72 0.016v2.528c0 0.592 0.48 1.072 1.072 1.072h2.528v7.2c0.016 0.256-0.192 0.464-0.448 0.464z"></path>
              </svg>
            </SidebarButton>
            <SidebarButton route="education" onclick={handleRouting}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <title>Education</title>
                <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
              </svg>
            </SidebarButton>
            <SidebarButton route="projects" onclick={handleRouting}>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 522.468 522.469"
              >
                <title>Projects</title>
                <g>
                  <g>
                    <path d="M325.762,70.513l-17.706-4.854c-2.279-0.76-4.524-0.521-6.707,0.715c-2.19,1.237-3.669,3.094-4.429,5.568L190.426,440.53c-0.76,2.475-0.522,4.809,0.715,6.995c1.237,2.19,3.09,3.665,5.568,4.425l17.701,4.856c2.284,0.766,4.521,0.526,6.71-0.712c2.19-1.243,3.666-3.094,4.425-5.564L332.042,81.936c0.759-2.474,0.523-4.808-0.716-6.999C330.088,72.747,328.237,71.272,325.762,70.513z" />
                    <path d="M166.167,142.465c0-2.474-0.953-4.665-2.856-6.567l-14.277-14.276c-1.903-1.903-4.093-2.857-6.567-2.857s-4.665,0.955-6.567,2.857L2.856,254.666C0.95,256.569,0,258.759,0,261.233c0,2.474,0.953,4.664,2.856,6.566l133.043,133.044c1.902,1.906,4.089,2.854,6.567,2.854s4.665-0.951,6.567-2.854l14.277-14.268c1.903-1.902,2.856-4.093,2.856-6.57c0-2.471-0.953-4.661-2.856-6.563L51.107,261.233l112.204-112.201C165.217,147.13,166.167,144.939,166.167,142.465z" />
                    <path d="M519.614,254.663L386.567,121.619c-1.902-1.902-4.093-2.857-6.563-2.857c-2.478,0-4.661,0.955-6.57,2.857l-14.271,14.275c-1.902,1.903-2.851,4.09-2.851,6.567s0.948,4.665,2.851,6.567l112.206,112.204L359.163,373.442c-1.902,1.902-2.851,4.093-2.851,6.563c0,2.478,0.948,4.668,2.851,6.57l14.271,14.268c1.909,1.906,4.093,2.854,6.57,2.854c2.471,0,4.661-0.951,6.563-2.854L519.614,267.8c1.903-1.902,2.854-4.096,2.854-6.57C522.468,258.755,521.517,256.565,519.614,254.663z" />
                  </g>
                </g>
              </svg>
            </SidebarButton>

            <SidebarButton route="github" onclick={handleRouting}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="mdi-git"
                viewBox="0 0 24 24"
              >
                <title>Github</title>
                <path d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
              </svg>
            </SidebarButton>

           
        

            <SidebarButton route="contact" onclick={handleRouting}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <title>Contact</title>
                <g id="mail">
                  <path d="M29,6H3L2.92,6a.78.78,0,0,0-.21,0l-.17.07a.65.65,0,0,0-.15.1.67.67,0,0,0-.15.14l-.06.06a.36.36,0,0,0,0,.09,1.08,1.08,0,0,0-.08.19A1.29,1.29,0,0,0,2,6.9S2,7,2,7V25a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V7A1,1,0,0,0,29,6ZM16,14.81,6.2,8H27.09ZM4,24V8.91l11.43,7.91,0,0a1.51,1.51,0,0,0,.18.09l.08,0A1.09,1.09,0,0,0,16,17h0a1,1,0,0,0,.41-.1l.07,0,0,0L28,9.79V24Z" />
                </g>
              </svg>
            </SidebarButton>
          </div>

          <div>
            <SidebarButton route="user" onclick={handleRouting}>
              <svg
                data-name="Layer 1"
                id="Layer_1"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>User</title>
                <path d="M24,21A10,10,0,1,1,34,11,10,10,0,0,1,24,21ZM24,5a6,6,0,1,0,6,6A6,6,0,0,0,24,5Z" />
                <path d="M42,47H6a2,2,0,0,1-2-2V39A16,16,0,0,1,20,23h8A16,16,0,0,1,44,39v6A2,2,0,0,1,42,47ZM8,43H40V39A12,12,0,0,0,28,27H20A12,12,0,0,0,8,39Z" />
              </svg>
            </SidebarButton>

            <SidebarButton route="settings" onclick={handleRouting}>
              <svg
                data-name="Livello 1"
                id="Livello_1"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Settings</title>
                <path d="M64,39A25,25,0,1,0,89,64,25,25,0,0,0,64,39Zm0,44A19,19,0,1,1,83,64,19,19,0,0,1,64,83Z" />
                <path d="M121,48h-8.93a1,1,0,0,1-.94-.68,49.9,49.9,0,0,0-2-4.85,1,1,0,0,1,.18-1.15L115.62,35a7,7,0,0,0,0-9.9L102.89,12.38a7,7,0,0,0-9.9,0l-6.31,6.31a1,1,0,0,1-1.15.18,49.76,49.76,0,0,0-4.85-2,1,1,0,0,1-.68-.94V7a7,7,0,0,0-7-7H55a7,7,0,0,0-7,7v8.93a1,1,0,0,1-.68.94,49.9,49.9,0,0,0-4.85,2,1,1,0,0,1-1.15-.18L35,12.38a7,7,0,0,0-9.9,0L12.38,25.11a7,7,0,0,0,0,9.9l6.31,6.31a1,1,0,0,1,.18,1.15,49.76,49.76,0,0,0-2,4.85,1,1,0,0,1-.94.68H7a7,7,0,0,0-7,7V73a7,7,0,0,0,7,7h8.93a1,1,0,0,1,.94.68,49.9,49.9,0,0,0,2,4.85,1,1,0,0,1-.18,1.15L12.38,93a7,7,0,0,0,0,9.9l12.73,12.73a7,7,0,0,0,9.9,0l6.31-6.31a1,1,0,0,1,1.15-.18,49.76,49.76,0,0,0,4.85,2,1,1,0,0,1,.68.94V121a7,7,0,0,0,7,7H73a7,7,0,0,0,7-7v-8.93a1,1,0,0,1,.68-.94,49.9,49.9,0,0,0,4.85-2,1,1,0,0,1,1.15.18L93,115.62a7,7,0,0,0,9.9,0l12.73-12.73a7,7,0,0,0,0-9.9l-6.31-6.31a1,1,0,0,1-.18-1.15,49.76,49.76,0,0,0,2-4.85,1,1,0,0,1,.94-.68H121a7,7,0,0,0,7-7V55A7,7,0,0,0,121,48Zm1,25a1,1,0,0,1-1,1h-8.93a7,7,0,0,0-6.6,4.69,43.9,43.9,0,0,1-1.76,4.26,7,7,0,0,0,1.35,8l6.31,6.31a1,1,0,0,1,0,1.41L98.65,111.38a1,1,0,0,1-1.41,0l-6.31-6.31a7,7,0,0,0-8-1.35,43.88,43.88,0,0,1-4.27,1.76,7,7,0,0,0-4.68,6.6V121a1,1,0,0,1-1,1H55a1,1,0,0,1-1-1v-8.93a7,7,0,0,0-4.69-6.6,43.9,43.9,0,0,1-4.26-1.76,7,7,0,0,0-8,1.35l-6.31,6.31a1,1,0,0,1-1.41,0L16.62,98.65a1,1,0,0,1,0-1.41l6.31-6.31a7,7,0,0,0,1.35-8,43.88,43.88,0,0,1-1.76-4.27A7,7,0,0,0,15.93,74H7a1,1,0,0,1-1-1V55a1,1,0,0,1,1-1h8.93a7,7,0,0,0,6.6-4.69,43.9,43.9,0,0,1,1.76-4.26,7,7,0,0,0-1.35-8l-6.31-6.31a1,1,0,0,1,0-1.41L29.35,16.62a1,1,0,0,1,1.41,0l6.31,6.31a7,7,0,0,0,8,1.35,43.88,43.88,0,0,1,4.27-1.76A7,7,0,0,0,54,15.93V7a1,1,0,0,1,1-1H73a1,1,0,0,1,1,1v8.93a7,7,0,0,0,4.69,6.6,43.9,43.9,0,0,1,4.26,1.76,7,7,0,0,0,8-1.35l6.31-6.31a1,1,0,0,1,1.41,0l12.73,12.73a1,1,0,0,1,0,1.41l-6.31,6.31a7,7,0,0,0-1.35,8,43.88,43.88,0,0,1,1.76,4.27,7,7,0,0,0,6.6,4.68H121a1,1,0,0,1,1,1Z" />
              </svg>
            </SidebarButton>
          </div>
        </section>

        <section className="main__page">
          <Tabs />

          {children}
        </section>
      </main>

      <footer className="footer">
        <section className="footer__section" title="Errors: 0 , Infos: 10">
          <article>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g data-name="1" id="_1">
                <path d="M257,461.46c-114,0-206.73-92.74-206.73-206.73S143,48,257,48s206.73,92.74,206.73,206.73S371,461.46,257,461.46ZM257,78C159.55,78,80.27,157.28,80.27,254.73S159.55,431.46,257,431.46s176.73-79.28,176.73-176.73S354.45,78,257,78Z" />
                <path d="M342.92,358a15,15,0,0,1-10.61-4.39L160.47,181.76a15,15,0,1,1,21.21-21.21L353.53,332.4A15,15,0,0,1,342.92,358Z" />
                <path d="M171.07,358a15,15,0,0,1-10.6-25.6L332.31,160.55a15,15,0,0,1,21.22,21.21L181.68,353.61A15,15,0,0,1,171.07,358Z" />
              </g>
            </svg>
            <p>0</p>
          </article>

          <article>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                d="M 16 3.21875 L 15.125 4.71875 L 3.125 25.5 L 2.28125 27 L 4 27 L 28 27 L 29.71875 27 L 28.875 25.5 L 16.875 4.71875 L 16 3.21875 z M 16 7.21875 L 26.25 25 L 5.75 25 L 16 7.21875 z M 15 14 L 15 20 L 17 20 L 17 14 L 15 14 z M 15 21 L 15 23 L 17 23 L 17 21 L 15 21 z"
                color="#000"
                overflow="visible"
              />
            </svg>
            <p>0</p>
          </article>
          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
            </svg>
            <p>11</p>
          </article>
        </section>

        <section className="footer__section">
          <article title="Space Indentation" className="footer__article">
            <p>Spaces:2</p>
          </article>
          <article
            title="Select End of Line Sequence"
            className="footer__article"
          >
            <p>CRLF</p>
          </article>
          <article title="Select Encoding" className="footer__article">
            <p>UTF-8</p>
          </article>
          <article title="Click to run live server" className="footer__article">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 0 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z" />
            </svg>
            <p>Go Live</p>
          </article>

          <article title="Formatting completed" className="footer__article">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
            </svg>
            <p>Prettier</p>
          </article>

          <article title="1 New Notification" className="footer__article">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <title />
              <g data-name="Layer 2" id="Layer_2">
                <path d="M16,29a4,4,0,0,1-4-4,1,1,0,0,1,1-1h6a1,1,0,0,1,1,1A4,4,0,0,1,16,29Zm-1.73-3a2,2,0,0,0,3.46,0Z" />
                <path d="M18,7H14a1,1,0,0,1-1-1,3,3,0,0,1,6,0A1,1,0,0,1,18,7ZM16,5h0Z" />
                <path d="M27,26H5a1,1,0,0,1-1-1,7,7,0,0,1,3-5.75V14a9,9,0,0,1,8.94-9h.11a9,9,0,0,1,9,9v5.25A7,7,0,0,1,28,25h0A1,1,0,0,1,27,26ZM6.1,24H25.9a5,5,0,0,0-2.4-3.33,1,1,0,0,1-.5-.87V14A7,7,0,1,0,9,14v5.8a1,1,0,0,1-.5.87A5,5,0,0,0,6.1,24Z" />
              </g>
              <g id="frame">
                <rect height="8" width="8" />
              </g>
            </svg>
          </article>
        </section>
      </footer>
    </Fragment>
  );
};

export { Layout };
