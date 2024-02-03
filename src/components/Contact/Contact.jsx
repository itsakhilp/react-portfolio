// import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css"
import gitIcon from "../../assets/contact/githubIcon.png"
import linkedinIcon from "../../assets/contact/linkedinIcon.png"
import emailIcon from "../../assets/contact/emailIcon.png"

const Contact = () => {
  return (
    <>
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={emailIcon} className={styles.imgg} alt="EmailIcon"></img>
                <a href="mailto:akhilp605@gmail.com">akhil@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={linkedinIcon} className={styles.imgg} alt="LinkIcon"></img>
                <a href="www.linkedin.com/in/akhil-p-a55202182">linkedin/akhil</a>
            </li>
            <li className={styles.link}>
                <img className={styles.imgg} src={gitIcon}  alt="GitIcon"></img>
                <a href="https://github.com/itsakhilp">github/itsakhilp</a>
            </li>
        </ul>

    </footer>
        <p className={styles.copyryt}>© AKHIL PORTFOLIO</p>
 </>
        )
}

export default Contact