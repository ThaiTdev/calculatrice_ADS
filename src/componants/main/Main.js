import styles from "./Main.module.scss";
import Input from "./inputs/Input";
import Table from "./tables/Table";
import Data from "../../data/leadData";
import { useState } from "react";

const Main = ({
  changeLead,
  selectedInputLead1,
  selectedInputLead2,
  selectedInputLead3,
  setvalideLead,
  changeValideLeadTrue,
  valideLead,
}) => {
  const [selected, setSelected] = useState(0); // coût par lead
  const [selectedInput1, setSelectedInput1] = useState(0); // prix du produit
  const [selectedInput2, setSelectedInput2] = useState(""); // prix du produit
  const [selectedInput3, setSelectedInput3] = useState(""); // budget ads (mensuel)
  const [selectedInput4, setSelectedInput4] = useState(""); // taux de conversion

  return (
    <main className={`d-flex flex-fill`}>
      <div className={`container p-20 ${styles.content}`}>
        <h1 className="my-10 underline">Calculatrice ADS</h1>
        <div
          className={`d-flex flex-row justify-content-around  align-items-center card p-20 ${styles.contentCard}`}
        >
          <Input
            data={Data}
            setSelected={setSelected}
            setSelectedInput1={setSelectedInput1}
            setSelectedInput2={setSelectedInput2}
            setSelectedInput3={setSelectedInput3}
            setSelectedInput4={setSelectedInput4}
            changeLead={changeLead}
            changeValideLeadTrue={changeValideLeadTrue}
            setvalideLead={setvalideLead}
          />

          <Table
            selected={selected}
            selectedInput1={selectedInput1}
            selectedInput2={selectedInput2}
            selectedInput3={selectedInput3}
            selectedInput4={selectedInput4}
            valideLead={valideLead}
            selectedInputLead1={selectedInputLead1}
            selectedInputLead2={selectedInputLead2}
            selectedInputLead3={selectedInputLead3}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
