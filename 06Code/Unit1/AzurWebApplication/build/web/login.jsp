<%-- 
    Document   : login
    Created on : 2 jun. 2022, 10:32:37
    Author     : Erick
--%>

<%@page import="dbManage.DBManager"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Portal AZUR</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
    <body>
        <div class="container square-box d-flex justify-content-center align-items-center vh-100">
       
                <h1> Portal AZUR </h1>
                <form action="./scripts/loginScript.jsp" class="form m-4" method="post" name="login">
                    <h1 class="login-title">Iniciar Sesión</h1>
                    <div class="mb-2 w-100">
                        <input type="text" class="form-control" name="emailLogin" placeholder="Correo" autofocus="true"/>
                    </div>
                    <div class="mb-2 w-100">
                        <input type="password" class="form-control" name="passwordLogin" placeholder="Password"/>
                    </div>
                    <button name="submit" class="btn btn-primary w-100">Login</button>
                    <div class="text-center">¿No tienes una cuenta?
                        <a  accesskey=""href="singup.jsp" class="hint-text">Sign Up</a>
                    </div>
                </form>   
                
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </body>
    
</html>
