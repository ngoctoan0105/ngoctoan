import { Routes, Route, Link } from "react-router-dom";
import Trangchu from "../Trangchuf";
import Dichvucf from "../Dichvuf"
import Dichvugym from "../Dichvugym";
import Dichvuhoboi from "../Dichvuhoboi"
import Phongnghi from "../Phongnghif";
import Admin from "../Admin";
import './style.css'
import imgss from '../img/bgss.jpg'
import imgLogo from '../img/logo.jpg'
import { FaList } from 'react-icons/fa'
import { FaSortDown } from 'react-icons/fa'
import { FaDumbbell } from 'react-icons/fa'
import { FaWater } from 'react-icons/fa'
import { FaMugHot } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';






function Header() {

  const [togclassmenu, setTogclassmenu] = useState(true);
  const [togdichvu, setTogdichvu] = useState(true)
  const [scrollm, setScrollm] = useState(false)

 
  
 
  const ToggleClassHeader = () => {
    setTogclassmenu(!togclassmenu);
  };

  const tgDichvu = () => {
    setTogdichvu(!togdichvu)
  }
 
  const scrollmouse = () => {
    if (window.scrollY >= 100) {
      setScrollm(true)
    }
    else {
      setScrollm(false)
    }
  }

  useEffect (()=>{
   
  },[])
 
 
 
  window.addEventListener('scroll', scrollmouse)

 
  return (
    <div>
      
      <div id="header_id" className={scrollm ? 'header scroll_header' : 'header'} >
        <div className="managebg">
          <img className="imgss" src={imgss}></img>
          <Link className="manage_room" to='admin'><p>QUẢN LÝ</p></Link>
        </div>
        <div className="logo">
          <Link to="/"><img src={imgLogo} alt="" /></Link>
          <button type="button" id="button_menu" onClick={ToggleClassHeader} ><a href='#'><FaList /></a></button></div>
        <div className="menu ">
          <ul className={togclassmenu ? "hide_menu" : null} id="menu_ul">
            <li><Link className="menu_itemli" to="/">TRANG CHỦ</Link> </li>
            <li><Link className="menu_itemli" to="phongnghi">PHÒNG NGHỈ</Link></li>
            <li><Link className="menu_itemli" to="coffee">NHÀ HÀNG</Link></li>
            <li><div className="menu_itemli" to='#' style={{ cursor: "pointer" }} onClick={tgDichvu} id="tog_dichvu_id">DỊCH VỤ<p><FaSortDown /></p>
              <ul className={togdichvu ? 'hide_tog_dichvu' : 'null'} id='dichvu_ul'>
                <Link to='/hoboi' className='dichvu_li dichvu_li_pool'><FaWater /> HỒ BƠI</Link>
                <Link to='/coffee' className='dichvu_li dichvu_li_cafe'><FaMugHot /> CAFÉ</Link>
                <Link to='/gym' className='dichvu_li dichvu_li_gym'><FaDumbbell /> PHÒNG TẬP</Link>
              </ul>
            </div>

            </li>
            <li><Link className="menu_itemli datphong" to="datphong">ĐẶT PHÒNG <FaPhone /></Link></li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Trangchu />} ></Route>
        <Route path="admin" element={<Admin />} ></Route>
        <Route path="phongnghi" element={<Phongnghi />} ></Route>
        <Route path="datphong" element={<Phongnghi />} ></Route>
        <Route path="coffee" element={<Dichvucf />} ></Route>
        <Route path="gym" element={<Dichvugym />} ></Route>
        <Route path="hoboi" element={<Dichvuhoboi />} ></Route>

      </Routes>

    </div>

  );
}

export default Header;
