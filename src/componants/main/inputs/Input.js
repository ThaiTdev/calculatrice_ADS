import styles from "./Input.module.scss";

// this component is my form
const Input = ({
  // here i get my properties
  data,
  setSelected,
  setSelectedInput1,
  setSelectedInput2,
  setSelectedInput3,
  setSelectedInput4,
  changeValideLeadTrue,
  changeLead,
}) => {
  function handleInputSelect(e) {
    // here I retrieve the element of the array that matches with the id retrieved from the input
    const id = +e.target.value;
    const newData = data.find((element) => element.id === id);
    setSelected(newData);
    changeValideLeadTrue();
  }
  function handleInput1(e) {
    //get value input count
    let value = +e.target.value;
    setSelectedInput1(value);
  }
  function handleInput2(e) {
    //get value input prix
    let value = +e.target.value;
    setSelectedInput2(value);
  }
  function handleInput3(e) {
    //get value input budjet
    let value = +e.target.value;
    setSelectedInput3(value);
  }
  function handleInput4(e) {
    //get value input taux
    let value = +e.target.value;
    setSelectedInput4(value);
  }

  function handleClickLead(e) {
    e.preventDefault();
    changeLead();
  }

  return (
    <>
      <form className="d-flex flex-column  mr-10 ml-10 ">
        <label className="mb-5" htmlFor="pet-select">
          choisir votre categorie
        </label>
        <select
          onInput={handleInputSelect}
          className="mb-20"
          name="categories"
          id="categories"
        >
          {data.map((elements) => (
            <option key={elements.id} value={elements.id}>
              {elements.label}
            </option>
          ))}
        </select>
        <button onClick={handleClickLead} className="btn btn-primary mb-20 ">
          coût par lead
        </button>

        <div className="d-flex flex-column">
          <label className="mb-5" htmlFor="Cout">
            Coût Agence Marketing
          </label>
          <input
            name="Count"
            onInput={handleInput1}
            type="number_format"
            id="Count"
            maxLength="7"
            minLength="1"
          />
          <label className="mb-5" htmlFor="Prix">
            Prix du produit / Service
          </label>
          <input
            name="Prix"
            onInput={handleInput2}
            type="number_format"
            id="Prix"
            maxLength="7"
            minLength="1"
          />
          <label className="mb-5" htmlFor="Budjet">
            Budget Ads (mensuel)
          </label>
          <input
            name="Budjet"
            onInput={handleInput3}
            type="number_format"
            id="Budjet"
            maxLength="7"
            minLength="1"
          />
          <label className="mb-5" htmlFor="Taux">
            Taux de conversion(%)
          </label>
          <input
            name="Taux"
            onInput={handleInput4}
            type="number_format"
            id="Taux"
            minLength="1"
            maxLength="2"
          />
        </div>
      </form>
    </>
  );
};

export default Input;
