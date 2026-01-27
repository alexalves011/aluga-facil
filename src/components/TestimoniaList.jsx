import React from "react";

export default function TestimoniaList({ rate }) {
  return (
    <div className="page-inner-content">
      <div className="testimonials">
        <div className="testemonial">
          <p>
            O processo de aluguel foi extremamente simples e rápido através da
            plataforma. A Smart Band 4 chegou em perfeito estado e a bateria
            realmente dura muito tempo. Com certeza voltarei a utilizar o
            serviço para outros itens técnicos.
          </p>
          <p className="rate">
            &#9733; &#9733; &#9733; &#9733; &#9734;
            <span>{rate}</span>
          </p>
          <p>João Silva</p>
        </div>
        <div className="testemonial">
          <p>
            O processo de aluguel foi extremamente simples e rápido através da
            plataforma. A Smart Band 4 chegou em perfeito estado e a bateria
            realmente dura muito tempo. Com certeza voltarei a utilizar o
            serviço para outros itens técnicos.
          </p>
          <p className="rate">
            &#9733; &#9733; &#9733; &#9733; &#9734;
            <span>{rate}</span>
          </p>
          <p>João Silva</p>
        </div>
        <div className="testemonial">
          <p>
            O processo de aluguel foi extremamente simples e rápido através da
            plataforma. A Smart Band 4 chegou em perfeito estado e a bateria
            realmente dura muito tempo. Com certeza voltarei a utilizar o
            serviço para outros itens técnicos.
          </p>
          <p className="rate">
            &#9733; &#9733; &#9733; &#9733; &#9734;
            <span>{rate}</span>
          </p>
          <p>João Silva</p>
        </div>
      </div>
    </div>
  );
}
