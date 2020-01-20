import React, { Component } from "react";
import "./App.css";

class App extends Component {

  state = {
    // Datos API eluniverso
    todos: [],
    // Numerador
    i: 0,
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


  componentDidMount() {

    // Llamado API eluniverso
    fetch(
      "http://api.chartbeat.com/live/toppages/v3/?apikey=489ca5d5c6e07f057ec7d9a6a69be9d8&host=eluniverso.com"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ todos: data.pages });
        console.log(this.state.todos);
      })
      .catch(console.log);
  }


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
              seccionActual: e.target.value,
              // Reseteo Numerador al cambio de sección
              i: 0
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
        {/* Recorrido datos por número de visitas */}
        {this.state.todos
          .sort((a, b) => b.stats.visits - a.stats.visits)
          .map(todo => {
            {/* Sección Todas, article diferente a 0, mostrar 5 */}
            if (
              this.state.seccionActual === "" &&
              todo.stats.article != 0 &&
              this.state.i < 5
            ) {
              return (
                <div className="articulo">
                  <div className="articulo-numero">
                  {/* Numeración */}
                    {(this.state.i = this.state.i + 1)}
                  </div>
                  <div className="articulo-body">
                    <h4 className="articulo-titulo">
                    {/* Título con link */}
                      <a href={"https://" + todo.path} target="_blank">
                        {todo.title}
                      </a>
                    </h4>
                  </div>
                </div>
              );
            }
          })}
            
      </div>
    )
}
}

export default App;