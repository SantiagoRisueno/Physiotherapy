import React, { useEffect, useState } from "react";
import { getUsers } from "../actions/userActions";
import Slider from "../components/Slider";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Box, TextField, Select, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from "../components/styles/Styles";

const FormUser = (props) => {
  const handleSubmit = props.handleSubmit;
  const users = props.users;
  const formUserValues = props.formUserValues;
  const setFormUservalues = props.setFormUservalues;

  const [user, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await getUsers();
      if (response.status === 200) {
        setUsers(response.data);
      }
    }
    loadUsers();
  }, []);

  const idUsers = user.length + 1;

  const [validation, setValidation] = useState({
    // auxIdUsers: false,
    auxCi: false,
    auxName: false,
    auxAge: false,
    auxGenre: false,
    auxCity: false,
    auxAddress: false,
    auxPhone: false,
    auxEmail: false,
    auxPassword: false,
    // auxType: false,
    auxLocal: true,
  });

  const [validation2, setValidation2] = useState({
    auxType: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUservalues({ ...formUserValues, [name]: value });
  };

  const handleSubmitInternal = (e) => {
    e.preventDefault();
    if (
      //   validation.auxIdUsers === true &&
      validation.auxCi === true &&
      validation.auxName === true &&
      validation.auxAge === true &&
      validation.auxGenre === true &&
      validation.auxCity === true &&
      validation.auxAddress === true &&
      validation.auxPhone === true &&
      validation.auxEmail === true &&
      validation.auxPassword === true &&
      // validation.auxType === true &&
      validation.auxLocal === true
    ) {
      formUserValues.idUsers = idUsers;
    //   formUserValues.type = 1;
      console.log(formUserValues);
      handleSubmit(formUserValues);
    } else {
      window.alert("Por favor llene todos los campos correctamente");
    }
  };

  const handleClickShowPassword = () => {
    setFormUservalues({
      ...formUserValues,
      showPassword: !formUserValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const nameValidation = () => {
    const name = formUserValues.name;
    const regexOnlyletters = /^[a-zA-Z ]+$/;
    const iName = document.getElementById("iName");
    const names = document.getElementById("name");
    var splitName = name.split(" ");
    var auxIterator = 0;
    var correctName = "";

    if (name === "") {
      iName.textContent = "*Ingrese el nombre. Campo obligatorio.";

      auxIterator++;
      setValidation({ ...validation, auxName: false });
    }

    if (auxIterator !== 1 && !regexOnlyletters.test(name)) {
      iName.textContent = "*Solo se permiten letras";

      auxIterator++;
      setValidation({ ...validation, auxName: false });
    }

    if (auxIterator === 0) {
      for (var i = 0; i < splitName.length; i++) {
        for (var j = 0; j < splitName[i].length; j++) {
          if (j === 0) {
            correctName += splitName[i].charAt(j).toUpperCase();
          } else {
            correctName += splitName[i].charAt(j);
          }
        }

        if (i !== splitName.length - 1) {
          correctName += " ";
        }
      }
      setFormUservalues({ ...formUserValues, name: correctName });
      iName.textContent = "";
      names.style.border = "";
      setValidation({ ...validation, auxName: true });
    } else {
      names.style.borderBottom = "2px solid red";
      names.style.borderRight = "2px solid red";
      names.style.borderLeft = "2px solid red";
      names.style.borderRadius = "5px";
    }
  };

  const ciCardValidation = () => {
    const idCard = formUserValues.ci;
    const regexOnlyNumbers = /[0-9]+$/;
    const iIdCard = document.getElementById("iCi");
    const idC = document.getElementById("ci");
    var auxIterator = 0;
    var splitIDCard = idCard.split("");
    var pairsArray = [];
    var oddArray = [];
    var sumOddNumbers = 0;
    var sumPairNumbers = 0;
    var totalSum = 0;
    var auxBoolIDCard = true;

    if (idCard === "") {
      iIdCard.textContent = "*Ingrese el CI. Campo obligatorio.";
      auxIterator++;
      setValidation({ ...validation, auxCi: false });
    }

    if (auxIterator !== 1 && !regexOnlyNumbers.test(idCard)) {
      iIdCard.textContent = "*El CI solo debe contener números";
      auxIterator++;
      setValidation({ ...validation, auxCi: false });
    }

    if (auxIterator !== 1 && idCard.length < 10) {
      iIdCard.textContent = "*El CI debe tener 10 digitos";
      auxIterator++;
      setValidation({ ...validation, auxCi: false });
    }

    if (
      auxIterator !== 1 &&
      !(
        idCard.charAt(0) === "1" ||
        (idCard.charAt(0) === "2" &&
          (idCard.charAt(1) === "0" ||
            idCard.charAt(1) === "1" ||
            idCard.charAt(1) === "2" ||
            idCard.charAt(1) === "3" ||
            idCard.charAt(1) === "4")) ||
        idCard.charAt(0) === "0"
      )
    ) {
      iIdCard.textContent =
        "*Ingrese correctamente los primeros dos dígitos de la cédula";
      auxIterator++;
      setValidation({ ...validation, auxCi: false });
    }

    if (auxIterator !== 1) {
      for (var i = 0; i < user.length; i++) {
        if (user[i].ci === idCard) {
          console.log(user[i].ci);
          iIdCard.textContent = "*Cédula ya registrada";
          auxIterator++;
          setValidation({ ...validation, auxCi: false });
          break;
        }
      }
    }

    if (auxIterator !== 1) {
      for (var j = 0; j < splitIDCard.length - 1; j++) {
        if ((j + 1) % 2 === 0) {
          pairsArray.push(parseInt(splitIDCard[j]));
        } else {
          oddArray.push(parseInt(splitIDCard[j]));
        }
      }

      for (var k = 0; k < oddArray.length; k++) {
        oddArray[k] *= 2;

        if (oddArray[k] > 9) {
          oddArray[k] -= 9;
        }
      }

      for (var l = 0; l < oddArray.length; l++) {
        sumOddNumbers += oddArray[l];
      }

      for (var m = 0; m < pairsArray.length; m++) {
        sumPairNumbers += pairsArray[m];
      }

      totalSum = sumOddNumbers + sumPairNumbers;
      totalSum %= 10;

      if (totalSum !== 0) {
        totalSum = 10 - totalSum;
      }

      if (totalSum !== parseInt(splitIDCard[splitIDCard.length - 1])) {
        auxBoolIDCard = false;
      }

      if (auxBoolIDCard === false) {
        iIdCard.textContent =
          "*Comprobación del último dígito errada. Ingrese correctamente su cédula";
        auxIterator++;
        setValidation({ ...validation, auxCi: false });
      }
    }

    if (auxIterator === 0) {
      iIdCard.textContent = "";
      idC.style.border = "";
      setValidation({ ...validation, auxCi: true });
    } else {
      idC.style.borderBottom = "2px solid red";
      idC.style.borderRight = "2px solid red";
      idC.style.borderLeft = "2px solid red";
      idC.style.borderRadius = "5px";
    }
  };

  const ageValidation = () => {
    const age = formUserValues.age;
    const regexAge = /^[0-9]+$/g;
    const iAge = document.getElementById("iAge");
    const ages = document.getElementById("age");
    var auxIterator = 0;

    if (age === "") {
      iAge.textContent = "*Ingrese la edad. Campo obligatorio.";
      auxIterator++;
      setValidation({ ...validation, auxAge: false });
    }

    if (auxIterator !== 1 && !regexAge.test(age)) {
      iAge.textContent = "*Ingrese correctamente la edad.";
      auxIterator++;
      setValidation({ ...validation, auxAge: false });
    }

    if (auxIterator === 0) {
      iAge.textContent = "";
      ages.style.border = "";
      setValidation({ ...validation, auxAge: true });
    } else {
      ages.style.borderBottom = "2px solid red";
      ages.style.borderRight = "2px solid red";
      ages.style.borderLeft = "2px solid red";
      ages.style.borderRadius = "5px";
    }
  };

  const cityValidation = () => {
    const city = formUserValues.city;
    const regexCity = /^[a-zA-ZÀ-ÿ\s]{1,20}$/g;
    const iCity = document.getElementById("iCity");
    const citys = document.getElementById("city");
    var splitLastName = city.split(" ");
    var auxIterator = 0;
    var correctLastName = "";

    if (city === "") {
      iCity.textContent = "*Ingrese la ciudad. Campo obligatorio.";
      auxIterator++;
      setValidation({ ...validation, auxCity: false });
    }

    if (auxIterator !== 1 && !regexCity.test(city)) {
      iCity.textContent = "*Solo se permiten letras.";
      auxIterator++;
      setValidation({ ...validation, auxCity: false });
    }

    if (auxIterator === 0) {
      for (var i = 0; i < splitLastName.length; i++) {
        for (var j = 0; j < splitLastName[i].length; j++) {
          if (j === 0) {
            correctLastName += splitLastName[i].charAt(j).toUpperCase();
          } else {
            correctLastName += splitLastName[i].charAt(j);
          }
        }

        if (i !== splitLastName.length - 1) {
          correctLastName += " ";
        }
      }
      setFormUservalues({ ...formUserValues, city: correctLastName });
      iCity.textContent = "";
      citys.style.border = "";
      setValidation({ ...validation, auxCity: true });
    } else {
      citys.style.borderBottom = "2px solid red";
      citys.style.borderRight = "2px solid red";
      citys.style.borderLeft = "2px solid red";
      citys.style.borderRadius = "5px";
    }
  };

  const addressValidation = () => {
    const address = formUserValues.address;
    const regexAddress = /^[a-zA-ZÀ-ÿ\s]+$/g;
    const iAddress = document.getElementById("iAddress");
    const addresss = document.getElementById("address");
    var splitLastName = address.split(" ");
    var auxIterator = 0;
    var correctLastName = "";

    if (address === "") {
      iAddress.textContent = "*Ingrese la calle. Campo obligatorio.";
      auxIterator++;
      setValidation({ ...validation, auxAddress: false });
    }

    if (auxIterator !== 1 && !regexAddress.test(address)) {
      iAddress.textContent = "*Solo se permiten letras.";
      auxIterator++;
      setValidation({ ...validation, auxAddress: false });
    }

    if (auxIterator === 0) {
      for (var i = 0; i < splitLastName.length; i++) {
        for (var j = 0; j < splitLastName[i].length; j++) {
          if (j === 0) {
            correctLastName += splitLastName[i].charAt(j).toUpperCase();
          } else {
            correctLastName += splitLastName[i].charAt(j);
          }
        }

        if (i !== splitLastName.length - 1) {
          correctLastName += " ";
        }
      }
      setFormUservalues({ ...formUserValues, address: correctLastName });
      iAddress.textContent = "";
      addresss.style.border = "";
      setValidation({ ...validation, auxAddress: true });
    } else {
      addresss.style.borderBottom = "2px solid red";
      addresss.style.borderRight = "2px solid red";
      addresss.style.borderLeft = "2px solid red";
      addresss.style.borderRadius = "5px";
    }
  };

  const genreValidation = () => {
    const genre = formUserValues.genre;
    const iGenre = document.getElementById("iGenre");
    const genres = document.getElementById("genre");
    var auxIterator = 0;

    if (genre === "") {
      iGenre.textContent = "*Ingrese el genero. Campo obligatorio.";
      auxIterator++;
      setValidation({ ...validation, auxGenre: false });
    }

    if (auxIterator === 0) {
      iGenre.textContent = "";
      genres.style.border = "";
      setValidation({ ...validation, auxGenre: true });
    } else {
      genres.style.borderBottom = "2px solid red";
      genres.style.borderRight = "2px solid red";
      genres.style.borderLeft = "2px solid red";
      genres.style.borderRadius = "5px";
    }
  };

  const emailValidation = () => {
    const email = formUserValues.email;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const iEmail = document.getElementById("iEmail");
    const emails = document.getElementById("email");
    var auxIterator = 0;

    if (email === "") {
      iEmail.textContent = "*Ingrese el correo electrónico. Campo obligatorio.";
      auxIterator++;
      setValidation({ ...validation, auxEmail: false });
    }

    if (auxIterator !== 1 && !regexEmail.test(email)) {
      iEmail.textContent = "*Ingrese correctamente el email";
      auxIterator++;
      setValidation({ ...validation, auxEmail: false });
    }

    if (auxIterator === 0) {
      iEmail.textContent = "";
      emails.style.border = "";
      setValidation({ ...validation, auxEmail: true });
    } else {
      emails.style.borderBottom = "2px solid red";
      emails.style.borderRight = "2px solid red";
      emails.style.borderLeft = "2px solid red";
      emails.style.borderRadius = "5px";
    }
  };

  const phoneValidation = () => {
    const phone = formUserValues.phone;
    const regexPhone = /^\d{9,10}$/g;
    const iPhone = document.getElementById("iPhone");
    const phones = document.getElementById("phone");
    var auxIterator = 0;

    if (phone === "") {
      iPhone.textContent = "*Ingrese el telefono. Campo obligatorio.";
      auxIterator++;
      setValidation({ ...validation, auxPhone: false });
    }

    if (auxIterator !== 1 && !regexPhone.test(phone)) {
      iPhone.textContent = "*Ingrese correctamente el telefono";
      auxIterator++;
      setValidation({ ...validation, auxPhone: false });
    }

    if (auxIterator === 0) {
      iPhone.textContent = "";
      phones.style.border = "";
      setValidation({ ...validation, auxPhone: true });
    } else {
      phones.style.borderBottom = "2px solid red";
      phones.style.borderRight = "2px solid red";
      phones.style.borderLeft = "2px solid red";
      phones.style.borderRadius = "5px";
    }
  };

  const passwordValidation = () => {
    const password = formUserValues.password;
    const iPassword = document.getElementById("iPassword");
    const pass = document.getElementById("password");
    var auxIterator = 0;

    if (password === "") {
      iPassword.textContent = "*Ingrese la contraseña. Campo obligatorio.";
      auxIterator++;
      setValidation({ ...validation, auxPassword: false });
    }

    if (auxIterator !== 1 && password.length < 5) {
      iPassword.textContent = "*El Password debe tener al menos 5 digitos";
      auxIterator++;
      setValidation({ ...validation, auxPassword: false });
    }

    if (auxIterator === 0) {
      iPassword.textContent = "";
      pass.style.border = "";
      setValidation({ ...validation, auxPassword: true });
    } else {
      pass.style.borderBottom = "2px solid red";
      pass.style.borderRight = "2px solid red";
      pass.style.borderLeft = "2px solid red";
      pass.style.borderRadius = "5px";
    }
  };

  console.log(validation);
  console.log(validation2);

  return (
    <>
      <form onSubmit={handleSubmitInternal}>
      <h1 align="center">Agregar usuario</h1><br/>
        <Box
          sx={{
            width: "30%",
            height: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "20px",
            paddingRight: "20px",
            background: "#fff" /* fallback for old browsers */,
          }}
        >
          <br />
          <br />
          <TextField
            fullWidth
            id="idUsers"
            name="idUsers"
            value={idUsers}
            placeholder="Id"
            label="Id"
            onChange={handleChange}
            // onBlur={expressions.age}
          />
          <i id="iId" class="msgError"></i>
          <br />
          <TextField
            fullWidth
            id="name"
            name="name"
            value={formUserValues.name}
            placeholder="Nombres"
            label="Nombre"
            onChange={handleChange}
            onBlur={nameValidation}
          />
          <i id="iName" class="msgError"></i>
          <br />
          <TextField
            fullWidth
            id="ci"
            name="ci"
            placeholder="ID/Pasaporte"
            inputProps={{ maxLength: 10 }}
            value={formUserValues.ci}
            label="Id/Pasaporte"
            onChange={handleChange}
            onBlur={ciCardValidation}
          />
          <i id="iCi" class="msgError"></i>
          <TextField
            fullWidth
            id="age"
            name="age"
            placeholder="age"
            value={formUserValues.age}
            label="Age"
            onChange={handleChange}
            onBlur={ageValidation}
            style={{
              marginTop: "5%",
            }}
          />{" "}
          <i id="iAge" class="msgError"></i>
          <FormControl
            fullWidth
            style={{
              marginTop: "5%",
            }}
          >
            <InputLabel id="labelGenre">Genero</InputLabel>
            <Select
              fullWidth
              labelId="labelGenre"
              id="genre"
              name="genre"
              value={formUserValues.genre}
              label="Genero"
              onChange={handleChange}
              onBlur={genreValidation}
            >
              <MenuItem disabled selected>
                Genero{" "}
              </MenuItem>
              <MenuItem value={"F"}>Femenino</MenuItem>
              <MenuItem value={"M"}>Masculino</MenuItem>
              <MenuItem value={"O"}>Otro</MenuItem>
            </Select>
          </FormControl>
          <i id="iGenre" class="msgError"></i>
          <TextField
            fullWidth
            id="city"
            name="city"
            placeholder="Ciudad"
            value={formUserValues.city}
            label="Ciudad"
            onChange={handleChange}
            onBlur={cityValidation}
            style={{
              marginTop: "5%",
            }}
          />
          <i id="iCity" class="msgError"></i>
          <TextField
            fullWidth
            id="address"
            name="address"
            placeholder="Calle"
            value={formUserValues.address}
            label="Calle"
            onChange={handleChange}
            onBlur={addressValidation}
            style={{
              marginTop: "5%",
            }}
          />
          <i id="iAddress" class="msgError"></i>
          <br />
          <TextField
            fullWidth
            id="email"
            name="email"
            placeholder="Correo eléctronico"
            value={formUserValues.email}
            label="Correo eléctronico"
            onChange={handleChange}
            onBlur={emailValidation}
          />
          <i id="iEmail" class="msgError"></i>
          <TextField
            fullWidth
            id="phone"
            name="phone"
            placeholder="Telefono"
            value={formUserValues.phone}
            label="Telefono"
            onChange={handleChange}
            onBlur={phoneValidation}
            style={{
              marginTop: "5%",
            }}
          />
          <i id="iPhone" class="msgError"></i>
          <br />
          <TextField
            fullWidth
            id="password"
            name="password"
            placeholder="Contraseña"
            value={formUserValues.password}
            type={formUserValues.showPassword ? "text" : "password"}
            label="Contraseña"
            onChange={handleChange}
            onBlur={passwordValidation}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {formUserValues.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          <i id="iPassword" class="msgError"></i>
          <br />
          <FormControl fullWidth>
                <InputLabel id="labelTypeUser">Tipo de Usuario</InputLabel>
                <Select
                    fullWidth
                    labelId="labelTypeUser"
                    id="type"
                    name="type"
                    value={formUserValues.type}
                    label="Tipo de usuario"
                    onChange={handleChange}
                    // onBlur={modificationType}
                >
                    <MenuItem disabled selected value={0}>
                        Seleccione un tipo{" "}
                    </MenuItem>
                    <MenuItem value={1}>Paciente</MenuItem>
                    <MenuItem value={2}>Fisioterapeuta</MenuItem>
                </Select>
            </FormControl>
            <i id="iType" class="msgError"></i>
          <br />
          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{
              boxShadow: "1px 1px 5px #333",
              margin: "10px",
              background: "#7a6cef" /* fallback for old browsers */,
              background:
                "linear-gradient(to right, #7a6cef, #4d63ff)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
              width: "60%",
            }}
          >
            Registrar
          </Button>
          <br />
        </Box>
      </form>
    </>
  );
};

export default FormUser;
