import './_app.scss'
import {Header} from '../component/header'


function ProjectApp({ Component, pageProps }) {
    return (
        <>
        <Header title="Alexis Flacher" lienAbout="/posts/about" lienContact="/posts/contact" />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1F1F1F" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,96C384,117,480,171,576,181.3C672,192,768,160,864,170.7C960,181,1056,235,1152,229.3C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        
        <Component {...pageProps} />
        
        </>
    )
    
}

export default ProjectApp