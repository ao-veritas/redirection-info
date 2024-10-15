import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Globe,
  FileText,
  Twitter,
  Github,
  ExternalLink,
  Dribbble,
  Lock,
  Unlock,
} from "lucide-react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { ProjectType } from "../_utils/types";
import { projects } from "../_utils/projects";



export default function Component({ pid }: any) {
    const saturnID:string = import.meta.env.VITE_SATURN_ID;
  const [currentProject, setCurrentProject] = useState<ProjectType>();
  useEffect(() => {
    projects.map((project) => {
      if (project.processID == pid) {
        setCurrentProject(project);
      }
    });
  }, []);
  if (currentProject) {
    console.log(currentProject?.mileStones.length)
    return (
      <div className="container px-[15px] max-w-[1800px]">
        <Card className="mb-8 bg-[#161616] border-none">
          <CardHeader>
            <div className="flex sm:flex-row flex-col gap-4 items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src={currentProject?.logoImageLink}
                  alt={currentProject?.name}
                />
                <AvatarFallback>
                  {currentProject?.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-3xl text-[#FFFFFF] sm:text-start text-center">
                  {currentProject?.name}
                </CardTitle>
                <CardDescription>{currentProject?.oneLiner}</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex md:flex-row flex-col gap-6 justify-between items-center">
              <div className="flex flex-col sm:items-start items-center">
                <div className="grid sm:grid-cols-4 grid-cols-2 w-fit gap-2 mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-[#242424] text-[#eeeeee] border-none hover:bg-[#303030] hover:text-[#eeeeee]"
                  >
                    <a
                      href={currentProject?.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Website
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-[#242424] text-[#eeeeee] border-none hover:bg-[#303030] hover:text-[#eeeeee]"
                  >
                    <a
                      href={currentProject?.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Docs
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-[#242424] text-[#eeeeee] border-none hover:bg-[#303030] hover:text-[#eeeeee]"
                  >
                    <a
                      href={currentProject?.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-[#242424] text-[#eeeeee] border-none hover:bg-[#303030] hover:text-[#eeeeee]"
                  >
                    <a
                      href={currentProject?.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
                <p className="text-muted-foreground">
                  {currentProject?.description} Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Perferendis aut quasi facilis
                  aliquam deleniti. Maiores ducimus impedit eos expedita! Alias
                  similique cupiditate facere dolor ipsa labore esse, vitae
                  sequi deserunt!
                </p>
              </div>
              <div className="flex md:flex-col flex-row gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="bg-[#46B1BC] text-[#eeeeee] border-none hover:bg-[#46b0bc99] hover:text-[#eeeeee]"
                >
                  <a
                    href={currentProject.processID == saturnID? "":currentProject?.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Stake
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="bg-[#00000000] text-[#46B1BC] border-[#46B1BC] border-[0.6px] hover:bg-[#303030] hover:text-[#46B1BC]"
                >
                  <a
                    href={currentProject.processID == saturnID? "":currentProject?.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Unlock className="mr-2 h-4 w-4" />
                    Unstake
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="team">
          <TabsList className="grid w-full sm:grid-cols-4 grid-cols-2 sm:gap-6 bg-[#161616] text-[#eeeeee] tracking-wider font-thin">
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="token">Token</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
            <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
          </TabsList>
          <TabsContent value="team">
            <Card className="mb-8 bg-[#161616] border-none">
              <CardHeader>
                <CardTitle className="text-[#eeeeee] text-[21px]">
                  Meet the Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {currentProject?.team.map((member, index) => (
                    <Card key={index} className="mb-8 bg-[#242424] border-none">
                      <CardContent className="flex items-center space-x-4 pt-6">
                        <Avatar>
                          <AvatarImage
                            src={member.imgLink}
                            alt={member.officialName}
                          />
                          <AvatarFallback>
                            {member.officialName.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-[#eeeeee] text-[18pxx]">
                            {member.officialName}
                          </h3>
                          <p className="text-[15px] text-muted-foreground">
                            {member.role}
                          </p>
                          <div className="flex space-x-4 mt-2">
                            {member.links.github && (
                              <a
                                href={member.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-5 w-5 text-[#eeeeee]" />
                              </a>
                            )}
                            {member.links.twitter && (
                              <a
                                href={member.links.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Twitter className="h-5 w-5 text-[#eeeeee]" />
                              </a>
                            )}
                            {member.links.dribble && (
                              <a
                                href={member.links.dribble}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Dribbble className="h-5 w-5 text-[#eeeeee]" />
                              </a>
                            )}
                            {member.links.discord && (
                              <a
                                href={member.links.discord}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <DiscordLogoIcon className="h-5 w-5 text-[#eeeeee]" />
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="token">
            <Card className="mb-8 bg-[#161616] border-none">
              <CardHeader>
                <CardTitle className="text-[#eeeeee] text-[21px]">
                  Token Information
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row">
                <div className="grid grid-cols-2 gap-4 text-[#eeeeeec4]">
                  <div>
                    <h3 className="font-semibold text-[#46B1BC]">Name:</h3>
                    <p>
                      {currentProject?.token?.name
                        ? currentProject?.token?.name
                        : "N/A"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#46B1BC]">Ticker</h3>
                    <p>
                      {currentProject?.token?.ticker
                        ? currentProject?.token?.ticker
                        : "N/A"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#46B1BC]">Process ID</h3>
                    <p>
                      {currentProject?.token?.processId
                        ? currentProject?.token?.processId
                        : "N/A"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#46B1BC]">
                      Denomination
                    </h3>
                    <p>
                      {currentProject?.token?.denomination
                        ? currentProject?.token?.denomination
                        : "N/A"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#46B1BC]">
                      Total Supply
                    </h3>
                    <p>
                      {currentProject?.token?.totalSupply
                        ? currentProject?.token?.totalSupply
                        : "N/A"}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#46B1BC]">Tokenomics</h3>
                    <p>
                      {currentProject?.token?.tokenomics?.info
                        ? currentProject?.token?.tokenomics?.info
                        : "N/A"}
                    </p>
                    {currentProject?.token.tokenomics.linkToBlogorPaper && (
                      <a
                        href={
                          currentProject?.token.tokenomics.linkToBlogorPaper
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Read more
                      </a>
                    )}
                  </div>
                </div>
                <div>{/* Insert flow chart */}</div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="milestones">
            <Card className="mb-8 bg-[#161616] border-none">
              <CardHeader className="text-[#eeeeee] text-[21px]">
                <CardTitle>Project Milestones</CardTitle>
              </CardHeader>
              <CardContent className="text-[#eeeeeec4] px-10">
                <ol className="relative border-s border-gray-200">
                  {" "}
                  {currentProject?.mileStones.length? currentProject?.mileStones.map((milestone, index) => (
                    <li key={index} className="mb-10 ms-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-4  ring-gray-900 bg-cyan-900">
                        <svg
                          className="w-3 h-3 text-cyan-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-[#46B1BC]">
                        {milestone.goal}
                        {milestone.status === "Completed" && (
                          <Badge
                            className={`${
                              milestone.status === "Completed"
                                ? "bg-[#25dda655]"
                                : "bg-[#ff2a2a63]"
                            } rounded-full px-3 py-[4.5px] ml-[6px]`}
                            variant={
                              milestone.status === "Completed"
                                ? "default"
                                : "secondary"
                            }
                          >
                            <span
                              className={` ${
                                milestone.status === "Completed"
                                  ? "bg-[#1fac82]"
                                  : "bg-[#ff2a2a]"
                              } h-3 w-3 rounded-full mr-[6px] ml-[-3px]`}
                            ></span>
                            {milestone.status
                              ? milestone.status
                              : "In Progress"}
                          </Badge>
                        )}
                      </h3>
                      <div className="flex flex-row gap-3 justify-start items-center">
                        <time className="block text-sm font-normal text-gray-400 dark:text-gray-500 w-fit h-fit">
                          {milestone.date? milestone.date:"N/A"}
                        </time>
                        {milestone.proof&& 
                        <a
                          href={milestone.proof}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=""
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>}
                      </div>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        "N/A"
                      </p>
                    </li>
                  )): " N/A"}
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ecosystem">
            <Card className="mb-8 bg-[#161616] border-none">
              <CardHeader className="text-[#eeeeee] text-[21px]">
                <CardTitle>Ecosystem</CardTitle>
              </CardHeader>
              <CardContent className="text-[#eeeeeec4] px-10">
                <h3 className="font-semibold mb-2 text-[#46B1BC] text-[16.5px]">
                  Use Cases
                </h3>
                <ul className="list-disc pl-5 mb-4">
                  {currentProject?.useCases.length?currentProject?.useCases.map((useCase, index) => (
                    <li key={index} className="mb-4">
                      <span>
                        <span className="text-[#eeeeee]">{useCase.name}:</span>{" "}
                        <span className="block">
                          {useCase.info? useCase.info: "N/A"}{" "}
                          {useCase.liveLink && <a
                            href={useCase.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline sm:ml-6 sm:mt-0 mt-3 border-[#46B1BC] text-[#46B1BC] border-[1px] px-[12px] py-[6px] rounded-md text-[13.5px] sm:inline block w-fit"
                          >
                            Try it
                          </a>}
                        </span>
                      </span>
                    </li>
                  )): "N/A"}
                </ul>
                <h3 className="font-semibold mb-2 text-[#46B1BC] text-[16.5px] mt-6">
                  Collaborations
                </h3>
                <div className="list-disc pl-5 grid lg:grid-cols-6 sm:grid-cols-3">
                  {currentProject?.collaborations.length? currentProject?.collaborations.map((collab, index) => (
                    <a
                      href={collab.link? collab.link: ""}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      className="flex flex-col gap-[3px] items-center justify-center"
                    >
                      <Avatar className="h-20 w-20">
                        <AvatarImage
                          src={collab.logoImageLink? collab.logoImageLink: ""}
                          alt={currentProject?.name}
                        />
                        <AvatarFallback className="text-[#000000]">
                          {collab.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-[#eeeeee]">{collab.name}</h3>
                      <h6 className="text-[13.5px] text-center">
                        {collab.info? collab.info: "N/A"}
                      </h6>
                    </a>
                  )): "N/A"}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }
}
