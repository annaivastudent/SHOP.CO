import "./navigation.css";
import logo from "../../img/navigation/logo.png";
function Navigation({ productСount }) {
  return (
    <div className="nav-bar">
      <img src={logo} className="logo" alt="Logo" />
      <div className="nav-bar-list">
        <ul className="nav-list">
          <li>CATALOGUE</li>
          <li>FASHION</li>
          <li>FAVOURITE</li>
          <li>LIFESTYLE</li>
        </ul>
        <button className="basket">
          {productСount > 0 ? <p className="count">{productСount}</p> : ""}
        </button>
      </div>
    </div>
  );
}
export default Navigation;
