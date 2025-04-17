import { useEffect, useState } from "react";
import api from "../Utils/Axios";
// import { useDispatch } from "react-redux";

const useLoginLogic = (data)=>{
    const [loginState, setLoginState] = useState(false);
    
    // const dispatch = useDispatch()
    useEffect(()=>{
        const Login = async()=>{
            const response = await api.post('/auth/login', data);
            if(response.token){
               console.log(response.token)
            }
        }
        Login()
    },[])
    return loginState
}

export default useLoginLogic