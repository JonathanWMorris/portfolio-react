import React from "react";
import {Button, Container} from "react-bootstrap";
import CardA from "../CardA";
import CardB from "../CardB";

function Trippy() {
    return (
        <Container>
            <CardA imageSource="https://jonathanwmorris.github.io/Portfolio-Site/Images/trippy/trippy_icon.png"
                   subtitle="Trippy - Travel Planning"
                   text="This was my first project and it help make travel planning easier by giving them a place to
                   plan their trip and keep track of additional notes that they have relating to each location."
            />
            <CardB imageSource="https://jonathanwmorris.github.io/Portfolio-Site/Images/home/swift.png"
                   subtitle="Tech Stack"
                   text="The program was built using RealmSwift Database, UIKit, SwiftUI and the Yelp API."
            />
            <CardA imageSource="https://jonathanwmorris.github.io/Portfolio-Site/Images/home/xcode.png"
                   subtitle="Code"
                   text="Click the button to download the project files for trippy!"
            />
            <div className="d-grid gap-2">
                <button className="btn btn-outline-dark" type="button"
                        onClick={downloadTrippy}>
                    Download Project
                </button>
            </div>
        </Container>
    );
}

function downloadTrippy(){
    window.open("https://drive.google.com/uc?export=download&id=1i8j3E1Alk4iNUEbSYdyI6ux8Ydg2SX4H");
}

export default Trippy;