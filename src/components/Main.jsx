import React from 'react'
import Navbar from './Navbar'

const Main = () => {
    return (
        <section>
            <div className="container-fluid home-Section1 ">

                <div className="row ">
                    <div className="col-12">
                        <Navbar />
                    </div>
                   
                    <div class="left ps-5">
                    <img className=' title img-fluid' src='assets/images/main2.png' alt="" />
                    <div className="main ">
                    <div className="para pb-3">The GOAT Society community is unrivaled. Good energy day in and day out, &amp; pushing the needle of the NFT space. We are here to bring massive value to all of our community - Stay GOATED.</div>
                    <div className="point margin py-3">
                                    <img src='assets/images/d1.png' alt="" />
                                    <div className="number ps-4"><div className="title">40K+</div>
                                        <div className="sub">ACTIVE DISCORD USERS</div>
                                    </div>
                                </div>
                                <div className="point margin py-3">
                                    <img src='assets/images/d1.png' alt="" />
                                    <div className="number ps-4"><div className="title">100K</div>
                                        <div className="sub">DOLLARS IN GIVEAWAYS</div>
                                    </div>
                                </div>
                                <div className="point py-3">
                                    <img src='assets/images/d1.png' alt="" />
                                    <div className="number ps-4">
                                        <div className="title">4MIN</div>
                                        <div className="sub">SEASON ONE SELLOUT</div>
                                    </div>
                                </div>
                    </div>
                    </div>
                    <div class="right">
                        <div class="content">
                        <img className='img-fluid' src='assets/images/main1.png' />
                        <img className='img-fluid' src='assets/images/main3.png' />
                        </div>
                    </div>
                    {/* <div className="col-lg-6 p-5 d-flex justify-content-center">
                        <div className="main ">

                            <img className=' title img-fluid' src='assets/images/main2.png' alt="" />


                            <div className="para pb-5">The GOAT Society community is unrivaled. Good energy day in and day out, &amp; pushing the needle of the NFT space. We are here to bring massive value to all of our community - Stay GOATED.</div><div className="milestone">
                            <div className="point">


                            </div>
                                <div className="point margin py-3">
                                    <img src='assets/images/d1.png' alt="" />
                                    <div className="number ps-4"><div className="title">40K+</div>
                                        <div className="sub">ACTIVE DISCORD USERS</div>
                                    </div>
                                </div>
                                <div className="point margin py-3">
                                    <img src='assets/images/d1.png' alt="" />
                                    <div className="number ps-4"><div className="title">100K</div>
                                        <div className="sub">DOLLARS IN GIVEAWAYS</div>
                                    </div>
                                </div>
                                <div className="point py-3">
                                    <img src='assets/images/d1.png' alt="" />
                                    <div className="number ps-4">
                                        <div className="title">4MIN</div>
                                        <div className="sub">SEASON ONE SELLOUT</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <img className='img-fluid' src='assets/images/main1.png' />
                        <img className='img-fluid' src='assets/images/main3.png' />
                    </div> */}
                </div>
            </div>
        </section>

    )
}

export default Main