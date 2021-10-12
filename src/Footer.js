import React from 'react'

function Footer() {
    return (
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
    )
}

export default Footer
