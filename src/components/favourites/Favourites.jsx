import "./favourites.css";
function Favourites({ promos }) {
  return (
    <>
      <p className="title-favourite-block">
        Young’s <span className="mark-title">Favourite</span>
      </p>
      <div className="favourites-promo">
        {promos.map((promo) => (
          <div key={promo.id}>
            <img src={promo.img} alt={promo.title} className="promo-image" />
            <div className="promos-title">
              <div className="promos-text">
                <p className="promos-heading">{promo.title}</p>
                <p className="promos-subheading">Explore Now!</p>
              </div>
              <button className="btn-arrow"></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Favourites;
