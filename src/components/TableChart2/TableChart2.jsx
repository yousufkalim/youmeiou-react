import React, { Component } from "react";
import "./TableChart2.css";

import Box from "../Box/Box";
import { Images } from "../../assets/Assets";

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
// var valueToFind_x = 1;
// var valueToFind_y = 2;
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
x_y_axis3[4] = new Array(5, 4,3, 2, 1);
x_y_axis3[3] = new Array(10, 8, 6,4, 2);
x_y_axis3[2] = new Array(15, 12, 9, 6, 3);
x_y_axis3[1] = new Array(4, 8, 12, 16, 20);
x_y_axis3[0] = new Array(5, 10, 15,20, 25);

var x_y_axis4 = new Array();
x_y_axis4[0] = new Array(25,20,15,10,5);
x_y_axis4[1] = new Array(20,16,12,8,4);
x_y_axis4[2] = new Array(15,12,9,6,3);
x_y_axis4[3] = new Array(10,8,6,4,2);
x_y_axis4[4] = new Array(5,4,3,2,1);

var x_axisVal = [];
var y_axisVal = [];
var x_bool = false;
console.log("boolean",x_bool);

// var revArray = x_y_axis.reverse();
export class TableChart2 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       test: 0,
      //  x_axisVal: [],
      //  y_axisVal: [],
       x_bool: false,
       
      //  valueToFind_x: 0,
      //  valueToFind_y: 0,
    }
  }

  // var valueToFind_y = 10;
// var valueToFind_x = 5;
  
