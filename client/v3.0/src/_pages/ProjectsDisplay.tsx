import { projects } from "../_utils/projects";
import ProjectCard from "../components/UserProfile/ProjectCard";
import { Footer, Navbar } from "../components";
import { brandDarkBg } from "../_utils/colors";
import { BackgroundBeams } from "../components/ui";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { CategorizedProjectsArray, CategoryEnum } from "../_utils/types";

const ProjectsDisplay = () => {
  // Group projects by category
  const categorizedProjects = Object.values(CategoryEnum).reduce(
    (acc, category) => {
      const categoryProjects = projects.filter(
        (project) => project.category === category
      );
      if (categoryProjects.length > 0) {
        acc.push({
          category,
          projects: categoryProjects,
        });
      }
      return acc;
    },
    [] as CategorizedProjectsArray
  );

  // Get default tab value (first category with projects)
  const defaultTab =
    categorizedProjects[0]?.category || CategoryEnum.Infrastructure;

  return (
    <>
      <Navbar />
      <main
        className={`${brandDarkBg} z-30 flex flex-col items-center md:justify-start justify-between text-[#f1f1f1] pt-[150px] min-h-[93vh]`}
      >
        <section
          id="projects"
          className="lg:px-20 px-6 flex flex-col items-center justify-start md:gap-9 md:fadeInScroll mb-[120px] w-full"
        >
          <div className="flex flex-col justify-center items-center w-full gap-6">
            <h3 className="md:text-[39px] text-[24px] text-[#40959D] text-center tracking-wider">
              Featured Projects
            </h3>

            <Tabs defaultValue={defaultTab} className="w-full z-50">
              <TabsList className="grid w-full sm:grid-cols-4 grid-cols-2 sm:gap-6 bg-[#161616] text-[#eeeeee] tracking-wider font-thin py-3">
                {categorizedProjects.map(({ category }) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categorizedProjects.map(({ category, projects }) => (
                <TabsContent key={category} value={category} className="mt-8">
                  <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-[30px] gap-[21px] w-full">
                    {projects.map((project) => (
                      <ProjectCard key={project.processID} project={project} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        <Footer />
      </main>
      <BackgroundBeams />
    </>
  );
};

export default ProjectsDisplay;
