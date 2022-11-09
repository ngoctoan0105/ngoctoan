import './style.css'
import { getRoom, editroom } from '../API/api'
import { createUser, getUsers } from '../API2/api2'
import Room from '../Roomslick';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import ListRoom from '../Listroom';
import imgBia from '../img/banner21.jpg'



function Phongnghi() {

    const [room, setRoom] = useState([])
    const [showCustomer, setShowCustomer] = useState(false);
    const [user, setUser] = useState({ name: '', phone: '', cccd: '', date: '', idphong: '', gia: '' })
    const [sophong, setSophong] = useState('1')
    const [giaphong, setgiaphong] = useState('')
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
            setShowCustomer(true)
        }
        else {
            alert('Phòng này đã có người dùng, quý khách vui lòng chọn phòng khác')
            setShowCustomer(false)


        }

    }
    const closeCust = () => {
        setShowCustomer(false)
        if (user.name !== '' && user.phone !== '' && user.cccd !== '' && user.date !== '') {

            createUser(user.name, user.phone, user.cccd, user.date, user.id, user.idphong, user.gia).then((res) => {
            }).catch((erro) => { console.log(erro); })
            setUser({ name: '', phone: '', cccd: '', date: '', id: '' })
            alert('Đăng ký thành công.')
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
    


    return (
        <div>
            <div className='img_bia'><img className='img_bia2' src={imgBia}></img></div>
            <div className={showCustomer ? 'phongnghiall show_form_custumer' : 'phongnghiall'}>


                <div className='parent_form_c' > <div className='form_cus1' >
                    <div>
                        <button className='close_formcustumer' onClick={closeCust} >X</button>
                        <h4>NHẬP THÔNG TIN ĐỂ ĐẶT PHÒNG</h4>
                        <h6>Số phòng: {sophong}</h6>

                        <div className='form_cus2'>
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

                                <button type='button' onClick={closeCust}>Đặt phòng</button>

                            </form>
                        </div>
                    </div>

                </div>
                </div>
                <h4>BROWN</h4>
                <h2>DANH SÁCH PHÒNG</h2>
                <div className='gcpnall'>
                    <div className='gcpn'></div>
                    <div className='gcpnm'></div>
                    <div className='gcpn'></div>
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