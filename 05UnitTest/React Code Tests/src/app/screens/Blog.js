import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";

export default class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider name="Blog" title="Lee nuestro Blog" />
        <section className="ftco-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12 ftco-animate">
                    <div className="blog-entry">
                      <div
                        className="block-20"
                        style={{
                          backgroundImage:
                            "url(" +
                            "https://cdn.glitch.global/39d222eb-3256-42cb-bd19-fb6a1269a765/image_1.jpg?v=1657524238297" +
                            ")",
                        }}
                      ></div>
                      <div className="text d-flex py-4">
                        <div className="meta mb-3">
                          <div>
                            <Link to="#">Sep. 20, 2018</Link>
                          </div>
                          <div>
                            <Link to="#">Admin</Link>
                          </div>
                          <div>
                            <Link to="#" className="meta-chat">
                              <span className="icon-chat"></span> 3
                            </Link>
                          </div>
                        </div>
                        <div className="desc pl-sm-3 pl-md-5">
                          <h3 className="heading">
                            <Link to="#">
                              Even the all-powerful Pointing has no control
                              about the blind texts
                            </Link>
                          </h3>
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            Link large language ocean.
                          </p>
                          <p>
                            <Link
                              to="blog-single.html"
                              className="btn btn-primary btn-outline-primary"
                            >
                              Read more
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                <div className="col-md-4 sidebar ftco-animate">
                  {/* 
                  <div className="sidebar-box">
                    <form action="#" className="search-form">
                      <div className="form-group">
                        <span className="icon fa fa-search"></span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type Link keyword and hit enter"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="sidebar-box ftco-animate">
                    <div className="categories">
                      <h3>Categories</h3>
                      <li>
                        <Link to="#">Food <span>(12)</span></Link>
                      </li>
                      <li>
                        <Link to="#">Dish <span>(22)</span></Link>
                      </li>
                      <li>
                        <Link to="#">Desserts <span>(37)</span></Link>
                      </li>
                      <li>
                        <Link to="#">Drinks <span>(42)</span></Link>
                      </li>
                      <li>
                        <Link to="#">Ocassion <span>(14)</span></Link>
                      </li>
                    </div>
                  </div>
                  <div className="sidebar-box ftco-animate">
                    <h3>Recent Blog</h3>
                    <div className="block-21 mb-4 d-flex">
                      <Link
                        className="blog-img mr-4"
                        style="background-image: url(images/image_1.jpg);"
                      ></Link>
                      <div className="text">
                        <h3 className="heading">
                          <Link to="#">
                            Even the all-powerful Pointing has no control about
                            the blind texts
                          </Link>
                        </h3>
                        <div className="meta">
                          <div>
                            <Link to="#">
                              <span className="icon-calendar"></span> July 12, 2018
                            </Link>
                          </div>
                          <div>
                            <Link to="#">
                              <span className="icon-person"></span> Admin
                            </Link>
                          </div>
                          <div>
                            <Link to="#">
                              <span className="icon-chat"></span> 19
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="sidebar-box ftco-animate">
                    <h3>Tag Cloud</h3>
                    <div className="tagcloud">
                      <Link to="#" className="tag-cloud-link">
                        dish
                      </Link>
                      <Link to="#" className="tag-cloud-link">
                        menu
                      </Link>
                      <Link to="#" className="tag-cloud-link">
                        food
                      </Link>
                      <Link to="#" className="tag-cloud-link">
                        sweet
                      </Link>
                      <Link to="#" className="tag-cloud-link">
                        tasty
                      </Link>
                      <Link to="#" className="tag-cloud-link">
                        delicious
                      </Link>
                      <Link to="#" className="tag-cloud-link">
                        desserts
                      </Link>
                      <Link to="#" className="tag-cloud-link">
                        drinks
                      </Link>
                    </div>
                  </div> */}

                  <div className="sidebar-box ftco-animate">
                    <h3>Paragraph</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ducimus itaque, autem necessitatibus voluptate quod
                      mollitia delectus aut, sunt placeat nam vero culpa
                      sapiente consectetur similique, inventore eos fugit
                      cupiditate numquam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
