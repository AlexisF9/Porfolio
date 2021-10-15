import Link from 'next/link'
//import css from './index.module.scss'

export function Rea({rea}) {

    return (
        
        <main>

                {rea.map(reas => {
                        return (
                            <h1>{reas.titre}</h1>
                        )
                    })}
            
        </main>
    )
}

export async function getStaticProps() { 
    const response2 = await fetch(`http://localhost:3000/data/realisations.json`)
    const rea = await response2.json()
    
    return {
        props: { 
            rea
        }
    }
}

export async function getStaticPaths() { // liste les (routes) pages à l'avance
    const reas = await (await fetch('http://localhost:3000/data/realisations.json')).json()
    return {
        paths: reas.map(p => ({
             params: {id: p.id.toString()}
        })),
        fallback: 'blocking', // met la page 404
    }
    
}

export default Rea