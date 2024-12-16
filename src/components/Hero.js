import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
export  default function Hero(){
    const config = {
        subtitle:'Im a Full Stack Developer and Designer',
         Social: {
            twitter: 'https://twitter.com',
            facebook: 'https://facebook.com',
            linkedin: 'https://linkedin.com',
         }
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' >
        <div className='md:w-1/2 flex flex-col'> 
        <h1 className='w-1/2 text-white text-6xl font-hero-font'>Hi,<br/>Im <span className='text-black'>JM</span> Ihsan
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
    
        <div className='flex py-10' >
            <a href={config.Social.twitter} className='pr-5 hover:text-white' target="_blank" 
                        rel="noopener noreferrer"><AiOutlineTwitter size={40}/></a>
            <a href={config.Social.facebook} className='pr-5  hover:text-white'target="_blank" 
                        rel="noopener noreferrer"><AiOutlineFacebook size={40}/></a>
            <a href={config.Social.linkedin}  className = 'hover:text-white'target="_blank" 
                        rel="noopener noreferrer"><AiOutlineLinkedin size={40}/></a>
        </div>
        </div>
       
        <img className='md:w-1/3' src={HeroImg}/>
        </section>
}  