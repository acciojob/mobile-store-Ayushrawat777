import React, { useContext } from 'react'
import dataContext from '../context/dataContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { data } = useContext(dataContext)
  return (
    <div>Home
      {data.map((el, i) => {
        return (
          <div key={el.id} style={{ border: "1px solid black" }} >
            <h3>{el.name}</h3>
            <p>{el.desc}</p>
            <b>{el.price}</b>
            <img height="100px" src={el.image} alt="" />
            <Link to={`/products/${el.id}`}><button className='btn' >Buy</button></Link>
          </div>
        )
      })}
    </div>
  )
}

export default Home