import React from "react";

function Contact() {
  return (
    <div>
        <section className="py-4 bg-info">
          <div className="container">
            <div className="row">
              <div className="col-md-4 my-auto">
                <h4> Contact Us</h4>
              </div>
              <div className="col-md-8 my-auto">
                <h6 className="float-end">
                  Home / Contact Us
                </h6>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15059.562146808092!2d84.7929990637535!3d19.330555691075737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d50681c41f4b9%3A0xffb9418caadf4670!2sLochapada%2C%20Brahmapur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1649078402786!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body py-4">
                    <h3>Contact</h3>
                    <div className="underline mb-3"></div>
                      <form>
                        <label for="">Name</label>
                        <input type="text" placeholder="Enter Your Name" class="form-control mb-3" /> 
                        <label for="">Email</label>
                        <input type="text" placeholder="Enter Your Email" class="form-control mb-3" />
                        <label for="">Message</label>
                        <textarea rows="3" className="form-control"></textarea>
                        <br/>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </div>
    );
}

export default Contact;
