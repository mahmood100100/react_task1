import React, { useEffect, useState } from 'react'
import  "./Products.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function Products() {
   
 let [Products , setProducts] = useState([])

 const getProducts = async () =>{
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()
    setProducts(data)
 }

 useEffect(() =>{
    getProducts()
 }, [])

  return (
    <>
    <div className="products">
      <div className="container-fluid">
        <div className="row">
          {Products.map((product)=>{
            return(
             <div className="col-md-4" key={product.id}>
                <div className="img-container">
                <img src={product.image} className='w-100' />
                </div>
                <h1 className='fs-4 text-center'>{product.title}</h1>
            </div>
          )})}
        </div>
      </div>
    </div>
    </>
  )
}
