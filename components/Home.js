import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home({ data }) {
    return(
        <div className={styles.home}> 
            <ul>
                {data.results.map((v, k) => {
                    return(
                        <li key={k}>
                            <Link href={`/people/${v.uid}`}>
                                {v.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}