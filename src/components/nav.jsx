import { FaLaptopCode } from 'react-icons/fa';

const nav = () => {
  return (
   <>
   <div className="flex items-centre justify-between p-10 lg:flex-row">
   <div>
    <a href="#"className="text-white font-mono text-3xl 
    tracking-wider flex items-centre"><FaLaptopCode/>Priyanshu Raj</a>
    </div>
   <div className="space-x-4">
          
          <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
           <a href="#"className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
           <a href="#"className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Documents And Certificates</a>
          </div>
   </div>
   </>
  )
}

export default nav