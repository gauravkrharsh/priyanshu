import { FaGithub,FaEnvelope,FaLinkedin } from 'react-icons/fa';
import Heropic from '../assets/profile.jpg';

const hero = () => {
  return (
    <section className="flex justify-around items-centre p-10 
    lg:flex-row  text-white">
            <div className='lg:w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-5 text-slate-300'>I am</p>
            <h1 className='text-6xl'>Priyanshu Raj</h1>
            <hr/>
            <p className='mt-10 text-base text-slate-300
            font-sans'> I'm a 4th-year B.Tech student specializing in Computer Science and Engineering at Techno India 
            University. With a strong proficiency in Java, I focus on developing clean, efficient code that powers 
            dynamic applications. As a frontend developer, I am passionate about creating intuitive, user-friendly
             interfaces that enhance the overall user experience. My academic journey and practical experience 
             have equipped me with the skills to design and implement seamless digital solutions, making me a
              versatile and driven developer ready to take on challenging projects.
            </p>
            </div>
            <div className='w-1/4 item-centre ssm:w-fit'>
            <img src={Heropic} alt="" width={400} height={250}className='rounded-full border-8 border-white' />
            </div>
            <div className='w-1/3 ssm:w-fit relative'>
        <p className='text-4xl mb-4'>about me</p>
        <p className='text-slate-300 italic' style={{ marginTop: '30px', marginLeft: '20px' }}>
          " Driven by a passion for innovation, I blend creativity with technical expertise to craft digital
          experiences that resonate and inspire."
        </p>
        <button
          className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'
          style={{ marginTop: '20px', marginLeft: '10px' }}
        >
          <i>show more....</i>
        </button>
        <div className='flex mt-5 space-x-5 cursor-pointer 'style={{marginLeft: '40px'}}>
            <FaGithub size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
            <FaEnvelope size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
            <FaLinkedin size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
        </div>
      </div>
    </section>
  );
}

export default hero;
