import React, { useContext } from 'react'
import { CardProduct } from "../components/cardProduct";
import { description } from "./descriptionProduct";
import { ApiDataContext } from "../contexts/data";


type createCardsProductsProps = {
    searchText: string
    setForceUpdateCartList: React.Dispatch<React.SetStateAction<boolean>>
}

export function createCardsProducts ({searchText, setForceUpdateCartList}:createCardsProductsProps) {
    // console.log("o Que tem nas props de CreateCard Products: ", props)
    const apiContext = useContext(ApiDataContext)
  
    return(
      apiContext?.verbs

      .filter((item:{id:number, name:string}) => {
        if (searchText === "") {
            return item;
          } else if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
            return item;
          }
      })

      .map((item:{id:number, name:string}, index:number) => {
        let fullName = item.name + " " + apiContext?.adjectives[item.id]
        let calculatePrice = Math.abs(10 + fullName.length * ((500 - description.length) / (3 - fullName.length))) 
        let value = `${calculatePrice.toFixed(2)}`
      return (
        <div key={item.id}>
          <CardProduct setForceUpdateCartList={setForceUpdateCartList} id={item.id} value={value} description={description} src={`https://picsum.photos/500/500?random=${item.id}`}  name={fullName} />
        </div>
      )
    }))
  }
