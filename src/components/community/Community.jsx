import "./community.css";
function Community() {
  return (
    <div className="community-block">
      <div className="community-block-text">
        <p className="community-heading">
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </p>
        <p className="community-subheading">
          Type your email down below and be young wild generation
        </p>
            <div className="input-btn-send">
            <input
                type="email"
                placeholder="Add your email here"
                name="email"
                required
            />
            <button className="btn-send">
                <p>SEND</p>
            </button>
            </div>
      </div>
    </div>
  );
}
export default Community;
