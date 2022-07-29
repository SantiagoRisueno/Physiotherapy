import React, { useState } from "react";
import Input from "./Input";
import { expressions } from "../controller/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {
  CenteredButtonContainer,
  ExitMessage,
  ErrorMessage,
} from "./styles/Styles";

const Appointment = () => {
  const [nombre, changeName] = useState({ field: "", valid: null });
  const [email, changeEmail] = useState({ field: "", valid: null });
  const [phone, changePhone] = useState({ field: "", valid: null });
  const [validForm, changeValidForm] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.valid === "true" &&
      email.valid === "true" &&
      phone.valid === "true"
    ) {
      changeValidForm(true);
      changeEmail({ field: "", valid: null });
      changeName({ field: "", valid: null });
      changePhone({ field: "", valid: null });
    } else {
      changeValidForm(false);
    }
  };
  return (
    <>
      <div className="col-md-6 color-3 p-4">
        <h3 className="mb-2">Agenda tu Cita</h3>
        <form action="" className="appointment-form"  onSubmit={onSubmit}>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <div className="select-wrap">
                  <div className="icon">
                    <span className="ion-ios-arrow-down"></span>
                  </div>
                  <select name="" id="" className="form-control">
                    <option value="">Departmento</option>
                    <option value="">Pediatria</option>
                    <option value="">Terapia Neurilógica</option>
                    <option value="">Terapia Deportiva</option>
                    <option value="">Terapia Respiratoria</option>
                    <option value="">Terapia Posquirúrgica</option>
                    <option value="">Terapia Traumatológica</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <div className="icon">
                  <span className="icon-user"></span>
                </div>
                <Input
                  state={nombre}
                  changeState={changeName}
                  type="text"
                  placeholder="Nombre"
                  name="appointment_name"
                  bugMessage="El nombre solo puede contener letras y espacios."
                  expresionRegular={expressions.nombre}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <div className="icon">
                  <span className="icon-paper-plane"></span>
                </div>
                <Input
                  state={email}
                  changeState={changeEmail}
                  type="email"
                  placeholder="Correo"
                  name="appointment_email"
                  bugMessage="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                  expresionRegular={expressions.email}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <div className="icon">
                  <span className="ion-ios-calendar"></span>
                </div>
                <input
                  type="date"
                  className="form-control appointment_date"
                  placeholder="Fecha"
                  name="appointment_date"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <div className="icon">
                  <span className="ion-ios-clock"></span>
                </div>
                <input
                  type="time"
                  className="form-control appointment_time"
                  placeholder="Hora"
                  name="appointment_time"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <div className="icon">
                  <span className="icon-phone2"></span>
                </div>
                <Input
                  state={phone}
                  changeState={changePhone}
                  type="text"
                  label="Teléfono"
                  placeholder="Télefono"
                  name="telefono"
                  bugMessage="El telefono solo puede contener numeros y el maximo son 10 dígitos."
                  expresionRegular={expressions.phone}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            {validForm === false && (
              <ErrorMessage>
                <p>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <b>Error:</b> Por favor rellena los campos correctamente.
                </p>
              </ErrorMessage>
            )}
            <CenteredButtonContainer>
                <input
                    type="submit"
                    value="Reservar cita"
                    className="btn btn-primary"
                />
                {/* <button className="btn btn-primary py-3 px-5" type="submit">
                  Reservar cita
								</button> */}
              {validForm === true && (
                <ExitMessage>Tu cita fue agendada exitosamente!</ExitMessage>
              )}
            </CenteredButtonContainer>
          </div>
        </form>
      </div>
    </>
  );
};

export default Appointment;
