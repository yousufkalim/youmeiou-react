import React, { Component } from "react";
import "./TableChart.css";

import Box from "../Box/Box";
import { Images } from "../../assets/Assets";

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

export class TableChart extends Component {
  render() {
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
              {nums.map((num) => (
                <div className="chart-table-box">
                  <Box
                    num={num}
                    style={
                      num < 5
                        ? { border: "0.3rem solid #5AC9D5" }
                        : num < 10
                        ? { border: "0.3rem solid #F2E207" }
                        : { border: "0.3rem solid #F2072B" }
                    }
                  />
                </div>
              ))}
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
