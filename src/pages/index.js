import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import powerful from "../assets/powerful.png"
import macapp from "../assets/macapp.png"
import symbols from "../assets/symbols.png"
import prototype from "../assets/prototype.png"
import stack from "../assets/stack.png"
import layout from "../assets/layout.png"
import inspector from "../assets/inspector.mp4"
import smartlayout from "../assets/smartlayout.mp4"
import teams from "../assets/teams.mp4"

import felipe from "../assets/felipe.png"
import runner from "../assets/runner.png"
import chart from "../assets/chart.png"
import material from "../assets/material.png"
import anima from "../assets/anima.png"
import react from "../assets/react.png"

import logo from "../assets/logo.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Hileets" />
    <section className="cards d-flex align-items-center">
      <Container className="cards__container">
        <Row className="cards__row">
          <Col className="cards__column" xl={4}>
            <div className="cards__card-wrapper">
              <video className="cards__video" autoplay loop>
                <source src={inspector} type="video/mp4"></source>
              </video>
              <div className="cards__sub-container">
                <div className="cards__badge color">Beta</div>
                <h3>Cloud Inspector</h3>
                <div className="text">
                  Move from design to development in just a few clicks. Inspect
                  elements, copy attributes and measure between layers, right in
                  the browser. Developer Handoff is here — and for developers,
                </div>
                <div className="cards__button">Learn more &gt;</div>
              </div>
            </div>
          </Col>
          <Col className="cards__column" xl={4}>
            <div className="cards__card-wrapper">
              <video className="cards__video" autoplay loop>
                <source src={smartlayout} type="video/mp4"></source>
              </video>
              <div className="cards__sub-container">
                <div className="cards__badge colors">New</div>
                <h3>Smart Layout get smarter</h3>
                <div className="text">
                  Create responsive, reusable components that automatically
                  resize to fit their content. And now — get even more control
                  with the option to set minimum dimensions for Smart Layout
                  Symbols.
                </div>
                <div className="cards__button">Learn more &gt;</div>
              </div>
            </div>
          </Col>
          <Col className="cards__column" xl={4}>
            <div className="cards__card-wrapper">
              <video className="cards__video" playsinline muted loop autoplay>
                <source src={teams} type="video/mp4"></source>
              </video>
              <div className="cards__sub-container">
                <div className="cards__badge colors">Free Trial</div>
                <h3>Try out Sketch for Teams</h3>
                <div className="text">
                  Share prototypes, provide feedback and collaborate in a single
                  shared workspace. Get powerful team management, Mac App access
                  unlimited storage for a single, simple price.
                </div>
                <div className="cards__button">Learn more &gt;</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="design d-flex align-items-center">
      <Container className="design__container">
        <Row className="design__row">
          <Col className="design__column">
            <h1 className="design__heading">
              A native Mac app, built for designers like you
            </h1>
            <p>
              Create your best work with essential tools that speed up your
              workflow and game-changing features that take your designs to the
              next level.
            </p>
            <div className="design__content">
              <div className="design__sub-container">
                <div className="design__image-wrapper">
                  <img src={powerful}></img>
                </div>
                <h3>Powerful vector editing</h3>
                <div className="text">
                  Built on the best of macOS technologies, giving you
                  familiarity, power and performance where you need it most.
                </div>
              </div>
              <div className="design__sub-container">
                <div className="design__image-wrapper">
                  <img src={macapp}></img>
                </div>
                <h3>An intuitive interace</h3>
                <div className="text">
                  Sketch’s interface automatically adapts to show you the tools
                  you need, and gets out of the way when you need to focus.
                </div>
              </div>
              <div className="design__sub-container">
                <div className="design__image-wrapper">
                  <img src={symbols}></img>
                </div>
                <h3>Consistency made easy</h3>
                <div className="text">
                  Create reusable components to keep things consistent and lay
                  the foundations for your product's design system.
                </div>
              </div>
              <div className="design__sub-container">
                <div className="design__image-wrapper">
                  <img src={prototype}></img>
                </div>
                <h3>Lightning fast prototyping</h3>
                <div className="text">
                  Test your assumptions and turn static designs into interactive
                  prototypes, ready to share in minutes.
                </div>
              </div>
              <div className="design__sub-container">
                <div className="design__image-wrapper">
                  <img src={stack}></img>
                </div>
                <h3>Data-driven design</h3>
                <div className="text">
                  Stress-test your designs with real, diverse data sets that add
                  faces, names, places and more in just a few clicks.
                </div>
              </div>
              <div className="design__sub-container">
                <div className="design__image-wrapper">
                  <img src={layout}></img>
                </div>
                <h3>Responsive components</h3>
                <div className="text">
                  From buttons, to menus, to cards and beyond, with Smart Layout
                  your components can resize automatically to fit their content.
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="customize d-flex align-items-center">
      <Container className="customize__container">
        <Row className="customize__row">
          <Col className="customize__column">
            <h1>Customize your workflow</h1>
            <p>
              Whether you want to automatically arrange your Artboards, speed up
              a localization project, or add cat GIFs to your projects, there
              are hundreds of plugins and integrations built for Sketch and
              ready to help you out.
            </p>
            <div className="customize__explore">
              Explore plugins and integrations &rarr;
            </div>
            <div className="customize__content">
              <div className="customize__card">
                <div className="customize__image-wrapper">
                  <img className="customize__image" src={felipe}></img>
                </div>
                <div className="customize__text-wrapper">
                  <h3>Felipe</h3>
                  <div className="text">
                    Magically turn wireframes into UI elements in Sketch.
                  </div>
                  <div className="customize__badge">Plugin</div>
                </div>
              </div>
              <div className="customize__card">
                <div className="customize__image-wrapper">
                  <img className="customize__image" src={runner}></img>
                </div>
                <div className="customize__text-wrapper">
                  <h3>Runner</h3>
                  <div className="text">
                    Speed up your workflow with quicker access to all your tools
                    and actions in Sketch.
                  </div>
                  <div className="customize__badge">Plugin</div>
                </div>
              </div>
              <div className="customize__card">
                <div className="customize__image-wrapper">
                  <img className="customize__image" src={chart}></img>
                </div>
                <div className="customize__text-wrapper">
                  <h3>Chart</h3>
                  <div className="text">
                    Create charts with local or live data from Google Sheets,
                    live APIs, CSV or JSON files.
                  </div>
                  <div className="customize__badge">Plugin</div>
                </div>
              </div>
              <div className="customize__card">
                <div className="customize__image-wrapper">
                  <img className="customize__image" src={material}></img>
                </div>
                <div className="customize__text-wrapper">
                  <h3>Material</h3>
                  <div className="text">
                    Create, customize, and share your own Material theme.
                  </div>
                  <div className="customize__badge">Plugin</div>
                </div>
              </div>
              <div className="customize__card">
                <div className="customize__image-wrapper">
                  <img className="customize__image" src={anima}></img>
                </div>
                <div className="customize__text-wrapper">
                  <h3>Anima Toolkit</h3>
                  <div className="text">
                    Create beautiful timeline animations right inside Sketch.
                  </div>
                  <div className="customize__badge">Plugin</div>
                </div>
              </div>
              <div className="customize__card">
                <div className="customize__image-wrapper">
                  <img className="customize__image" src={react}></img>
                </div>
                <div className="customize__text-wrapper">
                  <h3>React Sketch</h3>
                  <div className="text">
                    Render React components to Sketch and build a design system.
                  </div>
                  <div className="customize__badge">Plugin</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="pricing d-flex align-items-center">
      <Container className="pricing__container">
        <Row className="pricing__row">
          <Col className="pricing__column">
            <div className="pricing__content">
              <Image className="pricing__logo" src={logo} fluid></Image>

              <div className="pricing__text-wrapper">
                <span className="pricing__heading">
                  Get started with Sketch today
                </span>
                <span className="pricing__text">
                  Turn your ideas into incredible products with a 30 day trial.
                </span>
              </div>
              <div className="pricing__buttons-wrapper">
                <div className="btn btn-default try">Try for Free</div>
                <div className="btn btn-default price">See pricing</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="footer">
      <Container className="footer__container">
        <Row className="footer__row">
          <Col className="footer__left" xl={7}>
            <div className="footer__menu">
              <div className="footer__text-wrapper">
                <div className="footer__heading">Sketch</div>
                <div className="footer__text">Home</div>
                <div className="footer__text">Download</div>
                <div className="footer__text">Cloud</div>
                <div className="footer__text">Pricing</div>
                <div className="footer__text">For Teams</div>
                <div className="footer__text">Education</div>
                <div className="footer__text">Developers</div>
                <div className="footer__text">Extensions</div>
                <div className="footer__text">Libraries</div>
                <div className="footer__text">Updates</div>
                <div className="footer__text">Beta</div>
              </div>
              <div className="footer__text-wrapper">
                <div className="footer__heading">Help & Licensing</div>
                <div className="footer__text">Documentation</div>
                <div className="footer__text">Support Home</div>
                <div className="footer__text">Contact Support</div>
                <div className="footer__text">Renew License</div>
                <div className="footer__text">Add Devices</div>
                <div className="footer__text">Manage License</div>
                <div className="space-2"></div>
                <div className="footer__text-wrapper">
                  <div className="footer__heading">Community</div>
                  <div className="footer__text">Meetups</div>
                  <div className="footer__text">Spectrum Community</div>
                  <div className="footer__text">Facebook Group</div>
                  <div className="footer__text">Developer Forum</div>
                </div>
              </div>

              <div className="footer__text-wrapper">
                <div className="footer__heading">Updates</div>
                <div className="footer__text">Blog</div>
                <div className="footer__text">Newsletter</div>
                <div className="footer__text">Twitter</div>
                <div className="footer__text">Facebook</div>
                <div className="footer__text">Dribble</div>
                <div className="space-2"></div>
                <div className="footer__text-wrapper">
                  <div className="footer__heading">Company</div>
                  <div className="footer__text">About US</div>
                  <div className="footer__text">Jobs</div>
                  <div className="footer__text">Press</div>
                  <div className="footer__text">Terms & Policies</div>
                  <div className="footer__text">Email Us</div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="footer__right" xl={4}>
            <div className="footer__content">
              <div className="footer__heading">Subscribe to our newsletter</div>
              <div className="text">
                The latest Sketch news, articles, and resources, sent straight
                to your inbox every month.
              </div>
              <form className="footer__form">
                <input
                  className="footer__input"
                  placeholder="Your email address"
                />
                <div className="btn btn-default">&rarr;</div>
              </form>
              <div className="footer__icons">
                <div className="footer__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    width="18px"
                    height="15px"
                    viewBox="0 0 9 18"
                  >
                    <path d="M5.278 16.667h-3.52V8.332H0V5.461h1.758V3.736C1.758 1.394 2.751 0 5.572 0H7.92v2.873H6.453c-1.099 0-1.171.401-1.171 1.15l-.005 1.438h2.66l-.312 2.871H5.277v8.335z"></path>
                  </svg>
                </div>
                <div className="footer__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    width="18px"
                    height="15px"
                    viewBox="0 0 18 15"
                  >
                    <path d="M15.438 2.371A3.758 3.758 0 0017.016.277a6.963 6.963 0 01-2.28.919A3.495 3.495 0 0012.116 0c-1.983 0-3.59 1.695-3.59 3.786 0 .297.03.586.092.863C5.635 4.49 2.99 2.985 1.218.692a3.937 3.937 0 00-.486 1.905c0 1.313.634 2.472 1.598 3.152a3.462 3.462 0 01-1.627-.473v.046c0 1.836 1.236 3.366 2.88 3.713a3.342 3.342 0 01-.946.133c-.231 0-.457-.022-.675-.067.456 1.504 1.782 2.6 3.354 2.63A6.97 6.97 0 010 13.298 9.79 9.79 0 005.504 15c6.604 0 10.214-5.77 10.214-10.774 0-.165-.002-.328-.01-.49a7.505 7.505 0 001.792-1.96 6.881 6.881 0 01-2.062.595z"></path>
                  </svg>
                </div>
                <div className="footer__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="15px"
                    fill="#000"
                    viewBox="0 0 19 15"
                  >
                    <path d="M2.174 2.939a.699.699 0 00-.231-.593L.23.305V0h5.315l4.109 8.917L13.266 0h5.067v.305L16.87 1.694a.421.421 0 00-.163.406v10.205a.421.421 0 00.163.406L18.3 14.1v.305h-7.19V14.1l1.48-1.423c.146-.144.146-.186.146-.406V4.022L8.619 14.371h-.556L3.27 4.022v6.936a.95.95 0 00.265.796l1.926 2.312v.305H0v-.305l1.926-2.312a.917.917 0 00.248-.796v-8.02z"></path>
                  </svg>
                </div>
                <div className="footer__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    width="18px"
                    height="15px"
                    viewBox="0 0 21 20"
                  >
                    <path d="M18.165 16.78c-.832.872-1.82 1.572-2.995 2.138-1.169.562-2.503.995-4.085 1.069-3.334.155-5.945-1.072-7.681-2.606C1.614 15.8.264 13.684.026 10.63c-.125-1.623.208-3.059.71-4.275.519-1.264 1.135-2.211 1.986-3.1A10.367 10.367 0 017.57.387 11.617 11.617 0 019.832.022c3.41-.21 5.931 1.104 7.705 2.632 1.772 1.522 3.164 3.734 3.352 6.777.2 3.203-1.086 5.64-2.724 7.349zm-7.979-6.384c.403-.163.836-.265 1.253-.443-.194-.348-.378-.747-.547-1.07-.06-.117-.103-.262-.216-.338-2.683.743-5.655 1.208-9.125 1.2-.07 2.68.946 4.549 2.288 5.967 1.549-2.29 3.607-4.215 6.347-5.316zm1.825 1.015c-3.09 1.066-5.516 2.767-7.026 5.344a9.297 9.297 0 004.004 1.694c1.774.299 3.632-.017 4.957-.573a32.322 32.322 0 00-1.77-6.1c-.048-.117-.042-.28-.165-.365zM6.647 2.29C4.163 3.475 2.42 5.372 1.716 8.259c3.088-.035 5.828-.4 8.252-1.07-1.05-1.69-2.103-3.372-3.321-4.9zm7.08 8.705c.689 1.914 1.322 3.879 1.716 6.074.494-.264.931-.63 1.336-1.018 1.233-1.18 2.143-2.71 2.504-4.69-1.534-.429-3.685-.648-5.555-.366zm-1.987-4.3c1.865-.724 3.525-1.647 4.628-3.102-1.465-1.18-3.576-2.245-6.264-2.11-.651.032-1.132.078-1.715.208 1.002 1.408 2.07 2.869 2.942 4.353.127.216.213.47.409.652zm.653 1.303c.21.39.42.827.6 1.225.064.145.09.315.217.418 2.071-.222 4.372-.057 6.182.286-.07-2.34-.882-3.97-2.016-5.29-1.293 1.47-3.009 2.54-4.983 3.361z"></path>
                  </svg>
                </div>
              </div>
              <div className="text">&copy; 2020 Sketch B.V.</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
