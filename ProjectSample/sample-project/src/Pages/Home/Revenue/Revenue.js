import React, { Component } from "react";
var BarChart = require("react-chartjs").Bar;

class Revenue extends Component {
     
  render() {
      const chartData={
          labels:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],
          datasets:[
            {
                label: "My First dataset",
                fillColor: "#20c997",
                strokeColor: "#20c997",
                highlightFill: "#20c997",
                highlightStroke: "#007bff",
                data: [65, 59, 80, 81, 56, 55, 40,50,20,30,40,100]
            }
          ]
      }
    const chartOptions={
        scaleGridLineWidth : 10
    }
  //  console.log(BarChart)
    return(
        <div className="card">
        <header className="card-header">
          <h4 className="card-title">
            <i className="fa fa-bar-chart" /> Doanh số tháng này
            <nav className="home-page-link-gutter">
              <ul className="pagination pagination-sm pagination-info">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    Ngày
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Tuần
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Tháng
                  </a>
                </li>
              </ul>
            </nav>
          </h4>
          <ul className="card-controls">
            <li>
              <a className="card-btn-close" href="#" />
            </li>
            <li>
              <a className="card-btn-slide" href="#" />
            </li>
            <li>
              <a className="card-btn-fullscreen" href="#" />
            </li>
          </ul>
        </header>
  
        <div className="card-content">
          <div className="card-body">
          <BarChart data={chartData}  width="766" height="325"/>
          </div>
        </div>
      </div>
    )
   
  }
}

export default Revenue;
