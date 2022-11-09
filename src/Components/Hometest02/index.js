import imgBanner from '../img/banner1.jpg'
import imgBanner1 from '../img/banner1.jpg'

import  "./style.css";
import {FaStar} from 'react-icons/fa'
import { useEffect, useState } from 'react';

function BannerIMG() {
    const [changehd,setChangehd] = useState(false);
   
    const click1=() => {
       setChangehd(!changehd)
    }
   
    return (
        <div className="banner">
            <div className='parents_img_banner'><img className='img_banner' src={changehd ? imgBanner : imgBanner1}></img><div className='opa_panner'></div></div>
            <div className="banner_chil">
                <div className='text_banner'>
                    <div style={{color:"#ffe66d"}}><FaStar/><FaStar/><FaStar/><FaStar/></div>
                    <p>Nơi độc đáo để thư giãn và tận hưởng</p>
                    <h1>Không gian hoàn hảo cho bạn</h1>
                    <div className='button_banner'>
                        <div className='ani_button_header'></div>
                        <a href='#'>ROOM & SUITES</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BannerIMG;