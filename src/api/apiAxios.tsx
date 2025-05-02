import axios , {AxiosRequestConfig, Method} from "axios";
const Base_Url = import.meta.env.PocketBase;

const api = axios.create({
    baseURL:Base_Url,
    headers:{"Content-Type":"application/json"}
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
});

export const request = async <T = any>(
    url:string,
    method:Method = "GET",
    data?:any,
    config?:AxiosRequestConfig

):Promise<T> =>{
    const response = await api({url,method,data,...config});
    return response.data;
}