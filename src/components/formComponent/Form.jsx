import "./Form.css";
import React from "react";
import { async } from "@firebase/util";
import {fire } from '../../services/firebase'

const FormComponent = () => {
  const [tareas, setTareas] = React.useState([]);
  const [editmode, setEditMode] = React.useState(false);

  //nombre tarea
  const [nameTarea, setNameTarea] = React.useState("");
  const [nameTareaError, setNameTareaError] = React.useState("");
  //decripcion tarea
  const [decripcionTarea, setDecripcionTarea] = React.useState("");
  const [decripcionTareaError, setDecripcionTareaError] = React.useState("");
  //otras tarea
  const [otrasTareas, setOtrasTareas] = React.useState("");
  const [otrasTareasError, setOtrasTareasError] = React.useState("");
  //estado tarea
  const [estadoTareas, setEstadoTareas] = React.useState("");
  //nombre de usuario
  const [nombreDeUsuario, setNombreDeUsuario] = React.useState("");
  const [nombreDeUsuarioError, setNombreDeUsuarioError] = React.useState("");

  //apellido de usuario
  const [apellidoDeUsuario, setApellidoDeUsuario] = React.useState("");
  const [apellidoDeUsuarioError, setApellidoDeUsuarioError] = React.useState("");

  //modo edicion
  const [modoEdicion, setModoEdicion] = React.useState(false);


//CAMBIOS


React.useEffect(()=>{
  const obtenerDatos = async () =>{
      try{
          const db = fire.firestore()
          const data = await db.collection('frutas').get()
          const array = data.docs.map(item =>(
              {
                  id:item.id, ...item.data()
              }
          ))
          // setLista(array)

      }catch(error){
          console.log(error)
      }
  }
  obtenerDatos()

})

  //metodos
  const editar = async (e) =>{
    e.preventDefault()
    if (!valid) {
      return;
    }


    try {
      const db = fire.firestore()
      const nuevaTarea = {
        nameTarea:nameTarea,
        decripcionTarea:decripcionTarea,
        otrasTareas:otrasTareas,
        nombreDeUsuario:nombreDeUsuario,
        apellidoDeUsuario:apellidoDeUsuario,
        estadoTareas:estadoTareas,
        
    }
    } catch (error) {
      console.log(error)
      
    }
    limpiarform()
  }
  const valid = async () =>{
   var error = false;

    if (!nameTarea.trim()) {
      setNameTareaError('Campo obligatorio')
      error = true;
    }

    if (!decripcionTarea.trim()) {
      setDecripcionTareaError('Descripcion obligatorio')
      error = true;
    }

    if (!otrasTareas.trim()) {
      setOtrasTareasError('otras tareas obligatorio')
      error = true;
    }

    if (!nombreDeUsuario.trim()) {
      setNombreDeUsuarioError('Nombre usuario obligatorio')
      error = true;
    }

    if (!apellidoDeUsuario.trim()) {
      setApellidoDeUsuarioError('apellido usuario obligatorio')
      error = true;
    }

    return error;
  }

  const guardarDatos = async (e) =>{
    e.preventDefault()

  }

  const limpiarform = async () =>{
    setNameTarea('')
    setDecripcionTarea('')
    setOtrasTareas('')
    setEstadoTareas('')
    setNombreDeUsuario('')
    setApellidoDeUsuario('')
  }


  //origen actividad
  const [origenActividad, setOrigenActividad] = React.useState("");

  return (
    <div className="card-body">
      <div className="row">
        <div className="col">
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            +
          </a>
        </div>
      </div>

      <form onSubmit={modoEdicion ? editar: guardarDatos}>
        <div className="row">
          <div className="col">
            <div
              className={editmode ? " collapse show" : "collapse"}
              id="collapseExample"
            >
              <div className="card card-body">
                <div className="mb-3">
                  Ingrese el nombre y la descripcion de la tarea para agregarla
                </div>
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label  className="form-label">
                        Nombre del usuario
                      </label>
                      <input
                        type="text"
                        className={
                          nombreDeUsuarioError == ""
                            ? "form-control"
                            : " form-control is-invalid"
                        }
                        value={nombreDeUsuario}
                        onChange={(e) => setNombreDeUsuario(e.target.value)}
                      />

                      {nombreDeUsuarioError != "" ? (
                        <label  >
                          {nombreDeUsuarioError}
                        </label>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="col">
                    <div className="mb-3">
                      <label  className="form-label">
                        Apellido del usuario
                      </label>
                      <input
                        type="text"
                        className={
                          apellidoDeUsuarioError == ""
                            ? "form-control"
                            : " form-control is-invalid"
                        }
                        value={apellidoDeUsuario}
                        onChange={(e) => setApellidoDeUsuario(e.target.value)}
                      />

                      {apellidoDeUsuarioError != "" ? (
                        <label  >
                          {apellidoDeUsuarioError}
                        </label>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label   className="form-label">
                    Nombre de la actividad
                  </label>
                  <input
                    type="text"
                    className={
                      nameTareaError == ""
                        ? "form-control"
                        : " form-control is-invalid"
                    }
                    value={nameTarea}
                    onChange={(e) => setNameTarea(e.target.value)}
                  />

                  {nameTareaError != "" ? (
                    <label  >{nameTareaError}</label>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mb-3">
                  <label   className="form-label">
                    Otras notas
                  </label>
                  <input
                    type="text"
                    className={
                      otrasTareasError == ""
                        ? "form-control"
                        : " form-control is-invalid"
                    }
                    value={otrasTareas}
                    onChange={(e) => setOtrasTareas(e.target.value)}
                  />

                  {otrasTareasError != "" ? (
                    <label >{otrasTareasError}</label>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mb-3">
                  <label   className="form-label">
                    Descripcion
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={decripcionTarea}
                    onChange={(e) => setDecripcionTarea(e.target.value)}
                  ></textarea>
                  {decripcionTareaError != "" ? (
                    <label for="floatingInputInvalid">{otrasTareasError}</label>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mb-3">
                  <label   className="form-label">
                    Origen de actividad
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={origenActividad}
                    onChange={(e) => setOrigenActividad(e.target.value)}
                  >
                    <option value="U">Universidad</option>
                    <option value="T">Trabajo</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label   className="form-label">
                    Estado
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={estadoTareas}
                    onChange={(e) => setEstadoTareas(e.target.value)}
                  >
                    <option value="A">Activo</option>
                    <option value="I">Inactivo</option>
                  </select>
                </div>

                <div className="row mt-3">
                  <div className="col mt-3">
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
