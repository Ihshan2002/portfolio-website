import Aboutimg from '../assets/about.png'

export default function About(){
   const config = {
    line1:'Hi my name is Ihshan. I am a Full stack  Web developer.I  built beautiful Websites with react.js and tailwind CSS',
    line2:' I am proficient in Frontend  Skills like React.js,Redux,Redux Toolkit,Axios,tailwind CSS,SaSS,Css3 and many more',
    line3:'In backend I know Node.js,Express j.s, MongoDB and Mangoose',
   }


    return <section id='About' className='flex flex-col md:flex-row bg-secondary px-5'>
         <div className='py-5 md:w-1/2'>
        <img src={Aboutimg}/>
    </div>
    <div className='md:w-1/2 flex  justify-center'>
        <div className='flex  flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'> About me</h1>
        <p className='pb-5' >{config.line1}</p>
        <p className='pb-5' >{config.line2}</p> 
        <p className='pb-5' >{config.line3} </p>
        </div>
        
    </div>
      
    </section>
   
}