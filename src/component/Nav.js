import React, { useState } from "react";
import "./nav.css";
import Droplogin from "./Droplogin.js";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PolymerIcon from "@material-ui/icons/Polymer";
function Nav({ scrolled, scrolledhalf }) {
  // rayen howa eli khdamha
  const [showdroplogin, setShowdroplogin] = useState(false);
  return (
    <div>
      <div
        className="nav__container"
        onMouseLeave={() => {
          setShowdroplogin(false);
        }}
        style={{
          backgroundColor: scrolledhalf() && "transparent",
          justifyContent: scrolledhalf() && "space-between",
          top: scrolled ? "-70px" : "-2px",
        }}
      >
        <PolymerIcon className="nav__logo" />
        {!scrolledhalf() && (
          <div className="nav__buttonscontainer">
            <div className="nav__buttons">
              <Button className="nav__btn">Accueil</Button>
              <Button className="nav__btn">Produits</Button>
              <Button className="nav__btn">Fonctionnalités</Button>
              <Button className="nav__btn">Nous?</Button>
            </div>
          </div>
        )}
        <div
          className="nav__loggedprofile"
          onMouseEnter={() => {
            setShowdroplogin(true);
          }}
        >
          <p>Mon espace</p>
          <AccountCircleIcon className="nav__logoaccount" />
          {showdroplogin && <Droplogin />}
        </div>
      </div>
    </div>
  );
}

export default Nav;
