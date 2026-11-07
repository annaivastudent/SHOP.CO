import "./slider.css";
import slider from "../../img/slider/slider.png";
import brand1 from "../../img/brands/brand1.png"
import brand2 from "../../img/brands/brand2.png"
import brand3 from "../../img/brands/brand3.png"
import brand4 from "../../img/brands/brand4.png"
import brand5 from "../../img/brands/brand5.png"
import brand6 from "../../img/brands/brand6.png"
function Slider() {
  return (
    <>
      <div className="slider">
        <div className="left_slider">
          <p className="heading">
            <span className="firts_word">LET’S</span>
            <span>EXPLORE</span>
            <span className="second_word">UNIQUE</span>
            <span>CLOTHES.</span>
          </p>
          <p className="subheading">
            Live for Influential and Innovative fashion!
          </p>
          <button className="btn_buy">
            <p>See more</p>
          </button>
        </div>
        <div className="right_slider">
          <img src={slider} alt="Slider" className="slider_pic" />
        </div>
      </div>
      <div className="brands">
        <img src={brand1} alt="Brand1" />
        <img src={brand2} alt="Brand2" />
        <img src={brand3} alt="Brand3" />
        <img src={brand4} alt="Brand4" />
        <img src={brand5} alt="Brand5" />
        <img src={brand6} alt="Brand6" />
      </div>
    </>
  );
}
export default Slider;
