import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr/>
                        <p className="text-white">
                        Google, in full Google LLC formerly Google Inc. (1998–2017), American search engine company, founded in 1998 by Sergey Brin and Larry Page, that is a subsidiary of the holding company Alphabet Inc. Google’s broad product portfolio and size make it one of the top four influential companies in the high-tech marketplace, along with Apple, IBM, and Microsoft. Despite this myriad of products, its original search tool remains the core of its success.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/">About Us</Link></div>
                        <div><Link to="/">Product's</Link></div>
                        <div><Link to="/">Contact Us</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">Address: Sri Kalua Nagar 1st Lane , Lochapada , Berhampur , Odisha , India</p></div>
                        <div><p className="text-white mb-1">Pin: 761001</p></div>
                        <div><p className="text-white mb-1">Phone: 9078280314</p></div>
                        <div><p className="text-white mb-1">WhatsApp: 7064020124</p></div>
                        <div><p className="text-white mb-1">github: github.com/ThatTheError</p></div>
                        <div><p className="text-white mb-1">LinkedIn: https://www.linkedin.com/in/v-gopal-krushna-patro-2906a8165/</p></div>
                        <div><p className="text-white mb-1">email: gkp020@nist.edu</p></div>
                    </div>
                     
                </div>
            </div>

        </section>
    );
}

export default Footer;