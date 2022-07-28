import React from "react";
import { FaBrain, FaLungs, FaHospitalAlt } from "react-icons/fa";
import { MdSportsHandball } from "react-icons/md";

class ServicesComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-2">Vivimos para cuidar de ti</h2>
              <p>
                Nuestros doctores, nuestras instalaciones y beneficios son
                moldeados para tu confort.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span>
                    <FaBrain />
                  </span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Terapia Neurilógica</h3>
                  <p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span>
                    <MdSportsHandball />
                  </span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Terapia Deportiva</h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span>
                    <FaLungs />
                  </span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Terapia Respiratoria</h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span>
                    <FaHospitalAlt />
                  </span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Terapia Posquirúrgica</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ServicesComponent;
