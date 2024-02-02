import React,{useState} from 'react'
import logo from "../../assets/logo/logo.png";
import closeIcon from "../../assets/nav/closeIcon.png"
import menuIcon from "../../assets/nav/menuIcon.png"

import styles from "./Navbar.module.css"
// import { getImageUrl } from '../../utils'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      
        <img className='brandlogo'  src={logo}  alt="images" />

        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={menuOpen ? closeIcon : menuIcon}
            onClick={()=>setMenuOpen(!menuOpen)} alt="img"/>

            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=> setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar