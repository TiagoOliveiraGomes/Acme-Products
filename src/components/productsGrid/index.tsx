import React from "react";
import { CardProduct } from "../cardProduct";
import "./styles.css";

export function ProductsGrid() {
  return (
    <article className="Container-ProductsGrid">
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </article>
  );
}
