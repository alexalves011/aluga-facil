import React from "react";
import {
  faSearch,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
      <div className="inner-content">
        {" "}
        <h1 className="logo">
          ALUGA <span>FÁCIL</span>
        </h1>
        <nav className={`${show && "show"}`}> {/* se show for verdadeiro add a classe 'show' */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contatos</Link>
            </li>
            <li>
              <Link to="/account">Conta</Link>
            </li>
          </ul>
        </nav>
        <div className="navs-icon-container">
          <div className="serach-input-container">
            <input type="search" placeholder="Procurar" />
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </div>
          <button className="shop-cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="products-count">0</div>
          </button>

           {/* Onclik recebe uma arrow function, o setshow alterna o valor de falso para verdairo atraves do click  */}
         
          <button className="menu-button" onClick={() => setShow(!show)}>  {/* ! OPERADOR DE OPOSTO   */}
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
}
