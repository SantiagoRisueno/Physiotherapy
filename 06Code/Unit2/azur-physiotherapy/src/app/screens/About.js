import React, { Component } from "react";
import Slider from "../components/Slider";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider name="Acerca de" title="Acerca de"/>
        <section className="ftco-section">
          <div className="container">
            <div className="row d-md-flex">
              <div
                className="col-md-6 ftco-animate img about-image order-md-last"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://cdn.glitch.global/39d222eb-3256-42cb-bd19-fb6a1269a765/about.webp?v=1657559887757" +
                    ")",
                }}
              ></div>
              <div className="col-md-6 ftco-animate pr-md-5 order-md-first">
                <div className="row">
                  <div className="col-md-12 nav-link-wrap mb-5">
                    <div
                      className="nav ftco-animate nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        className="nav-link active"
                        id="v-pills-whatwedo-tab"
                        data-toggle="pill"
                        href="#v-pills-whatwedo"
                        role="tab"
                        aria-controls="v-pills-whatwedo"
                        aria-selected="true"
                      >
                        Institución
                      </a>

                      <a
                        className="nav-link"
                        id="v-pills-mission-tab"
                        data-toggle="pill"
                        href="#v-pills-mission"
                        role="tab"
                        aria-controls="v-pills-mission"
                        aria-selected="false"
                      >
                        Misión
                      </a>

                      <a
                        className="nav-link"
                        id="v-pills-goal-tab"
                        data-toggle="pill"
                        href="#v-pills-goal"
                        role="tab"
                        aria-controls="v-pills-goal"
                        aria-selected="false"
                      >
                        Visión
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 d-flex align-items-center">
                    <div
                      className="tab-content ftco-animate"
                      id="v-pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-whatwedo"
                        role="tabpanel"
                        aria-labelledby="v-pills-whatwedo-tab"
                      >
                        <div>
                          <h2 className="mb-4">
                            Ofrecemos un servicio de calidad
                          </h2>
                          <p>
                            La hospitalidad es nuestro valor central, que se
                            expresa y se concreta en los cuatro valores guía que
                            seguimos como institución.
                          </p>
                          <p>
                            La asumimos como una obligación con los usuarios, el
                            medio ambiente. Siendo capaces, a su vez, de aplicar
                            la ética y una justa distribución de los recursos de
                            los que disponemos en todas las actividades que
                            llevamos a cabo para la adecuada sostenibilidad del
                            centro médico.
                          </p>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-mission"
                        role="tabpanel"
                        aria-labelledby="v-pills-mission-tab"
                      >
                        <div>
                          <h2 className="mb-4">
                            Para ayudar a todos los pacientes
                          </h2>
                          <p>
                            Brindar Servicios de Salud con eficacia, eficiencia
                            y calidez para mejorar la calidad de vida de
                            nuestros pacientes, a través de medicina basada en
                            evidencia con capacidad y conocimiento de nuestro
                            personal médico, asistencial y administrativo.
                          </p>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-goal"
                        role="tabpanel"
                        aria-labelledby="v-pills-goal-tab"
                      >
                        <div>
                          <h2 className="mb-4">En un futuro esperamos</h2>
                          <p>
                            Ser reconocidos como el Hospital líder y seguro
                            centrado en el paciente que brinda experiencias
                            excepcionales, a través de una atención de salud que
                            mejore su calidad de vida en forma integral tanto
                            física como emocional, social y espiritual, con los
                            más altos estándares, tecnología de vanguardia y
                            excelencia en la educación médica
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
