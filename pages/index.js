import { useState } from 'react'
import Link from 'next/link'

export default function Index({ dataArr }) {

    const [district, setDistrict] = useState(1010500)

    return(
        <div>
           <select onChange={e => setDistrict(e.target.value)}> 
               {dataArr.map((v) => ( 
                    <option 
                        key={v.id} 
                        value={v.id}
                    >
                       {v.local}
                    </option>
                ))}
           </select>
           <Link href={`/districts/${district}`}>
            <a><button>Get some data of the location</button></a>
           </Link>
        </div>
    )
}

export const getStaticProps = async () => {
    
    const res = await fetch('https://api.ipma.pt/open-data/distrits-islands.json')
    const json = await res.json()
    const data = json.data

    let dataArr = []
    for (let i = 0; i < data.length; i++) {
        dataArr.push({ id: data[i].globalIdLocal, local: data[i].local })
    }

    return {
        props: {
            dataArr
        }
    }
}