function Banner() {
  return (
    <div className="ratio h-50" style={{ '--bs-aspect-ratio': '50%' }}>
      <img
        className="d-block w-100 h-100 bg-dark cover"
        alt=""
        src="https://semester-2-strapi-api.herokuapp.com/uploads/large_jakob_owens_Jz_J_Syb_P_Fb3s_unsplash_0840f6de0c.jpg"
      />
    </div>
  );
}

export default Banner;
