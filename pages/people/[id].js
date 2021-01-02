import { useRouter } from 'next/router'
import Link from 'next/link'

export default function PeopleId({ id, data }) {

    const nextPage = id + 1
    const prevPage = id - 1
    const router = useRouter()

    if(router.isFallback) {
        return <h1>Loading...</h1>
    }

    return(
        <div>
            <h1>{id} {data.properties.name}</h1>
            {
                prevPage > 0 &&
                <Link href={`/people/${prevPage.toString()}`}>
                    Previous page
                </Link>
            }
            
            <Link href={`/people/${nextPage.toString()}`}>
                Next page
            </Link>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "1" } }
        ],
        fallback: true
    }
}

export async function getStaticProps(ctx) {

    const id = parseInt(ctx.params.id)
    const res = await fetch(`https://www.swapi.tech/api/people/${id}`)
    .then(res => res.json())

    return {
        props: {
            id,
            data: res.result
        }
    }
}