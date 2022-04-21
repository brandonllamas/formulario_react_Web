import "./Form.css";
import React from "react";

const FormComponent = () => {
  const [tareas, setTareas] = React.useState([]);
  const [editmode, setEditMode] = React.useState(false);

  return (
    <div className="card-body">
      <div className="row">
        <div className="col">
          <a
            class="btn btn-primary"
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

      <div className="row">
        <div className="col">
          <div class="collapse {editmode ? 'show':''}" id="collapseExample">
            <div class="card card-body">
             <div className="mb-3">
           Ingrese el nombre y la descripcion de la tarea para agregarla
             </div>
              <div class="mb-3">
              <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com"/>
                <label for="floatingInputInvalid">Invalid input</label>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
