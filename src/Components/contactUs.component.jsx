import React from 'react'

const ContactUs = () => {
    return (
        <section className='contactUs-section' id='contactUsSection'>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-8 col-sm-12 col-lg-8 text-center'>
                        <form action="#" className="contact-form">
                            <h5 className="title" style={{fontSize:'30px'}}>Contact us</h5>
                            <p className="description">Feel free to contact us if you need any assistance, any help or another question.
                            </p>
                            <div>
                                <input type="text" className="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required />
                            </div>
                            <div>
                                <input type="email" className="form-control rounded border-white mb-3 form-input" placeholder="Email" required />
                            </div>
                            <div>
                                <textarea id="message" className="form-control rounded border-white mb-3 form-text-area" rows={5} cols={30} placeholder="Message" required defaultValue={""} />
                            </div>
                            <div className="submit-button-wrapper ">
                            <button className="btn newsletterButton">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactUs