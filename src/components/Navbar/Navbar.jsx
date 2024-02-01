import React,{useState} from 'react'

import styles from "./Navbar.module.css"
import { getImageUrl } from '../../utils'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      
        <img className='brandlogo' src="./assets/logo/logo.png" alt="LOGO" />

        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={menuOpen ? "./assets/nav/closeIcon.png" : "./assets/nav/menuIcon.png"}
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