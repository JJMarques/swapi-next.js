import Home from '../components/Home'


export default function Index({ data }) {
    return(
        <Home data={data} />
    )
}

export async function getStaticProps() {

    const res = await fetch('https://www.swapi.tech/api/people').then(res => res.json())

    return {
        props: {
            data: res
        }
    }
}