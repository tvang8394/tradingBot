import React from "react";
import { Input, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

function Header(props) {
    
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="text-center">SPY</h1>
      </div>
        <Input type="text" className="col-sm-6 col-md-2 ml-auto" />
        <Button className="col-sm-3 col-md-1 mr-auto ml-1" color="danger">Find</Button>
      </div>
  );
}
function mapStateToProps(state) {
    return {
        account: state
    }
}
export default connect(mapStateToProps)(Header);