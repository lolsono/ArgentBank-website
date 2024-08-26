
import { API_BASE_URL } from "./SignIn";

// fetch pour recupérer les information utilisateur 
export const getInfoUser = async ( token ) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/user/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      },
    });

    const jsonResponse = await response.json();
    console.log("info utilisateur:", jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};


function Islogged() {

  // partie de gestion une fois log

  //dès que je suis connecter récuperer tout les information de l utilisateur pour les affichée
  // part le route post user/profil


  // changement des bouton et ajout du nom de l'utilisateur

  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  );
}

export default Islogged;
