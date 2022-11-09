import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import './style.css'

function Footerw(params) {
    return (
        <div>
            <div className="footer">
                <h2>THEO DÕI CHÚNG TÔI</h2>

                <div className="mxh_footer">
                    <a style={{color:"#4267b2"}} href="#"><FaFacebook/></a>
                    <a style={{color:"#BC2A8D"}} href="#"><FaInstagram/></a>
                    <a style={{color:"red"}} href="#"><FaYoutube/></a>
                    <a style={{color:"#1DA1F2"}} href="#"><FaTwitter/></a>
                </div>
                <div className="exp_footer">
                    <div>
                        <p>VỀ CHÚNG TÔI</p>
                        <p>KINH NGHIỆM DU LỊCH</p>
                        <p>LIÊN HỆ</p>
                    </div>
                </div>
                <div className="info_footer">
                    <h2>HOTEL BOOKING (Brown)</h2>
                    <p>Địa chỉ : số 123 , ABC , Q0 , Hồ Chí Mình</p>
                    <p>điện thoại : 123456789</p>
                    <p>Email:abc@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
export default Footerw;