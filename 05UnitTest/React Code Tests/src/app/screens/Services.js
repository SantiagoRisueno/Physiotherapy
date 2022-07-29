import React, { Component } from "react";

import Slider from "../components/Slider"
import LstServices from "../components/Services";


export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider name="Servicios" title="Conoce nuestros servicios"/>
        <div className="container-wrap mt-5">
        <LstServices/>

        </div>
      </React.Fragment>
    );
  }
}
