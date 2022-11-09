import './style.css'
import {FaGlobeAmericas} from 'react-icons/fa'
import {FaCar} from 'react-icons/fa'
import {FaCouch} from 'react-icons/fa'
import {FaWater} from 'react-icons/fa'
import {FaWifi} from 'react-icons/fa'
import {FaMugHot} from 'react-icons/fa'
import { useState } from 'react'



function Content5() {
    const [scrollct5,setScrollct5] = useState(false)
    const scrollmouse5 =()=> {
        if(window.scrollY >= 2300)
         {
            setScrollct5(true)
            
         }
         
       }
     
       window.addEventListener('scroll',scrollmouse5)
return(
    <div className={scrollct5? "content5 show_content5" :"content5"}>
        
        <div className="content5_80">

            <div className="text_content5">
                  <h3>CÁC TIỆN ÍCH CỦA KHÁCH SẠN</h3>
                  <div className='gachchanct5'></div>
            </div>
            <div className="list_content5">
                <div className={scrollct5 ? "item_content5 bottom_to_content5" : "item_content5"}>
                    <span><FaGlobeAmericas/></span>
                    <h5>Di chuyển</h5>
                    <p>Chúng tôi sẽ đón từ sân bay cho bạn thoải mái trên chuyến đi của mình, 
                        một người yêu thích sự nhẹ nhàng.</p>
                </div>
                <div className={scrollct5 ? "item_content5 bottom_to_content5" : "item_content5"}>
                    <span><FaCar/></span>
                    <h5>Chỗ đậu xe</h5>
                    <p>Khuôn viên rộng rãi với khu vực dành riêng cho ô tô 
                        và xe máy thoải mái cho việc đậu xe của bạn.</p>
                </div>
                <div className={scrollct5 ? "item_content5 bottom_to_content5" : "item_content5"}>
                    <span><FaCouch/></span>
                    <h5>Dịch vụ phòng</h5>
                    <p>Không gian thoáng mái sạch sẽ, mỗi ngày nhân viên sẽ 
                        thay đổi tất cả mọi thứ trong phòng của bạn.</p>
                </div>
                <div className={scrollct5 ? "item_content5 bottom_to_content5" : "item_content5"}>
                    <span><FaWater/></span>
                    <h5>Hồ bơi</h5>
                    <p>Ngoài chiếc hồ lớn, tại đây còn có hồ bán nguyệt dành cho trẻ em,
                         được huấn luyện viên chuyên nghiệp hướng dẫn bạn bơi miễn phí.</p>
                </div>
                <div className={scrollct5 ? "item_content5 bottom_to_content5" : "item_content5"}>
                    <span><FaWifi/></span>
                    <h5>Internet cáp quang</h5>
                    <p>Wifi free 24/24 rất thích hợp cho việc up những hình ảnh đẹp 
                        lên mạng xã hội và khoe khoan với cả thế giới</p>
                </div>
                <div className={scrollct5 ? "item_content5 bottom_to_content5" : "item_content5"}>
                    <span><FaMugHot/></span>
                    <h5>Bữa ăn sáng</h5>
                    <p>Bữa sáng phụ vụ từ 6h - 10h sáng hàng ngày bằng tiệc buffer
                         với nhiều món ngon phục vụ bởi đầu bếp hàng đầu.</p>
                </div>
            </div>
        </div>
    
    </div>
)
}
export default Content5;