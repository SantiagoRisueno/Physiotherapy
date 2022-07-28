import React from "react";
import { Link } from "react-router-dom";

class Slider extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="home-slider owl-carousel">
          <div
            className="slider-item bread-item"
            style={{
              backgroundImage:
                "url(" +
                "https://cdn.glitch.global/39d222eb-3256-42cb-bd19-fb6a1269a765/bg_1.jpg?v=1657514285768" +
                ")",
            }}
            data-stellar-background-ratio="0.5"
          >
            <div className="overlay"></div>
            <div className="container" data-scrollax-parent="true">
              <div className="row slider-text align-items-end">
                <div className="col-md-7 col-sm-12 ftco-animate mb-5">
                  <p
                    className="breadcrumbs"
                    data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"
                  >
                    <span className="mr-2">
                      <Link to="/">Home</Link>
                    </span>{this.props.name}
                    <span></span>
                  </p>
                  <h1
                    className="mb-3"
                    data-scrollax=" properties: { translateY: '70%', opacity: .9}"
                  >
                    {this.props.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Slider;
