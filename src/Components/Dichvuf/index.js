import Header from "../Hometest01";
import Footerw from "../Hometest06"
import imgslickcf1 from '../img/cf1.jpg'
import imgslickcf4 from '../img/slick4.jpg'
import cfW1 from '../img/coffeW1.jpg'
import hatcf from '../img/hatcf.jpg'
import lycf from '../img/lycf.jpg'
import Coffee  from "../Tabcf";
import './style.css'


function Dichvucf() {


    return (
        <div>
            
            <div className="bannercf">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 img_banner_cf" src={imgslickcf1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img_banner_cf" src={cfW1} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img_banner_cf" src={imgslickcf4} alt="Third slide" />
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
            <div className="img_hatcf">
                <img className="hatcf_left" src={hatcf}/>
                <img className="lycf" src={lycf}/>
                <img className="hatcf_right" src={hatcf}/>
            </div>
            </div>
            <Coffee/>
            <Footerw/>
        </div>
    )
}
export default Dichvucf;