import React from "react";

// Component Imports
import { Container } from "react-bootstrap";
import CardA from "../CardA";
import LinkButton from "../LinkButton";
import CardB from "../CardB";

// Image Imports
import solidworksLogo from "../../Images/mechanical/Solidworks.jpeg";
import printer from "../../Images/mechanical/3d-printer.jpeg";
import colaborationImage from "../../Images/mechanical/colaboration.png";

function Mechanical() {
    return (
        <Container>
            <CardA
                imageSource={solidworksLogo}
                subtitle="Solidworks"
                text="I learned solidworks during my time in my robotics team. We used solidworks to CAD our robots and other parts."
            />
            <CardB
                imageSource={printer}
                subtitle="3D Printing"
                text="I learned how to propperly use 3D Printers like the Monoprises and Prusas"
            />
            <CardA
                imageSource={colaborationImage}
                subtitle="Colaboration"
                text="The most important skill I gained in my Mechanical team at robotics was colaboration and commmunication skills. I had 
                to consistantly communicate my ideas accross and build uppon other's ideas."
            />
        </Container>
    );
}

export default Mechanical;