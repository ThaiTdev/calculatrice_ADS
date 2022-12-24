import styles from "./Footer.module.scss";
// this component is my form
const Footer = () => {
  return (
    <div
      className={`d-flex flex-row justify-content-center align-items-center p-20  ${styles.container}`}
    >
      {/* <p>Copyright 2022 ZaragozaDorian&ThaiThierry, Inc</p> */}
      <p>Copyright 2022 ThaiThierry, Inc</p>
    </div>
  );
};

export default Footer;
