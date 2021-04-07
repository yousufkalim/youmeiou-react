import React, { useState, useEffect } from "react";
import "./DiagnosticList.css";

//  Componnets
import Dropdown from "../../components/Dropdown/Dropdown";
import Heading from "../../components/Heading/Heading";
import Card from "../../components/Card/Card";
import List from "../../components/List/List";
import { NavLink } from "react-router-dom";
import SearchInput, { createFilter } from "react-search-input";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
import CircularProgress from "@material-ui/core/CircularProgress";
import jwt_decode from "jwt-decode";
import Skeleton from '@material-ui/lab/Skeleton';
import endPoints from "../../globals/Constants";

// import { GiHamburgerMenu } from "react-icons/all";
// import { Images } from "../../assets/Assets";

const lists = [
  {
    id: "001",
    familyId: 1,
    name: "one",
    detail: "this is first element",
    description:
      "there is issue in this list there is issue in this list there is issue in this list",
  },
  {
    id: "002",
    familyId: 22,
    name: "two",
    detail: "this is second element",
    description: "Libellé court",
  },
  {
    id: "003",
    familyId: 22,
    name: "three",
    detail: "this is third element",
    description: "Libellé court",
  },
  {
    id: "004",
    familyId: 22,
    name: "four",
    detail: "this is fourth element",
    description: "Libellé court",
  },
  {
    id: "005",
    familyId: 1,
    name: "five",
    detail: "this is fifth element",
    description: "Libellé court",
  },
  {
    id: "006",
    familyId: 1,
    name: "six",
    detail: "this is six element",
    description: "Libellé court",
  },
  {
    id: "007",
    familyId: 1,
    name: "seven",
    detail: "this is seventh elementt",
    description: "Libellé court",
  },
  {
    id: "008",
    familyId: 2,
    name: "eight",
    detail: "this is eighth element",
    description: "Libellé court",
  },
  {
    id: "009",
    familyId: 1,
    name: "nine",
    detail: "Libellé court",
    description: "Libellé court",
  },
  {
    id: "010",
    familyId: 2,
    name: "ten",
    detail: "Libellé court",
    description: "Libellé court",
  },
];

// const families = [
//   {
//     familyId: "",
//     text: "Famille de diagnostics",
//   },
//   {
//     familyId: 22,
//     text: "abc",
//   },
//   {
//     familyId: 25,
//     text: "john",
//   },
//   {
//     familyId: 27,
//     text: "wick",
//   },
// ];

const categories = [
  {
    catId: "",
    text: "Catégorie",
  },
  {
    catId: 14,
    text: "xyz",
  },
  {
    catId: 12,
    text: "test",
  },
  {
    catId: 15,
    text: "wicky",
  },
];
const KEYS_TO_FILTERS = ["serialNo", "explanation", "shortExplanation", "name"];

