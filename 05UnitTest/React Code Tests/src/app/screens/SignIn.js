import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Input";
import Slider from "../components/Slider";
import {
	expressions
} from "../controller/Utils";
import {
	Form,
	Label,
	TermContainer,
	CenteredButtonContainer,
	Button,
	ExitMessage,
	ErrorMessage,
} from "../components/styles/Styles";


const Signin = () => {
	const [identification, changeIdentification] = useState({
		field: "",
		valid: null,
	});
	const [age, changeAge] = useState({ field: "", valid: null });
	const [address, changeAddress] = useState({ field: "", valid: null });
	const [nombre, changeName] = useState({ field: "", valid: null });
	const [password, changePassword] = useState({ field: "", valid: null });
	const [password2, changePassword2] = useState({ field: "", valid: null });
	const [email, changeEmail] = useState({ field: "", valid: null });
	const [phone, changePhone] = useState({ field: "", valid: null });
	const [terms, changeTerms] = useState(false);
	const [validForm, changeValidForm] = useState(null);


	const validatePassword2 = () => {
		if (password.field.length > 0) {
			if (password.field !== password2.field) {
				changePassword2((prevState) => {
					return { ...prevState, valid: "false" };
				});
			} else {
				changePassword2((prevState) => {
					return { ...prevState, valid: "true" };
				});
			}
		}
	};

	const onChangeTerminos = (e) => {
		changeTerms(e.target.checked);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (
			nombre.valid === "true" &&
			identification.valid === "true" &&
			age.valid === "true" &&
			address.valid === "true" &&
			password.valid === "true" &&
			password2.valid === "true" &&
			email.valid === "true" &&
			phone.valid === "true" &&
			terms
		) {
			changeValidForm(true);
			changeIdentification({ field: "", valid: "" });
			changeAge({ field: "", valid: null });
			changeAddress({ field: "", valid: "" });
			changeName({ field: "", valid: null });
			changePassword({ field: "", valid: null });
			changePassword2({ field: "", valid: "null" });
			changeEmail({ field: "", valid: null });
			changePhone({ field: "", valid: null });
		} else {
			changeValidForm(false);
		}
	};
	return (
		<React.Fragment>
			<Slider name="Registrarse" title="Unete a AZUR y obten beneficios" />
			<div className="container mt-5 mb-5">
				<Form action="" onSubmit={onSubmit}>
					<div>
						<Label>Nombre</Label>
						<Input
							state={nombre}
							changeState={changeName}
							type="text"
							label="Nombre"
							placeholder="Marco Anthonio Sanchez Sanchez"
							name="name"
							bugMessage="El nombre solo puede contener letras y espacios."
							expresionRegular={expressions.nombre}
						/>
					</div>
					<div>
						<Label>Edad</Label>
						<Input
							state={age}
							changeState={changeAge}
							type="text"
							label="Edad"
							placeholder="19"
							name="Edad"
							bugMessage="Solo se permiten caracteres númericos."
							expresionRegular={expressions.age}
						/>
					</div>
					<div>
						<Label>Cedula</Label>
						<Input
							state={identification}
							changeState={changeIdentification}
							type="text"
							label="Cedula"
							placeholder="0506535889"
							name="cedula"
							bugMessage="La cedula solo puede tener numeros y tiene que tener 10 digitos."
							// expresionRegular={validateIdentification}
							expresionRegular={expressions.identification}
						/>
					</div>
					<div>
						<Label>Dirección</Label>
						<Input
							state={address}
							changeState={changeAddress}
							type="text"
							label="Direccion"
							placeholder="Jose Joaquin de olmedo y Martin Agusto"
							name="Direccion"
							bugMessage="La direccion solo puede contener letras y espacios."
							expresionRegular={expressions.address}
						/>
					</div>
					<div>
						<Label>Contraseña</Label>
						<Input
							state={password}
							changeState={changePassword}
							type="password"
							label="Contraseña"
							placeholder="*******"
							name="password1"
							bugMessage="La contraseña tiene que ser de 4 a 12 dígitos."
							expresionRegular={expressions.password}
						/>
					</div>
					<div>

						<Label>
							Repetir Contraseña
						</Label>
						<Input
							state={password2}
							changeState={changePassword2}
							type="password"
							label="Repetir Contraseña"
							placeholder="*******"
							name="password2"
							bugMessage="Ambas contraseñas deben ser iguales."
							funcion={validatePassword2()}
						/>
					</div>
					<div>
						<Label>Email</Label>
						<Input
							state={email}
							changeState={changeEmail}
							type="email"
							label="Correo Electrónico"
							placeholder="marcoanthonio@gmail.com"
							name="correo"
							bugMessage="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
							expresionRegular={expressions.email}
						/>
					</div>
					<div>
						<Label>Telefono</Label>
						<Input
							state={phone}
							changeState={changePhone}
							type="text"
							label="Teléfono"
							placeholder="4491234567"
							name="telefono"
							bugMessage="El telefono solo puede contener numeros y el maximo son 10 dígitos."
							expresionRegular={expressions.phone}
						/>
					</div>

					<TermContainer>
						<Label>
							<input
								type="checkbox"
								name="terminos"
								id="terminos"
								checked={terms}
								onChange={onChangeTerminos}
							/>
							Acepto los Terminos y Condiciones
						</Label>
					</TermContainer>
					{validForm === false && (
						<ErrorMessage>
							<p>
								<FontAwesomeIcon icon={faExclamationTriangle} />
								<b>Error:</b> Por favor rellena el formulario correctamente.
							</p>
						</ErrorMessage>
					)}
					<CenteredButtonContainer>
						<Button type="submit">Registrarse</Button>
						<p>
							¿Ya tienes una cuenta? <Link to="/logIn">Inicia sesión</Link>
						</p>
						{validForm === true && (
							<ExitMessage>formulario enviado exitosamente!</ExitMessage>
						)}
					</CenteredButtonContainer>
				</Form>
			</div>
		</React.Fragment>
	);
};
export default Signin;
