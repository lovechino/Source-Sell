import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout : 10000,
    headers : {
        'Content-Type': 'application/json',
    }
})

api.interceptors.response.use((response)=>{
    return response.data
},
(error) => {
    console.log(error)
}
)

export default api