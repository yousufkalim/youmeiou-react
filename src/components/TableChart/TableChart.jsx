import React, { Component } from "react";
import "./TableChart.css";

import Box from "../Box/Box";
import { Images } from "../../assets/Assets";
//import { debugger } from "fusioncharts";

// Resolves charts dependancy

const numbers = [
  [5, 10, 15, 20, 25],
  [4, 8, 12, 16, 20],
  [3, 6, 9, 12, 15],
  [2, 4, 6, 8, 10],
  [1, 2, 3, 4, 5],
];

const nums = [
  5,
  10,
  15,
  20,
  25,
  4,
  8,
  12,
  16,
  20,
  3,
  6,
  9,
  12,
  15,
  2,
  4,
  6,
  8,
  10,
  1,
  2,
  3,
  4,
  5,
];

const items = ["Non significatif", "Mineur", "Moderé", "Majeur", "Critique"];

var x_y_axis = new Array();
var y_axis = new Array();
var valueToFind_x = 3;
var valueToFind_y = 2;
x_y_axis[0] = new Array(1, 2, 3, 4, 5);
x_y_axis[1] = new Array(2, 4, 6, 8, 10);
x_y_axis[2] = new Array(3, 6, 9, 12, 15);
x_y_axis[3] = new Array(4, 8, 12, 16, 20);
x_y_axis[4] = new Array(5, 10, 15, 20, 25);

var x_y_axis2 = new Array();
x_y_axis2[0] = new Array(5, 10, 15, 20, 25);
x_y_axis2[1] = new Array(4, 8, 12, 16, 20);
x_y_axis2[2] = new Array(3, 6, 9, 12, 15);
x_y_axis2[3] = new Array(2, 4, 6, 8, 10);
x_y_axis2[4] = new Array(1, 2, 3, 4, 5);

var x_y_axis3 = new Array();
x_y_axis3[0] = new Array(5, 10, 15, 20, 25);
x_y_axis3[1] = new Array(4, 8, 12, 16, 20);
x_y_axis3[2] = new Array(3, 6, 9, 12, 15);
x_y_axis3[3] = new Array(2, 4, 6, 8, 10);
x_y_axis3[4] = new Array(1, 2, 3, 4, 5);
let x_axisVal = 3;
let y_axisVal = 1;

// var revArray = x_y_axis.reverse();
export class TableChart extends Component {
  componentDidMount() {
    console.log("this is tablechart component");
    this.getOrigin();
  }

  getOrigin = () => {
    console.log("hshdjhsdjh");

    for (let i = 0; i < 5; i++) {
      // debugger;
      console.log("for loop");
      for (let j = 0; j < 5; j++) {
        if (x_axisVal === 0) {
          if (x_y_axis[i][j] === valueToFind_x) {
            x_axisVal = j;
            i = 0;
            console.log("index of x is", x_axisVal);
            break;
          }
        } else {
          if (x_y_axis[i][j] === valueToFind_y) {
            y_axisVal = i;
            console.log("index of y is", y_axisVal);
            console.log("answer is ", x_y_axis[x_axisVal][y_axisVal]);
            //console.log("answer is ",x_y_axis.indexOf(6));

            return;
          }
        }
        // if(x_y_axis[i][j] === 5){
        //   if(x_axisVal === 0){
        //       x_axisVal = j;
        //   }else{
        //     y_axisVal = i;
        //   }
        //   console.log("value is", j);
        //   break;
        // }
        console.log("nothing");
      }
    }
  };
  render() {
    const ismatch = nums.map((num) =>
      num === this.props.score ? true : false
    );
    console.log(this.props.score);
    console.log(ismatch);
    console.log("check if run first" ,x_axisVal)
    return (
      <div className="chart">
        <div className="chart-table-container">
          <div className="chart-table-left">
            <div className="chart-table-left-container">
              <div className="chart-table-left-content">Critique</div>
              <div className="chart-table-left-content">Majeur</div>
              <div className="chart-table-left-content">Possible</div>
              <div className="chart-table-left-content">Peu probable</div>
              <div className="chart-table-left-content">Improbable</div>
            </div>
            <img src={Images.arrowup} className="img-fluid" alt="arrow" />
          </div>
          <div className="chart-table-right">
            <div className="chart-table">
              {x_y_axis2.map((item, index) =>
                item.map((numb, i) => (
                  <div className="chart-table-box">
                    <div className="custom-box">
                        {

                          (x_y_axis3.reverse()[index] === x_y_axis3.reverse()[x_axisVal] && x_y_axis3[i].reverse() === x_y_axis3[y_axisVal].reverse() ) && (
                            <div className="box-circle"></div>
                          )
                        }
                      {/* {this.props.score === numb
                      (<div className="box-circle"></div>)
                      } */}
                      {numb}
                    </div>
                    {/* <Box
                    num={num}
                    score={this.props.score}
                    style={
                      num < 5
                        ? { border: "0.3rem solid #5AC9D5" }
                        : num < 10
                        ? { border: "0.3rem solid #F2E207" }
                        : { border: "0.3rem solid #F2072B" }
                    }
                  /> */}
                  </div>
                ))
              )}

              {/* {numbers.map((num) => (
                num.map((item) => (
                  <div className="chart-table-box">
                  <Box
                    num={item}
                    score={this.props.score}
                    style={
                      item < 5
                        ? { border: "0.3rem solid #5AC9D5" }
                        : item < 10
                        ? { border: "0.3rem solid #F2E207" }
                        : { border: "0.3rem solid #F2072B" }
                    }
                  />
                </div>
                ))
              ))} */}
            </div>
          </div>
        </div>

        <div className="chart-table-footer">
          <div className="chart-arrow">
            <img src={Images.arrow} alt="arrow" />
          </div>
          <div className="chart-table-footer-content">
            {items.map((item) => (
              <div className="chart-table-box">{item}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TableChart;
