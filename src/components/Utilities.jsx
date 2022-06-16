import React, { useState } from 'react'
import Slider from "react-slick";


import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Utilities = () => {
    const images = [
       
        { "image": "assets/images/6.4c417b5d66f6a96f5ce2.png"},
        { "image": "assets/images/7.4187fa03d4447232d16c.png"},
        { "image": "assets/images/8.d16f9927555277ed5e22.png"},
        { "image": "assets/images/9.77c50a29dee7814bf3a8.png"},
        { "image": "assets/images/6.4c417b5d66f6a96f5ce2.png"},
        { "image": "assets/images/7.4187fa03d4447232d16c.png"},
        { "image": "assets/images/8.d16f9927555277ed5e22.png"},
        { "image": "assets/images/9.77c50a29dee7814bf3a8.png"},
        { "image": "assets/images/6.4c417b5d66f6a96f5ce2.png"},
        { "image": "assets/images/7.4187fa03d4447232d16c.png"},
        { "image": "assets/images/8.d16f9927555277ed5e22.png"},
        { "image": "assets/images/9.77c50a29dee7814bf3a8.png"},
       


    ]
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next " onClick={onClick}>
          <img src="assets/images/right.png" />
          </div>
        );
      };
      const [imageIndex, setImageIndex] = useState(0);
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
          <img src="assets/images/left.png" />
          </div>
        );
      };
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        className: "center",
        centerPadding: "60px",
   

      };
    return (
        <>
            <div className="container-fluid home-section3 ">
                <div className="row utilities2bg d-flex justify-content-center ">
                    <div className="col-lg-12 ">
                    <div className="line pt-5"><div className="borderr"></div></div>
                    <div className="main-title"><span>UTILITIES</span></div>
                    </div>
                    <div className="col-12 p-5 ">
                        <Slider {...settings}>
                            {images.map((img, idx) => (
                                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                                    <img className='img-fluid' src={img.image} alt={img} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
        // <div id="utilities" className="home-section3">
        //     <div className="ring">
        //         <img src="assets/images/u1.png" alt="" />
        //     </div>
        //     <div className="main-wrapper">
        //         <div className="line">
        //             <div className="borderr">

        //             </div>
        //         </div><div className="main-title"><span>UTILITIES</span>
        //         </div><div className="caoursel">
        //             <div className="slick-slider slick slick-initialized" dir="ltr">
        //                 <div className="left-control">
        //                     <img src="assets/images/u2.png" alt="" />

        //                 </div>
        //                 <div className="slick-list slick-c1">
        //                     <div className="slick-track slick-c2">
        //                         <div data-index="-4" tabIndex="-1" className="slick-slide slick-center slick-cloned slick-c3" aria-hidden="true" >
        //                             <div><div className="image-card-wrap">
        //                                 <img src="assets/images/8.d16f9927555277ed5e22.png" alt="" />
        //                             </div>
        //                             </div>
        //                         </div>
        //                         <div data-index="-3" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true" >
        //                             <div><div className="image-card-wrap">
        //                                 <img src="assets/images/9.77c50a29dee7814bf3a8.png" alt="" />
        //                             </div>
        //                             </div>
        //                         </div>
        //                         <div data-index="-2" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true">
        //                             <div><div className="image-card-wrap">
        //                                 <img src="assets/images/10.82d46b427177a2b34063.png" alt="" />

        //                             </div>
        //                             </div></div>
        //                         <div data-index="-1" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true">
        //                             <div>
        //                                 <div className="image-card-wrap">
        //                                     <img src="assets/images/11.5851239028edbf32aa37.png" alt="" />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div data-index="0" className="slick-slide slick-c3" tabIndex="-1" aria-hidden="true" style={{"outline": "none"}}>
        //                             <div>
        //                                 <div className="image-card-wrap">
        //                                     <img src="assets/images/1.fa2e2d389af0f72be355.png" alt="" />

        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div data-index="1" className="slick-slide slick-c3" tabIndex="-1" aria-hidden="true" style={{"outline": "none"}}>

        //                             <div><div className="image-card-wrap">
        //                                 <img src="assets/images/2.2f841dacc4b24227f97b.png" alt="" /></div></div></div>
        //                         <div data-index="2" className="slick-slide slick-c3" tabIndex="-1" aria-hidden="true" style={{"outline": "none"}}><div>
        //                             <div className="image-card-wrap">
        //                                 <img src="assets/images/3.82f55d1a7d15196b16bb.png" alt="" /></div></div>
        //                         </div><div data-index="3" className="slick-slide slick-c3" tabIndex="-1" aria-hidden="true" style={{"outline": "none"}}><div>
        //                             <div className="image-card-wrap">
        //                                 <img src="assets/images/4.fd11fdea37f860ad164a.png" alt="" /></div>
        //                         </div></div>
        //                         <div data-index="4" className="slick-slide slick-c3" tabIndex="-1" aria-hidden="true" style={{"outline": "none"}}><div><div className="image-card-wrap">
        //                             <img src="assets/images/5.9475b9baae719f12b3fa.png" alt="" /></div></div></div><div data-index="5" className="slick-slide slick-c3" tabIndex="-1" aria-hidden="true" 
        //                             style={{"outline": "none"}}>
        //                             <div><div className="image-card-wrap">
        //                                 <img src="assets/images/6.4c417b5d66f6a96f5ce2.png" alt="" /></div></div></div><div data-index="6" className="slick-slide slick-active slick-c3" tabIndex="-1" aria-hidden="false" style={{"outline": "none"}}>
        //                             <div><div className="image-card-wrap">
        //                                 <img src="assets/images/7.4187fa03d4447232d16c.png" alt="" /></div></div>
        //                         </div><div data-index="7" className="slick-slide slick-active slick-center slick-current slick-c3" tabIndex="-1" aria-hidden="false" 
        //                         style={{"outline": "none"}}><div>
        //                             <div className="image-card-wrap">
        //                                 <img src="assets/images/8.d16f9927555277ed5e22.png" alt="" /></div></div></div>
        //                         <div data-index="8" className="slick-slide slick-active slick-c3" tabIndex="-1" aria-hidden="false"
        //                          style={{"outline": "none"}}>
        //                             <div><div className="image-card-wrap">
        //                                 <img src="assets/images/9.77c50a29dee7814bf3a8.png" alt="" /></div></div>
        //                         </div><div data-index="9" className="slick-slide slick-c3" tabIndex="-1" aria-hidden="true"
        //                         style={{"outline": "none"}}><div>
        //                             <div className="image-card-wrap">
        //                                 <img src="assets/images/10.82d46b427177a2b34063.png" alt="" /></div></div></div><div data-index="10" className="slick-slide slick-c3" tabIndex="-1" aria-hidden="true"
        //                                  style={{"outline": "none"}}>
        //                                      <div><div className="image-card-wrap">
        //                                     <img src="assets/images/11.5851239028edbf32aa37.png" alt="" />
        //                                 </div></div></div><div data-index="11" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true" >
        //                             <div><div className="image-card-wrap"><img src="assets/images/1.fa2e2d389af0f72be355.png" alt="" /></div></div>
        //                         </div><div data-index="12" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true" ><div><div className="image-card-wrap">
        //                             <img src="assets/images/2.2f841dacc4b24227f97b.png" alt="" />
        //                         </div>
        //                         </div>
        //                         </div>
        //                         <div data-index="13" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true">
        //                             <div>
        //                                 <div className="image-card-wrap">
        //                                     <img src="assets/images/3.82f55d1a7d15196b16bb.png" alt="" />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div data-index="14" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true">
        //                             <div>
        //                                 <div className="image-card-wrap">
        //                                     <img src="assets/images/4.fd11fdea37f860ad164a.png" alt="" />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div data-index="15" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true" >
        //                             <div>
        //                                 <div className="image-card-wrap">
        //                                     <img src="assets/images/5.9475b9baae719f12b3fa.png" alt="" /></div>
        //                             </div>
        //                         </div><div data-index="16" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true">
        //                             <div>
        //                                 <div className="image-card-wrap">
        //                                     <img src="assets/images/6.4c417b5d66f6a96f5ce2.png" alt="" />
        //                                 </div></div>
        //                         </div><div data-index="17" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true" >
        //                             <div>
        //                                 <div className="image-card-wrap">
        //                                     <img src="assets/images/7.4187fa03d4447232d16c.png" alt="" />

        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div data-index="18" tabIndex="-1" className="slick-slide slick-center slick-cloned slick-c3" aria-hidden="true">
        //                             <div>
        //                                 <div className="image-card-wrap"><img src="assets/images/8.d16f9927555277ed5e22.png" alt="" /></div>
        //                             </div>
        //                         </div><div data-index="19" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true" ><div>
        //                             <div className="image-card-wrap"><img src="assets/images/9.77c50a29dee7814bf3a8.png" alt="" />

        //                             </div>
        //                         </div>
        //                         </div><div data-index="20" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true" >
        //                             <div>
        //                                 <div className="image-card-wrap"><img src="assets/images/10.82d46b427177a2b34063.png" alt="" />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div data-index="21" tabIndex="-1" className="slick-slide slick-cloned slick-c3" aria-hidden="true" ><div>
        //                             <div className="image-card-wrap"><img src="assets/images/11.5851239028edbf32aa37.png" alt="" />

        //                             </div>
        //                         </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="right-control">
        //                     <img src="data:image/png;base64,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" alt="" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Utilities