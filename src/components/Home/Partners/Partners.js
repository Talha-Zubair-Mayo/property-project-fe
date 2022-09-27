import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Partners() {
  const options = {
    loop: true,
    margin: 0,
    dots: false,
    autoWidth: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 2,
        margin: 20
      },
      400: {
        items: 2,
        margin: 20
      },
      500: {
        items: 3,
        margin: 20
      },
      768: {
        items: 4,
        margin: 20
      },
      992: {
        items: 5,
        margin: 20
      },
      1000: {
        items: 7,
        margin: 20
      }
    }
  }



  return (
    <>
      <div className="partners bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>Our </span>Partners
            </h2>
            <p>The Companies That Represent Us.</p>
          </div>

          <OwlCarousel className="owl-theme style-2" {...options} loop margin={10} >
            <div className="owl-item" >
              <img src="../../../assets/images/partners/11.jpg"} alt="" />
            </div>  <div className="owl-item" >
              <img src="../../../assets/images/partners/11.jpg"} alt="" />
            </div>  <div className="owl-item" >
              <img src="../../../assets/images/partners/11.jpg"} alt="" />
            </div>  <div className="owl-item" >
              <img src="../../../assets/images/partners/11.jpg"} alt="" />
            </div>  <div className="owl-item" >
              <img src="../../../assets/images/partners/11.jpg"} alt="" />
            </div>  <div className="owl-item" >
              <img src="../../../assets/images/partners/11.jpg"} alt="" />
            </div>  <div className="owl-item" >
              <img src="../../../assets/images/partners/11.jpg"} alt="" />
            </div>  <div className="owl-item" >
              <img src="../../../assets/images/partners/11.jpg"} alt="" />
            </div>  <div className="owl-item" >
              <img src="../../../assets/images/partners/11.jpg"} alt="" />
            </div>  <div className="owl-item" >
              <img src="../../../assets/images/partners/11.jpg"} alt="" />
            </div>
          </OwlCarousel>

        </div>
      </div>
    </>
  );
}
