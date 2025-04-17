import React, { useEffect, useState } from 'react'
import api from '../Utils/Axios'

const useGetAllProduct = () => {
    const[list,setList] = useState([])
    useEffect(()=>{
        const GetProducts = async()=>{
            const response = await api.get("/products")
            if(response){
                setList(response)
            }
        }
        GetProducts()
    },[])
    return list
}

export default useGetAllProduct