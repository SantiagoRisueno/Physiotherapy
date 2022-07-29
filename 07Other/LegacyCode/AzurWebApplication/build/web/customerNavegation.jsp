<%-- 
    Document   : customerNavegation
    Created on : 3 jun. 2022, 09:42:21
    Author     : nicol
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="icon" type="image/x-icon" href="./image/logo.ico"/>
        <title>Portal AZUR</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
    <body>
        
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">AZUR</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item"><a href="index.jsp" class="nav-link active">Inicio</a></li>
                <li class="nav-item"><a href="login.jsp" class="nav-link active">Cerrar Sesión</a></li>
            </ul>
            </div>

        </nav>
        <div class="container text-center justify-content-center align-items-center" style="padding:4em 0 4em 0;">
            <h2>Bienvenido</h2>
            <div class="flex flex-row  justify-content-around">                
                <a href="makeAppointment.jsp" <button name="submit" class="btn btn-primary w-100" style="margin:2em 0 2em 0;">Agendar Cita</button></a>
                <a href="dashboard.jsp" <button name="submit" class="btn btn-primary w-100" style="margin:2em 0 2em 0;">Ver citas</button></a>
            </div>
        </div>
    </body>
</html>
