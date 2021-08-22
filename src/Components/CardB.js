import React from "react";
import {Col, Image, Row, Container} from "react-bootstrap";
import useWindowDimensions from "../useWindowDimensions";

function CardB({imageSource, subtitle, text}) {
    const {width} = useWindowDimensions();

    if (width > 767) {
        return (
            <Container>
                <Row className="padded-row">
                    <Col xs={12} md={8} className="summary-div">
                        <h2 className="heading">{subtitle}</h2>
                        <p className="subheading">{text}</p>
                    </Col>
                    <Col xs={12} md={4} className="image-div">
                        <Image src={imageSource} className="profile-image shadow-lg"/>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return (
            <Container>
                <Row className="padded-row">
                    <Col xs={12} md={4} className="image-div">
                        <Image src={imageSource} className="profile-image shadow-lg"/>
                    </Col>
                    <Col xs={12} md={8} className="summary-div">
                        <h2 className="heading">{subtitle}</h2>
                        <p className="subheading">{text}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CardB;