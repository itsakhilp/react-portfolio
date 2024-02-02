import React from 'react'
// import { getImageUrl } from '../../utils';
import styles from './About.module.css'
import img from "../../assets/aaa.png"

import styled, { keyframes } from 'styled-components';

// Define a keyframe animation for fade-in
const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

// Create a styled component for the animated section
const AnimatedSection = styled.section`
    animation: ${fadeInAnimation} 1s ease-in-out;
`;
const About = () => {
  return (
    <>
    <div className={styles.container} id="about">
        <AnimatedSection>
        <h2 className={styles.title}>About</h2>
       <div className={styles.content}>
       <img src={img} alt="About img" className={styles.aboutImg}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <div>
                    <h3 >Front-end Developer</h3>
                    <p>Experienced and innovative Frontend Developer with 1 year 10 months of hands-on expertise in creating and maintaining responsive websites within the recruitment industry. A collaborative team player dedicated to delivering impactful solutions through proficient use of React.js and related technologies.</p>
                </div>
            </li>
        </ul>
       </div>
       </AnimatedSection>
    </div>
    </>
  )
}

export default About