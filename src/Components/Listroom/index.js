import './style.css'
import imgRoom from '../img/room.jpg'
import { useEffect, useState } from 'react'
function ListRoom({id,gia,showformCustomer,status,dphx}) {
   
    
    return (
        <div className='tab_client'>
            <img className='img_room_client' src={imgRoom} />
                <div className={status !== 'Phòng Trống' ? 'status_st stt_gray':'status_st'}>{status}...</div>
            <div className='title_client'>
                <h4>PHÒNG SỐ :{id}</h4>
                <h3>{gia}/Ngày</h3>
                <a href='#' className='button_showcustumer' style={{color:"#000"}} onClick={()=>{showformCustomer(id,status)}} >{dphx}</a>
            </div>
           
        </div>
    )
}
export default ListRoom;