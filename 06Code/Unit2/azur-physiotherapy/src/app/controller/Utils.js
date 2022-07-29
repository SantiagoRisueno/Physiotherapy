const expressions = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    age: /^-?\d*(\.\d+)?$/, // numeros
    identification: /^\d{10}$/, // numeros
    address: /^[a-zA-ZÀ-ÿ\s-?\d*(\.\d+)?$]{1,60}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{9,10}$/, // 9 a 10 numeros.
    // message:/^[\s]*$/,
};


const calculationIdentification = (props) => {
    let [add, mul, chars] = [0, 1, props.identification.field.length];
    for (let index = 0; index < chars; index += 1) {
        let num = props.identification.field[index] * mul;
        add += num - (num > 9) * 9;
        mul = 1 << index % 2;
    }

    if (add % 10 === 0 && add > 0) {
        return true;
    } else {
        return false;
    }
};

const validateIdentification = (props) => {
    if (calculationIdentification()) {
        validateIdentification((prevState) => {
            return { ...prevState, valid: "true" };
        });
    } else {
        validateIdentification((prevState) => {
            return { ...prevState, valid: "false" };
        });
    }
};

export {
    expressions,
    calculationIdentification,
    validateIdentification
};