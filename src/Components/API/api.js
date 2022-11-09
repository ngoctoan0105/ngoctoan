import axios from "axios"
export const getRoom = () => {
    return axios.get('https://62fc8fb8b9e38585cd412ba3.mockapi.io/APIROOM/')
 }
 

 export const editroom = (id,status) => {
    return axios.put(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/APIROOM${id}`,{status})
 }
 
 export const deleteroom = (id) => {
    return axios.delete(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/APIROOM/${id}`)
 }