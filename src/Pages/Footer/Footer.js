import React from 'react';
import { Row,Col,} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTwitter, faInstagram , faDribbble,} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faHome,faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
const Footer = () => {
    return (
        <div className="bg-dark text-white footerctrl ">
           
           <Row className="foot">
    <Col >
        <h5>About Us</h5>
        <p>The new hero pieces bring instant fashion credibility. 
            Bright florals clash with camouflage prints.</p>
    </Col>


{/* my account */}
    <Col >
    <h5>My Account</h5> 
        <ul>
    
    <li>My Cart</li>
    <li>Checkout</li>
    <li>Terms & Condition</li>
    <li>Return Policy</li>
        </ul>
    </Col>

    <Col>
    <h5>Get In Touch</h5>
    <address>
    <ul className="mb-4">
   <li><FontAwesomeIcon icon={faHome}/> 14 Tottenham Road, London, England.</li>
   <li><FontAwesomeIcon icon={faPhone}/> (102) 6666 8888</li>
   <li><FontAwesomeIcon icon={faEnvelope}/> info@demo.com</li>
   <li><FontAwesomeIcon icon={faPhone}/> (102) 8888 9999</li>
   </ul>
    </address>
   
    </Col>

  </Row>


  <h5>Follow Us</h5>
              
              <div className="fonticon2 me-auto">

                  <FontAwesomeIcon className="icon" icon={faFacebook} />
                  <FontAwesomeIcon className="icon"  icon={faTwitter} />
                  <FontAwesomeIcon className="icon"  icon={faInstagram} />
                  <FontAwesomeIcon className="icon" icon={faDribbble} /> 
        </div>
       
            <hr className="w-75 m-auto mt-5" />

            <p className="mt-5 m-auto">Copyright © 2019 Photosica. All Right Reserved.</p>
        
        </div>
    );
};

export default Footer;