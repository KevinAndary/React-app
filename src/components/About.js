import React from 'react'
//import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Apple Inc. is an American multinational technology company headquartered in Cupertino, California. 
        Apple is the world's largest technology company by revenue, with US$394.3 billion in 2022 revenue.[6] 
        As of March 2023, Apple is the world's biggest company by market capitalization.[7] As of June 2022, 
        Apple is the fourth-largest personal computer vendor by unit sales and second-largest mobile phone 
        manufacturer. It is one of the Big Five American information technology companies, alongside Alphabet 
        Inc. (parent company of Google), Amazon, Meta Platforms (formerly Facebook, Inc.), and Microsoft.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="..\img\product-1.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Iphone</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="..\img\product-4.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">MacBook</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="..\img\product-7.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Apple Watch</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="..\img\product-6.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Apple TV</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage