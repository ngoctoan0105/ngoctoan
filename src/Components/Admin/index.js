import './style.css'
import { FaTrash } from 'react-icons/fa'
import { editroom, getRoom } from '../API/api'
import { getUsers, deleteUser } from '../API2/api2';
import { getQQ, editQQ } from '../API3/api3';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import imgBN from '../img/banner21.jpg'
import imgTW from '../img/teamw.jpg'
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useMemo, useState } from 'react';
import imgITEM from '../img/room1.jpg'
import { Alert } from 'bootstrap';




function Admin() {
    const [room, setRoom] = useState([])
    const [user, setUser] = useState([])
    const [QQ, setQQ] = useState([])
    const [dataqq, setDataqq] = useState({ name: '', sdt: '', cccd: '', date: '', trangthai: 'Đang sử Dụng' })
    const [checkphong, setcheckphong] = useState('')
    const [hideform, setHideform] = useState(true)
    const [show, setShow] = useState(false);
    const [formAd,setFormad] = useState({tk:'',mk:''});
    const [loginAdmin,setLoginadmin] = useState(false)
    const [notiLogin,setNotilogin] = useState('')
    const [notiLogin2,setNotilogin2] = useState('')
    var newDate = new Date()
    var date = newDate.getDate();
    var month = newDate.getMonth() + 1;
    var year = newDate.getFullYear();
    var hours = newDate.getHours();
    var minu = newDate.getMinutes();

    const accadmin = {tk:'nt',mk:'123'}
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
        const name1 = e.target.name
        const value = e.target.value
        setDataqq(
            {
                ...dataqq,
                [name1]: value,
                trangthai: 'Đang Sử Dụng'

            }
        )

    }
    const onchangead = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormad(
            {
                ...formAd,
                [name]: value,

            }
        )
        console.log(formAd);
    }
    useEffect(() => {
        fechRoom()


    }, [])
    const Checkformad = () => {
        if (formAd.tk === accadmin.tk && formAd.mk === accadmin.mk){
            setLoginadmin(true)
            setNotilogin('')
        }
        else{
            setNotilogin('Tài khoản hoặc mật khẩu không chính xác')
            setNotilogin2('Tài khoản dự phòng: nt, Mật khẩu dự phòng: 123')
        }
        console.log(loginAdmin);
    }


    const checkout = (id, trangthai) => {
        if (trangthai !== 'Phòng Trống') {
            const resetqq = { name: '', cccd: '', sdt: '', trangthai: 'Phòng Trống', date: '' }
            editQQ(id, resetqq).then((res) => {
                fechRoom()
            }).catch((erro) => { console.log(erro); })

            alert('Check out thành công')
        }
        else {
            alert('Phòng đang trống')
        }
    }
    const checkinform = () => {
        if (dataqq.cccd !== '' && dataqq.date !== '' && dataqq.name !== '' && dataqq.sdt !== '') {
            editQQ(checkphong, dataqq).then((res) => {
                fechRoom()
            }).catch((erro) => { console.log(erro); })
            handleClose()
            alert('Checkin thành công')
            setDataqq({ name: '', sdt: '', cccd: '', date: '' })

        }
        else {
            alert('Hãy nhập đầy đủ thông tin')
        }

        setHideform(true)
    }

    const checkin = (id) => {
        setcheckphong(id)
        handleShow()
    }
    const deleteuser = (id) => {
        deleteUser(id).then((res) => {
            fechRoom()
        }).catch((erro) => { console.log(erro); })
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <div className={loginAdmin ? 'hide_admin':'login_admin'}>
                <div className='title_login_admin'><img className='img_teamw' src={imgTW}></img></div>
                <div className='login_admin_form'>
                <form className='login_admin_formi'>
                       
                        <h2>Đăng Nhập</h2>
                        <hr></hr>
                        <div className="form-group">
                            <label >Tài khoản</label>
                            <input name='tk' value={formAd.tk} type="text" className="form_control" onChange={onchangead} placeholder="Tài khoản" />
                        </div>
                        <div className="form-group">
                            <label >Mật khẩu</label>
                            <input name='mk' value={formAd.mk} type="password" className="form_control" onChange={onchangead} placeholder="Mật khẩu" />
                        </div>
                        <h6 style={{color:"red"}}>{notiLogin}</h6>
                        <h6 style={{color:"#6a6a6a"}}>{notiLogin2}</h6>
                        <br/>
                        <button type='button' className='btn btn-light' onClick={Checkformad} >Đăng nhập</button>
                    </form>
                </div>
            </div>
            <div className={loginAdmin ? 'all_admin' : 'hide_admin'}>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>CHECKIN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label >Họ và Tên</label>
                            <input name='name' value={dataqq.name} type="text" className="form_control" onChange={onchange} placeholder="Họ và Tên" />
                        </div>
                        <div className="form-group">
                            <label >Số điện thoại</label>
                            <input name='sdt' value={dataqq.sdt} type="text" className="form_control" onChange={onchange} placeholder="Số điện thoại" />

                        </div>
                        <div className="form-group">
                            <label >Số CCCD</label>
                            <input name='cccd' value={dataqq.cccd} type="text" className="form_control" onChange={onchange} placeholder="Số CCCD" />
                        </div>
                        <div >
                            <label >Ngày nhận phòng</label>
                            <input name='date' type='date' value={dataqq.date} onChange={onchange} placeholder='ngày/tháng/năm' />
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => { checkinform() }}>
                        Checkin
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='title_quanly'>
                <img className='imgbn_admin' src={imgBN} />
                <div className='hours_admin'><p>{hours}:{minu}</p></div>
                <div className='date_admin'><p>{date}/{month}/{year}</p></div>
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

                    {user.map((a) => {
                        return (
                            <div className='dsdk_chil2' key={a.id}>
                                <h6>{a.name}</h6>
                                <h6>{a.cccd}</h6>
                                <h6>{a.phone}</h6>
                                <h6>{a.gia}/ngày</h6>
                                <h6>{a.date}</h6>
                                <h6>{a.idphong}</h6>
                                <h6 style={{ cursor: 'pointer' }} onClick={() => { deleteuser(a.id) }}><FaTrash /></h6>
                            </div>)
                    })}
                </div>
            </div>
            <div className='gc_quanly'></div>
            <div className='list_user'>
                {QQ.map((data) => {
                    return (
                        <div className='user_item' key={data.id}>
                            <img className='imgroom_item' src={imgITEM} />
                            <div className='chil_user_item'>
                                <div className='text_room_ad'>PHÒNG:   {data.id}</div>
                                <div className='text_room_ad'>TÊN:   {data.name}</div>
                                <div className='text_room_ad'>CCCD:   {data.cccd}</div>
                                <div className='text_room_ad'>SĐT:   {data.sdt}</div>
                                <div className='text_room_ad' >GIÁ PHÒNG:   {data.gia}</div>
                                <div className='text_room_ad'>NGÀY VÀO:   {data.date}</div>
                                <div className={data.trangthai !== 'Phòng Trống' ? 'trangthai_admin2 trangthai_admin' : "trangthai_admin"} >{data.trangthai}</div>
                                <div className='d-flex justify-content-around mt-3'>
                                    <Button variant='secondary' style={{ float: 'left' }} onClick={() => { checkout(data.id, data.trangthai, data.gia) }}>Checkout</Button>
                                    <Button variant="secondary" onClick={() => { checkin(data.id) }}>Checkin </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}
export default Admin;