componentDidMount() {
    // console.log("this is tablechart component");
    this.getOrigin();

      // for(let i = 0; i< 3; i++){
      //   this.setState({test: 1});
      //   await this.getOrigin();
      // }
  
    
    // this.forceUpdate();
    this.setState({test: 0})

   
    // this.setState({valueToFind_x: this.props.gravity});
    // this.setState({valueToFind_y: this.props.probability});
    // valueToFind_y = this.props.probability;
    // valueToFind_x = this.props.gravity;

  }

  componentDidUpdate(prevProps){
      if(prevProps.gravity !== this.props.gravity && prevProps.probability !== this.props.probability){
        this.getOrigin();
        // console.log("did update run")
        // this.setState({test: 0});
      }
  }

  getOrigin = () => {
    // console.log("hshdjhsdjh");
    // const {valueToFind_x, valueToFind_y} = this.state;
    // const {x_axisVal, y_axisVal} = this.state;
    this.setState({test: 2})
    for(let a = 0; a < 4; a++){
      console.log("value of x_bool ---- ",x_bool);
    // debugger;
    console.log(a);
    for (let i = 0; i < 5; i++) {
      console.log("x-axis array", x_axisVal);
      console.log("y-axis array", y_axisVal);
      console.log("y-axis value array", x_axisVal[a]);
      console.log("y-axis value array", y_axisVal[a]);
      if(x_axisVal[a] === undefined || y_axisVal[a] === undefined){
        for (let j = 0; j < 5; j++) {
          if (x_bool === false) {
            // console.log("if x_bool undefined");
            console.log("table value x(gravity) ", x_y_axis[i][j]);
              console.log("gravity value to find ",this.props.gravity[a]);
            if (x_y_axis[i][j] === this.props.gravity[a]) {
              
             
               if(this.props.probability[a] === 1 && this.props.gravity[a] === 1){
                x_axisVal.push(0);
                i = 0;
                x_bool = true
                j = -1
               }
               else{
                x_axisVal.push(j);
                // this.setState(prevState => ({
                //   x_axisVal: [...prevState.x_axisVal, j]
                // }))
    
                // x_axisVal = j;
                i = 0;
                x_bool = true
                // x_bool[a] = true;
                console.log("if equal gravity", x_axisVal);
                console.log("x_bool value => ", x_bool);
                // x_bool = true
                // console.log("index of x is", x_axisVal);
                this.setState({test: 2});
                break;
               }
            
             
            }
          } else {
            console.log("table value", x_y_axis[i][j]);
              console.log("probability value to find",this.props.probability[a]);
            // console.log(x_y_axis[i][j]);
            // console.log(this.props.probability[a]);
            if (x_y_axis[i][j] === this.props.probability[a]) {
              if(this.props.probability[a] === 1 && this.props.gravity[a] === 1){
                y_axisVal.push(0);
                x_bool = false
              }
              else{
                if(this.props.probability[a] < 4){
                  // console.log("probability props ===  ", this.props.probability );
                  // eslint-disable-next-line no-loop-func
                  console.log("table value", x_y_axis[i][j]);
                  console.log("probability lessthan 4",this.props.probability[a]);
                  y_axisVal.push(i);
                  // this.setState(prevState => ({
                  //   y_axisVal: [...prevState.y_axisVal, i]
                  // }))
                  // i = -1;
                  x_bool = false
                    // y_axisVal = i;
                  this.setState({test: 2});
                  console.log("if equal probability less than 4", y_axisVal);
      
                  }
                  else{
                    console.log("table value", x_y_axis[i][j]);
                    console.log("probability greater than 4",this.props.probability[a]);
                  y_axisVal.push(j);
    
                    // this.setState(prevState => ({
                    //   y_axisVal: [...prevState.y_axisVal, j]
                    // }))
                    // i = -1;
                    x_bool = false
                  console.log("if equal probability greater than 4", y_axisVal);
                  
      
                    // y_axisVal = j;
                  // console.log("probability props ===  ", this.props.probability );
                  this.setState({test: 2});
                  }
              }
  
              
              // i = 0;
              // console.log("index of y is", y_axisVal);
              // console.log("answer is ", x_y_axis2[y_axisVal][x_axisVal]);
              this.setState({test: 2});
              console.log("if equal probability outside");
              //console.log("answer is ",x_y_axis.indexOf(6));
  
              // return;
              break;
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
          // console.log("gravity props do nothing ===  ", this.props.probability );
          // console.log("probability props do nothing ===  ", this.props.gravity );
          // console.log("nothing");
        }
      }
      else{
        break;
      }
// console.log("for loop");
// var valueToFind_y = 15;
// var valueToFind_x = 16;
// x_y_axis[0] = new Array(1, 2, 3, 4, 5);
// x_y_axis[1] = new Array(2, 4, 6, 8, 10);
// x_y_axis[2] = new Array(3, 6, 9, 12, 15);
// x_y_axis[3] = new Array(4, 8, 12, 16, 20);
// x_y_axis[4] = new Array(5, 10, 15, 20, 25);
// var x_y_axis2 = new Array();
// x_y_axis2[0] = new Array(5, 10, 15, 20, 25);
// x_y_axis2[1] = new Array(4, 8, 12, 16, 20);
// x_y_axis2[2] = new Array(3, 6, 9, 12, 15);
// x_y_axis2[3] = new Array(2, 4, 6, 8, 10);
// x_y_axis2[4] = new Array(1, 2, 3, 4, 5);
// var x_y_axis4 = new Array();
// x_y_axis2[0] = new Array(5, 10, 15, 20, 25).reverse();
// x_y_axis2[1] = new Array(4, 8, 12, 16, 20).reverse();
// x_y_axis2[2] = new Array(3, 6, 9, 12, 15).reverse();
// x_y_axis2[3] = new Array(2, 4, 6, 8, 10).reverse();
// x_y_axis2[4] = new Array(1, 2, 3, 4, 5).reverse();
     
      
    }
    x_bool = false
    // this.setState({test: 3})
  }
  };

//   componentWillUnmount() { 
//     x_axisVal = 0;
//     y_axisVal = 0;
//     x_bool = false;
// }

  render() {
    const ismatch = nums.map((num) =>
      num === this.props.score ? true : false
    );
    // const {x_axisVal, y_axisVal} = this.state;
    console.log("x array",x_axisVal);
    console.log("y array",y_axisVal);
    // console.log(this.props.score);
    // console.log(ismatch);
    // console.log("x-index" ,x_axisVal);
    // console.log("y-index" ,y_axisVal);
    // console.log("gravity value in render", this.props.gravity);
    // console.log("probability value in render", this.props.probability);
    const {gravity,probability} = this.props;
    console.log(x_bool);
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
                    <div className="custom-box" style={ numb > 10 ? {border: "2px solid #F2072B"}: numb > 6 ? {border: "2px solid #F2E207"} : numb > 3 ? {border: "2px solid #ACACAC"} : numb > 1 ? {border: "2px solid #5AC9D5"} : {border: "2px solid #8EC98B"}} >
                        {
                          // console.log(x_axisVal[0]),
                          // console.log(x_axisVal[0]),
                          // console.log("fff", numb),
                          // for(let d = 0; d < x_axisVal.length; d++){
                          //   return(
                              
                          //   )
                          // }
                          // console.log(x_axisVal),
                         
                           x_axisVal.length === this.props.gravity.length && x_axisVal.map((val,it) => 
                            this.props.probability[it] < 6
                            ?
                            this.props.probability[it] < 3
                            ?
                            (
                              
                              x_y_axis3.reverse()[index] === x_y_axis3.reverse()[y_axisVal[it]] && x_y_axis3[i] === x_y_axis3[x_axisVal[it]] ) && (
                                this.props.getPlotValues(numb),
                              <div className="box-circle"></div>
                            )
                            // :
                            // (x_y_axis3.reverse()[index] === x_y_axis3.reverse()[y_axisVal[it]] && x_y_axis3[i].reverse() === x_y_axis3[x_axisVal[it]].reverse() ) && (
                            //   <div className="box-circle"></div>
                            // )
                            :
                            (
                              
                              x_y_axis3[index] === x_y_axis3[y_axisVal[it]] && x_y_axis3[i].reverse() === x_y_axis3[x_axisVal[it]].reverse() ) && (
                                this.props.getPlotValues(numb),
                              <div className="box-circle"></div>
                            )
                            :
                            (
                              
                              x_y_axis3.reverse()[index] === x_y_axis3.reverse()[y_axisVal[it]] && x_y_axis3[i].reverse() === x_y_axis3[x_axisVal[it]].reverse() ) && (
                                this.props.getPlotValues(numb),
                              <div className="box-circle"></div>
                            )
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

export default TableChart2;
