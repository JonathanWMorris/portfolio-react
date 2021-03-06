import React from "react";

// Component Imports
import {Container} from "react-bootstrap";
import CardA from "../CardA";
import CardB from "../CardB";

// Image Imports
import profileImage from "../../Images/home/profile.JPG";
import swiftLogo from "../../Images/home/swift.png";
import webDevelopment from "../../Images/home/bootstrap.png";
import pythonImage from "../../Images/home/python.png";

function Home() {
    return (
        <Container>
            <CardA imageSource={profileImage}
                   subtitle="Aspiring Developer"
                   text="My name is Jonathan, I love learning about new technologies, and cool things in general.
                    My hobbies include video editing, singing, and photography."
            />
            <CardB imageSource={swiftLogo}
                   subtitle="Swift and iOS programming"
                   text="Took a course in iOS Development in the summer of 2020. Created three production ready apps,
                    Trippy - Travel App, Instant Trivia - Quiz Game, and Quick Edit - Background Remove. Have experience
                    using UIKit, SwiftUI, Cocoapods, etc."
            />
            <CardA imageSource={webDevelopment}
                   subtitle="Web Development"
                   text="Learned front end web development with BootStrap, HTML, CSS, and JavaScript. Currently learning
                    React.js and backend web development with Node.js and Mongoose. This website was made using React."
            />
            <CardB imageSource={pythonImage}
                   subtitle="Python"
                   text="Some python experience. Made a discord bot using python, project is hosted on github.
                    The discord bot was made to solve small problems I faced when moderating my High School alumni
                    discord server."
            />
        </Container>
    );
}

export default Home;