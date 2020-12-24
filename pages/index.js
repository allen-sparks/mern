import React from 'react'
import axios from 'axios'

function Home() {
  //The array argument has 'dependcies' which when changed will trigger this function (which is about getting api calls)
  //if the array is blank it will just run when ever the component is mounted››
  React.useEffect(() => {
    getProducts()
  }, [])

  function getProducts() {
    const url = 'http://localhost:3000/api/products'
    axios.get(url)
  }

  return <>home</>;
}

export default Home;
