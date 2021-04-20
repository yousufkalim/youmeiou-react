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
import { GiLetterBomb } from "react-icons/gi";

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
    function: "",
    profile: 0,
    profileArray: [],
    linkedin: "",
    file: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    imagePreviewUrl: "",
  });
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
    console.log(data);
    setData({
      ...data,
      fname: data.firstName,
      lname: data.lastName,
      phone: data.phoneNo,
      email: data.email,
      profile: data.entrepreneurProfileId,
      profileArray: [
        { id: 0, dropdownTypeId: 0, name: "" },
        ...data.dropdown.values,
      ],
      linkedin: " http://linkedin.com",
      function: "0",
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
      if (e.target.value.length !== 13) {
        setErrors({
          ...errors,
          phoneError: "phone number should br 13 digits",
        });
      } else {
        setErrors({ ...errors, phoneError: "" });
      }
    }
    if (e.target.name === "function") {
      if (e.target.value === "0" || e.target.value === "2") {
        setData({ ...data, profile: "0", function: e.target.value });
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

    var formdata = new FormData();
    formdata.append("firstName", data.fname);
    formdata.append("lastName", data.lname);
    formdata.append("id",7)
    formdata.append("EntrepreneurProfileId", 1)
    // formdata.append("entrepreneurProfileId", 1)
    // formdata.append("entrepreneurProfileId", 1)
    // formdata.append("entrepreneurProfileId", 1)
    console.log(formdata);
    for(let value of formdata.entries()) {
      console.log('values', value)
    }
    await fetch("http://160.153.249.64:5059/api/v1/userInfo/update", {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: formdata
    })
      .then((resp) => resp.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
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

  console.log(data);

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
                        disabled={
                          data.function === "0" ||
                          data.function === "2" ||
                          data.function === null
                            ? true
                            : false
                        }
                        value={data.profile}
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
                  data.fname === "" || data.lname === "" || data.phone === ""
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

export default EditProfile;
