import React from 'react'
import skills from "../data/skills.json"

import { getImageUrl } from '../../utils';
import styles from "./Skills.module.css"

import { styled,keyframes } from 'styled-components';

const pulseAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

// Wrap keyframes with css helper
const AnimatedSkill = styled.div`
animation: ${pulseAnimation} 2s ease-in-out infinite;
`;

const Skills = () => {

  return (
    <section id="skills" className={styles.container}>
    <h2 className={styles.title}>SKILLS</h2>
    <div className={styles.content}>
        <div className={styles.skills}>
            {skills.map((skill,index)=>{
                return(<>
                <AnimatedSkill key={index} className={styles.skill} >
                    <div key={`skill-${index}`} className={styles.skillImageContainer}>
                    <img  src={skill.imageSrc} alt={skill.title}/>
                    </div>
                    <p>{skill.title}</p>
                    </AnimatedSkill>
                    </>
                )
            })}
        </div>
        </div>
    
</section>
  )
}

export default Skills





