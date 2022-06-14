import React, { useContext } from "react";
import "./styles.css";
import { CardProduct } from "../cardProduct";
import { ApiDataContext } from "../../contexts/data";
import { description } from "../../util/descriptionProduct";


export function ProductsGrid() {
  const apiContext = useContext(ApiDataContext)

function createCardsProducts () {
  let adjectivesArray = apiContext?.adjectives

  const randomArray = adjectivesArray.sort(() => Math.random() - 0.5).slice(0, 50)
  console.log("Array randomizado: ", apiContext?.verbs);

  return(
    apiContext?.verbs.map((item:{id:number, name:string}, index:number) => {
    return (
      <div key={item.id}>
        <CardProduct description={description} src={`https://picsum.photos/500/500?random=${index}`}  name={item.name + " " + randomArray[index]} />
      </div>
    )
  }))
}

  return (
    <article className="Container-ProductsGrid">
      {apiContext?.verbs&&createCardsProducts()}
    </article>
  );
}
