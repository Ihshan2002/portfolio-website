import Resumeimg from '../assets/resume.jpg'

export default function Contact() {
    const config = {
        email: 'mohamedihshan616@gmail.com',
        phone: '0756590585',
    }
    return <section id='Contact' className='flex  flex-col  bg-primary px-5 py-32'>

        <div className=' flex flex-col items-center text-white'>

            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'> Contact </h1>
            <p className='pb-5' >If you want to discuss more in detail,please conttact me </p>
            <p className='py-2'><span className='font-bold'>Email: </span>{config.email}</p>
            <p className='py-2'><span className='font-bold'>phone: </span>{config.phone}</p>
        </div>
    </section>

}