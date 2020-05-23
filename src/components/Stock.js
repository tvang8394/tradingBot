import React, { Component } from "react";
import alphaVin from "../services/alphaVin";
import { Input, Form, Label, Col, FormGroup } from "reactstrap";
import { NONE } from "apisauce";

export default class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prev_close: 0,
      prev_open: 0,
      upperLevel: 0,
      lowerLevel: 0,
    };
  }
  componentWillMount() {
    // const alphaVinStream = alphaVin();
    // alphaVinStream.then((response) => {
    //   const data = response;
    //   const series = data["series"];
    //   const keys = Object.keys(series);
    //   console.log(series);
    //   this.setState({
    //     prev_close: series[keys[0]]["4. close"],
    //     prev_open: series[keys[0]]["1. open"],
    //   });
    // });
  }
  handleChange = (e) => {
      const name = e.target.name;
      this.setState({
          [name]: e.target.value
      })
  } 
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <p>Open: {this.state.prev_open}</p>
            <p>Close {this.state.prev_close}</p>
            <p>
              Et consequat non consequat laborum tempor ea. Reprehenderit id
              veniam qui nostrud tempor cupidatat. Consequat tempor non id ad.
              Aute eu laboris magna dolor Lorem laboris cupidatat duis
              exercitation in ad irure deserunt eu.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form>
              <FormGroup>
                <Label htmlFor="upperLevel" md={6} className="ml-1">
                  Upper Level
                </Label>
                <Col md={12}>
                  <Input
                    type="text"
                    id="upperLevel"
                    name="upperLevel"
                    placeholder="Upper Level"
                    value={this.state.upperLevel}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
            </Form>
          </div>
          <div className="col">
          <Form>
          <FormGroup>
                <Label htmlFor="lowerLevel" md={6} className="ml-1"> 
                  Lower Level
                </Label>
                <Col md={12}>
                  <Input
                    type="text"
                    id="lowerLevel"
                    name="lowerLevel"
                    placeholder="Lower Level"
                    value={this.state.lowerLevel}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
