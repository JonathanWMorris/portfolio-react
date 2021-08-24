import React from "react";

// Component Imports
import {Container} from "react-bootstrap";
import CardA from "../CardA";
import CardB from "../CardB";

// Image Imports
import trippyLogo from "../../Images/trippy/trippy_icon.png"
import swiftLogo from "../../Images/home/swift.png";
import xcodeLogo from "../../Images/home/xcode.png";
import LinkButton from "../LinkButton";

function Trippy() {
    return (
        <Container>
            <CardA imageSource={trippyLogo}
                   subtitle="Trippy - Travel Planning"
                   text="This was my first project and it help make travel planning easier by giving them a place to
                   plan their trip and keep track of additional notes that they have relating to each location."
            />
            <CardB imageSource={swiftLogo}
                   subtitle="Tech Stack"
                   text="The program was built using RealmSwift Database, UIKit, SwiftUI and the Yelp API."
            />
            <CardA imageSource={xcodeLogo}
                   subtitle="Code"
                   text="Click the button to download the project files for trippy!"
            />
            <LinkButton link="https://drive.google.com/uc?export=download&id=1i8j3E1Alk4iNUEbSYdyI6ux8Ydg2SX4H"
                        text="Download Project"/>
        </Container>
    );
}

export default Trippy;