import React from "react";
import { Link } from "react-router-dom";
import Sliders from "../inc/Sliders";
import Vmc from "./Vmc";
import './Home.css'
import Products from "./Products";
import Footer from "../inc/Footer";

function Home() {
  return (
    <div>
    {/* Slider part (i.e Carousel) */}
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
    {/* Our Vision Mission and Culture */}
    <Vmc />
    {/* Our Products */}
    <Products />
    </div>
  );
}

export default Home;
