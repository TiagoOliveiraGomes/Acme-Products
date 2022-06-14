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

            let randomAdjectives = getData.data[0].adjectives.sort(() => Math.random() - 0.5).slice(0, 50)
            apiContext?.setAdjectives(randomAdjectives)
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
