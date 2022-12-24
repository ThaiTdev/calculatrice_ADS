import Header from "./componants/header/Header";
import Footer from "./componants/footer/Footer";
import Main from "./componants/main/Main";
import style from "./App.module.scss";
import Lead from "./componants/main/inputs/Lead";
import { useState } from "react";

function App() {
  //switch to the view 'coût part lead
  const [selectedLead, setSelectedLead] = useState(false);

  //allows you to pass the 'cost per lead' values manually.
  const [valideLead, setvalideLead] = useState(true);

  const [selectedInputLead1, setSelectedInputLead1] = useState(""); // conversion rate "scenario 1"
  const [selectedInputLead2, setSelectedInputLead2] = useState(""); // conversion rate "scenario 2"
  const [selectedInputLead3, setSelectedInputLead3] = useState(""); // conversion rate "scenario 3"

  //this function modifies the value of my state variable 'selectedLead'
  function changeLead() {
    setSelectedLead(!selectedLead);
    console.log(valideLead);
  }
  //this function changes the value of my 'validLead' state variable to true
  function changeValideLead() {
    setvalideLead(true);
    console.log(valideLead);
  }
  //this function changes the value of my 'validLead' state variable to false
  function changeValideLeadTrue() {
    setvalideLead(false);
    console.log(valideLead);
  }

  return (
    <div className={`d-flex flex-column ${style.container}  `}>
      <Header />
      {selectedLead ? (
        <Lead
          changeLead={changeLead}
          setSelectedInputLead1={setSelectedInputLead1}
          setSelectedInputLead2={setSelectedInputLead2}
          setSelectedInputLead3={setSelectedInputLead3}
          changeValideLead={changeValideLead}
        />
      ) : (
        <Main
          changeLead={changeLead}
          selectedInputLead1={selectedInputLead1}
          selectedInputLead2={selectedInputLead2}
          selectedInputLead3={selectedInputLead3}
          setSelectedLead={setSelectedLead}
          valideLead={valideLead}
          setvalideLead={setvalideLead}
          changeValideLeadTrue={changeValideLeadTrue}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
