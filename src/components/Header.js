import React from "react";
import { Input, Button } from "reactstrap";

export function Header(props) {
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="text-center">{props.symbol}</h1>
      </div>
        <Input type="text" className="col-sm-6 col-md-2 ml-auto" />
        <Button className="col-sm-3 col-md-1 mr-auto ml-1" color="danger">Find</Button>
      </div>
  );
}
