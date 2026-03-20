import { useState } from "react";
import Boton from "./components/Boton";
import InputText from "./components/InputText";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [carnet, setCarnet] = useState("");
  const [listadoTareas, setListadoTareas] = useState([]);

  const agregarTarea = () => {
    let objetoEstudiante = { nombre, edad, carnet };
    setListadoTareas([...listadoTareas, objetoEstudiante]);
    setNombre("");
    setEdad("");
    setCarnet("");
  };


  return (
    <>
      <h1>Registro de Estudiantes</h1>
      <InputText
        type="text"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        placeHolder={"Nombre"}
      />

      <InputText
        type="number"
        value={edad}
        onChange={(event) => setEdad(event.target.value)}
        placeHolder={"Edad"}
      />

      <InputText
        type="text"
        value={carnet}
        onChange={(event) => setCarnet(event.target.value)}
        placeHolder={"Carnet"}
      />

      <Boton texto="Agregar" onClick={agregarTarea} />

      <br />
      <h2>Listado</h2>
      <br />

      <table border="1">
        <thead>
          {listadoTareas.map((t, index) => (
            <tr key={index}>
              <th>Nombre:</th>
              <td>{t.nombre}</td>
              <th>Edad:</th>
              <td>{t.edad}</td>
              <th>Carnet:</th>
              <td>{t.carnet}</td>
            </tr>
          ))}
        </thead>
      </table>
    </>
  );
}

export default App;
