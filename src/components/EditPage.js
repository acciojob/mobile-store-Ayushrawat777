import React, { useContext, useState } from 'react'
import dataContext from '../context/dataContext'
import { Navigate, useParams } from 'react-router-dom'

const EditPage = () => {
    const { id } = useParams()
    const { data, setData } = useContext(dataContext)
    const product = data.find(el => el.id == id)
    const [newData, setNewData] = useState({
        name: product ? product.name : '',
        price: product ? product.price : '',
        desc: product ? product.desc : '',
        image: product ? product.image : ''
    })

    const handleDelete = () => {
        const filteredData = data.filter(el => el.id != id)
        setData([...filteredData])
        alert("product deleted")
    }
    const handleUpdate = ()=>{
        const updatedData = data.map(el=>{
            if(el.id == id){
                el={...newData}
            }
            return el
        })
        setData(updatedData)
        alert("product updated")
    }
    return (
        <div>EditPage
            <input type="text" id='name' value={newData.name} onChange={e => setNewData({ ...newData, name: e.target.value })} />
            <input type="number" id='price' value={newData.price} onChange={e => setNewData({ ...newData, price: e.target.value })} />
            <input type="text" id='desc' value={newData.desc} onChange={e => setNewData({ ...newData, desc: e.target.value })} />
            <input type="text" id='image' value={newData.image} onChange={e => setNewData({ ...newData, image: e.target.value })} />
            <button onClick={handleDelete} >Delete</button>
            <button onClick={handleUpdate}  >Save</button>
        </div>
    )
}

export default EditPage