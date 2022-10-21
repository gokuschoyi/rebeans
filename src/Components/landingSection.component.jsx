import React from 'react'

const LandingSection = () => {
    return (
        <section className='sectionLanding' id='landingSection'>
            <div className='container' style={{paddingTop:'80px'}}>
                <div className='row justify-content-center pt-5'>
                    <div className='col-md-6' style={{ marginTop: '146px' }}>
                        <h4 className='pt-3' style={{ color: 'white', fontSize: '14px' }}>COFFEE BY</h4>
                        <h1 className='p-4' style={{ color: 'white', fontWeight: '300', fontSize: '52px' }}>Rebeans</h1>
                        <h5 className='pb-4' style={{ color: 'white', fontWeight: '300', letterSpacing: '5px' }}>For Those Who Love The Best</h5>
                        <div style={{paddingTop:'40px'}}>
                            <a className='btn explore-button' href='#products' style={{ fontWeight: '400', fontSize: '12px', alignItems:'center' }}> EXPLORE OUR PRODUCTS</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingSection