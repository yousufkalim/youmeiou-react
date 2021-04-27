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
import { FaUserEdit } from "react-icons/all";
import EditProfile from "./EditProfile";

async function readDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    // async event handlers
    reader.onload = (e) => resolve(reader.result);
    reader.onerror = (e) => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

const MyInformation = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    function: "",
    profileImage: "",
    profile: 0,
    profileArray: [],
    linkedin: "",
    file: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    imagePreviewUrl: "",
  });
  const [spinner, setSpinner] = useState(true);
  const [error, setError] = useState("");
  const userToken = useSelector((state) => state.user.token);
  const [isEdit, setIsEdit] = useState(false);
  const [response, setResponse] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    var decoded = jwt_decode(userToken);
    const id = parseInt(decoded.Id);
    await fetch(`${endPoints.GET_PROFILE}/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result from api ",result);
        setResponse(result);
        let func;
        result.entrepreneurProfileId === 0 ||
        result.entrepreneurProfileId === null
          ? (func = 0)
          : (func = 1);
        setData({
          ...data,
          fname: result.firstName,
          lname: result.lastName,
          phone: result.phoneNo,
          email: result.email,
          profileImage: result.userProfileImage,
          function: func,
          profile: result.entrepreneurProfileId,
          profileArray: [
            { id: null, dropdownTypeId: 0, name: "" },
            ...result.dropdown.values,
          ],
          linkedin: result.linkedInProfile,
        });
        setShowEdit(true);
        setSpinner(false);
      })
      .catch((error) => {
        console.log(error);
        setSpinner(false);
        setShowEdit(false);
        setError("something went wrong");
      });
  }

  const toggleEdit = () => {
    setIsEdit(true);
  };

  console.log(data.profileImage);

  return (
    <>
      {isEdit ? (
        <EditProfile data={response} />
      ) : (
        <div className="account-management mx-3">
          <div style={{ height: "10%", paddingTop: "1.4rem" }}>
            <div className="d-flex justify-content-between align-items-center w-100 pr-5">
              <Heading>Mes informations</Heading>
              {
                showEdit && (
                  <FaUserEdit
                className="edit-user-profile-icon"
                onClick={() => setIsEdit(true)}
              />
                )
              }
            </div>
            {/* <FileUploader  /> */}
            {spinner ? (
              <div className="spinner">
                <CircularProgress className="circular-spinner-blue" />
              </div>
            ) : !error ? (
              <form className="account-container">
                <div className="account-cards">
                  <div className="account-card">
                    <Card style={{ borderRadius: "3.5rem" }}>
                      <div className="d-flex">
                        <div className="account-card-img">
                          <div className="file-uploader-image">
                            {
                              data.profileImage ? (
                                <img src={`data:image/jpeg;base64,${data.profileImage}`} alt="profile" />
                              )
                              : 
                              (
                                <img src={Images.account} alt="profile" />
                              )
                            }
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
                      style={{
                        borderRadius: "3.5rem",
                        backgroundColor: "#EBEBEB",
                      }}
                    >
                      <div className="account-card-detail-2">
                        <img src={Images.linkedin} alt="linkedIn" />
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">{data.linkedin}</a>
                        
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
                             {data.profileArray.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </form>
            ) : (
              <div className="data-error">
                <div>{error}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MyInformation;
