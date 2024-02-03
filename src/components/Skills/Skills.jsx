import React from 'react';
import skills from "../data/skills.json";
import { v4 as uuidv4 } from 'uuid';
import { styled, keyframes } from 'styled-components';

import styles from "./Skills.module.css";

// Import images
import htmlImage from "../../assets/skills/html.png";
import cssImage from "../../assets/skills/css.png";
import jsImage from "../../assets/skills/js.png";
import reactImage from "../../assets/skills/react.png";
import nodeImage from "../../assets/skills/node.png";
import mongodbImage from "../../assets/skills/mongodb.png";
import figmaImage from "../../assets/skills/figma.png";
import vsCodeImage from "../../assets/skills/vs.png";
import gitImage from "../../assets/skills/git.png";

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

const AnimatedSkill = styled.div`
    animation: ${pulseAnimation} 2s ease-in-out infinite;
`;

const Skills = () => {
    // Define mapping of imageSrc to image paths
    const imageMap = {
        "skills/html.png": htmlImage,
        "skills/css.png": cssImage,
        "skills/js.png": jsImage,
        "skills/react.png": reactImage,
        "skills/node.png": nodeImage,
        "skills/mongodb.png": mongodbImage,
        "skills/figma.png": figmaImage,
        "skills/vs.png": vsCodeImage,
        "skills/git.png": gitImage
    };

    return (
        <section id="skills" className={styles.container}>
            <h2 className={styles.title}>SKILLS</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill) => {
                        // Get image path based on imageSrc from JSON data
                        const imageSrc = imageMap[skill.imageSrc];
                        return (
                            <AnimatedSkill className={styles.skill} key={uuidv4()}>
                                <div className={styles.skillImageContainer}>
                                    <img src={imageSrc} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </AnimatedSkill>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills;
