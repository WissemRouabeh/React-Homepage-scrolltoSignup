import React, { useState, useRef } from "react";
import "./Sections.css";
import Button from "@material-ui/core/Button";
// import Loginsection from "./Loginsection.js";
import Logincomplete from "./Logincomplete.js";
import { useSelector } from "react-redux";
import PolymerIcon from "@material-ui/icons/Polymer";

function Sections({ scrolled, setUserLogged }) {
  const isLogged = useSelector((state) => state.isLogged);

  const ref = useRef(null);

  // eslint-disable-next-line
  const [checkwhentofocus, setcheckwhentofocus] = useState(false); // checkwhentofocus is relaible to the loginsection that i disabled..

  const scrolltodiv = () => {
    window.scrollTo(0, ref.current.offsetTop);
    setcheckwhentofocus(true);
  };

  return (
    <div
      style={{
        transition: "1s",
        backgroundColor: scrolled
          ? "rgba(232, 159, 250, 0)"
          : "rgba(232, 159, 250, 0.12)",
      }}
    >
      <PolymerIcon className="sections__logo" />

      <div className="sectionone">
        <div className="sectionone__container">
          <p className="sectionone__1line">Mar7ba..</p>
          <p className="sectionone__2line">
            Pour commencer à utiliser tous les fonctionnalités offertes par
            notre plateforme merci de vous créer un compte!
          </p>
          <Button
            className="sectionone__button"
            variant="contained"
            onClick={scrolltodiv}
            disabled={isLogged && "disabled"}
          >
            Faire un compte
          </Button>
        </div>
      </div>
      {!isLogged && (
        <div className="sectiontwo" ref={ref}>
          {/* <Loginsection checkwhentofocus={checkwhentofocus} /> */}
          <Logincomplete loggedin={setUserLogged} />
        </div>
      )}
    </div>
  );
}

export default Sections;
