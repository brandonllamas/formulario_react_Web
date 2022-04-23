import React from "react";
import image from "../../assets/placeholder.png";

const Card = ({ item }) => {
  //   console.log(item)
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{item.nameTarea}</h5>
        <p className="card-text">
          {item.nombreDeUsuario + " " + item.apellidoDeUsuario}
          {/* dsad */}
        </p>
        <div className="row">
          <div className="col">
            <p className="btn btn-primary">
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </p>
          </div>
          <div className="col">
            <p className="btn btn-danger">
            <i class="fa fa-trash" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
