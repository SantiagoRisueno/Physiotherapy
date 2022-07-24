import React from 'react';
import { Input, GroupInput, MessageError, IconValidation } from './styles/Styles';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const InputComponent = ({ state, changeState, type, label, placeholder, name, bugMessage, expresionRegular, funcion }) => {
	const onChange = (e) => {
		changeState({ ...state, field: e.target.value });
	}

	const validacion = () => {
		if (expresionRegular) {
			if (expresionRegular.test(state.field)) {
				changeState({ ...state, valid: 'true' });
			} else {
				changeState({ ...state, valid: 'false' });
			}
		}

		if (funcion) {
			funcion();
		}
	}

	return (
		<div>
			{/* <Label htmlFor={name} valid={state.valid}>{label}</Label> */}
			<GroupInput>
				<Input
					type={type}
					placeholder={placeholder}
					id={name}
					value={state.field}
					onChange={onChange}
					onKeyUp={validacion}
					onBlur={validacion}
					valid={state.valid}
				/>
				<IconValidation
					icon={state.valid === 'true' ? faCheckCircle : faTimesCircle}
					valid={state.valid}
				/>
			</GroupInput>
			<MessageError valid={state.valid}>{bugMessage}</MessageError>
		</div>
	);
}

export default InputComponent;