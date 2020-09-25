import React from "react";
import "./logincomplete.css";

import { Formik } from "formik";
import * as yUp from "yup";
import { useDispatch } from "react-redux";
import { signin, signin_user } from "../redux_files/actions";
import Button from "@material-ui/core/Button";
import PolymerIcon from "@material-ui/icons/Polymer";
function Logincomplete() {
  // redux part
  const dispatch = useDispatch();

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
    //   champs jdod
    // ad_local: yUp.string().required("Champ obli9atoire"),
    // region: yUp.string().required("Champ obli9atoire"),
    // cd_postale: yUp.string().required("Champ obli9atoire"),
    // n_tlf: yUp.string().required("Champ obli9atoire"),
    // region: yUp.string().required("Champ obli9atoire"),
    // spec: yUp.string().required("Champ obli9atoire"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        cd_postale: "",
        region: "",
        n_tlf: "",
        spec: "",
        ad_local: "",
      }}
      onSubmit={(infos) => {
        console.log(infos);
        dispatch(signin());
        dispatch(
          signin_user({
            email: infos.email,
            pwd: infos.password,
          })
        );
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
            <div className="logincomplete__container">
              <div className="logincomplete_left">
                <PolymerIcon className="logincomplete__logo" />

                <div className="logincomplete__ligne">
                  <p>Pseudo:</p>
                  <input
                    title="email@exemple.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"email"}
                    value={values.email}
                    className="logincomplete__inputtxt"
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

                <div className="logincomplete__ligne">
                  <p>Mot de passe:</p>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"password"}
                    value={values.password}
                    className="logincomplete__inputtxt"
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
              </div>
              <div className="logincomplete_separator"></div>
              <div className="logincomplete_right">
                <div className="logincomplete__ligne">
                  <p>Adresse locale:</p>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"ad_local"}
                    value={values.ad_local}
                    className="logincomplete__inputtxt"
                    type="text"
                  />
                  <p
                    style={{
                      fontSize: "12.5px",
                      marginTop: "-10px",
                      color: errors.ad_local ? "red" : "green",
                    }}
                  >
                    {touched.ad_local && errors.ad_local && (
                      <small>
                        {errors.ad_local && errors.ad_local
                          ? errors.ad_local
                          : "ok"}
                      </small>
                    )}
                  </p>
                </div>
                <div className="logincomplete__ligne">
                  <p>Region:</p>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"region"}
                    value={values.region}
                    className="logincomplete__inputtxt"
                    type="text"
                  />
                  <p
                    style={{
                      fontSize: "12.5px",
                      marginTop: "-10px",
                      color: errors.region ? "red" : "green",
                    }}
                  >
                    {touched.region && errors.region && (
                      <small>
                        {errors.region && errors.region ? errors.region : "ok"}
                      </small>
                    )}
                  </p>
                </div>
                <div className="logincomplete__ligne">
                  <p>Code postale:</p>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"cd_postale"}
                    value={values.cd_postale}
                    className="logincomplete__inputtxt"
                    type="text"
                  />
                  <p
                    style={{
                      fontSize: "12.5px",
                      marginTop: "-10px",
                      color: errors.cd_postale ? "red" : "green",
                    }}
                  >
                    {touched.cd_postale && errors.cd_postale && (
                      <small>
                        {errors.cd_postale && errors.cd_postale
                          ? errors.cd_postale
                          : "ok"}
                      </small>
                    )}
                  </p>
                </div>
                <div className="logincomplete__ligne">
                  <p>N° Telephone:</p>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"n_tlf"}
                    value={values.n_tlf}
                    className="logincomplete__inputtxt"
                    type="text"
                  />
                  <p
                    style={{
                      fontSize: "12.5px",
                      marginTop: "-10px",
                      color: errors.n_tlf ? "red" : "green",
                    }}
                  >
                    {touched.n_tlf && errors.n_tlf && (
                      <small>
                        {errors.n_tlf && errors.n_tlf ? errors.n_tlf : "ok"}
                      </small>
                    )}
                  </p>
                </div>
                <div className="logincomplete__ligne">
                  <p>Spécialité:</p>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"spec"}
                    value={values.spec}
                    className="logincomplete__inputtxt"
                    type="text"
                  />
                  <p
                    style={{
                      fontSize: "12.5px",
                      marginTop: "-10px",
                      color: errors.spec ? "red" : "green",
                    }}
                  >
                    {touched.spec && errors.spec && (
                      <small>
                        {errors.spec && errors.spec ? errors.spec : "ok"}
                      </small>
                    )}
                  </p>
                </div>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  className="logincomplete__btnconnect"
                >
                  Continuer
                </Button>

                <Button
                  variant="outlined"
                  disabled
                  className="logincomplete__btnback"
                >
                  Retour
                </Button>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default Logincomplete;
