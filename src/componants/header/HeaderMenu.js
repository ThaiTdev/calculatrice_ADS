import styles from "./HeaderMenu.module.scss";

export default function HeaderMenu() {
  return (
    <ul className={`card p-20  ${styles.headerMenu}`}>
      <li>Email</li>
      <li>Déconnexion</li>
    </ul>
  );
}
