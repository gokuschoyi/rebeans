import React from 'react'

const NewsLetter = () => {
    return (
        <section className='newsletter-section' id='newsLetterSection'>
            <div className='container mt-5 mb-5'>
                <div className='row justify-content-center'>
                    <div className='col-12 text-center'>
                        <h5 className='newsLetterHeading'>SIGN UP AND GET FREE COFFEE</h5>
                        <p>We don't send spam so don't worry.</p>
                        <h2>COFFEE UPDATES</h2>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-8 col-sm-12 col-lg-8'>
                        <div className='container d-flex justify-content-center mt-4 mb-5'>
                            <input type="text" style={{  marginRight: '20px' }} className="form-control" placeholder="Email" />
                            <button className="btn newsletterButton">SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter