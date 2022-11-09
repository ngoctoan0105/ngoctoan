import axios from "axios"
export const getUsers = () => {
    return axios.get('https://62fc8fb8b9e38585cd412ba3.mockapi.io/users/')
 }
 export const createUser = (name,phone,cccd,date,id,idphong,gia) => {
    return axios.post(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/users/`,{name,phone,cccd,date,id,idphong,gia})}
 
 export const deleteUser= (id) => {
    return axios.delete(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/users/${id}`)
 }