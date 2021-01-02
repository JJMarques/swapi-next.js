import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
    return(
        <div className={styles.nav}>
            <h1>Star Wars Characters</h1>
            <div className={styles.menu}>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/contact-us"><a>Contact us</a></Link></li>
                </ul>
            </div>
        </div>
    )
}