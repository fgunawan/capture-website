import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;

//we use this component to wrap up qs in faqsection component in order to toggle questions open and close
//when we wrap up divs between a component, we can call the children prop to get the divs between components without having to pass individual props

//with framer motion, you need to make the divs you want to animate with motion tag. also, add layout if you don't want certain divs to get animated
