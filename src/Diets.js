import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./Images/1.png"

function Diets() {
    return (
        <div className="Diets">
            {/* <div class="header">
        <nav class="navbar navbar-expand-lg navbar-red navbar-dark">
          <div class="wrapper"> </div>
          <div class="container-fluid all-show">
            {" "}
            <a class="navbar-brand" href="./index.html">
              <img src={logo} class="gymLogo2" />
              <font color="#ffc400" size="6px">
                A
              </font>
              thlete{" "}
              <font color="#ffc400" size="6px">
                C
              </font>
              lub
            </a>{" "}
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span class="navbar-toggler-icon"></span>{" "}
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  {" "}
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    <font color="#ffc400" size="4px">
                      H
                    </font>
                    ome
                  </Link>
                </li>
                <li class="nav-item">
                  {" "}
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    <font color="#ffc400" size="4px">
                      A
                    </font>
                    bout us
                  </Link>
                </li>
                <li class="nav-item">
                  {" "}
                  <Link class="nav-link" to="/dites">
                    <font color="#ffc400" size="4px">
                      D
                    </font>
                    iets
                  </Link>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <Link class="nav-link" to="/services">
                    <font color="#ffc400" size="4px">
                      S
                    </font>
                    ervices
                  </Link>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="./gallery.html">
                    <font color="#ffc400" size="4px">
                      G
                    </font>
                    allery
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="./contact-us.html">
                    <font color="#ffc400" size="4px">
                      C
                    </font>
                    ontact
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="./premium.html">
                    <font color="#ffc400" size="4px">
                      P
                    </font>
                    remium{" "}
                    <font color="#ffc400" size="4px">
                      <i class="fas fa-crown"></i>
                    </font>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> */}

      {/* <footer id="footer">

               <div className="footer-top">
                   <div className="container">
                       <div className="row">
                           div.col-lg-3 col-md-6 footer-links

                       </div>
                   </div>
               </div>
           </footer> */}

      <footer id="footer">
       
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-links">
                
              </div>
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="/">Fitness</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="/">Personal Trainer</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/">Dietrician</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Muskan Tower <br />
                  Sultanpur, Uttar Pradesh
                  <br />
                  India <br />
                  <br />
                  <strong>Phone:</strong> +91 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>
              <div class="col-lg-3 col-md-6 footer-info">
                <h3>About Athlete Club</h3>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus.
                </p>
                <div class="social-links mt-3">
                  <a href="/" class="twitter">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="/" class="facebook">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="/" class="instagram">
                    <i class="bx bxl-instagram"></i>
                  </a>
                  <a href="/" class="linkedin">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            © Copyright{" "}
            <strong>
              <span>Athlete Club</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits" id="me">
            Made with ❤️ by
            <a href="https://badass1901-my-site.netlify.app/">
              Shashwat Sagar & Prathu Gupta
            </a>
          </div>
        </div>
      </footer>
        </div>
    )
}

export default Diets
