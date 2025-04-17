import React, { useEffect, useState } from 'react';
import api from '../Utils/Axios';

const useGetSingleProduct = (id) => {
    const[list,setList] = useState()
    useEffect(()=>{
        const GetProducts = async()=>{
            const response = await api.get(`/products/${id}`)
            if(response){
                setList(response)
            }
        }
        GetProducts()
    },[id])
    return list
};

export default useGetSingleProduct;