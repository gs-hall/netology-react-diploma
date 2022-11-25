import React from "react";
import { Link } from "react-router-dom";

export default function TopSalesItem({ item }) {
  return (
    <div className="col-4">
      <div className="card">
        <img
          src={item.images[0]}
          className="card-img-top img-fluid"
          alt={item.title}
          />
        <div className="card-body">
          <p className="card-text">{item.title}</p>
          <p className="card-text">{item.price}</p>
          <Link to={`/products/${item.id}`} className="btn btn-outline-primary">Заказать</Link>
        </div>
      </div>
    </div>
  );
};