'use client';
import React from 'react'
import styles from './ProductCard.module.css'



const ProductCard = () => {
    return (
        <div className='p-5 my-5 bg-sky-400 text-white text-lx hover:bg-sky-500'>
            <button onClick={() => console.log("message")}>Add to cart</button>
        </div>
    )
}

export default ProductCard
