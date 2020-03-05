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
import video from "../assets/video.mp4"

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

    {/* <section className="navigation d-flex align-items-center">
      <Container className="navigation__container" fluid={true}>
        <Row className="navigation__row">
          <Col className="navigation__column">
            <div className="navigation__menu--left">
              <div className="navigation__logo--wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 389 182"
                  className="navigation__logo"
                  role="banner"
                >
                  <title>Sketch Logo and Wordmark</title>
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill="#000"
                      d="M128.188992 103.9117138L128.11634 102.94H120l.044795 1.0929967c.499072 12.1773683 8.708737 20.2430033 23.309119 20.2430033 13.925229 0 23.394-7.2348517 23.394-18.186 0-5.9215478-2.05438-10.112024-5.969081-12.9738378-3.011317-2.2014008-6.61187-3.4422549-12.582423-4.7368179-.398924-.0864967-.814731-.1750321-1.313007-.279883-.295882-.0622618-1.357507-.284493-1.301166-.2726813-10.842929-2.2731672-14.282323-4.2478563-14.282323-10.12878 0-6.0813084 4.973129-9.954 13.314-9.954 8.115024 0 13.243659 4.9562434 13.482492 12.7581278L158.127565 81.52h8.05686l-.02479-1.0742243C165.87899 68.2845154 157.719276 60.1 144.529914 60.1c-12.926708 0-21.462 7.7783391-21.462 17.85 0 5.9048062 2.052204 10.0168746 5.973079 12.7642805 2.986946 2.0929909 6.447158 3.2025603 12.551119 4.4349514.285868.0577169.584126.1172974.939207.1877365.219794.0436015.468031.0926876.933899.1847856 5.775379 1.1426937 8.32366 1.8479845 10.648423 3.1998229 2.885962 1.6781724 4.318273 4.0752886 4.318273 7.7884231 0 6.4468018-5.420404 10.122-14.91 10.122-9.084667 0-14.722512-4.5560439-15.332922-12.7202862zM183.757914 59.05V58h-8.064v65.1h8.064v-12.2829251l8.488419-8.2669815 15.158786 20.1315095.315048.4183971h10.031221l-1.27918-1.6849118-18.512747-24.3846307 17.07315-16.9922339L216.835378 78.244h-10.960571l-.307983.3101754-21.80891 21.9641333V59.05zm75.348 44.394h.986424l.061531-.9845028c.010823-.1731549.026872-.4593763.042911-.8042127.012696-.272962.023167-.5389501.030651-.7904293.008111-.2725209.012483-.5204201.012483-.7388552 0-13.1792967-8.729302-22.89-21.63-22.89-12.87646 0-22.05 10.3367549-22.05 23.394 0 13.4361336 8.75774 23.478 22.134 23.478 10.114182 0 17.927867-6.0011063 20.74312-15.1037568l.420694-1.3602432h-8.381377l-.247986.6988697c-1.767872 4.9821856-6.55424 8.2891303-12.450451 8.2891303-7.708403 0-13.081921-5.2937112-14.049936-13.188h34.377936zm-34.133591-6.972c1.361124-7.0683624 6.559612-11.76 13.637591-11.76 7.295176 0 12.32973 4.537681 13.430952 11.76h-27.068543zm61.727591-11.088h1.05v-7.14h-9.828v-12.18h-8.064v12.18h-8.148v7.14h8.148v25.158c0 8.2529923 4.28062 12.726 12.138 12.726 1.371438 0 2.553699-.0821015 3.546447-.2199831.613427-.0851983 1.037037-.1734503 1.270579-.2383231l.768974-.2136039v-7.4768753l-1.273051.2767502c-.050884.0110617-.153963.032037-.301202.0596444-.249486.0467787-.527381.0937204-.825516.1375637-.7635.1122795-1.520772.1842424-2.217958.1968726-.071714.0012992-.142487.0019545-.212273.0019545-3.442042 0-4.83-1.6167424-4.83-5.67V85.384h8.778zm25.074 38.724c11.16181 0 19.042817-7.0631669 21.022-17.0580396l.248309-1.2539604h-8.133659l-.207409.7802538c-1.695496 6.3782946-6.297447 10.0557462-12.929241 10.0557462-8.276272 0-13.986-6.5286528-13.986-15.918 0-9.4619782 5.699811-16.002 13.986-16.002 6.631794 0 11.233745 3.6774516 12.929241 10.0557462l.207409.7802538h8.133659l-.248309-1.2539604c-1.979183-9.9948727-9.86019-17.0580396-21.022-17.0580396-12.965969 0-22.134 10.4098108-22.134 23.478 0 12.996313 9.180655 23.394 22.134 23.394zm36.12-65.058V58h-8.064v65.1h8.064V96.766c0-7.7035477 4.68896-12.222 11.802-12.222 6.793649 0 10.206 3.9328794 10.206 11.382V123.1h8.064V94.75c0-10.5223584-6.515508-17.514-17.262-17.514-5.528719 0-9.972738 2.0255513-12.81 4.9327318V59.05z"
                    ></path>
                    <path
                      fill="#FDB300"
                      d="M20.9032258 50.8314732l27-2.8314732 27 2.8314732 20.9032258 27.8348214L47.9032258 134 0 78.6662946l20.9032258-27.8348214z"
                    ></path>
                    <path
                      fill="#EA6C00"
                      d="M19.403 78.666295l28.5 55.334L0 78.666295m76.403678 0l-28.5 55.334 47.903-55.334"
                    ></path>
                    <path
                      fill="#FDAD00"
                      d="M19.403 78.666295h57l-28.5 55.334"
                    ></path>
                    <path
                      fill="#FDD231"
                      d="M47.903 48l-27 2.831-1.5 27.835M47.903452 48l27 2.831 1.5 27.835"
                    ></path>
                    <path
                      fill="#FDAD00"
                      d="M95.806678 78.666l-20.903-27.835 1.5 27.835M0 78.666l20.903-27.835-1.5 27.835"
                    ></path>
                    <path fill="#FEEEB7" d="M47.903 48l-28.5 30.666h57"></path>
                  </g>
                </svg>
              </div>
              <div className="navigation__item--left">Extensions</div>
              <div className="navigation__item--left">Learn</div>
              <div className="navigation__item--left">Community</div>
              <div className="navigation__item--left">Support</div>
              <div className="navigation__item--left">Pricing</div>
            </div>
            <div className="navigation__menu--right">
              <div className="navigation__item--right">Try for free &darr;</div>
              <div className="navigation__item--right">Cloud Documents</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section> */}

    <section className="header">
      <Container>
        <Row>
          <Col className="header__column">
            <svg className="header__svg-top">
              <polygon points="0,681 1015,202 432,0"></polygon>
              <polygon
                className="header__svg--stroke-top"
                points="0,681 1015,202 432,0"
              ></polygon>
            </svg>

            <svg className="header__svg-right">
              <polygon points="0,0 323,439 683,117"></polygon>
              <polygon
                className="header__svg--stroke-right"
                points="0,0 323,439 683,117"
              ></polygon>
            </svg>

            <svg className="header__svg-left">
              <polygon points="0,606 1078,291 486,0"></polygon>
              <polygon
                className="header__svg--stroke-left"
                points="0,606 1078,291 486,0"
              ></polygon>
            </svg>
            <div className="header__ribbon">
              New - Cloud Inspector is here &gt;
            </div>
            <div className="header__heading-wrapper">
              <span className="header__heading">The</span>
              <span className="header__heading">best</span>
              <span className="header__heading">products</span>
              <span className="header__heading">start</span>
              <span className="header__heading">with</span>
              <span className="header__heading">Sketch</span>
            </div>
            <p>
              Create, prototype, collaborate and turn your ideas into incredible
              products with the definitive platform for digital design.
            </p>

            <div className="header__buttons">
              <div className="btn btn-default try">Try for Free &darr;</div>
              <div className="btn btn-default price">See Pricing</div>
            </div>
            <div className="space-3"></div>
            <video className="header__header-video">
              <source src={video} type="video/mp4"></source>
            </video>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="cards d-flex align-items-center">
      <Container className="cards__container">
        <Row className="cards__row">
          <Col className="cards__column" xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="cards__card-wrapper">
              <video className="cards__video" autoplay muted loop>
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
          <Col className="cards__column" xs={12} sm={12} md={12} lg={4} xl={4}>
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
          <Col className="cards__column" xs={12} sm={12} md={12} lg={4} xl={4}>
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

    <section className="cloud">
      <Container>
        <Row>
          <Col className="cloud__column">
            <h1 className="cloud__heading">
              A Cloud platform, made for collaboration
            </h1>
            <p>
              Whether you’re a freelancer or fully-fledged team, Cloud makes it
              easy to bring the collaborators you need into the design process.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="cloud__column--left" xl={7}></Col>
          <Col className="cloud__column--right" xl={5}>
            <div className="cloud__subcontainer">
              <div className="cloud__subheading">
                Save, share and organize your designs, in one place
              </div>
              <div className="cloud__text">
                Seamless integration to the Mac app makes saving to Cloud as
                easy as hitting ⌘S. From there, you can organize designs into
                Projects, share them with collaborators (or a whole team) and
                keep track of changes with a full version history.
              </div>
            </div>
            <hr />
            <div className="cloud__subcontainer">
              <div className="cloud__subheading">
                Get feedback and share prototypes
              </div>
            </div>
            <hr />
            <div className="cloud__subcontainer">
              <div className="cloud__subheading">
                Move from design to development in a couple of clicks
              </div>
            </div>
            <hr />
            <div className="cloud__subcontainer">
              <div className="cloud__subheading">
                The Perfect place for teams
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
            {/* <svg className="customize__svg--first--wrapper">
              <g>
                <rect className="customize__svg--first"></rect>
                <rect className="customize__svg--first--stroke"></rect>
              </g>
            </svg>
            <svg className="customize__svg--second--wrapper">
              <g>
                <rect className="customize__svg--second"></rect>
                <rect className="customize__svg--second--stroke"></rect>
              </g>
            </svg>
            <svg className="customize__svg--third--wrapper">
              <g>
                <rect className="customize__svg--third"></rect>
                <rect className="customize__svg--third--stroke"></rect>
              </g>
            </svg>

            <svg className="customize__svg--fourth--wrapper">
              <g>
                <rect className="customize__svg--fourth"></rect>
                <rect className="customize__svg--fourth--stroke"></rect>
              </g>
            </svg> */}

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

    <section className="companies d-flex align-items-center">
      <Container>
        <Row>
          <Col className="companies__column" xl={12}>
            <div className="companies__heading">
              Some of the world's best products start with sketch
            </div>
            <div className="companies__content">
              <div className="companies__logo">
                <svg
                  class="logo logo-facebook"
                  width="28px"
                  height="28px"
                  viewBox="0 0 28 28"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="000"
                    d="M1.5453326,0 C0.69178026,0 0,0.69167535 0,1.5453326 L0,26.4546674 C0,27.3081148 0.69178026,28 1.5453326,28 L14.9556303,28 L14.9556303,17.1569687 L11.306736,17.1569687 L11.306736,12.9311712 L14.9556303,12.9311712 L14.9556303,9.8148029 C14.9556303,6.19822102 17.1645222,4.22894482 20.3907319,4.22894482 C21.9360645,4.22894482 23.2643372,4.34403171 23.6513522,4.39543789 L23.6513522,8.1749459 L21.4138197,8.175995 C19.6591905,8.175995 19.3194901,9.0097192 19.3194901,10.2331862 L19.3194901,12.9311712 L23.5040578,12.9311712 L22.9591523,17.1569687 L19.3194901,17.1569687 L19.3194901,28 L26.4546674,28 C27.3081148,28 28,27.3081148 28,26.4546674 L28,1.5453326 C28,0.69167535 27.3081148,0 26.4546674,0 L1.5453326,0 Z"
                  ></path>
                </svg>
              </div>
              <div className="companies__logo">
                <svg
                  class="logo logo-google"
                  width="77px"
                  height="25px"
                  viewBox="0 0 77 25"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000"
                    fill-rule="nonzero"
                    d="M9.94609319,8.8289035 L9.94609319,11.4690187 L16.31828,11.4690187 C16.0034821,15.1711789 12.8929781,16.7500122 9.95688389,16.7500122 C6.20045926,16.7500122 2.92252861,13.8233013 2.92252861,9.7212046 C2.92252861,5.7251215 6.04723019,2.64759489 9.96513119,2.64759489 C12.9878599,2.64759489 14.7690323,4.5556889 14.7690323,4.5556889 L16.6358372,2.64141266 C16.6358372,2.64141266 14.2397445,0 9.86970989,0 C4.30498168,-7.632e-05 0,4.6506356 0,9.6740365 C0,14.5963847 4.0495485,19.3961569 10.0115315,19.3961569 C15.2551569,19.3961569 19.0935144,15.8391645 19.0935144,10.5792363 C19.0935144,9.4695651 18.9308126,8.8282166 18.9308126,8.8282166 L9.94609319,8.8289035 Z M26.2910418,6.916917 C22.6042947,6.916917 19.9621722,9.771044 19.9621722,13.0997521 C19.9621722,16.477689 22.5249054,19.384861 26.334359,19.384861 C29.7829382,19.384861 32.6081956,16.7748174 32.6081956,13.172336 C32.6081956,9.0433733 29.3217865,6.916917 26.2910418,6.916917 Z M26.3277019,9.3656122 C28.1407071,9.3656122 29.8587534,10.8170611 29.8587534,13.1558501 C29.8587534,15.4450286 28.1480294,16.937845 26.3193776,16.937845 C24.3101343,16.937845 22.7250458,15.3443575 22.7250458,13.137685 C22.7250458,10.9783332 24.2904797,9.3656122 26.3277019,9.3656122 Z M40.0554524,6.916917 C36.3687053,6.916917 33.7265829,9.771044 33.7265829,13.0997521 C33.7265829,16.477689 36.289316,19.384861 40.0987697,19.384861 C43.5473488,19.384861 46.3726062,16.7748174 46.3726062,13.172336 C46.3726062,9.0433733 43.0861971,6.916917 40.0554524,6.916917 Z M40.0921118,9.3656122 C41.905117,9.3656122 43.6231633,10.8170611 43.6231633,13.1558501 C43.6231633,15.4450286 41.9124393,16.937845 40.0837875,16.937845 C38.0745442,16.937845 36.4894557,15.3443575 36.4894557,13.137685 C36.4894557,10.9783332 38.0548896,9.3656122 40.0921118,9.3656122 Z M53.5562597,6.9234809 C50.1722711,6.9234809 47.5123438,9.8583584 47.5123438,13.1524918 C47.5123438,16.9047968 50.5961175,19.393104 53.4979124,19.393104 C55.2921879,19.393104 56.246247,18.6878343 56.9506537,17.8783063 L56.9506537,19.1075768 C56.9506537,21.2583803 55.6318662,22.5463438 53.6412756,22.5463438 C51.7182816,22.5463438 50.75374,21.1304617 50.4185321,20.3270015 L47.999008,21.3285982 C48.8573375,23.1257938 50.5852497,25 53.6613157,25 C57.0258809,25 59.5902327,22.9014782 59.5902327,18.500345 L59.5902327,7.2983068 L56.9507308,7.2983068 L56.9507308,8.3543224 C56.13911,7.4882767 55.0292012,6.9236335 53.5562597,6.9236335 L53.5562597,6.9234809 Z M53.8012104,9.367215 C55.4602928,9.367215 57.1639258,10.7700457 57.1639258,13.1656958 C57.1639258,15.600729 55.4639155,16.9427297 53.7645218,16.9427297 C51.9604575,16.9427297 50.2817975,15.4921967 50.2817975,13.1888219 C50.2817975,10.7954615 52.0252022,9.367215 53.8011333,9.367215 L53.8012104,9.367215 Z M71.326362,6.9085977 C68.1342952,6.9085977 65.4540967,9.4234656 65.4540967,13.1343268 C65.4540967,17.0609552 68.4415241,19.3897458 71.6329744,19.3897458 C74.2966013,19.3897458 75.9314045,17.9467688 76.9070452,16.6539206 L74.7307761,15.2200261 C74.1660483,16.0879036 73.2219167,16.9360895 71.6463087,16.9360895 C69.8764666,16.9360895 69.0626876,15.9763946 68.558527,15.0467712 L77,11.5783143 L76.5617479,10.5618345 C75.7462732,8.5713108 73.8440129,6.9089793 71.3266781,6.9089793 L71.326362,6.9085977 Z M71.4363355,9.306156 C72.5865556,9.306156 73.4143626,9.9117239 73.7659108,10.6377766 L68.1285761,12.9709939 C67.8855369,11.1646395 69.6137728,9.306156 71.4363355,9.306156 Z M61.4296753,19.0196518 L64.2025203,19.0196518 L64.2025203,0.64470679 L61.4296753,0.64470679 L61.4296753,19.0196518 Z"
                  ></path>
                </svg>
              </div>
              <div className="companies__logo">
                <svg
                  class="logo logo-mit"
                  width="46px"
                  height="24px"
                  viewBox="0 0 46 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000"
                    fill-rule="nonzero"
                    d="M33.2222222,5.14285714 L33.2222222,-5.32907052e-15 L46,-5.32907052e-15 L46,5.14285714 L33.2222222,5.14285714 Z M24.7037037,7.71428571 L29.8148148,7.71428571 L29.8148148,24 L24.7037037,24 L24.7037037,7.71428571 Z M0,0 L0,24 L4.9691358,24 L4.9691358,0 L0,0 Z M8.09259259,0 L8.09259259,16.3373494 L13.0617284,16.3373494 L13.0617284,0 L8.09259259,0 Z M16.1851852,0 L16.1851852,24 L21.154321,24 L21.154321,0 L16.1851852,0 Z M24.7037037,0 L24.7037037,5.14285714 L29.8148148,5.14285714 L29.8148148,0 L24.7037037,0 Z M32.5123457,7.6626506 L32.5123457,24 L37.4814815,24 L37.4814815,7.6626506 L32.5123457,7.6626506 Z"
                  ></path>
                </svg>
              </div>
              <div className="companies__logo">
                <svg
                  class="logo logo-nintendo"
                  width="116px"
                  height="28px"
                  viewBox="0 0 116 28"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000"
                    d="M15.1722737,28 C6.07696995,27.9975699 0,21.6822706 0,14.0255399 C0,6.36759408 6.09185081,-0.0200015025 15.159253,4.70664391e-05 L100.841367,4.70664391e-05 C109.908149,-0.0200015025 116,6.36759408 116,14.0255399 C116,21.6822706 109.92241,27.9975699 100.826486,28 L15.1722737,28 Z M14.7450054,3 C7.46790209,3.01328916 3,7.92584874 3,14.0015262 C3,20.0746725 7.43970355,25.0270995 14.7450054,24.9998884 L101.253115,24.9998884 C108.558417,25.0270995 113,20.0746725 113,14.0015262 C113,7.92584874 108.532098,3.01328916 101.253115,3 L14.7450054,3 Z M11.8980213,7.52951064 L16.067234,7.52951064 L21.8388511,16.8638085 L21.835766,7.52951064 L25.9728936,7.52951064 L25.9728936,20.9176383 L21.8419362,20.9176383 L16.0407021,11.5821064 L16.0407021,20.9176383 L11.8961702,20.9176383 L11.8980213,7.52951064 M48.4738085,8.90793617 L52.5029574,8.90793617 L52.5029574,10.7090213 L54.6835106,10.7090213 L54.6835106,12.0312979 L52.5029574,12.0312979 L52.5060426,20.9176383 L48.4738085,20.9176383 L48.4756596,12.0312979 L46.2883191,12.0312979 L46.2883191,10.7102553 L48.4768936,10.7102553 L48.4738085,8.90793617 M28.2787021,20.9182553 L32.3041489,20.9182553 L32.3041489,12.0152553 L28.2787021,12.0152553 L28.2787021,20.9182553 Z M28.2694468,10.2641489 L32.3041489,10.2641489 L32.3041489,7.52642553 L28.2694468,7.52642553 L28.2694468,10.2641489 Z M98.8258298,11.4068723 C95.5765957,11.4068723 92.943766,13.6454255 92.943766,16.4072128 C92.943766,19.1659149 95.5765957,21.4044681 98.8258298,21.4044681 C102.076915,21.4044681 104.709128,19.1659149 104.709128,16.4072128 C104.709128,13.6454255 102.076915,11.4068723 98.8258298,11.4068723 Z M100.442426,16.3948723 C100.442426,16.3948723 100.43934,17.7387447 100.43934,18.2798723 C100.43934,19.6984043 99.6020426,20.2851915 98.7937447,20.2851915 C97.9879149,20.2851915 97.1450638,19.6984043 97.1450638,18.2798723 C97.1450638,17.7387447 97.1481489,16.3603191 97.1481489,16.3603191 C97.1481489,16.3603191 97.150617,15.0454468 97.150617,14.5043191 C97.150617,13.0913404 97.991,12.5101064 98.7937447,12.5101064 C99.5964894,12.5101064 100.43934,13.0913404 100.43934,14.5043191 C100.43934,15.0454468 100.43934,16.0419362 100.442426,16.4010426 L100.442426,16.3948723 Z M87.6873617,16.4214043 C87.6873617,16.4214043 87.6873617,15.3045957 87.6873617,14.8294894 C87.6873617,13.4535319 86.737766,13.1030638 86.1102553,13.1030638 C85.4691702,13.1030638 84.5312979,13.4535319 84.5312979,14.8294894 C84.5312979,15.2854681 84.5331489,16.4177021 84.5331489,16.4177021 C84.5331489,16.4177021 84.5312979,17.5252553 84.5312979,18.0003617 C84.5312979,19.3763191 85.4691702,19.7354255 86.1102553,19.7354255 C86.737766,19.7354255 87.6873617,19.3763191 87.6873617,18.0003617 C87.6873617,17.427766 87.6873617,16.4214043 87.6873617,16.4214043 Z M87.6583617,7.52951064 L91.6319787,7.52951064 L91.6319787,20.9157872 L87.6528085,20.9157872 C87.6528085,20.9157872 87.6497234,20.4838723 87.6497234,20.4030426 C86.1102553,21.3699149 84.3696383,21.3674468 83.0146596,20.7368511 C82.6524681,20.5671702 80.2615106,19.4188936 80.2615106,16.3226809 C80.2615106,13.9718298 82.4790851,11.4068723 85.3797021,11.6610851 C86.3348511,11.746234 87.0141915,12.094234 87.6583617,12.4551915 C87.6583617,10.3968085 87.6583617,7.52951064 87.6583617,7.52951064 Z M41.7279149,11.6037021 C43.2322128,11.5617447 46.2883191,12.5477447 46.2654894,16.0734043 C46.2611702,16.6978298 46.2642553,20.9157872 46.2642553,20.9157872 L42.2647234,20.9157872 C42.2647234,20.9157872 42.2647234,15.6260638 42.2647234,15.0682766 C42.2647234,14.2920638 41.5224468,13.4294681 40.426617,13.4294681 C39.3283191,13.4294681 38.5138511,14.2920638 38.5138511,15.0682766 C38.5138511,15.4489787 38.5181702,20.9157872 38.5181702,20.9157872 L34.5211064,20.9157872 L34.5186383,12.0140213 L38.5181702,12.0109362 C38.5181702,12.0109362 38.5138511,12.7272979 38.5181702,12.9457234 C39.2888298,12.2120851 40.398234,11.6425745 41.7279149,11.6037021 M74.4460851,11.6037021 C75.9479149,11.5617447 79.0040213,12.5477447 78.9830426,16.0734043 C78.9781064,16.6978298 78.9799574,20.9157872 78.9799574,20.9157872 L74.9810426,20.9157872 C74.9810426,20.9157872 74.9810426,15.6260638 74.9810426,15.0682766 C74.9810426,14.2920638 74.238766,13.4294681 73.1429362,13.4294681 C72.0464894,13.4294681 71.2289362,14.2920638 71.2289362,15.0682766 C71.2289362,15.4489787 71.2351064,20.9157872 71.2351064,20.9157872 L67.2380426,20.9157872 L67.2411277,12.0140213 L71.2351064,12.0109362 C71.2351064,12.0109362 71.2289362,12.7272979 71.2351064,12.9457234 C72.006383,12.2120851 73.1139362,11.6425745 74.4460851,11.6037021 M61.7774043,17.8029149 C61.7774043,17.8029149 61.7798723,17.8424043 61.7798723,18.3428085 C61.7798723,19.9717447 60.7099574,20.3345532 60.117,20.3345532 C59.5209574,20.3345532 58.4312979,19.9717447 58.4312979,18.3428085 C58.4312979,17.8547447 58.4368511,16.5047021 58.4368511,16.5047021 C58.4368511,16.5047021 66.0188085,16.5071702 66.0188085,16.5047021 C66.0188085,13.7429149 63.3538936,11.455617 60.0799787,11.455617 C56.8066809,11.455617 54.1516383,13.6941702 54.1516383,16.4528723 C54.1516383,19.2152766 56.8066809,21.4532128 60.0799787,21.4532128 C62.7961064,21.4532128 65.0889574,19.9020213 65.7905106,17.7992128 L61.7774043,17.8029149 Z M58.433766,15.1176383 C58.4263617,14.3377234 58.4424043,13.8181915 58.6984681,13.370234 C59.015,12.8223191 59.593766,12.5619362 60.117,12.5594681 L60.1139149,12.5594681 C60.6408511,12.5619362 61.2159149,12.8223191 61.5293617,13.370234 C61.7860426,13.8181915 61.800234,14.3377234 61.7946809,15.1176383 L58.433766,15.1176383 Z M105.540872,9.00110638 C105.932064,9.00110638 106.280681,8.97395745 106.280681,8.50502128 C106.280681,8.12802128 105.938234,8.05768085 105.618617,8.05768085 L104.988638,8.05768085 L104.988638,9.00110638 L105.540872,9.00110638 Z M104.988638,10.7145745 L104.525255,10.7145745 L104.525255,7.66587234 L105.687723,7.66587234 C106.40717,7.66587234 106.763809,7.93242553 106.763809,8.53217021 C106.763809,9.07761702 106.421362,9.31455319 105.972787,9.37255319 L106.838468,10.7145745 L106.323872,10.7145745 L105.517426,9.39291489 L104.988638,9.39291489 L104.988638,10.7145745 Z M105.546426,11.3920638 C106.744064,11.3920638 107.684404,10.4554255 107.684404,9.18251064 C107.684404,7.93242553 106.744064,6.98714894 105.546426,6.98714894 C104.338298,6.98714894 103.394872,7.93242553 103.394872,9.18251064 C103.394872,10.4554255 104.338298,11.3920638 105.546426,11.3920638 Z M102.862383,9.18251064 C102.862383,7.66587234 104.093957,6.54659574 105.546426,6.54659574 C106.988404,6.54659574 108.216277,7.66587234 108.216277,9.18251064 C108.216277,10.7145745 106.988404,11.832617 105.546426,11.832617 C104.093957,11.832617 102.862383,10.7145745 102.862383,9.18251064 Z"
                  ></path>
                </svg>
              </div>
              <div className="companies__logo">
                <svg
                  class="logo logo-porsche"
                  width="215px"
                  height="14px"
                  viewBox="0 0 215 14"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000"
                    fill-rule="nonzero"
                    d="M25.0254757,6.40913113 C25.0254757,7.38276411 24.6630119,7.80021235 23.8645598,7.80021235 C22.7771687,7.80021235 2.82876491,7.80021235 2.82876491,7.80021235 L2.82876491,2.57777385 L23.6478555,2.57777385 C24.6630119,2.57777385 25.0254757,3.06459034 25.0254757,3.6220138 C25.0254757,4.17819855 25.0254757,6.40913113 25.0254757,6.40913113 Z M25.3892293,0 C24.5172525,0 0,0 0,0 L0,14 L2.82876491,14 L2.82876491,10.7260662 L25.8961625,10.7260662 C27.3473073,10.7260662 28,9.33250752 28,8.35887454 C28,7.38276411 28,2.08847992 28,2.08847992 C28,0.0681295346 26.2586262,0 25.3892293,0 Z M55.2989912,10.5196682 C55.2989912,10.9979484 54.8236036,11.3888146 54.2385111,11.3888146 L34.7614889,11.3888146 C34.1751354,11.3888146 33.6997478,10.9979484 33.6997478,10.5196682 L33.6997478,3.38417626 C33.6997478,2.905896 34.1751354,2.51502988 34.7614889,2.51502988 L54.2385111,2.51502988 C54.8236036,2.51502988 55.2989912,2.905896 55.2989912,3.38417626 L55.2989912,10.5196682 Z M56.6709322,0 L32.3265459,0 C31.5939193,0 31,0.615645348 31,1.37115333 L31,12.6288467 C31,13.3868522 31.5939193,14 32.3265459,14 L56.6709322,14 C57.4048197,14 58,13.3868522 58,12.6288467 L58,1.37115333 C58,0.615645348 57.4048197,0 56.6709322,0 Z M87.9790619,6.5453902 C87.9790619,7.38276411 87.6193655,7.80021235 86.6823626,7.80021235 C85.7453598,7.80021235 65.8788516,7.80021235 65.8788516,7.80021235 L65.8788516,2.64466466 L86.6823626,2.64466466 C87.5464021,2.64466466 87.9790619,3.06459034 87.9790619,3.76075031 C87.9790619,4.45567156 87.9790619,6.5453902 87.9790619,6.5453902 Z M89.2732011,10.7260662 C89.6341776,10.6542205 90.7132669,10.1698814 90.7132669,8.49761104 C90.7132669,8.49761104 90.7132669,4.31569634 90.7132669,2.64466466 C90.7132669,0.973632985 89.993874,0 88.5550882,0 L63,0 L63,14 L65.8071683,14 L65.8071683,10.6542205 L86.1063363,10.6542205 L87.6910487,13.8600248 L91,13.8600248 L89.2732011,10.7260662 Z M120.853136,0 L120.853136,2.7736314 L98.8056879,2.7736314 C97.872145,2.7736314 97.7291124,3.39711318 97.7291124,3.81235698 C97.7291124,4.23006513 97.7291124,4.71431086 97.7291124,4.71431086 C97.7291124,4.71431086 97.6563191,5.68526668 98.6626553,5.68526668 C99.6677145,5.68526668 118.265779,5.68526668 118.699985,5.68526668 C120.565794,5.68526668 121,7.13800387 121,7.90195388 C121,8.66343954 121,11.6428446 121,11.6428446 C121,13.4467523 119.633528,14 118.625915,14 C117.619579,14 95,14 95,14 L95,11.2978349 L116.978486,11.2978349 C117.979714,11.2978349 118.199371,10.8838233 118.199371,10.3256469 C118.199371,9.7736314 118.199371,9.14891744 118.199371,9.14891744 C118.199371,8.30117937 116.760106,8.4576659 116.185422,8.4576659 C115.612014,8.4576659 97.0816347,8.4576659 97.0816347,8.4576659 C95.4316518,8.4576659 95,7.27723992 95,6.30874846 C95,5.33779264 95,1.94437599 95,1.94437599 C95,0.69618025 96.2208851,0.0714662911 97.4430473,0.0714662911 C98.6626553,0.0714662911 120.853136,0 120.853136,0 M152,0.0718266254 L152,2.64891641 L130.036448,2.64891641 C129.026055,2.64891641 128.813476,3.34365325 128.813476,3.97151703 C128.813476,4.59814241 128.813476,10.101548 128.813476,10.101548 C128.813476,11.0773994 129.099049,11.3547988 129.817465,11.3547988 C130.539723,11.3547988 151.927006,11.3547988 151.927006,11.3547988 L151.927006,14 L128.230803,14 C126.220263,14 126,12.6773994 126,11.4934985 C126,10.3108359 126,1.88235294 126,1.88235294 C126,0 127.73137,0 128.306359,0 C128.881348,0 152,0.0718266254 152,0.0718266254 M179.234526,0 L179.234526,5.68723349 L158.767998,5.68723349 L158.767998,0 L156,0 L156,14 L158.767998,14 L158.767998,8.35784527 L179.234526,8.35784527 L179.234526,14 L182,14 L182,0 L179.234526,0 M215,2.70709382 L215,0 L187,0 L187,14 L215,14 L215,11.2978349 L189.83595,11.2978349 L189.83595,8.24819574 L215,8.24819574 L215,5.54603063 L189.83595,5.54603063 L189.83595,2.70709382 L215,2.70709382"
                  ></path>
                </svg>
              </div>
              <div className="companies__logo">
                <svg
                  class="logo logo-stripe"
                  width="67px"
                  height="28px"
                  viewBox="0 0 67 28"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000"
                    fill-rule="nonzero"
                    d="M66.8280556,14.5238889 C66.8280556,9.75944445 64.5202778,6 60.1094445,6 C55.68,6 53,9.75944445 53,14.4866667 C53,20.0886111 56.1638889,22.9175 60.705,22.9175 C62.9197223,22.9175 64.5947223,22.415 65.8602778,21.7077778 L65.8602778,17.9855556 C64.5947223,18.6183333 63.1430556,19.0091667 61.3005556,19.0091667 C59.4952778,19.0091667 57.8947223,18.3763889 57.69,16.1802778 L66.7908334,16.1802778 C66.7908334,15.9383333 66.8280556,14.9705556 66.8280556,14.5238889 Z M57.6341667,12.7558333 C57.6341667,10.6527778 58.9183334,9.77805556 60.0908334,9.77805556 C61.2261112,9.77805556 62.4358334,10.6527778 62.4358334,12.7558333 L57.6341667,12.7558333 Z M45.9841667,6 C44.1602778,6 42.9877778,6.85611111 42.3363889,7.45166667 L42.0944444,6.29777778 L38,6.29777778 L38,27.9983333 L42.6527778,27.0119445 L42.6713889,21.745 C43.3413889,22.2288889 44.3277778,22.9175 45.9655555,22.9175 C49.2969444,22.9175 52.3305555,20.2375 52.3305555,14.3377778 C52.3119444,8.94055556 49.2411111,6 45.9841667,6 Z M44.8675,18.8230556 C43.7694444,18.8230556 43.1180555,18.4322222 42.6713889,17.9483333 L42.6527778,11.0436111 C43.1366667,10.5038889 43.8066667,10.1316667 44.8675,10.1316667 C46.5611111,10.1316667 47.7336111,12.03 47.7336111,14.4680556 C47.7336111,16.9619445 46.5797222,18.8230556 44.8675,18.8230556 Z M32,4.78305556 L36.6713889,3.77805556 L36.6713889,0 L32,0.986388889 L32,4.78305556 Z M32,6 L36.671,6 L36.671,22.285 L32,22.285 L32,6 Z M26.3177778,7.56959708 L26.02,6.19237486 L22,6.19237486 L22,22.4770971 L26.6527778,22.4770971 L26.6527778,11.4407082 C27.7508333,10.0076527 29.6119444,10.2682082 30.1888889,10.4729305 L30.1888889,6.19237486 C29.5933333,5.96904153 27.4158333,5.55959708 26.3177778,7.56959708 Z M17.5597222,2 L13.0186111,2.96777778 L13,17.8752778 C13,20.6297222 15.0658333,22.6583333 17.8202778,22.6583333 C19.3463889,22.6583333 20.4630556,22.3791667 21.0772222,22.0441667 L21.0772222,18.2661111 C20.4816667,18.5080555 17.5411111,19.3641667 17.5411111,16.6097222 L17.5411111,10.0027778 L21.0772222,10.0027778 L21.0772222,6.03861111 L17.5411111,6.03861111 L17.5597222,2 Z M4.70861111,11.0436111 C4.70861111,10.3177778 5.30416667,10.0386111 6.29055556,10.0386111 C7.705,10.0386111 9.49166667,10.4666667 10.9061111,11.2297222 L10.9061111,6.85611111 C9.36138889,6.24194445 7.83527778,6 6.29055556,6 C2.5125,6 0,7.97277778 0,11.2669445 C0,16.4036111 7.07222222,15.5847222 7.07222222,17.7994445 C7.07222222,18.6555556 6.32777778,18.9347222 5.28555556,18.9347222 C3.74083333,18.9347222 1.76805556,18.3019445 0.204722222,17.4458333 L0.204722222,21.8752778 C1.93555556,22.6197222 3.685,22.9361111 5.28555556,22.9361111 C9.15666667,22.9361111 11.8180556,21.0191667 11.8180556,17.6877778 C11.7994444,12.1416667 4.70861111,13.1280556 4.70861111,11.0436111 Z"
                  ></path>
                </svg>
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
              <div className="pricing__logo--wrapper">
                <Image className="pricing__logo" src={logo} fluid></Image>
              </div>

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
          <Col className="footer__left" md={12} lg={7} xl={7}>
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
          <Col className="footer__right" md={12} lg={4} xl={4}>
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
        <div className="space-4"></div>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
