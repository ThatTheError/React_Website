import React from "react";
import { Link } from "react-router-dom";
import product1 from '../images/gs1.png';
import product2 from '../images/gs2.png';
import product3 from '../images/gs3.png';
import product4 from '../images/gs4.png';
import product5 from '../images/gs5.png';
import product6 from '../images/gs6.png';

function Products() {
    return(
    <section className="section bg-c-light border-top">
    <div className="container">
        <div className="row">
            <div className="col-md-12 mb-4 text-centre">
                <h3 className="main-heading mx-auto">Our Product's</h3>
                <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
              <img src={product1} className="w-100 border-bottom" alt="Products" />
                <div className="card-body">
                    <h6>Product-1</h6>
                    <div className="underline"></div>
                    <p>
                    Google Meet is a video-communication service developed by Google. It is one of two apps that constitute the replacement for Google Hangouts, the other being Google.
                    </p>
                    <Link to="/services" className="btn btn-link">Read more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
              <img src={product2} className="w-100 border-bottom" alt="Products" />
                <div className="card-body">
                    <h6>Product-2</h6>
                    <div className="underline"></div>
                    <p>
                    Gmail is a free email service provided by Google. It had 1.5 billion active users worldwide. A user typically accesses Gmail in a web browser or the official mobile app.
                    </p>
                    <Link to="/services" className="btn btn-link">Read more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
              <img src={product3} className="w-100 border-bottom" alt="Products" />
                <div className="card-body">
                    <h6>Product-3</h6>
                    <div className="underline"></div>
                    <p>
                    Google Maps is a web mapping platform and application offered by Google. It offers satellite imagery, aerial photography, street maps, 360° interactive panoramic views.
                    </p>
                    <Link to="/services" className="btn btn-link">Read more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-4 text-centre">
            </div>
            <div className="col-md-4">
              <div className="card shadow">
              <img src={product4} className="w-100 border-bottom" alt="Products" />
                <div className="card-body">
                    <h6>Product-4</h6>
                    <div className="underline"></div>
                    <p>
                    Google Duo is a video chat mobile app developed by Google, available on the Android and iOS os. It was announced at Google's developer conference on May 18.
                    </p>
                    <Link to="/services" className="btn btn-link">Read more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
              <img src={product5} className="w-100 border-bottom" alt="Products" />
                <div className="card-body">
                    <h6>Product-5</h6>
                    <div className="underline"></div>
                    <p>
                    YouTube is an American online video sharing and social media platform owned by Google. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim.
                    </p>
                    <Link to="/services" className="btn btn-link">Read more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
              <img src={product6} className="w-100 border-bottom" alt="Products" />
                <div className="card-body">
                    <h6>Product-6</h6>
                    <div className="underline"></div>
                    <p>
                    Google Lens is a set of vision-based computing capabilities that can understand what you're looking at and use that information to copy or translate text.
                    </p>
                    <Link to="/services" className="btn btn-link">Read more</Link>
                </div>
              </div>
            </div>
        </div>
    </div>
    </section>
    );
}

export default Products;