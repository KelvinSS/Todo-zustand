import axios from "axios";

const setRequestInterceptors = (instance: any) =>
    instance.interceptors.request.use(async (config: any) => {
        try {
            //api sem validação.
            return config
        } catch (error) {
            console.log(error)
            return Promise.reject(error);
        }
    })

const setResponseInterceptors = (instance: any) =>
    instance.interceptors.response.use(
        (response: any) => {
            return response;
        },
        async (error: any) => {
            console.log(error)
            return Promise.reject(error);
        }
    )
    
export const instanceIbge = axios.create({
    baseURL: `http://servicodados.ibge.gov.br/api/v3`
})
setRequestInterceptors(instanceIbge);
setResponseInterceptors(instanceIbge);

