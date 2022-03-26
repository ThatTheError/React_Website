import React from "react";
import { Link } from "react-router-dom";
import Sliders from "../inc/Sliders";
import './Home.css'

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
    <section className="section bg-c-light border-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 text-centre">
                    <h3 className="main-heading mx-auto">Vision Mission and Culture</h3>
                    <div className="underline mx-auto"></div>
                </div>
                <div className="col-md-4 text-centre">
                  <h6>Our Vision</h6>
                  <p>
                  Google's Android phones offers its users free access to Google Maps and provide navigation and communication. Google is also branching into other areas as well, as the famous Google cars that operate on their own. This is part of Google's vision of a future where cars drive themselves and people can participate in more productive activities during their commute. The site Google+ is part of Google's vision for social media, which is integrated in the phones and all other aspects of life.
                  </p>
                </div>
                <div className="col-md-4 text-centre">
                  <h6>Our Mission</h6>
                  <p>
                  Google’s original mission statement was “to organize the world’s information and make it universally accessible and useful.” In 2014, Page suggested the Internet giant was due for a change to mission statement. “I think we do, probably,” Page told The Financial Times. “We’re still trying to work that out.”
                  </p>
                </div>
                <div className="col-md-4 text-centre">
                  <h6>Culture</h6>
                  <p>
                  It's really the people that make Google the kind of company it is. Google hires people who are intelligent and targeted and puts more emphasis on one's abilities than experience. although all the employees in charge have the same common goals and visions for the company, they come from different walks of life and speak many different languages, reflecting their global audience. And when employees do not work, have Googlers interests ranging between everything from cycling to beekeeping and from frisbee to foxtrot.
                  </p>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Home;
