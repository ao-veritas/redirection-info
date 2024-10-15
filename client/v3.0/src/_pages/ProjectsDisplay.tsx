import { projects } from '../_utils/projects';
import ProjectCard from '../components/UserProfile/ProjectCard';
import { Footer, Navbar } from '../components';
import { brandDarkBg } from '../_utils/colors';
import { BackgroundBeams } from '../components/ui/background-beams';

const ProjectsDisplay = () => {
  return (
    <>
    <Navbar/>
    <main className={`${brandDarkBg} z-30 flex flex-col items-center md:justify-start justify-between text-[#f1f1f1] pt-[150px] min-h-[93vh]`}>
    <section id="projects" className="lg:px-20 px-6 flex flex-col items-center justify-start md:gap-9 md:fadeInScroll mb-[120px]">
      <div className="flex flex-row justify-center items-center w-full ">
        <h3 className="md:text-[39px] text-[24px] text-[#40959D] text-center mb-[30px] tracking-wider">Featured Projects</h3>
        {/* <div className="flex flex-row gap-[12px] justify-end items-center">
          <input
            type="text"
            placeholder="Search for Projects"
            className=" text-[#f1f1f1] border-[1px] bg-[#00000000] rounded-[9px] px-[12px] py-[6px] border-[#40959D] min-w-[310px]"
          />
          <a href="" className="bg-[#205156] rounded-[6px] p-[9px]">
            <img alt="search" src="/icons/searchIcon.svg" className="w-[18px] h-[18px]" />
          </a>
        </div> */}
      </div>
      <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-[30px] gap-[0px] w-full">
        {" "}
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
      
    </section>
    <Footer/>
    </main>
    <BackgroundBeams/>
    </>
  )
}

export default ProjectsDisplay