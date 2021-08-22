import React from "react";
import {Col, Image, Row, Container} from "react-bootstrap";

function CardA({imageSource, subtitle, text}) {
    return (
        <Container>
            <Row className="padded-row">
                <Col xs={12} md={4} className="image-div">
                    <Image src={imageSource} className="profile-image shadow-lg"/>
                </Col>
                <Col className="summary-div">
                    <h2 className="heading">{subtitle}</h2>
                    <p className="subheading">{text}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default CardA;