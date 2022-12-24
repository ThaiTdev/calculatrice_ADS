import styles from "./Lead.module.scss";

export default function Lead({
  changeLead,
  setSelectedInputLead1,
  setSelectedInputLead2,
  setSelectedInputLead3,
  changeValideLead,
}) {
  function handleClickLeadSelect(e) {
    e.preventDefault();
    changeLead();
    changeValideLead();
  }

  function handleInputLead1(e) {
    let value = +e.target.value;
    console.log(value);
    setSelectedInputLead1(value);
  }
  function handleInputLead2(e) {
    let value = +e.target.value;
    setSelectedInputLead2(value);
  }
  function handleInputLead3(e) {
    console.log(e.target.value);
    let value = +e.target.value;
    setSelectedInputLead3(value);
  }

  return (
    <div
      className={`d-flex flex-fill flex-column justify-content-center align-items-center ${styles.container}`}
    >
      <h2 className="mb-20">Chosisez vos Leads pour chaque Catégories</h2>
      <form className="d-flex flex-column align-items-center card">
        <label htmlFor="scenario1">Scénario N°1</label>
        <input
          onInput={handleInputLead1}
          name="scenario1"
          type="number_format"
          maxLength="7"
          minLength="1"
        />
        <label htmlFor="scenario2">Scénario N°2</label>
        <input
          onInput={handleInputLead2}
          name="scenario2"
          type="number_format"
          maxLength="3"
          minLength="1"
        />
        <label htmlFor="scenario3">Scénario N°3</label>
        <input
          onInput={handleInputLead3}
          name="scenario3"
          type="number_format"
          maxLength="3"
          minLength="1"
        />
        <button onClick={handleClickLeadSelect} className="btn btn-primary">
          valider
        </button>
      </form>
    </div>
  );
}
