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
            return <Project pid={processID}/>
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