const Diagnostic = (props) => {
  const [selectedFamily, setSelectedFamily] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [diagnostics, setDiagnostics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [families, setFamilies] = useState([{
    created_at: "",
    deleted_at: null,
    diagnostics: [],
    explaination: "",
    family_Id: "",
    name: "Famille de diagnostics",
    updated_at: ""
  }]);
  const [spinner, setSpinner] = useState(true);

  // const [list, setList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const groupProps = useState({
    appear: true,
    enter: false,
    exit: false,
  });

  console.log(props);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.GET_DIAGNOSTICS });
    getAllDiagnostics();
    getFamily();
    var token = sessionStorage.getItem("token");
    console.log(token);
    var decoded = jwt_decode(token);
    console.log("User data is =>>> ",decoded.email);

  }, [dispatch]);

  async function getAllDiagnostics() {
    const token = sessionStorage.getItem("token");
    var decoded = jwt_decode(token);
    const id = parseInt(decoded.Id);
    console.log(id);
    await fetch(`${endPoints.GET_FILTER_DIAGNOSTICS}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setDiagnostics(result);
          setSpinner(false);
          console.log(result);
        } else {
          setSpinner(false);
          alert("something went wrong");
        }
      })
      .catch((error) => {
        setSpinner(false);
        alert("something went wrong");
      });
    console.log(token);
  }

  async function getFamily() {
    const token = sessionStorage.getItem("token");
    await fetch(`${endPoints.GET_FAMILY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json())
      .then((result) => {
        if(result){
            const obj = {
              created_at: "",
              deleted_at: null,
              diagnostics: [],
              explaination: "",
              family_Id: "",
              name: "Famille de diagnostics",
              updated_at: ""
            }

            setFamilies([...families,...result]);
            console.log(result);
        }
        else{
          alert(result.errorMessage);
        }
      });
  }

  const sidebarToggle = (btn) => {
    setToggle(btn);
  };

  const handleChange = (e) => {
    setSelectedFamily(e.target.value);
  };
  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  }
  const searchUpdated = (term) => {
    setSearchTerm(term);
  };

  const filteredEmails = diagnostics.filter(
    createFilter(searchTerm, KEYS_TO_FILTERS)
  );

  const sendData = () => {

  }

  const items = useSelector((state) => state);
  console.log("diagnostics =>>", selectedCategory);
  console.log("result families ==> ", families);

  return (
    <div className="diagnostic">
      {/* <div
          className="d-flex justify-content-between mx-3 py-1 screen-navbar"
          style={{ borderBottom: "1px solid rgba(1,35,64, 18%)" }}
        >
          <div className="sidebar-drawer-container d-flex">
            <div className="sidebar-drawer">
              {toggle === false && (
                // <GiHamburgerMenu size={30} onClick={() =>this.sidebarToggle(true)} className="sidebar-toggler mr-4" />
                <GiHamburgerMenu size={30} className="sidebar-toggler mr-5" />
              )}
            </div>
            <span>
              <img src={Images.logo} alt="logo" className="ml-5" />
            </span>
          </div>
          <div>
            <img src={Images.profile} alt="profile" className="profile-img" />
          </div>
        </div> */}
      <div className="diagnostic-wrapper">
        <div style={{ height: "10%", paddingTop: "1.4rem" }} className="mx-3">
          <Heading>Liste de diagnostics disponibles</Heading>
        </div>
        <div className="diagnostic-container">
          <div className="diagnostic-header">
            {/* <div className="diagnostic-dropdown">
              <Dropdown>
                <option>Risques signatures</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Dropdown>
            </div> */}
            {/* <div className="diagnostic-dropdown">
              <Dropdown onChange={handleCategory} value={selectedCategory}>
                {
                  categories.map((item,index) => (
                    <option key={index} value={item.catId} >{item.text}</option>
                  ))
                }
               
              </Dropdown>
            </div> */}
            <div className="diagnostic-dropdown">
              <Dropdown value={selectedFamily} onChange={handleChange}>
                {families.map((item, index) => (
                  <option value={item.family_Id} key={index}>
                    {item.name}
                  </option>
                ))}
                
              </Dropdown>
            </div>
            <div className="diagnostic-list-search">
              <SearchInput className="search-input" onChange={searchUpdated} />
            
            </div>
          </div>

          <div className="diagnostic-content">
            <div className="diagnostic-card">
              <Card
                style={{
                  padding: "1rem 4rem 1rem 4rem",
                  borderRadius: "3.5rem",
                  position: "relative",
                }}
              >
                {spinner && (
                  <div className="spinner">
                    <CircularProgress className="circular-spinner-blue" />
                  </div>
                )}
                {/* {filteredEmails.map((item) => {
                    
                      selectedFamily.match(item.familyId) ?
                         
<NavLink to="/diagnostic-presentation">
                      <List>
                        <div className="diagnostic-list-id" style={{width: "10%"}}>{item.id}</div>
                        <div className="diagnostic-list-name" style={{width: "25%"}}>{item.name}</div>
                        <div className="diagnostic-list-id" style={{width: "20%"}}>{item.detail} </div>
                        <div className="diagnostic-list-id" style={{width: "40%"}}>
                          {item.description}
                        </div>
                      </List>
                    </NavLink>
                    : 
                    <NavLink to="/diagnostic-presentation">
                      <List>
                        <div className="diagnostic-list-id" style={{width: "10%"}}>{item.id}</div>
                        <div className="diagnostic-list-name" style={{width: "25%"}}>{item.name}</div>
                        <div className="diagnostic-list-id" style={{width: "20%"}}>{item.detail} </div>
                        <div className="diagnostic-list-id" style={{width: "40%"}}>
                          {item.description}
                        </div>
                      </List>
                    </NavLink>
                  })} */}

                {filteredEmails.map((item) => {
                  if (selectedFamily !== "") {
                    if (selectedFamily.match(item.familyId)) {
                      return (
                        <NavLink
                          to={{
                            pathname: props.match.url + "/" + decodeURIComponent(item.diagnosticId),
                            state: {id: item.diagnosticId, name: item.name, explanation: item.explanation }
                          }}
                          // onClick={props.history.push()}
                        >
                          <List>
                            <div
                              className="diagnostic-list-id"
                              style={{ width: "10%" }}
                              className="diagnostic-list-item"
                            >
                              {item.serialNo}
                            </div>
                            <div
                              className="diagnostic-list-name"
                              style={{ width: "25%" }}
                              className="diagnostic-list-item"
                            >
                              {item.name}
                            </div>
                            <div
                              className="diagnostic-list-id"
                              style={{ width: "20%" }}
                              className="diagnostic-list-item"
                            >
                              {item.shortExplanation}{" "}
                            </div>
                            <div
                              className="diagnostic-list-id"
                              style={{ width: "40%" }}
                              className="diagnostic-list-item"
                            >
                              {item.explanation}
                            </div>
                          </List>
                        </NavLink>
                      );
                    }
                  } else {
                    return (
                      <NavLink
                      onClick={sendData}
                        to={{
                          pathname: props.match.url + "/" +  decodeURIComponent(item.diagnosticId),
                          state: {...item}
                        }}
                      >
                        <List>
                          <div
                            className="diagnostic-list-id"
                            style={{ width: "10%" }}
                            className="diagnostic-list-item"
                          >
                            {item.serialNo}
                          </div>
                          <div
                            className="diagnostic-list-name"
                            style={{ width: "25%" }}
                            className="diagnostic-list-item"
                          >
                            {item.name}
                          </div>
                          <div
                            className="diagnostic-list-id"
                            style={{ width: "20%" }}
                            className="diagnostic-list-item"
                          >
                            {item.shortExplanation}{" "}
                          </div>
                          <div
                            className="diagnostic-list-id"
                            style={{ width: "40%" }}
                            className="diagnostic-list-item"
                          >
                            {item.explanation}
                          </div>
                        </List>
                      </NavLink>
                    );
                  }
                })}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnostic;
