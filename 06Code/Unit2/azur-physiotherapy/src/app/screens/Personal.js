import React, { Component } from "react";
import Slider from "../components/Slider";
import Doctor from "../components/Doctor";

export default class Personal extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider name="Personal" title="Empleados"/>
        <Doctor/>
      </React.Fragment>
    );
  }
}
