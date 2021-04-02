import React, { useState, useEffect } from "react";
import "./MyInformation.css";

//  Component
import Heading from "../../components/Heading/Heading";
import Card from "../../components/Card/Card";
import { Images } from "../../assets/Assets";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import FileUploader from "../../components/FileUploader/FileUploader";

async function readDataUrl(file) {
 return new Promise((resolve, reject) => {
   const reader = new FileReader();
   // async event handlers
   reader.onload = e => resolve(reader.result);
   reader.onerror = e => reject(reader.error);
   reader.readAsDataURL(file);
 });
}

const AccountManagement = (props) => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "damien@gmail.com",
    function:"",
    profile: "",
    linkedin: "",
    file: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',imagePreviewUrl: ''
  });

  const [errors, setErrors] = useState({
    fnameError: "",
    lnameError: "",
    phoneError: "",
    emailError: "",
    codePostalError: "",
    dateError: "",
  });

  useEffect(() => {
    setData({...data, fname: "Damien", lname: "LAURENT", phone: "1103132424244", email: "damien@gmail.com", linkedin: " http://linkedin.com"})
  },[])

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.name === "fname") {
      if (e.target.value.length > 30) {
        setErrors({
          ...errors,
          fnameError: "first name de caractères 30",
        });
      } else {
        setErrors({ ...errors, fnameError: "" });
      }
    }
    if (e.target.name === "lname") {
      if (e.target.value.length > 30) {
        setErrors({ ...errors, lnameError: "last name de caractères 30" });
      } else {
        setErrors({ ...errors, lnameError: "" });
      }
    }
    if (e.target.name === "phone") {
      if (e.target.value.length !== 13) {
        setErrors({ ...errors, phoneError: "phone number should br 13 digits" });
      } else {
        setErrors({ ...errors, phoneError: "" });
      }
    }
    if (e.target.name === "function") {
      if (e.target.value === "") {
        setData({ ...data, profile: "", function: "" });
      }
    }
    
    // if (e.target.name === "email") {
    //   var mailformat = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    //   if (!e.target.value.match(mailformat)) {
    //     setErrors({ ...errors, codeApeError: "Code APE must have 5 digits" });
    //   } else {
    //     setErrors({ ...errors, codeApeError: "" });
    //   }
    // }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
     if(data.fname !== ""){
      if (data.fname === "") {
        setErrors({
          ...errors,
          fnameError: "first name de caractères 30",
        });
      } else {
        setErrors({ ...errors, fnameError: "" });
      }
     }
     if(data.lname !== ""){
      if (data.lname === "") {
        setErrors({
          ...errors,
          lnameError: "last name de caractères 30" ,
        });
      } else {
        setErrors({ ...errors, lnameError: "" });
      }
     }
  }

  return (
    <div className="account-management mx-3">
      <div style={{ height: "10%", paddingTop: "1.4rem" }}>
        <Heading>Mes informations</Heading>
        {/* <FileUploader  /> */}
        <form className="account-container" onSubmit={submitHandler}>
          <div className="account-cards">
            <div className="account-card">
              <Card style={{ borderRadius: "3.5rem" }}>
                <div className="d-flex">
                  <div className="account-card-img">
                  <FileUploader defaultImage="account" />
                    {/* <img src={Images.account} alt="logo"  /> */}
                  </div>
                  <div className="account-card-detail">
                    <Input
                      type="text"
                      placeholder="First name"
                      value={data.fname}
                      onChange={changeHandler}
                      name="fname"
                    />
                    {errors.fnameError !== "" && (
                      <div className="custom-error">{errors.fnameError}</div>
                    )}

                    <Input
                      type="text"
                      placeholder="Last name"
                      value={data.lname}
                      onChange={changeHandler}
                      name="lname"
                    />
                    {errors.lnameError !== "" && (
                      <div className="custom-error">{errors.lnameError}</div>
                    )}

                    <Input
                      type="number"
                      placeholder="date de création de l'entreprise"
                      maxlength="13"
                      minlength="13"
                      value={data.phone}
                      onChange={changeHandler}
                      name="phone"
                    />
                    {errors.phoneError !== "" && (
                      <div className="custom-error">{errors.phoneError}</div>
                    )}
                     <Input
                      type="text"
                      placeholder="Email"
                      value={data.email}
                      onChange={changeHandler}
                      disabled
                      name="email"
                    />
                  </div>
                </div>
              </Card>
            </div>
            <div className="account-card">
              <Card
                style={{
                  borderRadius: "3.5rem",
                  backgroundColor: "#EBEBEB",
                  padding: "4rem 3rem 1rem 3rem",
                }}
              >
                <div className="account-card-2">
                  <h1 className="pb-3" style={{ fontWeight: "bold" }}>
                    Fonction de l’utilisateur dans l’entreprise :
                  </h1>
                  <div className="account-card-dropdown">
                    <select
                      onChange={changeHandler}
                      name="function"
                      id="function"
                      value={data.function}
                      // value={data.companyType}
                      className="custom-dropdown"
                    >
                      <option value=""></option>
                      <option value="Dirigeant de l'entreprise">
                        Dirigeant de l'entreprise
                      </option>
                      <option value="Employé">Employé</option>
                    </select>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="account-cards">
            <div className="account-card">
              <Card
                style={{ borderRadius: "3.5rem", backgroundColor: "#EBEBEB" }}
              >
                <div className="account-card-detail-2">
                  <img src={Images.linkedin} alt="linkedIn" />
                  <Input
                      type="text"
                      placeholder="linkedin"
                      value={data.linkedin}
                      onChange={changeHandler}
                    
                      name="linkedin"
                    />
                 
                </div>
              </Card>
            </div>
            <div className="account-card">
              <Card
                style={{
                  borderRadius: "3.5rem",

                  padding: "4rem 3rem 1rem 3rem",
                }}
              >
                <div
                  className="account-card-2"
                  style={{ alignItems: "flex-start" }}
                >
                  <h1 className="pb-3" style={{ fontWeight: "bold" }}>
                    Profil d’entrepreneur :
                  </h1>
                  <div className="d-flex w-100 justify-content-center">
                    <div className="account-card-dropdown">
                      <select 
                        onChange={changeHandler}
                        name="profile"
                        id="profile"
                        disabled={data.function === "" || data.function === null ? true :  false}
                        value={data.profile}
                        className="custom-dropdown"
                      >
                        <option value=""></option>
                        <option value="opportuniste">opportuniste</option>
                        <option value="diplomate">diplomate</option>
                        <option value="expert">expert</option>
                        <option value="organisateur">organisateur</option>
                        <option value="individualiste">individualiste</option>
                        <option value="stratège">stratège</option>
                        <option value="alchimiste">alchimiste</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="mt-5 text-center w-100">
            <div className="w-25 mx-auto pb-5">
              <Button 
              disabled={
                  data.fname === "" ||
                  data.lname === "" ||
                  data.phone === ""  ?
                  true : 
                  false
              }
              >
                Enregistrer
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountManagement;
