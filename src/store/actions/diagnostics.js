import endPoints from "../../globals/Constants";
import * as actionTypes from "../actionTypes";
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
      familyId: 2,
      name: "two",
      detail: "this is second element",
      description: "Libellé court",
    },
    {
      id: "003",
      familyId: 2,
      name: "three",
      detail: "this is third element",
      description: "Libellé court",
    },
    {
      id: "004",
      familyId: 2,
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

export const diagnostic = (payload) => {
    // console.log(payload);
    // return {
    //     type: actionTypes.GET_DIAGNOSTICS,
        
    // }   
    return  async (dispatch) => {
        await fetch(`${endPoints.GET_FILTER_DIAGNOSTICS}/${payload.userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${payload.userToken}`
            }
        }).then((res) => res.json())
            .then((result) => {
                if(result){
                    dispatch({
                        type: actionTypes.GET_DIAGNOSTICS,
                        lists: {result}
                           
                    })
                }
                else{
                    dispatch({
                        type: actionTypes.GET_DIAGNOSTICS,
                        lists: {result}
                            
                           
                    })
                }
            })
            .catch((error) => {
                dispatch({
                    type: actionTypes.GET_DIAGNOSTICS,
                  
                    lists: [{name: "hello"}]
                       
                })
            })
    }
    // return {
    //     type: actionTypes.GET_DIAGNOSTICS,
       
    // }
}