

import "./contact.css"

const Contact=()=>{
    return(
        <section className="contact" id="contact">
            <h2 className="sec-title">Contact</h2>

            <div className="container">
                <div className="info">
                    <div>
                        <img alt="" src="../../../images/Envelope_perspective_matte.png" />
                        <div>Mustafaebid234@gmail.com</div>
                    </div>
                    <div>
                        <img alt="" src="../../../images/Contact_perspective_matte.png" />
                        <div>01098781292</div>
                    </div>
                </div>

                <div className="form">
                    <form>
                        <div className="">
                            <input type="text" placeholder="Your Name" id="fname" name="fname" />
                        </div>
                        <div>
                            <input type="text" placeholder="Your Email" id="fname" name="fname" />
                        </div>
                        <div>
                            <textarea  placeholder="Your Message" name="message" ></textarea>
                        </div>

                        <div>
                            <button>Send Massage</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact