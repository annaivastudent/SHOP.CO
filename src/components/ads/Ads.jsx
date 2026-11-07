import "../ads/ads.css";
import ads from "../../img/ads/ads.png";
function Ads() {
  return (
    <>
      <div className="ads-block">
        <img src={ads} className="ads-pic" alt="Ads" />
        <div className="ads-right-block">
          <p className="ads-heading">
            <span>PAYDAY</span> SALE NOW
          </p>
          <p className="ads-subheading">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <div className="ads-main-text">
            <p id="ads-main-text-1">1 June - 10 June 2021</p>
            <p id="ads-main-text-2">*Terms & Conditions apply</p>
            <button className="btn-ads">
              <p>See more</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ads;
