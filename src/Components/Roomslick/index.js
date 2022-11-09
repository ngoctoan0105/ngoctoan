import { useState } from "react";
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa'
import './style.css'
import imgSick1 from '../img/content2.1.jpg'
import imgSick2 from '../img/content2.2.jpg'
import imgSick3 from '../img/content2.3.jpg'
import { FaCouch } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Room(params) {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="parent_room">

      <div className="room">
        <div style={{ color: "#ffe66d" }}><FaStar /><FaStar /><FaStar /><FaStar /></div>
        <h3>HOTEK BOOKING (BROWN)</h3>
        <h1>SUPPER VIP</h1>

        <Slider {...settings}>
          <div className="children_room">
            <img className='classslick' src={imgSick1}></img>
            <div className="products_item">

              <h6>1,600,000Đ/NIGHT</h6>
              <h5>Phòng supperior</h5>

              <div className="product_awe">
                <div>
                  <ul className="flex-item">
                    <li><FaCouch /></li>
                    <li><FaWifi /></li>
                    <li><FaUser /></li>
                    <li><FaHandshake /></li>
                  </ul>
                </div>
                <div className="xemthem"> <a href="#">Xem Thêm</a><FaArrowCircleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="children_room">
            <img className='classslick' src={imgSick2}></img>
            <div className="products_item">

              <h6>1,800,000Đ/NIGHT</h6>
              <h5>Phòng supperior</h5>

              <div className="product_awe">
                <div>
                  <ul className="flex-item">
                    <li><FaCouch /></li>
                    <li><FaWifi /></li>
                    <li><FaUser /></li>
                    <li><FaHandshake /></li>
                  </ul>
                </div>
                <div className="xemthem"> <a href="#">Xem Thêm</a><FaArrowCircleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="children_room">
           <img className='classslick' src={imgSick3}></img>
            <div className="products_item">

              <h6>1,500,000Đ/NIGHT</h6>
              <h5>Phòng supperior</h5>

              <div className="product_awe">
                <div>
                  <ul className="flex-item">
                    <li><FaCouch /></li>
                    <li><FaWifi /></li>
                    <li><FaUser /></li>
                    <li><FaHandshake /></li>
                  </ul>
                </div>
                <div className="xemthem"> <a href="#">Xem Thêm</a><FaArrowCircleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="children_room">
       <img className='classslick' src={imgSick2}></img>
            <div className="products_item">

              <h6>1,900,000Đ/NIGHT</h6>
              <h5>Phòng supperior</h5>

              <div className="product_awe">
                <div>
                  <ul className="flex-item">
                    <li><FaCouch /></li>
                    <li><FaWifi /></li>
                    <li><FaUser /></li>
                    <li><FaHandshake /></li>
                  </ul>
                </div>
                <div className="xemthem"> <a href="#">Xem Thêm</a><FaArrowCircleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="children_room">
            <img className='classslick' src={imgSick3}></img>
            <div className="products_item">

              <h6>2,000,000Đ/NIGHT</h6>
              <h5>Phòng supperior</h5>

              <div className="product_awe">
                <div>
                  <ul className="flex-item">
                    <li><FaCouch /></li>
                    <li><FaWifi /></li>
                    <li><FaUser /></li>
                    <li><FaHandshake /></li>
                  </ul>
                </div>
                <div className="xemthem"> <a href="#">Xem Thêm</a><FaArrowCircleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="children_room">
            <img className='classslick' src={imgSick1}></img>
            <div className="products_item">

              <h6>1,700,000Đ/NIGHT</h6>
              <h5>Phòng supperior</h5>

              <div className="product_awe">
                <div>
                  <ul className="flex-item">
                    <li><FaCouch /></li>
                    <li><FaWifi /></li>
                    <li><FaUser /></li>
                    <li><FaHandshake /></li>
                  </ul>
                </div>
                <div className="xemthem"> <a href="#">Xem Thêm</a><FaArrowCircleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="children_room">
          <img className='classslick' src={imgSick3}></img>
            <div className="products_item">

              <h6>1,600,000Đ/NIGHT</h6>
              <h5>Phòng supperior</h5>

              <div className="product_awe">
                <div>
                  <ul className="flex-item">
                    <li><FaCouch /></li>
                    <li><FaWifi /></li>
                    <li><FaUser /></li>
                    <li><FaHandshake /></li>
                  </ul>
                </div>
                <div className="xemthem"> <a href="#">Xem Thêm</a><FaArrowCircleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="children_room">
            <img className='classslick' src={imgSick1}></img>
            <div className="products_item">

              <h6>1,800,000Đ/NIGHT</h6>
              <h5>Phòng supperior</h5>

              <div className="product_awe">
                <div>
                  <ul className="flex-item">
                    <li><FaCouch /></li>
                    <li><FaWifi /></li>
                    <li><FaUser /></li>
                    <li><FaHandshake /></li>
                  </ul>
                </div>
                <div className="xemthem"> <a href="#">Xem Thêm</a><FaArrowCircleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="children_room">
           <img className='classslick' src={imgSick2}></img>
            <div className="products_item">

              <h6>1,700,000Đ/NIGHT</h6>
              <h5>Phòng supperior</h5>
           
              <div className="product_awe">
                <div>
                  <ul className="flex-item">
                    <li><FaCouch /></li>
                    <li><FaWifi /></li>
                    <li><FaUser /></li>
                    <li><FaHandshake /></li>
                  </ul>
                </div>
                <div className="xemthem"> <a href="#">Xem Thêm</a><FaArrowCircleRight />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
export default Room;