import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { getAllAgentsApi } from '../../../store/api';

export default function MeetOurAgents() {
  const [agentList, setAgentList] = useState([]);
  useEffect(() => {
    getAllAgentsApi()
      .then((res) => {
        setAgentList(res?.data?.result);
      })
      .catch(() => { });
  }, []);
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    adaptiveHeight: true,

    responsive: [{
      breakpoint: 1292,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }]
  }
  return (
    <>
      <section className="team bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>Meet Our </span>Agents
            </h2>
            <p>Our Agents are here to help you</p>
          </div>
          <div className="row team-all">

          </div>
          <Slider {...settings}>
            {agentList?.map((agent) => {
              return <div
                className="team-block "
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="inner-box team-details">
                  <div className="image team-head">
                    <a href="agents-listing-grid.html">
                      <img src={process.env.REACT_APP_IMAGE_URL + agent?.photo} alt="" />
                    </a>
                    {/* <div className="team-hover">
                      <ul className="team-social">
                        <li>
                          <a href="#" className="facebook">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="twitter">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="instagram">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="linkedin">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="agents-listing-grid.html"> {`${agent?.firstName}  ${agent?.lastName}`}</a>
                    </h3>

                  </div>
                </div>
              </div>
            })}


          </Slider>

        </div>
      </section>
    </>
  );
}
