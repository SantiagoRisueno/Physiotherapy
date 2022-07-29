import React, { Component } from "react";
import { AiOutlineCheck } from "react-icons/ai";

import Doctor from "../components/Doctor";
import Appointment from "../components/Appointment";
import ServicesComponent from "../components/Services";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="home-slider owl-carousel">
          <div
            className="slider-item"
            style={{
              backgroundImage:
                "url(" +
                "https://cdn.glitch.global/39d222eb-3256-42cb-bd19-fb6a1269a765/bg_1.jpg?v=1657514285768" +
                ")",
            }}
          >
            <div className="overlay"></div>
            <div className="container">
              <div
                className="row slider-text align-items-center"
                data-scrollax-parent="true"
              >
                <div
                  className="col-md-6 col-sm-12 ftco-animate"
                  data-scrollax=" properties: { translateY: '70%' }"
                >
                  <h1
                    className="mb-4"
                    data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                  >
                    Atención médica ahora simplificado para todos
                  </h1>
                  <p
                    className="mb-4"
                    data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                  >
                    Satisfacer de manera eficaz y eficiente las necesidades de
                    cuidado del paciente es nuestra prioridad.
                  </p>
                  {/* <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                    <Link to="/" className="btn btn-primary px-4 py-3">
                      Agenda tu Cita
                    </Link>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment */}
        <section className="ftco-intro">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-3 color-1 p-4">
                <h3 className="mb-4">Línea de Emergencia</h3>
                <p>
                  Aquí encontrarás la atención médica que te dará tranquilidad.
                </p>
                <span className="phone-number">+ (593) 9955814582</span>
              </div>
              <div className="col-md-3 color-2 p-4">
                <h3 className="mb-4">Horario de Atención</h3>
                <p className="openinghours d-flex">
                  <span>Lunes - Viernes</span>
                  <span>8:00 - 19:00</span>
                </p>
                <p className="openinghours d-flex">
                  <span>Sabado</span>
                  <span>10:00 - 17:00</span>
                </p>
                <p className="openinghours d-flex">
                  <span>Domingo</span>
                  <span>10:00 - 16:00</span>
                </p>
              </div>
              <Appointment/>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-services">
          <ServicesComponent />
          <div className="container-wrap mt-5">
            <div className="row d-flex no-gutters">
              <div
                className="col-md-6 img"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://cdn.glitch.global/39d222eb-3256-42cb-bd19-fb6a1269a765/about_2.jpg?v=1657518489667" +
                    ")",
                }}
              ></div>
              <div className="col-md-6 d-flex">
                <div className="about-wrap">
                  <div className="heading-section heading-section-white mb-5 ftco-animate">
                    <h2 className="mb-2">Azur con un toque personal</h2>
                    <p>
                      Nuestros programas y servicios están diseñados para
                      satisfacer sus necesidades de atención médica y ayudarlo a
                      mantener un estilo de vida saludable.
                    </p>
                  </div>
                  <div className="list-services d-flex ftco-animate">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span>
                        <AiOutlineCheck />
                      </span>
                    </div>
                    <div className="text">
                      <h3>Personal Experimentado</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                  <div className="list-services d-flex ftco-animate">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span>
                        <AiOutlineCheck />
                      </span>
                    </div>
                    <div className="text">
                      <h3>Instalaciones de alta tecnología</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                  <div className="list-services d-flex ftco-animate">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span>
                        <AiOutlineCheck />
                      </span>
                    </div>
                    <div className="text">
                      <h3>Comodidad</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Doctor />
      </React.Fragment>
    );
  }
}
