import React from 'react';

const AboutPage = () => {
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          At PhonePro, we are passionate about all things mobile technology. With a mission to connect people with the latest and greatest in the world of smartphones, our journey began with a simple idea: to provide a one-stop destination for all your mobile needs. As technology enthusiasts ourselves, we understand the importance of staying connected and up-to-date with the latest innovations. Our team is dedicated to curating a diverse selection of top-tier smartphones, accessories, and gadgets, carefully chosen for their quality and value. With a commitment to customer satisfaction, we strive to offer not only the best products but also a seamless shopping experience. Explore our online store and discover a world of possibilities to enhance your mobile lifestyle. Welcome to PhonePro, where technology meets your lifestyle.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          {/* On small screens (col-sm-*), display 2 images in each row */}
          <div className="col-6 col-sm-6 col-md-3 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="../img/product-1.png" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Iphone</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="../img/product-4.png" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">MacBook</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="../img/product-7.png" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Apple Watch</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="../img/product-6.png" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Apple TV</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
