import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as accountActions from "../redux/actions/accountActions";
import {
  Card, CardText, CardBody, CardHeader,
  CardTitle,  Button, Input
} from 'reactstrap';

class AccountInfo extends Component {
  componentDidMount() {
    this.props.actions.loadAccount().catch((e) => {
      alert("Loading Courses Failed" + e);
    });
    this.props.actions.loadPositions().catch((e) => {
      alert("Loading Courses Failed" + e);
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <h5>Equity: </h5>
            <p>{this.props.account.equity}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>Buying Power: </h5>
            <p>{this.props.account.buying_power}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5>Portfolio: </h5>
          </div>
          <div className="col">
            <RenderPositions positions={this.props.positions} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function RenderPositions({ positions }) {

  if (positions) {
    return positions.map((position) => (
      <Card key={position.symbol} className="mb-2">
        <CardHeader>Ticker: {position.symbol}</CardHeader>
        <CardBody>
          <CardTitle>Qty: {position.qty}</CardTitle>
          <CardText>Avg Entry: {position.avg_entry_price}</CardText>
          <CardText>Market Value: {position.market_value}</CardText>
        </CardBody>
      </Card>
    ));
  }
}

function mapStateToProps(state) {
  return {
    account: state.account,
    positions: state.positions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
