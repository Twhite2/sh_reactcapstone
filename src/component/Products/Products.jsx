import React from 'react'
// import ProductCard from './ProductCard'
import './Products.css'
import spagh from '../img/spagh.jpg'

const Products = () => {
  return (
    <section>
      <div className=' pContainer'>

        <div className = " products ">
      
          <div className = "product-card">
            <img src={spagh} alt="" />
      
            <div>
              <h1>Product Name</h1>
              <p>$10.00</p>
            </div>

          </div>

          <div className = "product-card">
            <img src={spagh} alt="" />
      
            <div>
              <h1>Product Name</h1>
              <p>$10.00</p>
            </div>

          </div>

          <div className = "product-card">
            <img src={spagh} alt="" />
      
            <div>
              <h1>Product Name</h1>
              <p>$10.00</p>
            </div>

          </div>

          <div className = "product-card">
            <img src={spagh} alt="" />
      
            <div>
              <h1>Product Name</h1>
              <p>$10.00</p>
            </div>

          </div>

          <div className = "product-card">
            <img src={spagh} alt="" />
      
            <div>
              <h1>Product Name</h1>
              <p>$10.00</p>
            </div>

          </div>

          <div className = "product-card">
            <img src={spagh} alt="" />
      
            <div>
              <h1>Product Name</h1>
              <p>$10.00</p>
            </div>

          </div>

          <div className = "product-card">
            <img src={spagh} alt="" />
      
            <div>
              <h1>Product Name</h1>
              <p>$10.00</p>
            </div>

          </div>

        </div>

        {/* <ProductCard /> */}
      </div>
    </section>
  )
}

export default Products