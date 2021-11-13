import React from 'react';
import { Container, Row,Col} from 'react-bootstrap';
import './Offer.css';
import sale from '../../Images/salebg.png';
import vidcam from '../../Images/vidcam.png';
import lence from '../../Images/lence.png';
const Offer = () => {
    return (
        <div>
            <Container className="mt-5 ">
                <h3>Flash Sale</h3>
                <Row>
                    <Col className="offer">

                    <img src={vidcam} alt=""  className="w-100"/>
                    </Col>



                    <Col className="offer" xs={5}>
                    <img src={sale} alt="" className="w-100"/>
                    </Col>


                    <Col className="offer">
                    <img src={lence} alt="" className="w-100" />
                    </Col>
                </Row>
            
            </Container>
          
        </div>
    );
};

export default Offer;