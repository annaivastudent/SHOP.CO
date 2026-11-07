import "./footer.css";
import icon1 from "../../img/media/icon1.png";
import icon2 from "../../img/media/icon2.png";
import icon3 from "../../img/media/icon3.png";
import icon4 from "../../img/media/icon4.png";
function Footer() {
  return (
    <>
      <div className="footer-block">
        <div className="footer-block-text">
          <p className="footer-heading">FASHION</p>
          <p className="footer-subheading">Complete your style with awesome clothes from us.</p>
          <div className="icons">
            <img src={icon1} alt="Icon1" />
            <img src={icon2} alt="Icon2" />
            <img src={icon3} alt="Icon3" />
            <img src={icon4} alt="Icon4" />
          </div>
        </div>
        <div className="footer-block-list">
        <ul className="footer-list">
          Company
          <li>About</li>
          <li>Contact us</li>
          <li>Support</li>
          <li>Careers</li>
        </ul>
        <ul className="footer-list">
          Quick Link
          <li>Share Location</li>
          <li>Orders Tracking</li>
          <li>Size Guide</li>
          <li>FAQs</li>
        </ul>
        <ul className="footer-list">
          Legal
          <li>Terms & conditions</li>
          <li>Privacy Policy</li>
        </ul>
        </div>
      </div>
    </>
  );
}
export default Footer;
