import "./download.css";
import mobile from "../../img/download/mobile.png";
import appstore from "../../img/download/appstore.png";
import playmarket from "../../img/download/playmarket.png";
function Download() {
  return (
    <div className="download-block">
      <div className="download-left-block">
        <p className="download-title">DOWNLOAD APP & GET THE VOUCHER!</p>
        <p className="download-subtitle">
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </p>
        <div className="aps-btns">
          <button className="appstore-btn">
            <img src={appstore} alt="Sign appstore" />
          </button>
          <button className="playmarket-btn">
            <img src={playmarket} alt="Sign playmarket" />
          </button>
        </div>
      </div>
      <div>
        <img src={mobile} className="mobile-pic" alt="Mobile phone" />
      </div>
    </div>
  );
}
export default Download;
