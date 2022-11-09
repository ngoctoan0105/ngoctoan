import { useState } from 'react'
import imgContent41 from '../img/MASSAr.jpg'
import imgContent42 from '../img/NHAHANG.jpg'
import imgContent43 from '../img/golf.jpg'
import imgContent44 from '../img/bar.jpg'
import './style.css'
function Content4() {
    const [stcontent41,setStcontent41]=  useState(true)
    const [stcontent42,setStcontent42]= useState(false)
    const [stcontent43,setStcontent43]= useState(false)
    const [stcontent44,setStcontent44]= useState(false)
    const [scrollct4,setScrollct4] = useState(false)
    const handleclick41 = () =>{
        setStcontent41(true)
        setStcontent42(false)
        setStcontent43(false)
        setStcontent44(false)

    }
    const handleclick42 = () =>{
        setStcontent42(true)
        setStcontent41(false)
        setStcontent43(false)
        setStcontent44(false)
    }
    const handleclick43 = () =>{
        setStcontent43(true)
        setStcontent41(false)
        setStcontent42(false)
        setStcontent44(false)
    }
    const handleclick44 = () =>{
        setStcontent41(false)
        setStcontent42(false)
        setStcontent43(false)
        setStcontent44(true)
    }
   
    const Scrollmouse4 =()=> {
        if(window.scrollY >= 1500)
         {
            setScrollct4(true)
          
         }
         
       }
     
       window.addEventListener('scroll',Scrollmouse4)

    return (
        <div className="content4" id='content4_id'>
            <div className="content4_collapse">
            <div className={scrollct4 ? 'text_service bottomto_content4' : 'text_service'}>
                <p>RESORT BROWN</p>
                <h1>CÁC DỊCH VỤ</h1>
            </div>
            <div className={scrollct4 ?"content4_list leftto_content4" : "content4_list"}>
                <ul className="content4_ul">
                    <li className="content4_li "><a className={stcontent41 ? "button_a_content4 bg_btn_content4" : "button_a_content4"} onClick={handleclick41}
                            href="#tag_service">MASSAGES</a></li>
                    <li className="content4_li"><a className={stcontent42 ? "button_a_content4 bg_btn_content4" : "button_a_content4"} onClick={handleclick42} href="#tag_service">NHÀ  HÀNG</a></li>
                    <li className="content4_li"><a className={stcontent43 ? "button_a_content4 bg_btn_content4" : "button_a_content4"} onClick={handleclick43} href="#tag_service">GOFL CLUB</a></li>
                    <li className="content4_li"><a className={stcontent44 ? "button_a_content4 bg_btn_content4" : "button_a_content4"} onClick={handleclick44} href="#tag_service">BAR CLUB</a></li>
                </ul>
                <div>
                    <div className={stcontent41 ? "tag_service" : "tag_service hide_content4_img" }   >
                        <div className="tag_service_left ">
                            <img src={imgContent41} alt=""/>
                        </div>
                        <div className="tag_service_right">
                            <h4>KHÁCH SẠN TỐT NHẤT</h4>
                            <p><br/></p>
                            <h1>THƯ GIÃN VỚI</h1>
                            <h1 className="h1_content4">MASSAGE VÀ THƯ GIÃN</h1>
                            <p><br/></p>
                            <p>Monavi Hotel là một trong những trang web làm đẹp uy tín
                                được nhiều khách hàng tin tưởng khi họ muốn chăm sóc cơ thể,
                                tận hưởng sự thư giãn, thoải mái. Với các liệu pháp làm đẹp tiêu chuẩn:
                                massage cơ thể, massage Thái, massage chân, xông hơi …
                                sử dụng các nguyên liệu tự nhiên kết hợp với Đông y,
                                Sahul Massage & Sauna sẽ mang đến cho khách hàng những giây phút thư giãn,
                                giải tỏa căng thẳng.
                            </p>
                            <button>ĐỌC THÊM</button>
                        </div>
                    </div>
                    <div className={stcontent42 ? "tag_service" : "tag_service hide_content4_img" }>
                        <div className="tag_service_left">
                            <img src={imgContent42} alt=""/>
                        </div>
                        <div className="tag_service_right">
                            <h4>KHÁCH SẠN TỐT NHẤT</h4>
                            <p><br/></p>
                            <h1>THƯỞNG THỨC MÓN ĂN</h1>
                            <h1 className="h1_content4">NHÀ HÀNG</h1>
                            <p><br/></p>
                            <p>Đầu bếp Amari tưởng tượng thủ công các món ăn ngon,
                                từ bánh mì kẹp thịt và trò chơi đến ẩm thực cao cấp
                                và đặc sản truyền thống của khu vực.
                                Cô lấy nguồn sản phẩm tươi theo mùa hàng ngày từ các
                                nhà sản xuất địa phương cho Nhà hàng Khách sạn và Quầy rượu vang của chúng tôi.
                                Các loại thảo mộc từ các khu vườn của chúng tôi, trứng miễn phí Spier,
                                hải sản và hữu cơ được liệt kê trong danh sách xanh của SASSI,
                                càng xa càng tốt cho con người.
                            </p>
                            <button>ĐỌC THÊM</button>
                        </div>
                    </div>
                    <div className={stcontent43 ? "tag_service" : "tag_service hide_content4_img" }>
                        <div className="tag_service_left">
                            <img src={imgContent43} alt=""/>
                        </div>
                        <div className="tag_service_right">
                            <h4>KHÁCH SẠN TỐT NHẤT</h4>
                            <p><br/></p>
                            <h1>GIẢI TRÍ VỚI</h1>
                            <h1 className="h1_content4">SÂN GOLF
                            </h1>
                            <p><br/></p>
                            <p>Golf hoặc golf là môn thể thao mà người chơi sử dụng nhiều câu lạc bộ để đánh bóng
                                vào một lỗ nhỏ trên sân golf để số lần đánh càng ngắn càng tốt.
                                Không giống như hầu hết các trò chơi bóng khác, golf không yêu cầu khu vực chơi chuẩn.
                                Bạn đang muốn trở thành một tay golf chuyên nghiệp, hoặc có nhu cầu tìm hiểu về Golf?
                                Vì vậy, những gì bạn làm do dự, đến khách sạn Monavi.
                            </p>
                            <button>ĐỌC THÊM</button>
                        </div>
                    </div>
                    <div className={stcontent44 ? "tag_service" : "tag_service hide_content4_img" }>
                        <div className="tag_service_left">
                            <img src={imgContent44} alt=""/>
                        </div>
                        <div className="tag_service_right">
                            <h4>KHÁCH SẠN TỐT NHẤT</h4>
                            <p><br/></p>
                            <h1>GẶP GỠ BẠN BÈ</h1>
                            <h1 className="h1_content4">BAR MONAVI
                            </h1>
                            <p><br/></p>
                            <p>Nằm ở trung tâm của Quận 1 cao cấp, Monavi Bar Hotel có quầy bar ở sảnh với các loại
                                cocktail tùy chỉnh, trung tâm thể dục và chăm sóc sức khỏe cũng như quầy lễ tân 24 giờ.
                                Nanovi Bar Hotel phục vụ bữa sáng kiểu Paris điển hình hàng ngày. Khách cũng có thể
                                thưởng thức ẩm thực quốc tế tại Nhà hàng VrayMonde, được trang trí theo phong cách châu
                                Á và có tầm nhìn ra vườn.
                            </p>
                            <button>ĐỌC THÊM</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              
           
        </div>
    )
}
export default Content4;