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
  </Layout>
)

export default IndexPage
