import './style.css'
import cfct1 from '../img/coffeW3.jpg'
import cfct2 from '../img/cf5.jpg'
import cfct3 from '../img/cf7.jpg'
import cfct4 from '../img/cf6.jpg'

function Coffee() {
    return (

        <div className="content_cf">
            <div className="content_left_cf">
                <img src={cfct1} />
                <div className='title_coffee1'>
                    <div className='coffe_gachchan'></div>
                    <h4>Cà phê Syphon - Thưởng thức cà phê bằng mọi giác quan</h4>
                    <p>Syphon là “biểu tượng cho phương pháp pha chế cà phê mang đậm tính nghệ thuật”,
                        đó là cách nhiều người dùng để miêu tả về phương pháp pha cà phê Syphon</p>
                    <p>Khi pha chế bằng phương pháp Syphon bạn sẽ được trải nghiệm quá trình chiết xuất bằng tất cả 5 giác quan
                        từ thị giác (visual experience) tới thính giác (tiếng sục của hơi nước),
                        cảm giác nóng hổi, rồi sau cùng là khứu giác (mùi hương của cà phê) và vị giác. </p>
                </div>
            </div>

            <div className="content_mid_cf">
                <img src={cfct2} />
            </div>

            <div className="content_right_cf">
                <img className="contentcf_right_1" src={cfct4} />
                <div className='title_coffee2'>

                    <h4>Cà phê càng đắng thì hàm lượng caffeine càng nhiều
                       </h4>
                    <p>Hàm lượng caffeine là một trong những yếu tố được quan tâm hàng đầu khi nhắc đến cà phê.
                        Một số người cho rằng cà phê càng đậm vị, càng đắng thì càng có nhiều caffeine và phương pháp
                        pha chế khác nhau thì sẽ chiết xuất được lượng caffeine khác nhau.
                        Vậy cà phê càng đắng thì hàm lượng caffein càng nhiều</p>
                    <div className='coffe_gachchan'></div>
                </div>
                <img className="contentcf_right_2" src={cfct3} />
            </div>
        </div>

    )
}
export default Coffee;