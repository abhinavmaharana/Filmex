/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"

import {fetchDataFromApi} from './utils/api';

function App() {

  useEffect(() => {
    apiTesting()
  }, [])
  
  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        console.log(res)
      })
  }
  return (
    <div>
      <h1>Api Testing</h1>

    </div>
  )
}

export default App
