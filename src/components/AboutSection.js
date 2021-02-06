import React from "react";
import home1 from '../img/home1.png';
//import styled pkg - we are using the styled components method of styling here which is very common
//download vscode-styled-components extension along with pkg for txt highlighting
//styled component - to add styling to pg, replace the tag tht u want to style with the const name of the style
import styled from 'styled-components';
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from '../styles';

const AboutSection = () => {
    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>dreams</span>
                        </h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>come true.</h2>
                    </StyledHide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. 
                    We have professionals with amazing skills.
                </p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="guy with a camera"/>
            </StyledImage>
        </StyledAbout>
    );
}

export default AboutSection;