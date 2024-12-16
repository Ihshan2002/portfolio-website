import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {
   const config={
        Projects :[
             {
               image : websiteImg1,
               description : 'An Ecommerce website. Built with MERN Stack.',
               link: 'https://github.com/Ihshan2002'
             },
             {
               image : websiteImg2,
               description :'Food Ecommerce Website like Swiggy, built with Angular.',
               link: 'https://github.com/Ihshan2002'
             },
             {
               image : websiteImg3,
               description : 'Basic Blog Website. Built with Next.js and MongoDB.',
               link: 'https://github.com/Ihshan2002'
             },

       ]
   }
   return (
      <section id='Projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
         <div className="w-full">
            <div className="flex  flex-col px-10 py-5 ">
               <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
               <p>These are some of my best projects.I have built these with React,MERN and vanilla css.check them out.</p>           
            </div>
         </div>
         <div className="w-full">
            <div className="flex flex-col md:flex-row px-10 gap-5">
               {config.Projects.map((Projects)=>(
               <a href= {Projects.link}>
               <div className="relative">
                  <img className="h-[200px] w-[500px]" src={Projects.image} alt="Ecommerce website" />
                  <div className="Projects-desc text-center py-5">
                     <p className='text-center px-5 py-5'>{Projects.description}</p>
                   <div>
                     <a className='btn' target='_blank' href= {Projects.link}>view projects</a>
                  </div>
                  </div>
               </div>
               </a>  
               ))}   
            </div>
         </div>
      </section>
   );
}
