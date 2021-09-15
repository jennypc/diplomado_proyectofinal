import 'app.scss';

import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  return (
    <>
    <div class='fondo'>
    <section id="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid margin-top">
          <a class="navbar-brand" href="">
          <img src={logo} alt="Logo" ></img>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
         </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href=""><b>Productos</b></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href=""><b>Ejercicios de inversión</b></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href=""><b>Ingresar</b></a>
            </li>
            <a className="btn-contacto" href="mailto:hello@escuela.musica" target="_blank">Contacto</a>
        </ul>
      </div> 
      </div>
      </nav>
      </section>
      <section id="Home">
      <div className="container">
      <h1><b>Stradivarius</b></h1>
        <h2>Invierte tu dinero en cryptomonedas<br></br>con asesores especializados.</h2>
        <a href="/signup">Crea tu cuenta</a>
      </div>
      </section>
    
    
    </div>
    </>
  );
}

export default App;
