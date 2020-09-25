import React from "react";
import "./dropdownlogin.css";
import Button from "@material-ui/core/Button";

function Droplogin() {
  return (
    <div>
      <div className="droplogin__container">
        <div className="droplogin__ligne">
          <p>Pseudo:</p>
          <input type="text" />
        </div>

        <div className="droplogin__ligne">
          <p>Mot de passe:</p>
          <input type="password" />
        </div>

        <div className="droplogin__ligne checkbox">
          <input type="checkbox" />

          <p>
            <small>Rester connecté?</small>
          </p>
        </div>

        <Button variant="contained" className="droplogin__btn">
          Connecter
        </Button>
      </div>
    </div>
  );
}

export default Droplogin;
