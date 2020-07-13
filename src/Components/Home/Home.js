import React, { Component } from "react";
import axios from "axios";
import './Home.css';

export default class Home extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/manyusharma/repos`).then((res) => {
      const data1 = res.data["0"].html_url;
      const data2 = res.data["1"].html_url;
      const data3 = res.data["2"].html_url;
      const data4 = res.data["3"].html_url;
      const data5 = res.data["4"].html_url;
      const data6 = res.data["5"].html_url;
      const data7 = res.data["6"].html_url;
      const data8 = res.data["7"].html_url;

      const newData = [];

      const data = [
        ...newData,
        data1,
        data2,
        data3,
        data4,
        data5,
        data6,
        data7,
        data8,
      ];

      // console.log("My Data=>", data);

      this.setState({ data });

      // console.log("State =>",this.state);
    });
  }

  render() {
    // const { data } = this.state.data;

    return (
      <div>
        
          {this.state.data.map((item) => (
            
            <div className="card" key={item}>
            {/* <img className="card-img-top" alt="Card image cap" /> */}
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">Project :{item}</p>
              <a href={item} className="btn btn-primary">Click Here</a>
            </div>
          </div>
         
          ))}
        
      </div>
    );
  }
}
