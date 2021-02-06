import React from "react";
import home1 from '../img/home1.png';
//import styled pkg - we are using the styled components method of styling here which is very common
//download vscode-styled-components extension along with pkg for txt highlighting
import styled from 'styled-components';

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
    )
}

//styled component - to add styling to pg, replace the tag tht u want to style with the const name of the style
const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`;
const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;
const StyledHide = styled.div`
    overflow: hidden;
`;

export default AboutSection;