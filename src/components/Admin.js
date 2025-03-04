import React, { useContext } from 'react'
import dataContext from '../context/dataContext'
import { Link } from 'react-router-dom'

const Admin = () => {
  const { data, setData } = useContext(dataContext)

  return (
    <div>Admin
      <Link><button>Add Data</button></Link>
      {data.map((el, i) => {
        return (
          <Link to={`/admin/products/${el.id}`} key={el.id}  >
            <div key={el.id} style={{ border: "1px solid black" }} >
              <h3>{el.name}</h3>
              <img height="40px" src={el.image} alt="" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Admin