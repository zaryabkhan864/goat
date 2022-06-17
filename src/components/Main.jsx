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
                    <div class="main1">
                        <img src="assets/images/title.9b8e4820ab77d6f00faa.png" alt="" class="title1" />
                        <div class="para">The GOAT Society community is unrivaled. Good energy day in and day out, &amp; pushing the needle of the NFT space. We are here to bring massive value to all of our community - Stay GOATED.</div>
                        <div class="milestone">
                            <div class="point">
                                <img src="data:image/png;base64,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" alt="" />
                                <div class="number"><div class="title">40K+</div><div class="sub">ACTIVE DISCORD USERS</div>
                                </div>
                            </div>
                            <div class="point margin">
                                <img src="data:image/png;base64,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" alt="" />
                                <div class="number">
                                    <div class="title">100K</div>
                                    <div class="sub">DOLLARS IN GIVEAWAYS</div>
                                </div>
                            </div>

                            <div class="point">
                                <img src="data:image/png;base64,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" alt="" />
                                <div class="number">
                                    <div class="title">4MIN</div>
                                    <div class="sub">SEASON ONE SELLOUT</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-circle1"><img src="assets/images/m-circle.516b1346997ff93da065.png" alt="" /></div>
                    <div class="goat-img1">
                        <img src="assets/images/goat.4fb9bcbc9254ccaab259.png" alt="" class="web" />
                        <img src="assets/images/m-goat.87d97ec5881376ee12c8.png" alt="" class="mobile" />
                    </div>
                    <div class="mintNow1">
                        <a href="https://mint.goatsociety.io" target="blank">
                            <img className='img-fluid' src='assets/images/main3.png' />
                        </a></div>
                    {/* <div class="left ps-5">
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
                    </div> */}

                </div>
            </div>
        </section>

    )
}

export default Main