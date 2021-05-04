import React, { useState, useEffect } from "react";
import "./MyInformation.css";

//  Component
import Heading from "../../components/Heading/Heading";
import Card from "../../components/Card/Card";
import { Images } from "../../assets/Assets";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import FileUploader from "../../components/FileUploader/FileUploader";
import endPoints from "../../globals/Constants";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { withSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";


async function readDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    // async event handlers
    reader.onload = (e) => resolve(reader.result);
    reader.onerror = (e) => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

const EditProfile = (props) => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    function: 0,
    profile: 0,
    profileArray: [],
    linkedin: "",
    file: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    imagePreviewUrl: "",
  });
  const [imageUrl, setImageUrl] = useState(null);
  const [spinner, setSpinner] = useState(false);
  // const [email, setEmail] = useState("");
  // const [function, setFunction] = useState("");
  // const

  const [errors, setErrors] = useState({
    fnameError: "",
    lnameError: "",
    phoneError: "",
    emailError: "",
    codePostalError: "",
    dateError: "",
  });
  const form = React.useRef(null);
  const token = useSelector((state) => state.user.token);

  var decToken = jwt_decode(token);
  const userId = parseInt(decToken.Id);

  useEffect(() => {
    const { data } = props;
    let profileId;
    console.log("profile image ",props.data.userProfileImage);
    data.entrepreneurProfileId === 0 ? profileId = null : profileId = data.entrepreneurProfileId;
    // if(data.entrepreneurProfileId === 0){
    //   profileId = null
    // }
    // else{
    //   profileId = data.entrepreneurProfileId
    // }
    console.log(profileId);
    let func;
    (data.entrepreneurProfileId === 0 || data.entrepreneurProfileId === null) ? func = 0 : func = 1
    console.log("useeffect");
    setImageUrl(data.userProfileImage)
    setData({
      ...data,
      fname: data.firstName,
      lname: data.lastName,
      phone: data.phoneNo,
      email: data.email,
      profile: profileId,
    
      profileArray: [
        { id: null, dropdownTypeId: 0, name: "" },
        ...data.dropdown.values,
      ],
      linkedin: data.linkedInProfile,
      function: func,
    });
  }, []);

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
      if (e.target.value.length > 13) {
        setErrors({
          ...errors,
          phoneError: "doit être inférieur ou égal à 13 chiffres",
        });
      } else {
        setErrors({ ...errors, phoneError: "" });
      }
    }
    if (e.target.name === "function") {
      if (e.target.value === "0" || e.target.value === "2") {
      
        setData({ ...data, profile: null, function: e.target.value });
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
  const getImage = (file) => {
    setImageUrl(file)
  }

  async function editProfile() {
  
    // let result = {};
    // result = {
    //   // eslint-disable-next-line no-unused-vars
    //   ...result,
    //   firstName: data.fname,
    //   lastName: data.lname,
    //   id: userId,
    //   entrepreneurProfileId: parseInt(data.profile),
    //   phoneNo: data.phone,
    //   linkedInProfile: data.linkedin,
    // };
    setSpinner(true);
    console.log("final image URL ", imageUrl);
    var formdata = new FormData();
    formdata.append("Id",userId)
    formdata.append("FirstName", data.fname);
    formdata.append("LastName", data.lname);
    formdata.append("PhoneNo", data.phone);
    formdata.append("EntrepreneurProfileId", parseInt(data.profile));
    formdata.append("LinkedInProfile", data.linkedin);
    formdata.append("ProfileImage", imageUrl);
    // formdata.append("SerialNo", "")
    // formdata.append("Email", "")
    // formdata.append("UserProfileImage", "")
    // formdata.append("IsUserOwner", "")
    // formdata.append("",)
    // formdata.append("",)
    // formdata.append("entrepreneurProfileId", 1)
    // formdata.append("entrepreneurProfileId", 1)
    // formdata.append("entrepreneurProfileId", 1)
    console.log(formdata);

    // const json = {}
    // formdata.forEach(function(value, prop){
    //   json[prop] = value
    // })
    // const formBody = Object.keys(json).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(json[key])).join('&')
    for(let value of formdata.entries()) {
      console.log('values', value)
    }
    console.log(formdata);
    await fetch("http://160.153.249.64:5059/api/v1/userInfo/update", {
      method: "PUT",
      headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      body: formdata
    })
      .then((res) => {
        console.log(res);
        setSpinner(false);
        props.enqueueSnackbar("Le profil utilisateur a bien été mis à jour", {
          variant: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        setSpinner(false);
        props.enqueueSnackbar("Un problème est survenu", {
          variant: "error",
        });
      });
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (data.fname !== "") {
      if (data.fname === "") {
        setErrors({
          ...errors,
          fnameError: "first name de caractères 30",
        });
      } else {
        setErrors({ ...errors, fnameError: "" });
      }
    }
    if (data.lname !== "") {
      if (data.lname === "") {
        setErrors({
          ...errors,
          lnameError: "last name de caractères 30",
        });
      } else {
        setErrors({ ...errors, lnameError: "" });
      }
    }

    editProfile();
  };

  // console.log(data);
  console.log("edit profile image ==> ",imageUrl);
  return (
    <div className="account-management mx-3">
      {spinner && (
              <div className="spinner">
                <CircularProgress className="circular-spinner-blue" />
              </div>
            )}
      <div style={{ height: "10%", paddingTop: "1.4rem" }}>
        <Heading>Mes informations</Heading>
        {/* <FileUploader  /> */}
        <form className="account-container" onSubmit={submitHandler}>
          <div className="account-cards">
            <div className="account-card">
              <Card style={{ borderRadius: "3.5rem" }}>
                <div className="d-flex">
                  <div className="account-card-img">
                    <FileUploader getImage={getImage} data={props.data.userProfileImage} />
                    {/* <img src={Images.account} alt="logo"  /> */}
                  </div>
                  <div className="account-card-detail">
                    <Input
                      type="text"
                      placeholder="Prénom"
                      value={data.fname}
                      onChange={changeHandler}
                      name="fname"
                    />
                    {errors.fnameError !== "" && (
                      <div className="custom-error">{errors.fnameError}</div>
                    )}

                    <Input
                      type="text"
                      placeholder="Nom de famille"
                      value={data.lname}
                      onChange={changeHandler}
                      name="lname"
                    />
                    {errors.lnameError !== "" && (
                      <div className="custom-error">{errors.lnameError}</div>
                    )}

                    <Input
                      type="number"
                      placeholder="pas de téléphone"
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
                      <option value="0"></option>
                      <option value="1">Dirigeant de l'entreprise</option>
                      <option value="2">Employé</option>
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
                  <input
                    type="text"
                    className="user-linkedin-edit"
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
                        disabled={
                          data.function === "0" ||
                          data.function === "2" ||
                          data.function === null
                            ? true
                            : false
                        }
                        value={data.function === "0" || data.function === "2" ? 0 : data.profile}
                        className="custom-dropdown"
                      >
                        {data.profileArray.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                        {/* <option value=""></option>
                        <option value="opportuniste">opportuniste</option>
                        <option value="diplomate">diplomate</option>
                        <option value="expert">expert</option>
                        <option value="organisateur">organisateur</option>
                        <option value="individualiste">individualiste</option>
                        <option value="stratège">stratège</option>
                        <option value="alchimiste">alchimiste</option> */}
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
                  data.fname === "" || data.lname === "" || data.phone === "" || errors.phoneError
                    ? true
                    : false
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

export default withSnackbar(EditProfile);
