import React, { Component } from "react";
import alphaVin from "../services/alphaVin";
import {
  Input,
  Form,
  Label,
  Col,
  FormGroup,
  Card,
  Button,
  CardHeader,
  CardBody,
} from "reactstrap";

export default class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prev_close: 0,
      prev_open: 0,
      upperLevel: 0,
      lowerLevel: 0,
      standardRisk: 0,
    };
  }
  componentDidMount() {
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
      [name]: e.target.value,
    });
  };
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
              <FormGroup>
                <Label htmlFor="standardRisk" md={6} className="ml-1">
                  Standard Risk
                </Label>
                <Col md={12}>
                  <Input
                    type="text"
                    id="standardRisk"
                    name="standardRisk"
                    placeholder="Standard Risk"
                    value={this.state.standardRisk}
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
              <FormGroup>
                <Label htmlFor="hardStop" md={6} className="ml-1">
                  Hard Stop / Buy
                </Label>
                <Col md={5}>
                  <Input type="select" id="hardStop" name="hardStop">
                    <option>Yes</option>
                    <option>No</option>
                  </Input>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card className="card-up"> 
              <CardHeader className="text-center card-up-head">UPPER LEVEL HIT</CardHeader>
              <CardBody className="text-center">
                Would you like to buy?
                
              </CardBody>
              <Button color="danger" className="col-sm-5 col-md-3 mx-auto mb-2">Yes</Button>
              <Button color="info" className="col-sm-5 col-md-3 mx-auto mb-2">No</Button>
            </Card>
          </div>
          <div className="col">
            <Card>
              <CardHeader className="text-center card-low-head">LOWER LEVEL HIT</CardHeader>
              <CardBody className="text-center">
                Would you like to buy?
              </CardBody>
              <Button color="danger" className="col-sm-5 col-md-3 mx-auto mb-2">Yes</Button>
              <Button color="info" className="col-sm-5 col-md-3 mx-auto mb-2">No</Button>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
