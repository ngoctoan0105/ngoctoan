import axios from "axios"
export const getQQ = () => {
    return axios.get('https://62fc8fb8b9e38585cd412ba3.mockapi.io/QQQ/')
 }
 
 export const createQQ = (name,phone,cccd,date,id,idphong) => {
    return axios.post(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/QQQ/`,{name,phone,cccd,date,id,idphong})}
 
 export const editQQ = (id,resetqq) => {
    return axios.put(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/QQQ/${id}`,resetqq)
 }
 
 export const deleteUser= (id) => {
    return axios.delete(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/users/${id}`)
 }