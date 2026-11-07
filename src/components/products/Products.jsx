import "./products.css";
function Products({ carts, Increase, Dicrease }) {
  return (
    <>
      <div className="cards">
        <p className="title-block">
          NEW <span className="mark">ARRIVALS</span>
        </p>
        <div className="cards-products">
          {carts.map((product) => (
            <div key={product.id}>
              <img
                src={product.img}
                alt={product.title}
                className="product-image"
              />
              <div className="cards-title">
                <div className="cards-text">
                  <p className="cards-heading">{product.title}</p>
                  <p className="cards-subheading">Explore Now!</p>
                  <p className="card-price">${product.price}</p>
                  <div className="btns-cards">
                    <button id="change-btn-1" onClick={() => Increase(product.id)}>+</button>
                    <p>{product.count}</p>
                    <button id="change-btn-2" onClick={() => Dicrease(product.id)}>-</button>
                  </div>
                </div>
                <button className="btn-arrow"></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Products;
