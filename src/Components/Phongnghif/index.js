import './style.css'
import { getRoom, editroom } from '../API/api'
import { createUser, getUsers } from '../API2/api2'
import Room from '../Roomslick';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import ListRoom from '../Listroom';
import imgBia from '../img/banner21.jpg'
import { click } from '@testing-library/user-event/dist/click';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function Phongnghi() {

    const [room, setRoom] = useState([])
    const [user, setUser] = useState({ name: '', phone: '', cccd: '', date: '', idphong: '', gia: '' })
    const [sophong, setSophong] = useState('1')
    const [giaphong, setgiaphong] = useState('')
    const [checkBtn, setCheckBtn] = useState('all');
    const [checkRoom, setCheckRoom] = useState([]);
    const [show, setShow] = useState(false);
    const fechRoom = () => {
        getRoom().then((res) => {
            setRoom(res.data)
        }).catch((erro) => { console.log(erro); })
    }

    useEffect(() => {
        fechRoom()


    }, [])


    const showformCustomer = (id, stt, gia) => {
        setSophong(id)
        setgiaphong(gia)
        if (stt === 'Phòng Trống') {
          
            setShow(true);

        }
        else {
            alert('Phòng này đã có người dùng, quý khách vui lòng chọn phòng khác')
        }

    }
    const closeCust = () => {
        handleClose()
        
        if (user.name !== '' && user.phone !== '' && user.cccd !== '' && user.date !== '') {

            createUser(user.name, user.phone, user.cccd, user.date, user.id, user.idphong, user.gia).then((res) => {
            }).catch((erro) => { console.log(erro); })
            setUser({ name: '', phone: '', cccd: '', date: '', id: '' })
            alert('Cảm ơn quý khách đã đặt phòng.Bộ phận tư vấn sẽ liên lạc với quý khách sớm nhất có thể')
            fechRoom()
        } else {
            alert('Quý khách vui lòng điền đầy đủ thông tin')
        }
    }

    const onchange = (e) => {
        const name1 = e.target.name
        const value = e.target.value
        setUser(
            {
                ...user,
                [name1]: value,
                idphong: sophong,
                gia: giaphong
            }
        )

    }
    var newDate = new Date()

    const clickCheckBtn1 = () => {
        setCheckBtn('all')
        getRoom().then((res) => {
            setRoom(res.data)
        }).catch((erro) => { console.log(erro); })
    }
    const clickCheckBtn2 = () => {
        setCheckBtn('vip')
        getRoom().then((res) => {
            const item = res.data;
            const all = item.filter((i) => {
                return i.gia == '1400000'
            })
            setRoom(all)
            console.log(room);
        }).catch((erro) => { console.log(erro); })

    }

    const clickCheckBtn3 = () => {
        setCheckBtn('nomal')
        getRoom().then((res) => {
            const item = res.data;
            const all = item.filter((i) => {
                return i.gia == '1200000'
            })
            setRoom(all)
            console.log(room);
        }).catch((erro) => { console.log(erro); })
    }
    const clickCheckBtn4 = () => {
        setCheckBtn('special')
        getRoom().then((res) => {
            const item = res.data;
            const all = item.filter((i) => {
                return i.gia == '1300000'
            })
            setRoom(all)
            console.log(room);
        }).catch((erro) => { console.log(erro); })
    }

    const handleClose = () => setShow(false);
     
    return (
        <div>
            <div className='img_bia'><img className='img_bia2' src={imgBia}></img></div>
            <div className='phongnghiall'>
                
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>NHẬP THÔNG TIN ĐỂ ĐẶT PHÒNG</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form>
                                <div className="form-group">
                                    <label >Họ và Tên</label>
                                    <input name='name' value={user.name} type="text" className="form-control" onChange={onchange} placeholder="Họ và Tên" />

                                </div>
                                <div className="form-group">
                                    <label >Số điện thoại</label>
                                    <input name='phone' value={user.phone} type="text" className="form-control" onChange={onchange} placeholder="Số điện thoại" />

                                </div>
                                <div className="form-group">
                                    <label >Số CCCD</label>
                                    <input name='cccd' value={user.cccd} type="text" className="form-control" onChange={onchange} placeholder="Số CCCD" />

                                </div>
                                <div >
                                    <label >Ngày nhận phòng</label>
                                    <input name='date' type='date' value={user.date} onChange={onchange} placeholder='ngày/tháng/năm' />

                                </div>

                                
                                </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Đóng
                        </Button>
                        <Button variant="primary" onClick={closeCust}>
                            Đặt Phòng
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className='parent_form_c' > 
                <div className='form_cus1' >
                   

                </div>
                </div>
                <h4>BROWN</h4>
                <h2>DANH SÁCH PHÒNG</h2>
                <div className='gcpnall'>
                    <div className='gcpn'></div>
                    <div className='gcpnm'></div>
                    <div className='gcpn'></div>
                </div>

                <div className="btn-group py-4" role="group" aria-label="Basic outlined example">
                    <button type="button" name='all' className={checkBtn == 'all' ? 'btn btn-outline-secondary active' : "btn btn-outline-secondary"} onClick={() => { clickCheckBtn1() }}>All</button>
                    <button type="button" name='nomal' className={checkBtn == 'nomal' ? 'btn btn-outline-secondary active' : "btn btn-outline-secondary"} onClick={() => { clickCheckBtn3() }}>Nomal</button>
                    <button type="button" name='vip' className={checkBtn == 'vip' ? 'btn btn-outline-secondary active' : "btn btn-outline-secondary"} onClick={() => { clickCheckBtn2() }}>Vip</button>
                    <button type="button" name='special' className={checkBtn == 'special' ? 'btn btn-outline-secondary active' : "btn btn-outline-secondary"} onClick={() => { clickCheckBtn4() }}>Special</button>
                </div>


                <div className='phongnghi_item' >
                    {room.map((ed) => {
                        return (
                            <div className='phongnghi_item_chil' key={ed.id}>
                                <ListRoom loaiphong={ed.loaiphong} gia={ed.gia} id={ed.id} showformCustomer={() => { showformCustomer(ed.id, ed.status, ed.gia) }} dphx={'Đặt Phòng'} status={ed.status} />

                            </div>
                        )
                    })}



                </div>

            </div>

        </div>
    )
}
export default Phongnghi;