<%-- 
    Document   : singup
    Created on : 2 jun. 2022, 19:03:15
    Author     : Erick
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700">
    <title>SignUp Azur</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    
</header>

<body>
    <div class="signup-form">
        <form action="./scripts/singupScript.jsp" method="post">
            <h2>Registrate</h2>
            <p class="hint-text">Crea tu cuenta.</p>
           <div class="form-group">
                <input type="number" class="form-control" name="ci" placeholder="CI" required="required">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="name" placeholder="Nombre" required="required">
            </div>
            <div class="form-group">
                <input type="number" class="form-control" name="age" placeholder="Edad" required="required">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="address" placeholder="Domicilio" required="required">
            </div>
            <div class="form-group">
                <input type="number" class="form-control" name="cellphone" placeholder="Telefono" required="required">
            </div>
            <div class="form-group">
                <input type="email" class="form-control" name="emailSing" placeholder="Email" required="required">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="passwordSing" placeholder="Contraseña" required="required">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="passwordConf" placeholder="Confirmar contraseña" required="required">
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-primary w-100">Register Now</button>
            </div>
        </form>
        <div class="text-center">¿Ya tienes una cuenta?
            <a href="login.jsp" class="hint-text">LogIn</a>
        </div>
    </div>
</body>
