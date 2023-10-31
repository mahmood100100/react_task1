import React, { useEffect, useState } from 'react'
import "./Resturant.css"
import { Link } from 'react-router-dom'
export default function Resturant() {

  let [pizza , setPizza] = useState([])
  let [corn , setCorn] = useState([])
  let [onion , setOnion] = useState([])


  const getPizza =async ()=>{
     let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
     let pizza = await response.json();
     setPizza(pizza["recipes"].slice(0,6));
     console.log(pizza["recipes"].slice(0,6));
  }

  const getcorn =async ()=>{
    let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=corn");
    let corn = await response.json();
    setCorn(corn["recipes"].slice(0,6));
    console.log(corn["recipes"].slice(0,6));
 }


 const getOnion =async ()=>{
  let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
  let onion = await response.json();
  setOnion(onion["recipes"].slice(0,6));
  console.log(onion["recipes"].slice(0,6));
}


  useEffect(()=>{
    getPizza()
    getcorn()
    getOnion()
  },[])
  
  return (
    <>
    <div className="pizza border-bottom border-5 border-black py-3">
      <div className="container-fluid">
        <h1 className=' text-center'>Pizza</h1>
      <div className="row row-gap-3">
        {pizza.map((ele)=>{
          return(
          <div className="col-md-4">
            <Link to={`/recipe_details/${ele.recipe_id}`} className='text-center text-decoration-none text-dark'>
            <div className="card">
              <img src={ele.image_url} className='w-100'/>
              <h2 className='fs-4'>{ele.title}</h2>
            </div>
            </Link> 
          </div>
        )})}
      </div>
      </div>
    </div>

    <div className="corn border-bottom border-5 border-black py-3">
      <div className="container-fluid">
      <h1 className=' text-center'>Corn</h1>
      <div className="row row-gap-3">
        {corn.map((ele)=>{
          return(
          <div className="col-md-4">
            <Link to={`/recipe_details/${ele.recipe_id}`} className='text-center text-decoration-none text-dark'>
            <div className="card">
              <img src={ele.image_url} className='w-100'/>
              <h2 className='fs-4'>{ele.title}</h2>
            </div>
            </Link>
          </div>
        )})}
      </div>
      </div>
    </div>

    <div className="onion border-bottom border-5 border-black py-3">
      <div className="container-fluid">
      <h1 className=' text-center'>Onion</h1>
      <div className="row row-gap-3">
        {onion.map((ele)=>{
          return(
          <div className="col-md-4">
            <Link to={`/recipe_details/${ele.recipe_id}`} className='text-center text-decoration-none text-dark'>
            <div className="card">
              <img src={ele.image_url} className='w-100'/>
              <h2 className='fs-4'>{ele.title}</h2>
            </div>
            </Link>
          </div>
        )})}
      </div>
      </div>
    </div>
    </>
  )
}
