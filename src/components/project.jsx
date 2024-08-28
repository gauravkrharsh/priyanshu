import CarrerDarshak from "../assets/CarrerDarshak.jpg"
import Project from "../assets/project.png"
export default function project() {
  return (
    <>
    <div className='bg-indigo-800 m-20 max-w-full'>
      <div className='grid justify-items-centre m-10'>
        <h1 className='text-3xl text-white mt-10'>Projects</h1>
      </div>
      <div>
      <div className='grid grid-cols-2 gap-4 p-5'>
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md
        overflow-hidden md:max-w-2xl hover:animate-pulse'>
       <div className='md:flex'>
         <div className="p-8">
            <div className="uppercase tracking-wide 
            text-sm to-indigo-500 font-semibold">
                CarrerDrashak
            </div>
            <p className="mt-2 text-slate-500">
                An AI based Carrer Counselling Solution
            </p>
         </div>
         <div className="md:shrink-0 p-5">
            <img src={CarrerDarshak} alt="CarrerDarshak" width={150} height={150} />
         </div>
       </div>
        </div>
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md
        overflow-hidden md:max-w-2xl hover:animate-pulse'>
       <div className='md:flex'>
       <div className="md:shrink-0 p-5">
            <img src={Project} alt="Smart billling system" width={150} height={150} />
         </div>
         <div className="p-8">
            <div className="uppercase tracking-wide 
            text-sm to-indigo-500 font-semibold">
                Smart billling system
            </div>
            <p className="mt-2 text-slate-500">
               Effortless Billing, Smarter Solutions. An AI based Carrer Counselling Solution
            </p>
         </div>
         
       </div>
        </div>
         </div>
         <hr/>
         <div className='grid grid-cols-2 gap-4 p-5'>
      </div>
</div>
    </div>
    </>
  )
}

