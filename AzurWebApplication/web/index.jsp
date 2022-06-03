<%-- 
    Document   : index
    Created on : 2 jun. 2022, 18:30:04
    Author     : Erick
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <title>AZUR Fisioterapia</title>
</head>
<body>
    <nav class=" container navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand text-primary" href="#">AZUR</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" href="#services">Servicios</a>
                    <a class="nav-link" href="#contact">Encuentranos</a>
                    <a class="nav-link" href="#aboutAs">Acerca de</a>
                </div>
            </div>
            <a href="login.jsp">
                <button class="btn btn-primary w-100">
                    Iniciar Sesion
                </button>
            </a>
            <a href="singup.jsp">
                <button class="btn w-100">
                    Registrarse
                </button>
            </a>
            
        </div>
    </nav>
    <header>
        <div
        class="cover d-flex justify-content-end align-items-start flex-column p-5"
        style="background-image:url(./image/Header.png)"
      >
            
        <h1>
            <div class="text-primary">
                AZUR
            </div>
             Fisioterapia</h1>
        <h3>Atención médica ahora <br>
            Simplificado para todos</h3>
      </div>    
    </header>
    <main class="container mt-5 mb-5" id="services">
        <div class="text-primary fs-5 mb-5 text-center ">
            <p>Servicios</p>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <div
                title=""
                class="cover cover-small"
                style="background-image:url(./image/pedriatria.jpg)"
              ></div>     
                  <!--   <img src="./image/pedriatria.jpg" class="card-img-top" alt="...">-->
                <div class="card-body">
                  <h5 class="card-title">Pediatria</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <div
                title=""
                class="cover cover-small"
                style="background-image:url(./image/neurologia.jpg)"
              ></div>  
                <div class="card-body">
                  <h5 class="card-title">Terapia Neurológica</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                    <div
                    title=""
                    class="cover cover-small"
                    style="background-image:url(./image/deportiva.jpg)"
                  ></div> 
                <div class="card-body">
                  <h5 class="card-title">Terapia Deportiva</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div
                title=""
                class="cover cover-small"
                style="background-image:url(./image/respiratoria.jpg)"
              ></div> 
                <div class="card-body">
                  <h5 class="card-title">Teratia Respiratoria</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            
            <div class="col">
                <div class="card">
                <div
                    title=""
                    class="cover cover-small"
                    style="background-image:url(./image/posquirurjica.jpg)"
                  ></div> 
                  <div class="card-body">
                    <h5 class="card-title">Teratia Posquirúrgica</h5>
                    <p class="card-text"></p>
                  </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <div
                    title=""
                    class="cover cover-small"
                    style="background-image:url(./image/traumatologica.jpg)"
                  ></div> 
                  <div class="card-body">
                    <h5 class="card-title">Teratia Traumatológica</h5>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
          </div>
    </main>  

    <section class="pt-5 mb-5 container" id="contact"></section>
        <h2 class="h1-responsive font-weight-bold text-center my-4 text-primary text-center">Encuentranos</h2>
        <p class="text-center w-responsive mx-auto mb-5">
            Quieres ponerte en contacto con nosotros.
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.813307967258!2d-78.48308318533057!3d-0.09082029993373306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d585f4a7960947%3A0x8b324bc81c370e29!2sAlbert%20Einstein%20%26%20Cesar%20Borja%20Cordero%2C%20Quito%20170134!5e0!3m2!1ses!2sec!4v1654234385332!5m2!1ses!2sec" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        

    </section>

    <section class="container pb-5" id="aboutAs">
        <div class="text-primary fs-5 mb-5 text-center">
            <h2>Acerca de</h2>
        </div>
        <div class="text-center">
            <img
              src="./image/therapy.png"
              height="250"
            />
        <div>   
            <div class="text-primary fs-5 mt-5 text-center">
                <h3>Misión</h3>
            </div>
            <p>Satisfacer de manera eficaz y eficiente las necesidades de cuidado del paciente</p>
            <div class="text-primary fs-5 mt-5 text-center">
                <h3>Visión</h3>
            </div>
            <p>Brindar y mantener un sistema de bienestar privado, ofreciendo atención de calidad acorde al profesionalismo que brinda la clínica</p>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

</body>
</html>
