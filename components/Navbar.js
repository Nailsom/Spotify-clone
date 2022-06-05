import Link from 'next/link'
import styles from '/styles/Navbar.module.css'
import { FaSpotify } from 'react-icons/fa';



function Navbar () {
    return (
        <div className={styles.navbar}>
            <nav className={styles.nav}>
                <h1> <FaSpotify/> Spotify</h1>
                <ul>
                    <Link href="#"><a>Login</a></Link>
                    <Link href="#"><a>Sobre-nós</a></Link>
                </ul>
            </nav>
        </div>
    )
      
    

}

export default Navbar