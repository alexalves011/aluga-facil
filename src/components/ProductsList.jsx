import React from "react";
import Product from "./Product";


// Componenente com propriedade products
export default function ProductsList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => ( // O .map() percorre a lista products e, para cada item (que chamamos de product), ele cria um componente <Product
        <Product key={product.id} {...product} /> // pega todas informações do objeto 
      ))}
    </div>
  );
}

// product É uma variável temporária que representa um item da sua lista do JSON.

// O map percorre o array; 'product' é o dado (objeto) de cada iteração, 
// que é passado como propriedade para o componente '<Product />' renderizar.