import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <div className="iner-content">
        <div className="left-side">
          <h2>Transforme sua rotina e economize com o Consumo Inteligente!</h2>
          <p>
            O jeito inteligente de consumir. Encontre tudo o que você precisa
            perto de você, use pelo tempo necessário e devolva sem ocupar espaço
            na sua casa.
          </p>
          <Link to={"/products"} className="see-more-btn">
            <span>Ver Agora</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>

        <div className="right-side">
          <img src="/assets/img/header-image.png" alt="Header" />
        </div>
      </div>
    </header>
  );
}
