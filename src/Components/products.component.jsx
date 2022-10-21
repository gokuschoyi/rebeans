import React from 'react'
import Coffee1 from '../Assets/coffee1.jpg';
import Coffee2 from '../Assets/coffee2.jpg'
import Coffee3 from '../Assets/coffee3.jpg'
const Products = () => {
    return (
        <section className='sectionProduct' id='products'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-10'>
                        <h2 className='ProductsHeading'>Even the all-powerful Pointing has no control about the blind texts.</h2>
                        <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                        <img src={Coffee3} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Special Coffee one</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="!#" className="btn btn-dark">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                        <img src={Coffee2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Special Coffee two</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="!#" className="btn btn-dark">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                        <img src={Coffee3} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Special Coffee two</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="!#" className="btn btn-dark">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Products