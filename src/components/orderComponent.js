import React, { Component } from "react";
import config from "../config";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
const Alpaca = require("@alpacahq/alpaca-trade-api");

class OrderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: "",
      qty: 0,
      alpacaApiPacket: new Alpaca({
        keyId: config.ALPACA_API_KEY,
        secretKey: config.ALPACA_SECRET_KEY,
        paper: true,
        usePolygon: false,
      }),
    };
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    // console.log("change symbol" + this.state.symbol);
    // console.log("value" + value);
    const name = target.name;
    this.setState({ [name]: value });
    // console.log("change symbol" + this.state.symbol);

    event.preventDefault();
  };

  handleSubmit = (event) => {
    // console.log(this.state.alpacaApiPacket)
    const api = this.state.alpacaApiPacket;
    const symbol = this.state.symbol;
    const qty = parseInt(this.state.qty, 10);
    console.log("symbol" + typeof symbol);
    console.log("symbol" + typeof qty + qty);

    api.createOrder({
      symbol: symbol, // any valid ticker symbol
      qty: qty,
      side: "buy",
      type: "market",
      time_in_force: "gtc",
    });

    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>Order OrderComponent</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Col md={10}>
              <Input
                type="text"
                id="symbol"
                name="symbol"
                placeholder="Ticker"
                value={this.state.symbol}
                onChange={this.handleInputChange}
              />
            </Col>
            <Col md={10}>
              <Input
                type="text"
                id="qty"
                name="qty"
                placeholder="Quantity"
                value={this.state.qty}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" color="primary">
                Buy Stock
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default OrderComponent;
