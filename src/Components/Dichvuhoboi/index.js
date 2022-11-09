import Banner from '../Hometest06'
import './style.css'
import imgdvSpa from '../img/spa.jpg'
import imgdvGym from '../img/carougym.jpg'
import imgdvHobi from '../img/hoboi.jpg'
import imgGymdv1 from '../img/gym.jpg'
import imgHoboidv from '../img/hoboi1.jpg'



function Dichvuhoboi(){
    return(
        <div className='dichvugym'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 img_banner_cf" src={imgdvHobi} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img_banner_cf" src={imgdvGym} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img_banner_cf" src={imgdvSpa} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
            </div>
            <div className='clippath1'><img className='imgclipgym' src={imgGymdv1}/></div>
            <div className='content1_dvg'>
                <h3>PHÒNG TẬP</h3>
                <div></div>
                <div>Luyện tập cùng HLV cá nhân sẽ giúp bạn định hướng được lộ
                     trình luyện tập phù hợp dựa trên sức nặng cơ thể, không phụ thuộc máy móc – địa điểm – dụng cụ, được tư vấn về chế độ dinh dưỡng, thời gian cần nghỉ 
                    ngơi để đảm bảo thể lực cho cơ thể trong suốt quá trình luyện tập</div>
                <div>
                    Còn cóchương trình luyện tập chuyên sâu giảm mỡ bụng và ổn định
                     cột sống lưng với sự hỗ trợ của đai quấn nóng Tourmaline –
                      dụng cụ được kết hợp từ nam châm vĩnh cửu, đá nóng Tourmaline 3mm 
                      giúp cải thiện hệ thống cơ trung tâm (Core), giảm mỡ bụng nhanh, đặc biệt là mỡ nội tạng.
                </div>
            </div>
            <div className='content2_dvg'>
                <h3>Hồ Bơi</h3>
                <div></div>
                <div>Hồ bơi nổi BROWN tiếng là một trong những điểm đến 
                    “sang chảnh” bậc nhất tại đây. Xung quanh địa điểm bơi 
                    lội có nhiều cây cỏ xanh mát để du khách thỏa thích ngắm nhìn. 
                    Thêm vào đó, hồ bơi BROWN còn nhiều dịch vụ tiện ích hấp dẫn như 
                    ngâm mình massage, xông hơi,…

                </div>
                <div>
                 Được các tín đồ xê dịch khen ngợi là hồ bơi đẹp nhất BROWN,
                 nằm ở trên tầng thượng . Hồ bơi gây ấn tượng với
                  du khách bởi thiết kế mở hòa hợp với thiên nhiên, 
                thoáng gió và mát mẻ.
                </div>
            </div>
            <div className='clippath2'><img className='imgclipgym' src={imgHoboidv}/></div>
            <div className='dvg_content'>


            </div>
            <Banner/>
        </div>
    )
}
export default Dichvuhoboi;