import React from "react";
import { Link } from "react-router-dom";

interface TopSalesItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    images: string[];
  };
};

export default function TopSalesItem({ item }: TopSalesItemProps) {
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