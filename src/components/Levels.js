import React, { Component } from "react";
import { Label, Col, Row, Button } from "reactstrap";
import { Control, Form, actions } from "react-redux-form";
import { Progress } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as marketActions from "../redux/actions/marketActions";
;

class Levels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upperLevel: null,
      lowerLevel: null,
      standardRisk: null,
    };
  }

  handleSubmit(values) {
    this.setState({
      upperLevel: values.upperLevel,
      lowerLevel: values.lowerLevel,
      standardRisk: values.standardRisk,
    });
    actions.submit('levelsForm');
    this.props.resetLevelsForm();
    console.log(actions)
  }

  render() {
    return (
      <>
        <div className="text-center">
          Upper Level: {this.state.upperLevel} Progress:{" "}
          {upperLevelPercentage(
            this.state.upperLevel,
            this.props.market["4. close"]
          )}
          %
        </div>
        <Progress
          value={upperLevelPercentage(
            this.state.upperLevel,
            this.props.market["4. close"]
          )}
        />
        <div className="text-center">
          Lower Level: {this.state.lowerLevel} Progress:{" "}
          {lowerLevelPercentage(
            this.state.lowerLevel,
            this.props.market["4. close"]
          )}
          %
        </div>
        <Progress
          value={lowerLevelPercentage(
            this.state.lowerLevel,
            this.props.market["4. close"]
          )}
          color="danger"
        />
        <Form model="levelsForm" onSubmit={(values) => this.handleSubmit(values)}>
          <Row className="form-group">
            <Label htmlFor="upperLevel" md={6} className="ml-1">
              Upper Level
            </Label>
            <Col md={12}>
              <Control.text
                model=".upperLevel"
                id="upperLevel"
                name="upperLevel"
                placeholder="Upper Level"
                className="form-control"
              />
            </Col>
          </Row>

          <Row className="form-group">
            <Label htmlFor="lowerLevel" md={6} className="ml-1">
              Lower Level
            </Label>
            <Col md={12}>
              <Control.text
                model=".lowerLevel"
                id="lowerLevel"
                name="lowerLevel"
                placeholder="Lower Level"
                className="form-control"
              />
            </Col>
          </Row>

          <Row className="form-group">
            <Label htmlFor="standardRisk" md={12} className="ml-1">
              Standard Risk
            </Label>
            <Col md={12}>
              <Control.text
                model=".standardRisk"
                id="standardRisk"
                name="standardRisk"
                placeholder="Standard Risk"
                className="form-control"
              />
            </Col>
          </Row>
          <Button type="sumbit" className="ml-3 btn btn-lg" color="info">
            Save Setting
          </Button>
        </Form>
      </>
    );
  }
}

function lowerLevelPercentage(level, currentPrice) {
  const percentage = (level / currentPrice) * 100;
  return percentage.toFixed(2).toString();
}
function upperLevelPercentage(level, currentPrice) {
  const percentage = (currentPrice / level) * 100;
  return percentage.toFixed(2).toString();
}
function mapStateToProps(state) {
  return {
    market: state.market,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(marketActions, dispatch),
    resetLevelsForm: () => (actions.reset('levelsForm')),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Levels);
