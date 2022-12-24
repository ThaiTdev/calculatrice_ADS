import styles from "./Table.module.scss";
// this component is my table
const Table = ({
  // here i get my properties
  selected,
  selectedInput1,
  selectedInput2,
  selectedInput3,
  selectedInput4,
  selectedInputLead1,
  selectedInputLead2,
  selectedInputLead3,
  valideLead,
}) => {
  //number of leads//
  const nbrLeads1 = selectedInput3 / selected.hight_lead_cost;
  const nbrLeads2 = selectedInput3 / selected.middle_lead_cost;
  const nbrLeads3 = selectedInput3 / selected.low_lead_cost;

  const nbrLeads4 = selectedInput3 / selectedInputLead1;
  const nbrLeads5 = selectedInput3 / selectedInputLead2;
  const nbrLeads6 = selectedInput3 / selectedInputLead3;

  console.log(selectedInput3);

  //conversion rate//
  const TauxDeConv = selectedInput4 * 1;

  //number of sale(s)//
  const nbrDeVente1 = (nbrLeads1 * (selectedInput4 * 1)) / 100;
  const nbrDeVente2 = (nbrLeads2 * (selectedInput4 * 1)) / 100;
  const nbrDeVente3 = (nbrLeads3 * (selectedInput4 * 1)) / 100;

  const nbrDeVente4 = (nbrLeads4 * (selectedInput4 * 1)) / 100;
  const nbrDeVente5 = (nbrLeads5 * (selectedInput4 * 1)) / 100;
  const nbrDeVente6 = (nbrLeads6 * (selectedInput4 * 1)) / 100;

  //product price//
  const prixDuProd = selectedInput2;

  //CA//
  const CA1 = nbrDeVente1 * prixDuProd;
  const CA2 = nbrDeVente2 * prixDuProd;
  const CA3 = nbrDeVente3 * prixDuProd;

  const CA4 = nbrDeVente4 * prixDuProd;
  const CA5 = nbrDeVente5 * prixDuProd;
  const CA6 = nbrDeVente6 * prixDuProd;

  //marketing agency cost//
  const CoutAgenceM = selectedInput1;

  //Roas//

  const roas1 = CA1 / (selectedInput3 + CoutAgenceM);
  const roas2 = CA2 / (selectedInput3 + CoutAgenceM);
  const roas3 = CA3 / (selectedInput3 + CoutAgenceM);

  const roas4 = CA4 / (selectedInput3 + CoutAgenceM);
  const roas5 = CA5 / (selectedInput3 + CoutAgenceM);
  const roas6 = CA6 / (selectedInput3 + CoutAgenceM);

  return (
    <div className="d-flex justify-content-center">
      <table className={styles.table}>
        <caption className="mb-10">Tableau de données</caption>
        <thead>
          <tr>
            <th>Scénario</th>
            <th>Scénario N°1</th>
            <th>Scénario N°2</th>
            <th>Scénario N°3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Niveau</td>
            <td>⭐</td>
            <td>⭐⭐</td>
            <td>⭐⭐⭐</td>
          </tr>

          {valideLead ? (
            <tr>
              <td>Coût par Lead</td>
              <td>{selectedInputLead1 ? selectedInputLead1 : 0}</td>
              <td>{selectedInputLead2 ? selectedInputLead2 : 0}</td>
              <td>{selectedInputLead3 ? selectedInputLead3 : 0}</td>
            </tr>
          ) : (
            <tr>
              <td>Coût par Lead</td>
              <td>{selected.hight_lead_cost ? selected.hight_lead_cost : 0}</td>
              <td>
                {selected.middle_lead_cost ? selected.middle_lead_cost : 0}
              </td>
              <td>{selected.low_lead_cost ? selected.low_lead_cost : 0}</td>
            </tr>
          )}

          {valideLead ? (
            <tr>
              <td>Nombre de Lead</td>
              <td>{nbrLeads4 ? nbrLeads4.toFixed(2) : 0}</td>
              <td>{nbrLeads5 ? nbrLeads5.toFixed(2) : 0}</td>
              <td>{nbrLeads6 ? nbrLeads6.toFixed(2) : 0}</td>
            </tr>
          ) : (
            <tr>
              <td>Nombre de Lead</td>
              <td>{nbrLeads1 ? nbrLeads1.toFixed(2) : 0}</td>
              <td>{nbrLeads2 ? nbrLeads2.toFixed(2) : 0}</td>
              <td>{nbrLeads3 ? nbrLeads3.toFixed(2) : 0}</td>
            </tr>
          )}

          <tr>
            <td>Taux de conversion en (%)</td>
            <td>{TauxDeConv}</td>
            <td>{TauxDeConv}</td>
            <td>{TauxDeConv}</td>
          </tr>

          {valideLead ? (
            <tr>
              <td>Nombre de vente(s)</td>
              <td>{nbrDeVente4 ? nbrDeVente4.toFixed(2) : 0}</td>
              <td>{nbrDeVente5 ? nbrDeVente5.toFixed(2) : 0}</td>
              <td>{nbrDeVente6 ? nbrDeVente6.toFixed(2) : 0}</td>
            </tr>
          ) : (
            <tr>
              <td>Nombre de vente(s)</td>
              <td>{nbrDeVente1 ? nbrDeVente1.toFixed(2) : 0}</td>
              <td>{nbrDeVente2 ? nbrDeVente2.toFixed(2) : 0}</td>
              <td>{nbrDeVente3 ? nbrDeVente3.toFixed(2) : 0}</td>
            </tr>
          )}

          {valideLead ? (
            <tr>
              <td>CA (€)</td>
              <td>{CA4 ? CA4.toFixed(2) : 0}</td>
              <td>{CA5 ? CA5.toFixed(2) : 0}</td>
              <td>{CA6 ? CA6.toFixed(2) : 0}</td>
            </tr>
          ) : (
            <tr>
              <td>CA (€)</td>
              <td>{CA1 ? CA1.toFixed(2) : 0}</td>
              <td>{CA2 ? CA2.toFixed(2) : 0}</td>
              <td>{CA3 ? CA3.toFixed(2) : 0}</td>
            </tr>
          )}
          {valideLead ? (
            <tr>
              <td>ROAS</td>
              <td>{roas4 ? roas4.toFixed(2) : 0}</td>
              <td>{roas5 ? roas5.toFixed(2) : 0}</td>
              <td>{roas6 ? roas6.toFixed(2) : 0}</td>
            </tr>
          ) : (
            <tr>
              <td>ROAS</td>
              <td>{roas1 ? roas1.toFixed(2) : 0}</td>
              <td>{roas2 ? roas2.toFixed(2) : 0}</td>
              <td>{roas3 ? roas3.toFixed(2) : 0}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
