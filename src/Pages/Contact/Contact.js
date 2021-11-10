import React from 'react';
import { Container, Row,Col, Card, Form,Button, FloatingLabel } from 'react-bootstrap';
import canon from '../../Images/cannon6D.png';
import './Contact.css';
import { faFacebook , faTwitter, faInstagram , faDribbble,} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Contact = () => {
    return (
        <div >
           <Container className="mt-5">
           <Row>
                <Col md={6}>
         <Card className="bg-secondary text-white" style={{ width: '18rem' }}>
                <Card.Body className="p-5">
                    <h3>Address  </h3>
                   <h6> 256, Centerl Town, Main Street </h6>
                   <h6>    Hilton Tower, New Yourk</h6>
                      ----------------------------
                      <h3>Phone</h3>
                      <h6>+8801265 897 568</h6>
                      <h6>+8801235 598 656</h6>
                      ----------------------------
                      <h3>web</h3>
                      <h6>info@ymail.com</h6>
                      <h6>www.photodica.com</h6>
                </Card.Body>
                </Card>
                
                
                </Col>

                <Col md={6}>
                    <h3>Get in Touch</h3>
                    <p>Terms & Conditions deleniti atque corrupti sdolores et quas molestias cepturi sint eca itate non similique sunt in culpa modi tempora 
                        incidunt obtain pain</p>
            <Form>
                  <Row>
                  <Col>
             <Form.Control placeholder="Name" />
              <Form.Control className="mt-5" placeholder="Phone" />
                   </Col>
                   <Col >
                <Form.Control  placeholder=" Email" />
               <Form.Control className="mt-5" placeholder="Subject" />
                 </Col>
                 <FloatingLabel className="mt-5" controlId="floatingTextarea2" label="Comments">
                <Form.Control as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                
                 </Row>
                 <Button  className="mt-5"  variant="warning">Submit</Button>
                  </Form>

                </Col>
            </Row>
           </Container>
           
           <div>
               <Container className="mt-5 newsletter">
                   <Row>
                <Col md={6} className="mt-5">
                <h3>Subscribe to Newsletter</h3>
                <h4>GET UPDATE FOR NEWS, OFFERS</h4>
                <Form.Control   type="email" placeholder="Enter Your Email" className="w-100" />
                <div className="fonticon me-auto mt-4">
                                    <h5>Also Find Us</h5>
                            <FontAwesomeIcon className="icon" icon={faFacebook} />
                            <FontAwesomeIcon className="icon"  icon={faTwitter} />
                            <FontAwesomeIcon className="icon"  icon={faInstagram} />
                            <FontAwesomeIcon className="icon" icon={faDribbble} /> 
                            </div>
                      </Col>


                <Col md={6}>
                <img src={canon} alt="" className="w-75"/>
                </Col>
                </Row>
               </Container>
           </div>

        </div>
    );
};

export default Contact;