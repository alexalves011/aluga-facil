import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>Smart Band 4</h2>
            <p>
              A Smart Band 4 monitora sua saúde e exercícios com precisão
              através de uma tela AMOLED colorida e vibrante. Com bateria que
              dura até 20 dias e resistência à água, ela é ideal para acompanhar
              sua rotina sem interrupções.
            </p>
            <Link to={"/products"} className="see-more-btn">
              <span>Ver Agora</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>

          <div className="ride-side">
            <img src="/assets/img/exclusive.png" alt="Smart Bad 4"></img>
          </div>
        </div>
      </div>
    </div>
  );
}


