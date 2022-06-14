import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { createCardsProducts } from "../../util/createProductList";

interface ProductsGridProps {
  searchText: string
}

export function ProductsGrid(props:ProductsGridProps) {

  return (
    <article className="Container-ProductsGrid">
      {createCardsProducts(props.searchText)}
    </article>
  );
}
