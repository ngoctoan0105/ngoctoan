import imgContent1 from "../img/content1.jpg";
import {FaStar} from 'react-icons/fa'
import './style.css'
import { useState } from "react";
function Content1() {
    
    const [scrollct1,setScrollct1] = useState(false)
    const Scrollmouse1 =()=> {
        if(window.scrollY >= 320)
         {
            setScrollct1(true)
            
         }
         
       }
     
       window.addEventListener('scroll',Scrollmouse1)
   
    return (
        <div className={scrollct1 ? 'content1 show_content1' : 'content1'}>
            <div className="child_content1">
                <div className={scrollct1 ? 'text_content1 left_to_content1' : 'text_content1'}>
                    <span style={{color:"#ffe66d"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                    <div className="title1_content1">Hotel Booking (BROWN)</div>
                    <h3 className="title2_content1"> Tận hưởng trải nghiệm sang trọng</h3>
                    <p>Gồm 100 phòng ngủ được thiết kế theo phong cách tân cổ điển. 
                        Sang trọng với trang bị hiện đại theo tiêu chuẩn 5 sao quốc tế, 
                        cung cấp đầy đủ tiện nghi với giải pháp truyền hình thân thiện.</p>
                    <p>Hệ thống nước nóng trung tâm, điều hòa 2 chiều, đường truyền internet wifi ổn định.
                         Hệ thống báo cháy tự động chắc chắn sẽ mang đến cho Quý khách cảm giác thoải mái, 
                         thân thiện và an toàn.  Seasona tự hào mang đến cho bạn những trải nghiệm tuyệt vời và khó quên.</p>
                </div>
                <div className={scrollct1 ? 'img_content1 right_to_content1' : 'img_content1'}><img src={imgContent1}></img></div>
            </div>
        </div>
    )
}

export default Content1;