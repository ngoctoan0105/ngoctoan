import './style.css'
import {FaTrash} from 'react-icons/fa'
import {  editroom, getRoom } from '../API/api'
import { getUsers, deleteUser } from '../API2/api2';
import { getQQ, editQQ } from '../API3/api3';
import imgLogo from '../img/logo.jpg'
import imgBN from '../img/banner21.jpg'
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useMemo, useState } from 'react';
import imgITEM from '../img/room1.jpg'


function Admin() {
    const [room, setRoom] = useState([])
    const [user, setUser] = useState([])
     const [QQ, setQQ] = useState([])
    const [dataqq,setDataqq]=useState({name:'',sdt:'',cccd:'',date:'',trangthai:'Đang sử Dụng'})
    const [checkphong,setcheckphong] = useState('')
    const [hideform,setHideform]= useState(true)
    var newDate = new Date()
    var date = newDate.getDate();
    var month = newDate.getMonth() + 1;
    var year = newDate.getFullYear();
    var hours = newDate.getHours();
    var minu = newDate.getMinutes();

    const fechRoom = () => {
        getRoom().then((res) => {
            setRoom(res.data)

        }).catch((erro) => { console.log(erro); })
        getUsers().then((res) => {
            setUser(res.data)

        }).catch((erro) => { console.log(erro); })
        getQQ().then((res) => {
            setQQ(res.data)

        }).catch((erro) => { console.log(erro); })
    }

    const onchange = (e) => {
        const name1 =e.target.name
        const value =e.target.value
        setDataqq(
            { ...dataqq,
                [name1]: value,
                trangthai:'Đang Sử Dụng'
               
            }
        )
      
    }
    useEffect(() => {
        fechRoom()


    }, [])



    const checkout = (id,trangthai) => {
        if(trangthai !== 'Phòng Trống'){
        const resetqq = { name: '', cccd: '', sdt: '', trangthai: 'Phòng Trống',date:'' }
        editQQ(id, resetqq).then((res) => {
            fechRoom()
        }).catch((erro) => { console.log(erro); })
        
        alert('Check out thành công')}
        else{
            alert('Phòng đang trống')
        }
    }
    const checkinform = () => {
       if(dataqq.cccd !== '' && dataqq.date !== '' && dataqq.name !== '' && dataqq.sdt !== ''){
        editQQ(checkphong,dataqq).then((res) => {
            fechRoom()
        }).catch((erro) => { console.log(erro); })
        alert('Checkin thành công')
        setDataqq({name:'',sdt:'',cccd:'',date:''})
        
       }
       else{
       alert('Hãy nhập đầy đủ thông tin')}
       
       setHideform(true)
    }

    const checkin = (id) => {
        setcheckphong(id)
        setHideform(false)
    }
    const deleteuser = (id)=>{
        deleteUser(id).then((res)=>{
            fechRoom()
        }).catch((erro)=>{console.log(erro);})
    }

    return (
        <div>
            <div className='title_quanly'>
             <img className='imgbn_admin' src={imgBN}/>
                <img className='logo_admin' src={imgLogo} />
                 <div className='hours_admin'><p>{hours}:{minu}</p></div>
                <div className='date_admin'><p>{date}/{month}/{year}</p></div>
            </div>
            <div className={!hideform ? "form_data_admin" : "hide_form_admin form_data_admin"}>
                <button className='btncl_data_admin' onClick={()=>{checkinform()}} >X</button>
                <form style={{marginTop:'2em'}}> <div className="form-group">
                    <label >Họ và Tên</label>
                    <input name='name' value={dataqq.name} type="text" className="form-control" onChange={onchange} placeholder="Họ và Tên" />
                      </div>
                    <div className="form-group">
                        <label >Số điện thoại</label>
                        <input name='sdt' value={dataqq.sdt} type="text" className="form-control" onChange={onchange} placeholder="Số điện thoại" />

                    </div>
                    <div className="form-group">
                        <label >Số CCCD</label>
                        <input name='cccd' value={dataqq.cccd} type="text" className="form-control" onChange={onchange} placeholder="Số CCCD" />
                     </div>
                    <div >
                        <label >Ngày nhận phòng</label>
                        <input name='date' type='date' value={dataqq.date} onChange={onchange} placeholder='ngày/tháng/năm' />
                    </div>
                    <button type='button' onClick={()=>{checkinform()}} >Checkin</button>
                </form>

            </div>
            <div className='danhsachol'>
                <h4 className='dsdko'>DANH SÁCH KHÁCH HÀNG ĐĂNG KÝ ONLINE</h4>
                 
            <div className='dsdk'>
                <div className='dsdk_chil1'>
                    <h5>TÊN</h5>
                    <h5>CCCD</h5>
                    <h5>SĐT</h5>
                    <h5>GIÁ PHÒNG</h5>
                    <h5>NGÀY VÀO</h5>
                    <h5>SỐ PHÒNG</h5>
                    <h5> </h5>

                </div>
                
             {user.map((a)=>{return(
                <div className='dsdk_chil2' key={a.id}>
                    <h6>{a.name}</h6>
                    <h6>{a.cccd}</h6>
                    <h6>{a.phone}</h6>
                    <h6>{a.gia}/ngày</h6>
                    <h6>{a.date}</h6>
                    <h6>{a.idphong}</h6>
                    <h6 style={{cursor:'pointer'}} onClick={()=>{deleteuser(a.id)}}><FaTrash/></h6>
                </div>)})}
            </div>
            </div>
            <div className='gc_quanly'></div>
            <div className='list_user'>
                {QQ.map((data) => {
                    return (
                        <div className='user_item' key={data.id}>
                            <img className='imgroom_item' src={imgITEM}/>
                            <div className='chil_user_item'> 
                             <div className='text_room_ad'>PHÒNG:   {data.id}</div> 
                            <div className='text_room_ad'>TÊN:   {data.name}</div>
                            <div className='text_room_ad'>CCCD:   {data.cccd}</div>
                            <div className='text_room_ad'>SĐT:   {data.sdt}</div>
                            <div className='text_room_ad'>GIÁ PHÒNG:   {data.gia}</div>
                            <div className='text_room_ad'>NGÀY VÀO:   {data.date}</div>
                            <div className={data.trangthai !== 'Phòng Trống' ?'trangthai_admin2 trangthai_admin' : "trangthai_admin"} >{data.trangthai}</div>
                            <button className='btn_admin_check' style={{ float: 'left' }} onClick={() => { checkout(data.id,data.trangthai,data.gia) }}>Checkout</button>
                            <button className='btn_admin_check' style={{ float: 'right' }} onClick={()=>{checkin(data.id)}} >Checkin</button>
                           </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Admin;