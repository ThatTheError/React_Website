import React from "react";
import { Link } from "react-router-dom";
import Sliders from "../inc/Sliders";
import Vmc from "./Vmc";
import './Home.css'
import product1 from '../images/gs1.png';
import product2 from '../images/gs2.png';
import product3 from '../images/gs3.png';
import product4 from '../images/gs4.png';
import product5 from '../images/gs5.png';
import product6 from '../images/gs6.png';

function Home() {
  return (
    <div>
    <Sliders/>
    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 text-centre">
                    <h3 className="main-heading mx-auto">Our Company</h3>
                    <div className="underline mx-auto"></div>
                    <p>
                    Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include a search engine, online advertising technologies, cloud computing, software, and hardware. It is considered one of the Big Five American information technology companies, alongside Amazon, Apple, Meta and Microsoft.Google was founded on September 4, 1998, by Larry Page and Sergey Brin while they were PhD students at Stanford University in California. Together they own about 14% of its publicly listed shares and control 56% of the stockholder voting power through super-voting stock. The company went public via an initial public offering (IPO) in 2004. In 2015, Google was reorganized as a wholly-owned subsidiary of Alphabet Inc.. Google is Alphabet's largest subsidiary and is a holding company for Alphabet's Internet properties and interests. Sundar Pichai was appointed CEO of Google on October 24, 2015, replacing Larry Page, who became the CEO of Alphabet. On December 3, 2019, Pichai also became the CEO of Alphabet.
                    </p>
                    <Link to="/About" className="btn btn-link">Read More</Link>
                </div>
            </div>
        </div>
    </section>
    <Vmc />

    {/* Our Products */}
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
                        Google Duo is a video chat mobile app developed by Google, available on the Android and iOS os. It was announced at Google's developer conference on May 18, and began its worldwide release on August 16.It is also available to use via web browser on desktop and laptop computers.
                        </p>
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
                        YouTube is an American online video sharing and social media platform owned by Google. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is the second most visited website, right after Google itself. YouTube has more than one billion monthly users who collectively watch.
                        </p>
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
                        Google Lens is a set of vision-based computing capabilities that can understand what you're looking at and use that information to copy or translate text, identify plants and animals, explore locales or menus, discover products, find visually similar images, and take other useful actions.
                        </p>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>
    </section>
    </div>
  );
}

export default Home;
