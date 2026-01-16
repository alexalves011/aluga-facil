import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Product({ id, image, name, rate, price }) {
  return (
    <div className="product">
      <img src={image} />
      <p className="name"> {name}</p>
      <p className="price">
        {price} <span>R$</span>
      </p>

      <div className="button">
        <Link to="/products/123/checkout" className="btn-icon">
          <span>Alugar agora</span>
          <FontAwesomeIcon icon={faMoneyBill}/>
        </Link>
      </div>
    </div>
  );
}
