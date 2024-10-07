// CircularText.js
import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define the circular rotation animation
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for the text rotating in a circular motion
const CircularTextWrapper = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  animation: ${rotate} 20s linear infinite; // Slow circular motion
`;

const CircularText = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <CircularTextWrapper
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.5 }}
    >
      <p>Discover ... Explore ... Connect ... Transform</p>
    </CircularTextWrapper>
  );
};

export default CircularText;
