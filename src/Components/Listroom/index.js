import './style.css'
import imgRoom from '../img/room.jpg'
import imgRoom2 from '../img/roomrs2.jpg'
import imgRoom3 from '../img/roomrs3.jpg'
import { useEffect, useState } from 'react'
import {FaHouseUser,FaDollarSign} from 'react-icons/fa'
import Button from 'react-bootstrap/Button';

function ListRoom({id,gia,showformCustomer,status,dphx,loaiphong}) {
    const [loaip,setLoaip] = useState(gia)
    const [imgp,setImgp] = useState()
    useEffect(()=>{
        if(loaiphong === 'VIP'){
            setImgp(imgRoom2)
        }
        if(loaiphong === 'NOMAL'){
            setImgp(imgRoom)
        }
        if(loaiphong === 'SPECIAL'){
            setImgp(imgRoom3)
        }
    })
    return (
        <div className='tab_client'>
            <img className='img_room_client' src={imgp} />
                <div className={status !== 'Phòng Trống' ? 'status_st stt_gray':'status_st'}>{status}...</div>
            
            <div className='text_listroom'>
               <div className='text_listroom2'></div>
               <div className='text_listroom22'><h5>{loaiphong}</h5></div>
               <div className='text_listroom3'>
                 <h5><FaHouseUser className='icon_listroom'/> PHÒNG SỐ :{id}</h5>
                <h6><FaDollarSign className='icon_listroom'/> Giá:{gia}/Ngày</h6>
               </div>
               <Button className='button_showcustumer btn-secondary border-white' style={{color:'Black'}} variant="primary" onClick={()=>{showformCustomer(id,status)}}>
                 {dphx}
                 </Button>
                <a href='#'     ></a>
            </div>
           
        </div>
    )
}
export default ListRoom;