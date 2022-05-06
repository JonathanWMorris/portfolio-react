import React from "react";

// Component Imports
import {Container} from "react-bootstrap";
import CardA from "../CardA";
import LinkButton from "../LinkButton";
import CardB from "../CardB";

// Image Imports
import JAWLogo from "../../Images/webdevelopment/JAW.png";
import reactLogo from "../../Images/webdevelopment/react.png"
import nodeLogo from "../../Images/webdevelopment/node.jpg"

function WebDevelopment() {
    return(
        <Container>
            <CardA
                imageSource={JAWLogo}
                subtitle="JAW Non-Profit"
                text="Helped design the website for a nonprofit in my highschool called JAW (Journey Around the World). I used WIX to build this website. 
                I also designed their Logo and branding, which was done using Adobe Illustrator."
            />
            <LinkButton link="https://jawnonprofit.wixsite.com/jawnonprofit" text="Visit Site"/>
            <CardB
                imageSource={reactLogo}
                subtitle="Front End"
                text="Proficient in HTML, and CSS. Experienced with Java Script, and Bootstrap. Familiar with React.js"
            />
            <CardA
                imageSource={nodeLogo}
                subtitle="Back End"
                text="Started learning back end web development using tools like Node.js, and MongoDB. I am also
                learning GoLang and backend development with Go."
            />
        </Container>
    );
}

export default WebDevelopment;