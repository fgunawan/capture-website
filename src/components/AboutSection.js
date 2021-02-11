import React from "react";
import home1 from '../img/home1.png';
import Wave from './Wave';
//import styled pkg - we are using the styled components method of styling here which is very common
//download vscode-styled-components extension along with pkg for txt highlighting
//styled component - to add styling to pg, replace the tag tht u want to style with the const name of the style
import styled from 'styled-components';
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from '../styles';
//framer motion - must replace tags u want to animate with the motion component and the tag and then u can add props
import { motion } from "framer-motion";
import {titleAnim, fade, photoAnim} from '../animation';

const AboutSection = () => {

    return(
        <StyledAbout>
            <StyledDescription>
                <motion.div>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span>
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>come true.</motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. 
                    We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img src={home1} alt="guy with a camera" variants={photoAnim}/>
            </StyledImage>
            <Wave />
        </StyledAbout>
    );
}

export default AboutSection;