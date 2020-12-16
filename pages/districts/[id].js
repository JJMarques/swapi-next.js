import { useEffect } from 'react'

export default function DistrictId({ id, data }) {
    
    useEffect(() => {
        console.log(data);
    }, [])
    
    return (
        <div>
            <h1>{id}</h1>
            {data.map((d, k) => (
                <div key={k}>
                <h1>{d.tMax}</h1>
                <h1>{d.tMin}</h1>
                </div>
            ))}
        </div>
    )
}

export const getStaticPaths = async () => {

    const res = await fetch('https://api.ipma.pt/open-data/distrits-islands.json')
    const json = await res.json()
    const data = json.data

    let dataArr = []
    for (let i = 0; i < data.length; i++) {
        dataArr.push(data[i].globalIdLocal)
    }

    const paths = dataArr.map(d => ({
        params: {
            id: d.toString()
        }
    }))

    return  { 
        paths, 
        fallback: false,
    }
}

export const getStaticProps = async (ctx) => {

    console.log(ctx);

    const res = await fetch(`https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${ctx.params.id}.json`)
    const json = await res.json()
    const data =  json.data

    return  { 
        props: {
            id: ctx.params.id,
            data: data
        }
    }
}