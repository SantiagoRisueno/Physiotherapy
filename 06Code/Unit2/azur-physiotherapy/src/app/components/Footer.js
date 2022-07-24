import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaMapPin, FaCalendar, FaMailBulk } from 'react-icons/fa';
import { BsFillPersonFill, BsFillChatLeftFill, BsFillTelephoneFill } from "react-icons/bs";


class Footer extends React.Component {
  render() {
    return (
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">AZUR.</h2>
                <p>
                  La hospitalidad es nuestro valor central, que se expresa y se
                  concreta en los cuatro valores guía que seguimos como
                  institución.
                </p>
              </div>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft ">
                <li className="ftco-animate">
                  <a target="_blank" href="https://www.facebook.com/fysioterapiaencasa">
                  <span><FaFacebookF/></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=593980941279&text=Enlace%3A%0Ahttps%3A%2F%2Ffb.me%2F2tm6zWzCW%0A%0AVi%20esto%20en%20Facebook...&source_url=https%3A%2F%2Ffb.me%2F2tm6zWzCW&icebreaker=Vi%20esto%20en%20Facebook...&app=facebook&entry_point=post_cta&jid=593980941279%40s.whatsapp.net&show_keyboard=1&context=AWCuak8Qzc-nRV-vlBf8P4qlDOkljP6k8AdE_GMwuUaLL3hNADFikEjbh002zgxr_cq4sc03NylciAcKGCRKoxLlK-ZjsOMAF43rZqbdDWSKegQkL8AwSskiKe6cc_1NRD75Wbs5adfoxHW6n1IA9M7z6360VgK1NVV2P8QmH1zE5fbDCZvSDB5SEC9U8q25g0vIpn9_WrhOtJ05PnVY92D54cRBg3ivj4y8jHhyLL1uP2OV2eo-SfGHUOGtPpaLxGMyBcfb4RncDmqddxqCxXwwD0pVDQte-hcenfxS3bfANtsJvtnyfQ9s0BwgUiGwGX1zGa6FrKKAfeWbbuyVoGM7M3Xv1fNhxygTmOiUkA-NmYds-J49ZxO0AhqKewSgCgoiB1f6ASA-wwXzUf49Hm5p_QAi7ZD5W1sWl0Uf4Q0F_sc">
                    <span><FaWhatsapp/></span>
                  </a> 
                </li>
                <li className="ftco-animate">
                  <a target="_blank" href="https://www.google.com/maps/dir/-0.3211368,-78.4410889/-0.25,-78.5833/@-0.2738762,-78.5840155,12z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0">
                    <span><FaMapPin/></span>
                  </a> 
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Enlaces rápidos</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/about" className="py-2 d-block">
                    Acerca de
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="py-2 d-block">
                    Características
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="py-2 d-block">
                    Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="py-2 d-block">
                    Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 pr-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Blog Reciente</h2>
                <div className="block-21 mb-4 d-flex">
                  <div
                    className="blog-img mr-4"
                    style={{
                      backgroundImage:
                        "url(" +
                        "https://cdn.glitch.global/39d222eb-3256-42cb-bd19-fb6a1269a765/image_1.jpg?v=1657524238297" +
                        ")",
                    }}
                  ></div>
                  <div className="text">
                    <p className="heading">
                      <Link to="/blog" />
                      Even the all-powerful Pointing has no control about
                    </p>
                    <div className="meta">
                      <div>
                        <Link to="/blog">
                        <span>
                          <FaCalendar/>
                        </span> Sept 15,
                        2018
                        </Link>
                      </div>
                      <div>
                        <Link to="#">
                        <span>
                          <BsFillPersonFill/>  
                        </span> Admin
                        </Link>
                      </div>
                      <div>
                        <Link to="#">
                        <span>
                          <BsFillChatLeftFill/>  
                        </span> 19
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <div
                    className="blog-img mr-4"
                    style={{
                      backgroundImage:
                        "url(" +
                        "https://cdn.glitch.global/39d222eb-3256-42cb-bd19-fb6a1269a765/image_2.jpg?v=1657524238297" +
                        ")",
                    }}
                  ></div>
                  <div className="text">
                    <p className="heading">
                      <Link to="/blog" />
                      Even the all-powerful Pointing has no control about
                    </p>
                    <div className="meta">
                      <div>
                        <Link to="/blog">
                        <span>
                          <FaCalendar/>
                        </span> Sept 15,
                        2018
                        </Link>
                      </div>
                      <div>
                        <Link to="#">
                        <span>
                          <BsFillPersonFill/>  
                        </span> Admin
                        </Link>
                      </div>
                      <div>
                        <Link to="#">
                        <span>
                          <BsFillChatLeftFill/>  
                        </span> 19
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Ubicación</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                       <FaMapPin/>
                       <span className="icon icon-envelope"></span>
                      <span className="text">
                        Albert Einstein y Cesar Borja Cordero, Quito, Pichincha.
                        Ecuador
                      </span>
                    </li>
                    <li>
                      <Link to="#">
                      <BsFillTelephoneFill/>
                      <span className="icon icon-envelope"></span>
                      <span className="text">+593 995 2211 145</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaMailBulk/>
                      <span className="icon icon-envelope"></span>
                      <span className="text">info@azur.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
