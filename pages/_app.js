import Navbar from '../components/Navbar'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
    return(
        <div className="page">
            <div className="container">
                <Navbar />
                <Component {...pageProps} />
            </div>
        </div>
    )
}