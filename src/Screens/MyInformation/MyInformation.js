import React, { useState, useEffect } from "react";
import "./MyInformation.css";

//  Component
import Heading from "../../components/Heading/Heading";
import Card from "../../components/Card/Card";
import { Images } from "../../assets/Assets";
import Input from "../../components/Input/Input";
import FileUploader from "../../components/FileUploader/FileUploader";
import endPoints from "../../globals/Constants";
import jwt_decode from "jwt-decode";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";


async function readDataUrl(file) {
 return new Promise((resolve, reject) => {
   const reader = new FileReader();
   // async event handlers
   reader.onload = e => resolve(reader.result);
   reader.onerror = e => reject(reader.error);
   reader.readAsDataURL(file);
 });
}

const MyInformation = (props) => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "damien@gmail.com",
    function:"",
    profile: "",
    linkedin: "",
    file: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',imagePreviewUrl: '',
    
  });
  const [spinner, setSpinner] = useState(true);
  const [error, setError] = useState("");
  const userToken = useSelector((state) => state.user.token);


  useEffect(() => {
    getProfile();
  },[])

  async function getProfile(){
    var decoded = jwt_decode(userToken);
    const id = parseInt(decoded.Id);
    await fetch(`${endPoints.GET_PROFILE}/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`
      }
    }).then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData({...data, fname: result.firstName, lname: result.lastName, phone: result.phoneNo, email: result.email, linkedin: " http://linkedin.com"})
        setSpinner(false);
      })
      .catch((error) => {
        console.log(error);
        setSpinner(false);
        setError("something went wrong")
      });
  }

  return (
    <div className="account-management mx-3">
      <div style={{ height: "10%", paddingTop: "1.4rem" }}>
        <Heading>Mes informations</Heading>
        {/* <FileUploader  /> */}
        {spinner ? (
          <div className="spinner">
            <CircularProgress className="circular-spinner-blue" />
          </div>
        )
        :
        !error ?
        <form className="account-container">
          <div className="account-cards">
            <div className="account-card">
              <Card style={{ borderRadius: "3.5rem" }}>
                <div className="d-flex">
                  <div className="account-card-img">
                  <div className="file-uploader-image">
          
          <img
            src={Images.account}
  
            alt="profile"
          />
          </div>
                  {/* <FileUploader defaultImage="account" /> */}
                    {/* <img src={Images.account} alt="logo"  /> */}
                  </div>
                  <div className="account-card-detail">
                    <Input
                      type="text"
                      placeholder="First name"
                      value={data.fname}
                      disabled
                      name="fname"
                    />
                   

                    <Input
                      type="text"
                      placeholder="Last name"
                      value={data.lname}
                      disabled
                      name="lname"
                    />
                   

                    <Input
                      type="number"
                      placeholder="date de création de l'entreprise"
                      maxlength="13"
                      minlength="13"
                      value={data.phone}
                      disabled
                      name="phone"
                    />
                   
                     <Input
                      type="text"
                      placeholder="Email"
                      value={data.email}
                    
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
                     disabled
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
                      disabled
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
                       
                        name="profile"
                        id="profile"
                        disabled
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
          
        </form>
        :
        <div className="data-error">
          <div>{error}</div>
        </div>
}
      </div>
    </div>
  );
};

export default MyInformation;
