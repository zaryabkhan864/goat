import React, { useEffect } from 'react'

import 'aos/dist/aos.css';
import Aos from 'aos';
const Team = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    
    return (
        <>
         
            <div className="container-fluid home-section4 d-flex justify-content-center">
                <div className="row ">
                    <div className="col-lg-12 pt-5 my-5 ">
                        <div className="line">
                            <div className="borderr">
                            </div>
                        </div>
                        <div className="main-title">
                            <span>TEAM</span>
                        </div>
                    </div>
                  
                    <div class="col-lg-4 aos-animate p-5" data-aos="fade-up">
                        <div class="team-card h-100 px-0">
                            <div className="card-header">
                            <img src="assets/images/c1.png" class=" img-fluid" alt="..." />
                            </div>
                        
                            <div class="card-body teamcarddown px-4">
                                <div className=' pb-5 px-2'>
                                <h5 class="card-title title mt-2 ">Blockchain buddha</h5>
                                <p class="para ">An avid reader and learning enthusiast, Blockchain Buddha is experienced in both entrepreneurship and the corporate world. Having built a 7 figure design agency, BlockchainBuddha was fascinated by the cryptoverse and was eager to apply his expertise in team building, organizational workflow, and creative strategy to an NFT project. BlockchainBuddha is one of the hosts for weekly AMAs and also serves as the project’s CEO.</p>
                                </div>
                            
                            </div>
                            
                        </div>
                    </div>

                 
                    <div class="col-lg-4 aos-animate p-5" data-aos="fade-up">
                        <div class="team-card h-100">
                            <div className="card-header">
                            <img src="assets/images/c2.png" class=" img-fluid" alt="..." />
                            </div>
                        
                            <div class="card-body teamcarddown px-4">
                            <div className='pb-5 px-2'>
                                <h5 class="card-title title mt-2">4fun</h5>
                                <p class="para ">With over 10 years of artistry under his belt, 4FUN creates every GOAT from pen and pad before translating them into digital mediums. He draws his creativity from fashion, music, and art. After launching a few 1 of 1 NFTs of his own, he joined The GOAT Society team to bring their vision to life.</p>
                            </div>
                            </div>
                          
                        </div>
                    </div>
                    <div class="col-lg-4 aos-animate p-5" data-aos="fade-up">
                        <div class="team-card h-100">
                            <div className="card-header">
                            <img src="assets/images/c3.png" class=" img-fluid" alt="..." />
                            </div>
                        
                            <div class="card-body teamcarddown px-4">
                            <div className='pb-5 px-2'>
                                <h5 class="card-title title">visual dope</h5>
                                <p class="para ">Visual Dope is an experienced Commercial Banker with a passion for engaging large brands at the c-suite level. He has since rugged his traditional career and background to become a full on degenerate.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                
                    <img className='img-fluid px-0' src="assets/images/121212.png" alt="" />

                </div>
            </div>
        
        </>

    )
}

export default Team