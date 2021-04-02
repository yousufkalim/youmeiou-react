import React, { useState } from "react";
import "./Discover.css";

import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const Discover = () => {
  const [data, setData] = useState({
    reason: "",
    companyName: "",
    effectif: "",
    turnover: "",
    siren: "",
    codeApe: "",
    codePostal: "",
    ville: "",
    createDate: "",
    companyType: "",
    website: "",
  });

  const [errors, setErrors] = useState({
    reasonError: "",
    sireError: "",
    codeApeError: "",
    codePostalError: "",
    dateError: "",
    websiteError: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.name === "reason") {
      if (e.target.value.length > 70) {
        setErrors({
          ...errors,
          reasonError: "limite maximale de caractères 70",
        });
      } else {
        setErrors({ ...errors, reasonError: "" });
      }
    }
    if (e.target.name === "siren") {
      if (e.target.value.length !== 9) {
        setErrors({ ...errors, sireError: "Siren number must have 9 digits" });
      } else {
        setErrors({ ...data, siren: "" });
      }
    }
    if (e.target.name === "codeApe") {
      if (e.target.value.length !== 5) {
        setErrors({ ...errors, codeApeError: "Code APE must have 5 digits" });
      } else {
        setErrors({ ...errors, codeApeError: "" });
      }
    }
    if (e.target.name === "codePostal") {
      if (e.target.value.length !== 5) {
        setErrors({
          ...errors,
          codePostalError: "Code Postal must have 5 digits",
        });
      } else {
        setErrors({ ...errors, codePostalError: "" });
      }
    }
    if (e.target.name === "creationDate") {
      if (e.target.value.length !== 4) {
        setErrors({ ...errors, dateError: "Year msut be 4 digits" });
      } else {
        setErrors({ ...errors, dateError: "" });
      }
    }
    if (e.target.name === "website") {
      const web = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
      if (!e.target.value.match(web)) {
        setErrors({ ...errors, websiteError: "Url invalid" });
      } else {
        setErrors({ ...errors, websiteError: "" });
      }
    }
    // if(e.target.name === "")
  };

  const changeSiren = (e) => {
    if(e.target.value.length <= 9){
      setData({...data, siren: e.target.value});
      if (e.target.value.length !== 9) {
        setErrors({ ...errors, sireError: "Siren number must have 9 digits" });
      } else {
        setErrors({ ...data, siren: "" });
      }
 

    }

      // if (e.target.value.length !== 9) {
      //   setErrors({ ...errors, sireError: "Siren number must have 9 digits" });
      // } else {
      //   setData({...data, siren: e.target.value})
      //   setErrors({ ...data, siren: "" });
      // }
 
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.reason !== "") {
      if (data.reason.length > 70) {
        setErrors({
          ...errors,
          reasonError: "limite maximale de caractères 70",
        });
      } else {
        setErrors({ ...errors, reasonError: "" });
      }
    }
    if (data.siren !== "") {
      if (data.siren.length !== 9) {
        setErrors({ ...errors, sireError: "Siren number should be 9 digits" });
      } else {
        setErrors({ ...errors, sireError: "" });
      }
    }
    if (data.codeApe !== "") {
      if (data.codeApe.length !== 5) {
        setErrors({ ...errors, codeApeError: "Code APE must have 5 digits" });
      } else {
        setErrors({ ...errors, codeApeError: "" });
      }
    }
    if (data.codePostal !== "") {
      if (data.codePostal.length !== 5) {
        setErrors({
          ...errors,
          codePostalError: "Code Postal must have 5 digits",
        });
      } else {
        setErrors({ ...errors, codePostalError: "" });
      }
    }
    if (data.createDate !== "") {
      if (data.createDate.length !== 4) {
        setErrors({ ...errors, dateError: "Year msut be 4 digits" });
      } else {
        setErrors({ ...errors, dateError: "" });
      }
    }
    if (data.website !== "") {
      const web = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
      if (!data.website.match(web)) {
        setErrors({ ...errors, websiteError: "Invalid Url" });
      } else {
        setErrors({ ...errors, websiteError: "" });
      }
    }
    //  if( errors.sireError === null && (errors.codeApeError === null || errors.codeApeError === undefined || errors.codeApeError === "") && (errors.codePostalError === null || errors.codePostalError === "" || errors.codePostalError === undefined ) && errors.reasonError === null && errors.dateError === null){
    //     clearInputs();
    //   }

    // if( errors.sireError === "" && errors.codeApeError === "" && errors.codePostalError === "" && errors.dateError === ""){
    //   clearInputs();
    // }
  };

  const clearInputs = () => {
    setData({ ...data, siren: "", companyName: "" });
  };

  return (
    <div className="discover mx-3">
      <div style={{ height: "10%", paddingTop: "1.4rem" }}>
        <Heading>Découverte</Heading>
      </div>
      <div className="discover-container">
        <form className="dicover-form" onSubmit={submitHandler}>
          <Card
           
            style={{ borderRadius: "3.5rem", overflow: "hidden" }}
          >
            <div className="discover-form-wrapper">
              <div className="disover-form-heading">Informations de l’entreprise :</div>
            <div className="discover-form-content">
            <Input
              type="text"
              placeholder="Nom entreprise * "
              value={data.companyName}
              onChange={changeHandler}
              name="companyName"
            />
            <Input
              type="text"
              placeholder="Raison Sociale"
              value={data.reason}
              onChange={changeHandler}
              name="reason"
            />
            {errors.reasonError !== "" && (
              <div className="custom-error">{errors.reasonError}</div>
            )}
            {/* <Form.Control as="select" value={data.effectif} name="effectif">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control> */}
            <select
              onChange={changeHandler}
              name="effectif"
              id="effectif"
              value={data.effectif}
              className="discover-dropdown"
            >
              <option value="Effectif">Effectif</option>
              <option value="Moins de 10 employés">Moins de 10 employés</option>
              <option value="Entre 10 et 30 employés">
                Entre 10 et 30 employés
              </option>
              <option value="Entre 31 et 200 employés">
                Entre 31 et 200 employés
              </option>
              <option value="Plus de 200 employés">Plus de 200 employés</option>
            </select>

            <div className="turnover">
              <Input
                type="number"
                placeholder="Chif fre d’affaires"
                value={data.turnover}
                onChange={changeHandler}
                name="turnover"
              />
              <div className="turnover-euro">€</div>
            </div>

            <Input
              type="number"
              placeholder="Numéro SIREN * "
              maxlength="9"
              minlength="9"
              value={data.siren}
              onChange={changeSiren}
              max="9"
              name="siren"
            />
            {errors.sireError !== "" && (
              <div className="custom-error">{errors.sireError}</div>
            )}
            <Input
              type="text"
              placeholder="Code APE"
              value={data.codeApe}
              onChange={changeHandler}
              onblur={console.log("hello")}
              name="codeApe"
            />
            {errors.codeApeError !== "" && (
              <div className="custom-error">{errors.codeApeError}</div>
            )}
            <Input
              type="number"
              placeholder="Code Postal"
              value={data.codePostal}
              maxlength="5"
              minlength="5"
              onChange={changeHandler}
              name="codePostal"
            />
            {errors.codePostalError !== "" && (
              <div className="custom-error">{errors.codePostalError}</div>
            )}
            <Input
              type="text"
              placeholder="Ville"
              value={data.ville}
              onChange={changeHandler}
              name="ville"
            />
            <Input
              type="number"
              placeholder="date de création de l'entreprise"
              maxlength="4"
              minlength="4"
              value={data.creationDate}
              onChange={changeHandler}
              name="creationDate"
            />
            {errors.dateError !== "" && (
              <div className="custom-error">{errors.dateError}</div>
            )}
            <select
              onChange={changeHandler}
              name="companyType"
              id="effectif"
              value={data.companyType}
              className="discover-dropdown"
            >
              <option value="">Type d'entreprise</option>
              <option value="Familiale">Familiale</option>
              <option value="Actionnaire unique">Actionnaire unique</option>
              <option value="Avec des investisseurs">
                Avec des investisseurs
              </option>
            </select>

            {/* <Input
                type="text"
                placeholder="Vous êtes classifiée ICPE ? Oui / Non"
                // value={data.password}
                // onChange={inputChange}
                name="password"
              /> */}
            {/* <Input
                type="text"
                placeholder="Type d’entreprise (Familiale, Associé unique, Avec investisseurs)"
                // value={data.password}
                // onChange={inputChange}
                name="password"
              /> */}
            {/* <Input
                type="text"
                placeholder="Trois derniers CA (CA1, CA2, CA3)"
                // value={data.password}
                // onChange={inputChange}
                name="password"
              /> */}
            <Input
              type="text"
              placeholder="Site web de l’entreprise"
              value={data.website}
              onChange={changeHandler}
              name="website"
            />
            {errors.websiteError !== "" && (
              <div className="custom-error">{errors.websiteError}</div>
            )}
            <div className="mt-5 text-left">
              <Button
                secondary
                disabled={
                  !data.companyName || data.siren.length !== 9 ||
                  errors.reasonError || 
                   errors.websiteError ||
                   errors.codeApeError ||
                   errors.codePostalError ||
                   errors.dateError ||
                   errors.sireError
                }
              >
                Enregistrer
              </Button>{" "}
            </div>
            </div>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Discover;
