import React, { Component } from "react";
import "./App.css";

class App extends Component {

  state = {
    // Secciones
    secciones: [
      { value: "", display: "Todas" },
      { value: "noticias", display: "Noticias" },
      { value: "guayaquil", display: "Guayaquil" },
      { value: "deportes", display: "Deportes" },
      { value: "entretenimiento", display: "Entretenimiento" },
      { value: "la revista", display: "La Revista" }
    ],
    seccionActual: ""
  };

  render() {
    return (
      <div className="container">
      <h3>Seleccione una Sección:</h3>
      {/* Lista Desplegable Secciones */}
        <div className="selectSeccion">
        <select
          value={this.state.seccionActual}
          onChange={e =>
            this.setState({
              seccionActual: e.target.value
            })
          }
        >
          {this.state.secciones.map(seccion => (
            <option key={seccion.value} value={seccion.value}>
              {seccion.display}
            </option>
          ))}
        </select>
        </div>
        {/* Titulo */}
        <h1>LO MÁS LEÍDO</h1>
        {/* Noticia */}
                <div className="articulo">
                  <div className="articulo-numero">
                    #
                  </div>
                  <div className="articulo-body">
                    <h4 className="articulo-titulo">
                      Prueba Noticia
                    </h4>
                  </div>
                </div>
            
      </div>
    )
}
}

export default App;