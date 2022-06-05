import Link from 'next/link'
import styles from '/styles/Navbar.module.css'
import { FaSpotify } from 'react-icons/fa';



function Navbar () {
    return (
        
        <footer className={styles.navbar}>
            
            <nav >
                <h1> <FaSpotify/> Spotify</h1>
                <ul>
                    <Link href="#"><a>Login</a></Link>
                    <Link href="#"><a>Sobre-nós</a></Link>
                </ul>
            </nav>
        </footer>
    )
      
    

}

export default Navbar