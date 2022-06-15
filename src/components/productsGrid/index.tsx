import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { createCardsProducts } from "../../util/createProductList";

interface ProductsGridProps {
  searchText: string
  setForceUpdateCartList: React.Dispatch<React.SetStateAction<boolean>>
}

export function ProductsGrid({searchText, setForceUpdateCartList}:ProductsGridProps) {

  return (
    <article className="Container-ProductsGrid">
      {createCardsProducts({searchText, setForceUpdateCartList})}
    </article>
  );
}
