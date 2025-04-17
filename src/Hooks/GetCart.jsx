import { useEffect, useState } from "react"
import api from "../Utils/Axios"

const useGetCart = (id)=>{
    const[result,setResult] = useState()
    useEffect(()=>{
        const GetCart = async()=>{
            const response = await api.get(`/carts/${id}`)
            setResult(response.data)
        }
        GetCart()
    },[])
    return result
}

export default useGetCart