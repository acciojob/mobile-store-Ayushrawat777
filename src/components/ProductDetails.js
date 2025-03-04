import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import dataContext from '../context/dataContext'

const ProductDetails = () => {
    const { id } = useParams()
    const { data } = useContext(dataContext)
    const product = data.find(el => el.id == id)

    return (
        <div>
            <div style={{ border: "1px solid black" }} >
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <b>{product.price}</b>
                <img height="100px" src={product.image} alt="" />
            </div>
            <Link to={'/'} >
                <button>More products</button>
            </Link>
        </div>
    )
}

export default ProductDetails