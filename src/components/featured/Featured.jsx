import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featured__img"
        />
        <div className="featured__item-title">
          <h1>Brazil</h1>
          <h2>456 properties</h2>
        </div>
      </div>

      <div className="featured__item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featured__img"
        />
        <div className="featured__item-title">
          <h1>Italy</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featured__item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featured__img"
        />
        <div className="featured__item-title">
          <h1>Japan</h1>
          <h2>789 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
