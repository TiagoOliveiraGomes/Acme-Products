import React, { useContext } from 'react'
import { CardProduct } from "../components/cardProduct";
import { description } from "./descriptionProduct";
import { ApiDataContext } from "../contexts/data";


type createCardsProductsProps = {
    searchText: string
}

export function createCardsProducts (props:string) {
    console.log("o Que tem nas props de CreateCard Products: ", props)
    const apiContext = useContext(ApiDataContext)
  
    return(
      apiContext?.verbs

      .filter((item:{id:number, name:string}) => {
        if (props === "") {
            return item;
          } else if (item.name.toLowerCase().includes(props.toLowerCase())) {
            return item;
          }
      })

      .map((item:{id:number, name:string}, index:number) => {
      return (
        <div key={item.id}>
          <CardProduct description={description} src={`https://picsum.photos/500/500?random=${item.id}`}  name={item.name + " " + apiContext?.adjectives[item.id]} />
        </div>
      )
    }))
  }
