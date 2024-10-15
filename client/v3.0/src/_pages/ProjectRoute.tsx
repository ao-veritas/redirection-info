import { projects } from '../_utils/projects';
import { useParams } from 'react-router-dom';
import Project from './Project';
// import Saturn from './Saturn';
import { Footer, Navbar } from '../components';


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
    </>
  )
}

export default ProjectRoute