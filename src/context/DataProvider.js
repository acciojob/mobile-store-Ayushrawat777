import { useState } from "react"
import dataContext from "./dataContext"
import React from 'react'

const mockData =[
    {
        id:1,
        name : "IPhone 12",
        price : 1200,
        desc: "This is Iphone 12",
        image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPBS2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1602896204000"
    },
    {
        id:2,
        name : "Samsung s22 ultra",
        price : 1500,
        desc: "This is S22 ultra",
        image : "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/w/t/r/-original-imaggj68cgtdacxn.jpeg?q=90"
    },
    {
        id:3,
        name : "IPhone 15 pro max",
        price : 2000,
        desc: "This is Iphone 15 pro max",
        image : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694673979/Croma%20Assets/Communication/Mobiles/Images/300815_0_jesioe.png"
    },
]
const DataProvider = ({children})=>{
    const [data, setData] = useState(mockData)
    return <dataContext.Provider value={{data,setData}} >
        {children}
    </dataContext.Provider> 
}

export default DataProvider