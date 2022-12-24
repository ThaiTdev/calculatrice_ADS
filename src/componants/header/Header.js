import { useState } from "react";
import styles from "./Header.module.scss";
import HeaderMenu from "./HeaderMenu";
// this component is my Headeer
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`d-flex flex-row align-items-center ${styles.header}`}>
      <div className="flex-fill">
        <img src="" alt="logo" />
      </div>
      <ul className={styles.HeaderNav}>
        <button className="btn btn-reverse-primary">Envoi mail</button>
        <button className="btn btn-primary ml-10">Déconnexion</button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars mr-15 ${styles.menuBar}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="click"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
};

export default Header;
