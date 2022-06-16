import React, { useEffect } from 'react'

import 'aos/dist/aos.css'; 
import Aos from 'aos';
const About = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return (
        <>
            <div className="container-fluid home-section2 ">
                <div className="row home-section2bg ">
         
                    <div className="col-lg-6 " data-aos="fade-right">
                    {/* <img className='img-fluid' src="assets/images/bg_about.png" alt="" /> */}
                    <div className="main-title">ABOUT US</div>
                    <div className="left aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" data-aos-anchor-placement="top-bottom">
                        <img className='img-fluid' src="assets/images/aboutgoat.png" alt="" />
                    </div>
                    </div>
                    <div className="col-lg-6 px-5" data-aos="fade-left">
                    <div className="wrapper">
                    <div className="line">
                        <div className="borderr">
                        </div>
                    </div>
                  
                    <div className="right aos-init" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-anchor-placement="top-bottom">
                        <div className="title">ABOUT US</div>
                        <div className="para">the goat society is a collection of 10,000 unique nfts meant to unite the different communities and fans of the real-life goats-the greatest of all times. the collection includes 9,000 generative goats and 1,000 unique hand-drawn goats, each goat is stored as ERC-721 token on the etherum blockchain.<br /><br />each goat grant a membership to the herd, our exclusive group of investors that hail from a diverse range of communities. herd members will receive benefits like access to major events like sports games, academy awards, music festivals, conferences, and concerts. </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
{/* 
            <div id="about" className="home-section2">
                <div className="wrapper">
                    <div className="line">
                        <div className="borderr">
                        </div>
                    </div>
                    <div className="main-title">ABOUT US</div>
                    <div className="left aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" data-aos-anchor-placement="top-bottom">
                        <img src="assets/images/aboutgoat.png" alt="" />
                    </div>
                    <div className="right aos-init" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-anchor-placement="top-bottom">
                        <div className="title">ABOUT US</div>
                        <div className="para">the goat society is a collection of 10,000 unique nfts meant to unite the different communities and fans of the real-life goats-the greatest of all times. the collection includes 9,000 generative goats and 1,000 unique hand-drawn goats, each goat is stored as ERC-721 token on the etherum blockchain.<br /><br />each goat grant a membership to the herd, our exclusive group of investors that hail from a diverse range of communities. herd members will receive benefits like access to major events like sports games, academy awards, music festivals, conferences, and concerts. </div>
                    </div>
                </div>
                <div className="box-image">
                    <img src="assets/images/bg_about.png" alt="" />
                </div>
            </div> */}
        </>



    )
}

export default About