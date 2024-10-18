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
import { useEffect, useRef, useState } from "react";
import { ProjectType } from "../_utils/types";
import { projects } from "../_utils/projects";
import { getAllTransactions } from "../_utils/info";
import { useUserAoETH } from "../_utils/useAoEth";
import { useActiveAddress } from "arweave-wallet-kit";
import { Link } from "react-router-dom";
import stake from "../_utils/stake";
import { humanizeDuration } from "../_utils/helpers";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui";
import { Loader } from "../components";
import ConfettiExplosion from 'react-confetti-explosion'
import BinaryPredictionModal from "../components/ProjectPage/Predict";

export default function Component({ pid }: any) {
  const saturnID: string = import.meta.env.VITE_SATURN_ID;
  const address = useActiveAddress();
//   const projectID: string = import.meta.env.VITE_SATURN_ID;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stakeLoading, setStakeLoading] = useState(false);
  const [currentTransTimestamp, setCurrentTransTimestamp] =
    useState<number>(1826424517808);

  const [recievedAoETH, setRecievedAoETH] = useState(false);
  const recievedAoETHRef = useRef(recievedAoETH);
  const [projectConfirmedStake, setProjectConfirmedStake] = useState(false);
  const projectConfirmedStakeRef = useRef(projectConfirmedStake);
  const [rewardsSent, setRewardsSent] = useState(false);
  const rewardsSentRef = useRef(rewardsSent);

  const [amount, setAmount] = useState("");
  const [step, setStep] = useState("0");
  const availableAOEth = useUserAoETH(address).aoeth ?? 0;
  const openModalHandler = () => {
    setIsModalOpen(true);
    setStep("1");
    setCurrentTransTimestamp(0);
    // setRecievedAoETH(false)
    // setProjectConfirmedStake(false)
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
    setStep("0");
    setCurrentTransTimestamp(0);
  };
  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === "" || Number(newValue) < 0) {
      setAmount("");
      return;
    }
    if (Number(newValue) > availableAOEth) {
      setAmount(availableAOEth.toString());
      return;
    }
    setAmount(e.target.value);
  };
  const maxClickHandler = () => {
    setAmount(availableAOEth.toString());
  };
  useEffect(() => {
    recievedAoETHRef.current = recievedAoETH; // Keep the ref updated with the latest state
  }, [recievedAoETH]);
  useEffect(() => {
    projectConfirmedStakeRef.current = projectConfirmedStake; // Keep the ref updated with the latest state
  }, [projectConfirmedStake]);
  useEffect(() => {
    rewardsSentRef.current = rewardsSent; // Keep the ref updated with the latest state
  }, [rewardsSent]);
  useEffect(() => {
    const check = async () => {
      while (recievedAoETHRef.current === false && step == "2") {
        const check = await checkRecievedAoETH();
        console.log("check:", check);
        setRecievedAoETH(check);
        console.log("step", step);
        console.log("rec:", recievedAoETH);
      }
      while (projectConfirmedStakeRef.current === false && step == "2") {
        const check = await checkProjectConfirmedStake();
        console.log("check:", check);
        setProjectConfirmedStake(check);
        console.log("step", step);
        console.log("rec:", projectConfirmedStake);
      }
      while (rewardsSentRef.current === false && step == "2") {
        const check = await checkRewardsSent();
        console.log("check:", check);
        setRewardsSent(check);
        console.log("step", rewardsSent);
      }
    };
    check();
  }, [step]);

  const checkRecievedAoETH = async () => {
    const transactionTable = await getAllTransactions();
    if (!transactionTable) {
      alert("Error! Please contact admins");
      return false;
    }
    console.log("for rec current:", currentTransTimestamp);
    let flag = false;
    transactionTable?.map((transaction) => {
      //    console.log("in check trans: ", Number(transaction.Timestamp))
      if (
        Number(transaction.Timestamp) > currentTransTimestamp &&
        transaction.Type == "btf"
      ) {
        flag = true;
      }
    });
    console.log("this it", flag);
    return flag;
  };
  const checkProjectConfirmedStake = async () => {
    const transactionTable = await getAllTransactions();
    if (!transactionTable) {
      alert("Error! Please contact admins");
      return false;
    }
    console.log("for rec current:", currentTransTimestamp);
    let flag = false;
    transactionTable?.map((transaction) => {
      //    console.log("in check trans: ", Number(transaction.Timestamp))
      if (
        Number(transaction.Timestamp) > currentTransTimestamp &&
        transaction.Type == "ptf"
      ) {
        flag = true;
      }
    });
    console.log("this it", flag);
    return flag;
  };
  const checkRewardsSent = async () => {
    const transactionTable = await getAllTransactions();
    if (!transactionTable) {
      alert("Error! Please contact admins");
      return false;
    }
    console.log("for rec current:", currentTransTimestamp);
    let flag = false;
    transactionTable?.map((transaction) => {
      //    console.log("in check trans: ", Number(transaction.Timestamp))
      if (
        Number(transaction.Timestamp) > currentTransTimestamp &&
        transaction.Type == "ftu"
      ) {
        flag = true;
      }
    });
    console.log("this it", flag);
    return flag;
  };
  const [currentProject, setCurrentProject] = useState<ProjectType>();
  useEffect(() => {
    projects.map((project) => {
      if (project.processID == pid) {
        setCurrentProject(project);
      }
    });
  }, []);
  if (currentProject) {
    return (
      <>
        <div className="container md:px-20 px-[15px] max-w-[1800px]">
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
                    {currentProject?.description? currentProject?.description: "Desiption N/A"}
                  </p>
                </div>
                <div className="flex md:flex-col flex-row gap-3">
                  <Button
                    onClick={() => {
                      if (currentProject.processID == saturnID) {
                        openModalHandler();
                      } else {
                        console.log("works");
                        toast.info("Coming Soon!");
                      }
                    }}
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-[#46B1BC] text-[#eeeeee] border-none hover:bg-[#46b0bc99] hover:text-[#eeeeee]"
                  >
                    <span>
                      <Lock className="mr-2 h-4 w-4" />
                      Stake
                    </span>
                  </Button>
                  <Button
                    onClick={() => {
                      toast.info("Coming Soon!");
                    }}
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-[#00000000] text-[#46B1BC] border-[#46B1BC] border-[0.6px] hover:bg-[#303030] hover:text-[#46B1BC]"
                  >
                    <span>
                      <Unlock className="mr-2 h-4 w-4" />
                      Unstake
                    </span>
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
                      <Card
                        key={index}
                        className="mb-8 bg-[#242424] border-none"
                      >
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
                      <h3 className="font-semibold text-[#46B1BC]">
                        Process ID
                      </h3>
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
                      <h3 className="font-semibold text-[#46B1BC]">
                        Tokenomics
                      </h3>
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
                    {currentProject?.mileStones.length
                      ? currentProject?.mileStones.map((milestone, index) => (
                        <div className="flex justify-between">
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
                                {milestone.date ? milestone.date : "N/A"}
                              </time>
                              {milestone.proof && (
                                <a
                                  href={milestone.proof}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className=""
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              )}
                            </div>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                              "N/A"
                            </p>
                          </li>
                          <BinaryPredictionModal />
                        </div>
                        ))
                      : " N/A"}
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
                    {currentProject?.useCases.length
                      ? currentProject?.useCases.map((useCase, index) => (
                          <li key={index} className="mb-4">
                            <span>
                              <span className="text-[#eeeeee]">
                                {useCase.name}:
                              </span>{" "}
                              <span className="block">
                                {useCase.info ? useCase.info : "N/A"}{" "}
                                {useCase.liveLink && (
                                  <a
                                    href={useCase.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline sm:ml-6 sm:mt-0 mt-3 border-[#46B1BC] text-[#46B1BC] border-[1px] px-[12px] py-[6px] rounded-md text-[13.5px] sm:inline block w-fit"
                                  >
                                    Try it
                                  </a>
                                )}
                              </span>
                            </span>
                          </li>
                        ))
                      : "N/A"}
                  </ul>
                  <h3 className="font-semibold mb-2 text-[#46B1BC] text-[16.5px] mt-6">
                    Collaborations
                  </h3>
                  <div className="list-disc pl-5 grid lg:grid-cols-6 sm:grid-cols-3">
                    {currentProject?.collaborations.length
                      ? currentProject?.collaborations.map((collab, index) => (
                          <a
                            href={collab.link ? collab.link : ""}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="flex flex-col gap-[3px] items-center justify-center"
                          >
                            <Avatar className="h-20 w-20">
                              <AvatarImage
                                src={
                                  collab.logoImageLink
                                    ? collab.logoImageLink
                                    : ""
                                }
                                alt={currentProject?.name}
                              />
                              <AvatarFallback className="text-[#000000]">
                                {collab.name.substring(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                            <h3 className="text-[#eeeeee]">{collab.name}</h3>
                            <h6 className="text-[13.5px] text-center">
                              {collab.info ? collab.info : "N/A"}
                            </h6>
                          </a>
                        ))
                      : "N/A"}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center w-full h-full bg-[#626262] bg-opacity-50 backdrop-blur-sm">
            <div className="relative w-fit max-w-[450px] bg-[#111111] p-8 rounded-[9px] ">
              <button
                onClick={closeModalHandler}
                className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-gray-600"
              >
                &times;
              </button>

              {step == "1" && (
                <>
                  <h2 className="text-[30px] font-semibold text-[#f1f1f1]">
                    <span className="text-[#40959D]">Stake </span>$tAoEth,{" "}
                    <span className="text-[#40959D]"> Get </span>$
                    {currentProject?.token.ticker}{" "}
                    {/* <span className="text-[#40959D]">in return</span> */}
                  </h2>
                  <div className="mb-6">
                    <div className="text-[#40959D]">
                      Available $tAoEth:{" "}
                      <span className="font-semibold text-[#f1f1f1] lining-figures">
                        {availableAOEth}
                      </span>
                    </div>
                    <h4 className="text-[#8D8D8D] font-[Rale-SemiBold] text-[13.5px]">
                      Enter quantity of $tAoEth to be staked
                    </h4>
                    <div
                      className="flex items-center justify-between rounded bg-[#1A1A1A] text-[#f1f1f1]
                pl-2"
                    >
                      <input
                        disabled={stakeLoading}
                        type="number"
                        value={amount}
                        onChange={amountChangeHandler}
                        title="$tAoEth to be staked"
                        className="bg-[#00000000] p-2 w-full h-full"
                      />
                      <div className="h-full min-w-fit">
                        <button
                          onClick={maxClickHandler}
                          className="bg-[#111111] border-[2px] border-[#121212] text-white px-3 py-2 rounded min-w-fit m-2"
                        >
                          GO MAX
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] p-4 rounded mb-6 max-w-[100%]">
                    <p className="text-[#8D8D8D] text-[12px]">{`On staking $tAoEth you will receive ${
                      amount
                        ? parseFloat(amount) *
                          currentProject?.exchangeInfo.aoethRewardRate
                        : "-"
                    } of $${
                      currentProject?.token.ticker
                    }. There is a cool down period of ${humanizeDuration(
                      currentProject?.exchangeInfo.cooldownPeriod
                    )} for unstaking your $tAoEth.`}</p>
                  </div>
                  <button
                    onClick={async () => {
                      setStakeLoading(true);
                      setCurrentTransTimestamp(new Date().getTime());
                      console.log("time:", currentTransTimestamp);
                      console.log(
                        "passing amount",
                        parseFloat(amount) * Math.pow(10, 12)
                      );
                      await stake(parseFloat(amount) * Math.pow(10, 12));
                      //   start(startDate);
                      setRecievedAoETH(false);
                      setStep("2");
                      setStakeLoading(false);
                    }}
                    disabled={
                      amount === "" ||
                      parseFloat(amount) <= 0 ||
                      parseFloat(amount) > availableAOEth ||
                      stakeLoading
                    }
                    className={`flex gap-4 w-fit ${
                      stakeLoading ? "bg-gray-400" : "bg-[#205156]"
                    } text-[#f1f1f1] py-[6px] px-[18px] rounded`}
                  >
                    {stakeLoading ? <Loader /> : ""}
                    Stake $tAoEth
                  </button>
                </>
              )}
              {step == "2" && (
                <div className="relative">
                  <div className="absolute h-0 inset-0 flex mt-2 ml-2">
                    <div className="w-1 h-[100px] bg-teal-300"></div>
                  </div>
                  <div className="relative z-10 flex flex-col space-y-6">
                    <div className="flex items-center">
                      <div
                        className={`flex items-center justify-center w-6 h-6 rounded-full border-teal-600 ${
                          recievedAoETH ? "bg-teal-600" : "bg-gray-800"
                        }  text-white`}
                      >
                        ✓
                      </div>
                      <div
                        className={`ml-4 ${
                          recievedAoETH ? "text-teal-300" : "text-white"
                        } text-lg`}
                      >
                        {amount} $tAoEth staked on {currentProject?.name}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div
                        className={`flex items-center justify-center w-6 h-6 rounded-full border-teal-600 ${
                          projectConfirmedStake ? "bg-teal-600" : "bg-gray-800"
                        } text-white`}
                      >
                        ✓
                      </div>
                      <div
                        className={`ml-4 ${
                          projectConfirmedStake ? "text-teal-300" : "text-white"
                        } text-lg`}
                      >
                        {currentProject.name} confirmed deposit
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div
                        className={`flex items-center justify-center w-6 h-6 rounded-full border-teal-600 ${
                          rewardsSent ? "bg-teal-600" : "bg-gray-800"
                        } text-white`}
                      >
                        ✓
                      </div>

                      <div
                        className={`ml-4 ${
                          rewardsSent ? "text-teal-300" : "text-white"
                        } text-lg`}
                      >
                        ${currentProject.token.ticker} reward sent to your
                        wallet
                      </div>
                    </div>
                  </div>
                  <button
                    disabled={!rewardsSent}
                    // onClick={() => (window.location.href = "/user")}
                    className={`${
                      !rewardsSent ? "bg-gray-400" : "bg-[#205156]"
                    } text-[#f1f1f1]  rounded m-4`}
                  >
                    {rewardsSent ? (
                      <div>
                          <Link to="/user" className="py-[6px] px-[18px]">
                            See Your Profile
                          </Link>
                          <ConfettiExplosion zIndex={99} force={0.8} duration={3000} particleCount={250} width={1600}/>
                      </div>
                    ) : (
                      <div className="flex gap-4 py-[6px] px-[18px]">
                        <Loader />
                        Confirming Transaction
                      </div>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}
