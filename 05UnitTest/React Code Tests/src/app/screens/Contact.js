import React, { useState } from "react";
import Slider from "../components/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { expressions } from "../controller/Utils";
import Input from "../components/Input";
import {
	Label,
	CenteredButtonContainer,
	ExitMessage,
	ErrorMessage,
} from "../components/styles/Styles";

const Contact = () => {
	const [email, changeEmail] = useState({ field: "", valid: null });
	const [nombre, changeName] = useState({ field: "", valid: null });
	const [message, changeMessage] = useState({ field: "", valid: null });
	const [subject, changeSubject] = useState({ field: "", valid: null });
	const [validForm, changeValidForm] = useState(null);

	const onSubmit = (e) => {
		e.preventDefault();

		if (
			nombre.valid === "true" &&
			email.valid === "true" &&
			// message.valid === "true" &&
			subject.valid === "true"
		) {
			changeValidForm(true);
			changeEmail({ field: "", valid: null });
			changeName({ field: "", valid: null });
			changeMessage({ field: "", valid: null });
			changeSubject({ field: "", valid: null });
		} else {
			changeValidForm(false);
		}
	};
	return (
		<React.Fragment>
			<Slider name="Contacto" title="Contacto" />

			<section class="ftco-section contact-section ftco-degree-bg">
				<div class="container">
					<div class="row d-flex mb-5 contact-info">
						<div class="col-md-12 mb-4">
							<h2 class="h4">Información de Contacto</h2>
						</div>
						<div class="w-100"></div>
						<div class="col-md-3">
							<p>
								<span>Dirección:</span> Albert Einstein y Cesar Borja Cordero,
								Quito, Pichincha. Ecuador
							</p>
						</div>
						<div class="col-md-3">
							<p>
								<span>Telefono:</span>{" "}
								<a href="tel://9952211145">+593 995 2211 145</a>
							</p>
						</div>
						<div class="col-md-3">
							<p>
								<span>Email:</span>{" "}
								<a href="mailto:info@azur.com">info@azur.com</a>
							</p>
						</div>
						<div class="col-md-3">
							<p>
								<span>Website:</span> <a href="/home">azur.com.ec</a>
							</p>
						</div>
					</div>
					<div class="row block-9">
						<div class="col-md-6 pr-md-5">
							<form action="" onSubmit={onSubmit}>
								<div class="form-group">
									<Label>Nombre</Label>
									<Input
										// className="form-control"
										state={nombre}
										changeState={changeName}
										type="text"
										label="Nombre"
										name="name"
										bugMessage="El nombre solo puede contener letras y espacios."
										expresionRegular={expressions.nombre}
									/>
								</div>
								<div class="form-group">
									<Label>Correo Electrónico</Label>
									<Input
										state={email}
										changeState={changeEmail}
										type="email"
										label="Correo Electrónico"
										name="correo"
										bugMessage="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
										expresionRegular={expressions.email}
									/>
								</div>
								<div class="form-group">
									<Label>Asunto</Label>
									<Input
										className="form-control"
										state={subject}
										changeState={changeSubject}
										type="text"
										label="Asunto"
										name="subject"
										bugMessage=""
										expresionRegular={expressions.address}
									/>
								</div>
								<div class="form-group">
									<Label>Mensaje</Label>
									<textarea
										className="form-control"
										state={message}
										changeState={changeMessage}
										type="text"
										label="Mensaje"
										name="message"
										bugMessage=""
										expresionRegular={expressions.message}
									></textarea>
								</div>
								<div class="form-group">
									{validForm === false && (
										<ErrorMessage>
											<p>
												<FontAwesomeIcon icon={faExclamationTriangle} />
												<b>Error:</b> Por favor rellena los campos
												correctamente.
											</p>
										</ErrorMessage>
									)}
									<CenteredButtonContainer>
										<button className="btn btn-primary py-3 px-5" type="submit">
											Enviar
										</button>

										{validForm === true && (
											<ExitMessage>
												Tu mensaje fue enviado exitosamente!
											</ExitMessage>
										)}
									</CenteredButtonContainer>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};
export default Contact;
<input
                      type="submit"
                      value="Reservar cita"
                      className="btn btn-primary"
                    />