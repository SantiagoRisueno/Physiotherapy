import React from "react";
import { Link } from "react-router-dom";

class DoctorComponet extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <h2 className="mb-3">Conoce Nuestro Personal Médico</h2>
                <p>
                Contamos con un Staff Médico altamente calificado para sus necesidades
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
                <div className="staff">
                  <div
                    className="img mb-4"
                    style={{
                        backgroundImage:
                          "url(" +
                          "https://cdn.glitch.global/39d222eb-3256-42cb-bd19-fb6a1269a765/person_1.jpg?v=1657637244949" +
                          ")",
                      }}
                  ></div>
                  <div className="info text-center">
                    <h3>
                      <Link to="teacher-single.html">Tom Smith</Link>
                    </h3>
                    <span className="position">Fisioterapeuta</span>
                    <div className="text">
                      <p>
                      </p>
                      <ul className="ftco-social">
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-twitter"></span>
                          </Link>
                        </li>
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-facebook"></span>
                          </Link>
                        </li>
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-instagram"></span>
                          </Link>
                        </li>
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-google-plus"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
                <div className="staff">
                  <div
                    className="img mb-4"
                    style={{
                        backgroundImage:
                          "url(" +
                          "https://cdn.glitch.global/39d222eb-3256-42cb-bd19-fb6a1269a765/person_8.jpg?v=1657637245364" +
                          ")",
                      }}
                  ></div>
                  <div className="info text-center">
                    <h3>
                      <Link to="teacher-single.html">Mark Wilson</Link>
                    </h3>
                    <span className="position">Fisioterapeuta</span>
                    <div className="text">
                      <p>
                      </p>
                      <ul className="ftco-social">
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-twitter"></span>
                          </Link>
                        </li>
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-facebook"></span>
                          </Link>
                        </li>
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-instagram"></span>
                          </Link>
                        </li>
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-google-plus"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
                <div className="staff">
                  <div
                    className="img mb-4"
                    style={{
                        backgroundImage:
                          "url(" +
                          "https://cdn.glitch.global/39d222eb-3256-42cb-bd19-fb6a1269a765/person_6.jpg?v=1657637245500" +
                          ")",
                      }}
                  ></div>
                  <div className="info text-center">
                    <h3>
                      <Link to="teacher-single.html">Patrick Jacobson</Link>
                    </h3>
                    <span className="position">Fisioterapeuta</span>
                    <div className="text">
                      <p>
                      </p>
                      <ul className="ftco-social">
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-twitter"></span>
                          </Link>
                        </li>
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-facebook"></span>
                          </Link>
                        </li>
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-instagram"></span>
                          </Link>
                        </li>
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-google-plus"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
                <div className="staff">
                  <div
                    className="img mb-4"
                    style={{
                        backgroundImage:
                          "url(" +
                          "https://cdn.glitch.global/39d222eb-3256-42cb-bd19-fb6a1269a765/person_5.jpg?v=1657637246240" +
                          ")",
                      }}
                  ></div>
                  <div className="info text-center">
                    <h3>
                      <Link to="teacher-single.html">Ivan Dorchsner</Link>
                    </h3>
                    <span className="position">System Analyst</span>
                    <div className="text">
                      <p>
                      </p>
                      <ul className="ftco-social">
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-twitter"></span>
                          </Link>
                        </li>
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-facebook"></span>
                          </Link>
                        </li>
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-instagram"></span>
                          </Link>
                        </li>
                        <li className="ftco-animate">
                          <Link to="#">
                            <span className="icon-google-plus"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row  mt-5 justify-conten-center">
              <div className="col-md-8 ftco-animate">
                <p>
                  Nuestros doctores estan altamente capacitados.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default DoctorComponet;
