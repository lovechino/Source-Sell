import { useEffect, useState } from "react";
import api from "../Utils/Axios";

const useRegister = ()=>{
    const [register, setRegister] = useState(false);
    useEffect(()=>{
        const Register = async()=>{
            const response = await api.post('/users');
            if(response){
                setRegister(true);
            }
        }
        Register()
    },[])
    return register;
}

export default useRegister