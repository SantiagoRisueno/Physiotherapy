import React, { useEffect, useState } from "react"
import { getUsers } from "../actions/userActions";
import { expressions } from '../controller/Utils';
import { IconButton, Modal, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

const style  = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
};

const MatEditUser = ( props ) => {

    const data = props.data;
    const handleUpdateRegister = props.handleUpdateRegister;

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

    const [open, setOpen] = useState(false);

    const [formUser, setformUser] = useState({
        idUsers: data.idUsers,
        ci: data.ci,
        name: data.name,
        age: data.age,
        genre: data.genre,
        city: data.city,
        address: data.address,
        phone: data.phone,
        email: data.email,
        type: data.type,
        password: data.password
    })

    const [validation, setValidation] = useState({
        auxIdUsers: true,
        auxCi: true,
        auxName: true,
        auxAge: true,
        auxGenre: true,
        auxCity: true,
        auxAddress: true,
        auxPhone: true,
        auxEmail: true,
        auxPassword: true,
        auxType: true,
        auxLocal: true
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setformUser({ ...formUser, [name]: value})
        
        if (name === "idUsers") {
            data.idUsers = value
        }else if (name === "ci") {
            data.ci = value
        }else if (name === "name") {
            data.name = value
        }else if (name === "age") {
            data.age = value
        }else if (name === "genre") {
            data.genre = value
        }else if (name === "city") {
            data.city = value
        }else if (name === "address") {
            data.address = value
        }else if (name === "phone") {
            data.phone = value
        }else if (name === "email") {
            data.email = value
        }else if (name === "type") {
            data.type = value
        }else if (name === "password") {
            data.password = value
        }
    }
    


    const modificationType = () => {
        const type = formUser.type

        if (type === 0) {
            setValidation({...validation, auxType: false})
        }else {
            setValidation({...validation, auxType: true})
        }
        
    }
    
    const nameValidation = () => {
        const name = formUser.name;
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
          setformUser({ ...formUser, name: correctName });
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
        const idCard = formUser.ci;
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
        const age = formUser.age;
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
        const city = formUser.city;
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
          setformUser({ ...formUser, city: correctLastName });
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
        const address = formUser.address;
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
          setformUser({ ...formUser, address: correctLastName });
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
        const genre = formUser.genre;
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
        const email = formUser.email;
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
        const phone = formUser.phone;
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
        const password = formUser.password;
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

    const handleEdit = (e) => {
        e.preventDefault()

        if (validation.auxCi === true &&
            validation.auxName === true &&
            validation.auxAge === true &&
            validation.auxGenre === true &&
            validation.auxCity === true &&
            validation.auxAddress === true &&
            validation.auxPhone === true &&
            validation.auxEmail === true &&
            validation.auxType === true &&
            validation.auxLocal === true) 
        {
             handleUpdateRegister(data);

        }else {
            window.alert("Por favor llene todos los campos correctamente");
        }
    };
    console.log(validation)
  
    const handleOpenModal = () => {
        setOpen(true)
    }

    return (
        <>
            <IconButton 
                color="secondary"
                aria-label="add an alarm"
                onClick={handleOpenModal}
            >
                <EditIcon 
                    style={{
                        color: '#2196f3'
                    }}
                />
            </IconButton>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={style} id='editUser'>
                    <form onSubmit={handleEdit}>
                        <h1 align='center'>Editar Usuario</h1><br/>

                      
                        <TextField fullWidth 
                           id="name" 
                           name="name" 
                           value={data.name} 
                           placeholder="Nombre" 
                           label="Nombre" 
                           onChange={handleChange} 
                           onBlur={nameValidation}
                        /> <i id="iName" class="msgError"></i>
                        
                        <TextField fullWidth 
                            id="ci"  
                            name="ci" 
                            value={data.ci} 
                            placeholder="CI/PASAPORTE" 
                            label="Id/Pasaporte" 
                            onChange={handleChange} 
                            onBlur={ciCardValidation}
                            style={{
                                marginTop: '5%'
                            }}
                        /> <i id="iCi" class="msgError"></i>

                        <TextField fullWidth 
                            id="age"
                            name="age" 
                            placeholder="age" 
                            value={data.age} 
                            label="Edad" 
                            onChange={handleChange} 
                            onBlur={ageValidation}
                            style={{
                                marginTop: '5%'
                            }}
                        /> 
                        <i id="iAge" class="msgError"></i>

                        <FormControl fullWidth
                            style={{
                                    marginTop: '5%'
                                }}
                        >
                            <InputLabel id="labelGenre">Genero</InputLabel>
                            <Select
                                fullWidth
                                labelId="labelGenre"
                                id="genre"
                                name="genre"
                                value={data.genre}
                                label="Genero"
                                onChange={handleChange}
                                onBlur={modificationType}
                            >
                                <MenuItem disabled selected >Genero </MenuItem>
                                <MenuItem value={'F'}>Femenino</MenuItem>
                                <MenuItem value={'M'}>Masculino</MenuItem>
                                <MenuItem value={'O'}>Otro</MenuItem>
                            </Select>
                        </FormControl>
  
                        <TextField fullWidth 
                            id="city" 
                            name="city" 
                            placeholder="Ciudad" 
                            value={data.city} 
                            label="Ciudad" 
                            onChange={handleChange} 
                            onBlur={cityValidation}
                            style={{
                                marginTop: '5%'
                            }}
                        
                        /><i id="iCity" class="msgError"></i>
  
                        <TextField fullWidth 
                            id="address" 
                            name="address" 
                            placeholder="Calle" 
                            value={data.address} 
                            label="Calle" 
                            onChange={handleChange} 
                            onBlur={addressValidation}
                            style={{
                                marginTop: '5%'
                            }}
                        
                        /><i id="iAddress" class="msgError"></i>

                        <TextField fullWidth
                            id="email"  
                            name="email" 
                            placeholder="Correo eléctronico" 
                            value={data.email} 
                            label="Correo eléctronico" 
                            onChange={handleChange} 
                            onBlur={emailValidation}
                            style={{
                                marginTop: '5%',
                            }}

                        /><i id="iEmail" class="msgError"></i>

                        <TextField fullWidth
                            id="phone"  
                            name="phone" 
                            placeholder="Telefono" 
                            value={data.phone} 
                            label="Telefono" 
                            onChange={handleChange} 
                            onBlur={phoneValidation}
                            style={{
                                marginTop: '5%',
                            }}

                        /><i id="iPhone" class="msgError"></i>



                        <TextField fullWidth 
                            id="password" 
                            name="password" 
                            placeholder="Contraseña" 
                            value={data.password} 
                            type="password" 
                            label="Contraseña" 
                            onChange={handleChange} 
                            onBlur={passwordValidation}
                            style={{
                                marginTop: '5%'
                            }}
                        
                        /><i id="iPassword" class="msgError"></i>

                        <FormControl fullWidth
                            style={{
                                    marginTop: '5%'
                                }}
                        >
                            <InputLabel id="labelTypeUser">Tipo de Usuario</InputLabel>
                            <Select
                                fullWidth
                                labelId="labelTypeUser"
                                id="type"
                                name="type"
                                value={data.type}
                                label="Tipo de usuario"
                                onChange={handleChange}
                                onBlur={modificationType}
                            >
                                <MenuItem disabled selected >Seleccione un tipo </MenuItem>
                                <MenuItem value={1}>Paciente</MenuItem>
                                <MenuItem value={2}>Fisioterapeuta</MenuItem>
                                {/* <MenuItem value={4}>Admin/Mantenimiento</MenuItem>
                                <MenuItem value={5}>Grupo de mantenimiento</MenuItem> */}
                            </Select>
                         </FormControl>

                        <Button
                            variant="contained"
                            size = "large"
                            type="submit"
                            onClose={() => setOpen(false)}
                            sx={{
                                boxShadow: '1px 1px 5px #333',
                                marginTop: "5%",
                                marginLeft: "20%",  
                                background: '#ffb74d',  /* fallback for old browsers */
                                background: 'linear-gradient(to right, #ffb74d, #ffb74d)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                                width:'60%'
                            }}   
                        >
                            Editar
                        </Button>
                        
                    </form>
                </Box>
            </Modal>
        
        
        </>
    )
}
export default MatEditUser