import { projects } from '../_utils/projects';
import { useParams } from 'react-router-dom';
import Project from './Project';
// import Saturn from './Saturn';
import { Footer, Navbar } from '../components';
import { Toaster } from 'sonner';


const ProjectRoute = () => {
  // const saturnID:string = import.meta.env.VITE_SATURN_ID;
    const { processID } = useParams();
    // console.log("project rout epid", processID)
    // if(processID==saturnID){
    //   return <Saturn/>
    // }
  return (
    <>
    <Navbar/>
    <main className='bg-[#111111]  w-full pt-[120px] flex flex-col items-center min-h-[96vh]'>
      

    {projects.map((project)=> {
        if(project.processID == processID){
            return <> <nav className="flex w-full items-center justify-start px-20 max-w-[1800px]" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center text-[18px] font-medium text-[#244549] hover:text-[#40959D]">
                  <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <a href="/projects" className="ms-1 text-[18px] font-medium text-[#244549] hover:text-[#40959D]">Projects</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ms-1 text-[18px] font-medium text-[#40959D]">{project.name}</span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="group cursor-pointer relative inline-block text-center"><span className="ms-1 text-[18px] font-medium md:ms-2 text-[#244549]">OnChain Analysis</span>
      <div className="opacity-0 w-28 bg-[#244549] text-[#46B1BC] text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-[9px] pointer-events-none">
        <div className='min-h-[3px] min-w-[3px] rounded-full bg-[#46B1BC] mr-[3px] inline'>....</div>Coming Soon
        <svg className="absolute text-[#244549] h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
      </div>
    </div>
  </div>
                  
                </div>
              </li>
            </ol>
          </nav><Project pid={processID}/></>
        }
    })}

    </main>
    <Footer/>
    <Toaster theme='dark' position="top-right" toastOptions={{
    classNames: {
      title: 'text-[#40959D] text-[18px]',
      info: 'bg-[#161616]',
      
    },
    className:"border-[#40959D]",
    duration: 1500
  }}/>
    </>
  )
}

export default ProjectRoute