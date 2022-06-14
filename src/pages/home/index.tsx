import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import {Footer} from '../../components/footer'
import {Header} from '../../components/header'
import {Main} from '../../components/main'
import { ApiDataContext } from '../../contexts/data'

export default function Home() {
  const apiContext = useContext(ApiDataContext)
  

// 
  useEffect(()=> {
    async function getData () {
        try {
            let response = await axios.get('./json/api.json')
            let getData = await response.data
            apiContext?.setVerbs( getData.data[0].verbs)
            apiContext?.setAdjectives(getData.data[0].adjectives)
            console.log("Dentro da funcao do context: ", getData.data[0].verbs)
        } catch (error) {
            console.log(error)
        }
    }
    
    if(!apiContext?.verbs){
        getData()
    }

},[])
  return (
    <div>{apiContext?.verbs &&
        <div>
          <Header />
          <Main /> 
          <Footer />
        </div>
        }
    </div>
  )
}
