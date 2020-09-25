import React, { useRef, useState } from "react";
import "./loginsection.css";

import { Formik } from "formik";
import * as yUp from "yup";
import Button from "@material-ui/core/Button";
import PolymerIcon from "@material-ui/icons/Polymer";
function Loginsection({ checkwhentofocus }) {
  const focused_input = useRef(null);
  //   on scroll focus to first input (email)
  const ckwf = (ref) => {
    checkwhentofocus && ref.current.focus();
  };
  ckwf(focused_input);

  //which div ?
  const [div, setdiv] = useState(1);

  // formik part

  const formschema = yUp.object().shape({
    email: yUp
      .string()
      .test(
        "email_valid",
        "Email format est invalide (email@exemple.com) ",
        (value) => {
          const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (value?.length > 0) {
            return regex.test(String(value).toLowerCase());
          } else {
            return true;
          }
        }
      )
      .required("Champ obligatoire"),
    password: yUp
      .string()
      .test(
        "password_length",
        "Mot de passe doit être superieur à 8 caractéres",
        (value) => {
          if (value?.length < 8 && value?.length > 0) {
            return false;
          } else return true;
        }
      )
      .required("Champ obligatoire"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(infos) => {
        console.log(infos);
        setdiv(2);
      }}
      validationSchema={formschema}
    >
      {({
        handleSubmit,
        handleBlur,
        handleChange,
        errors,
        values,
        touched,
      }) => {
        return (
          <form>
            <div className="loginsection__container">
              <PolymerIcon className="loginsection__logo" />
              <div className="loginsection__ligne">
                <p>Pseudo:</p>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={"email"}
                  value={values.email}
                  ref={focused_input}
                  className="loginsection__inputtxt"
                  type="text"
                />
                <p
                  style={{
                    fontSize: "12.5px",
                    marginTop: "-10px",
                    color: errors.email ? "red" : "green",
                  }}
                >
                  {touched.email && errors.email && (
                    <small>
                      {errors.email && errors.email ? errors.email : "ok"}
                    </small>
                  )}
                </p>
              </div>

              <div className="loginsection__ligne">
                <p>Mot de passe:</p>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={"password"}
                  value={values.password}
                  className="loginsection__inputtxt"
                  type="password"
                />
                <p
                  style={{
                    fontSize: "12.5px",
                    marginTop: "-10px",
                    color: errors.password ? "red" : "green",
                  }}
                >
                  {touched.password && errors.password && (
                    <small>
                      {errors.password && errors.password
                        ? errors.password
                        : "ok"}
                    </small>
                  )}
                </p>
              </div>

              <Button
                onClick={handleSubmit}
                variant="contained"
                className="loginsection__btnconnect"
              >
                Continuer
              </Button>

              <Button
                variant="outlined"
                disabled
                className="loginsection__btnback"
              >
                Retour
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default Loginsection;
