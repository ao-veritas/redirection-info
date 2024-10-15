import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Globe, FileText, Twitter, Github, ExternalLink, Dribbble, Lock, Unlock } from "lucide-react"
import { DiscordLogoIcon } from "@radix-ui/react-icons"

// Mock data (replace with actual data)
const project = {
  name: "CryptoChain",
  processID: "CC001",
  logoImageLink: "/placeholder.svg?height=100&width=100",
  links: {
    website: "https://cryptochain.com",
    docs: "https://docs.cryptochain.com",
    discord: "https://discord.gg/cryptochain",
    twitter: "https://twitter.com/cryptochain",
    github: "https://github.com/cryptochain",
    other: ["https://medium.com/cryptochain"]
  },
  team: [
    {
      officialName: "Alice Johnson",
      pseudoName: "CryptoAlice",
      role: "Founder & CEO",
      imgLink: "/placeholder.svg?height=50&width=50",
      links: {
        github: "https://github.com/cryptoalice",
        twitter: "https://twitter.com/cryptoalice",
        dribble: "",
        discord:"https://twitter.com/cryptoalice",
        other: []
      }
    },
    {
        officialName: "Alice Johnson",
        pseudoName: "CryptoAlice",
        role: "Founder & CEO",
        imgLink: "/placeholder.svg?height=50&width=50",
        links: {
          github: "https://github.com/cryptoalice",
          twitter: "https://twitter.com/cryptoalice",
          dribble: "",
          discord:"https://twitter.com/cryptoalice",
          other: []
        }
      },
      {
        officialName: "Alice Johnson",
        pseudoName: "CryptoAlice",
        role: "Founder & CEO",
        imgLink: "/placeholder.svg?height=50&width=50",
        links: {
          github: "https://github.com/cryptoalice",
          twitter: "https://twitter.com/cryptoalice",
          dribble: "",
          discord:"https://twitter.com/cryptoalice",
          other: []
        }
      },
    // Add more team members...
  ],
  description: "CryptoChain is a revolutionary blockchain platform...",
  oneLiner: "Empowering decentralized applications with lightning-fast transactions.",
  token: {
    name: "CryptoChain Token",
    ticker: "CCT",
    processId: "CCT001",
    denomination: "cct",
    totalSupply: "1,000,000,000",
    tokenomics: {
      info: "50% public sale, 20% team, 30% ecosystem growth",
      linkToBlogorPaper: "https://cryptochain.com/tokenomics"
    }
  },
  gettingStartedGuide: "Visit our docs at https://docs.cryptochain.com to get started...",
  projectOrigin: "CryptoChain was founded in 2023 by a team of blockchain enthusiasts...",
  useCases: [
    {
      name: "Decentralized Exchange",
      info: "Trade tokens securely and efficiently on our DEX.",
      liveLink: "https://dex.cryptochain.com",
      other: []
    },
    // Add more use cases...
  ],
  advisorsInvestors: [
    {
      name: "Blockchain Ventures",
      role: "Lead Investor",
      moreInfo: "Provided seed funding and strategic guidance.",
      amountIfAny: ["$5,000,000"]
    },
    // Add more advisors/investors...
  ],
  mileStones: [
    {
      goal: "Mainnet Launch",
      date: "2023-12-01",
      proof: "https://cryptochain.com/blog/mainnet-launch",
      status: "Completed"
    },
    // Add more milestones...
  ],
  mediaMentions: [
    "https://techcrunch.com/2023/11/15/cryptochain-raises-20m-in-series-a",
    // Add more media mentions...
  ],
  collaborations: [
    {
      name: "DeFi Alliance",
      link: "https://defialliance.com",
      info: "Strategic partnership to advance DeFi adoption"
    },
    // Add more collaborations...
  ],
  ownershipPercentages: [
    {
      name: "Alice Johnson",
      role: "Founder & CEO",
      percentage: "30%"
    },
    // Add more ownership percentages...
  ]
}

export default function Component() {
  return (
    <div className="container px-[15px]">
      <Card className="mb-8 bg-[#161616] border-none">
        <CardHeader>
          <div className="flex sm:flex-row flex-col gap-4 items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={project.logoImageLink} alt={project.name} />
              <AvatarFallback>{project.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl text-[#FFFFFF] sm:text-start text-center">{project.name}</CardTitle>
              <CardDescription>{project.oneLiner}</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
        <div className="flex md:flex-row flex-col gap-6 justify-between items-center">
            <div className="flex flex-col sm:items-start items-center">
          <div className="grid sm:grid-cols-4 grid-cols-2 w-fit gap-2 mb-4">
            <Button variant="outline" size="sm" asChild className="bg-[#242424] text-[#eeeeee] border-none hover:bg-[#303030] hover:text-[#eeeeee]">
              <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                Website
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="bg-[#242424] text-[#eeeeee] border-none hover:bg-[#303030] hover:text-[#eeeeee]">
              <a href={project.links.docs} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Docs
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="bg-[#242424] text-[#eeeeee] border-none hover:bg-[#303030] hover:text-[#eeeeee]">
              <a href={project.links.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="bg-[#242424] text-[#eeeeee] border-none hover:bg-[#303030] hover:text-[#eeeeee]">
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground">{project.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut quasi facilis aliquam deleniti. Maiores ducimus impedit eos expedita! Alias similique cupiditate facere dolor ipsa labore esse, vitae sequi deserunt!</p>
          </div>
          <div className="flex md:flex-col flex-row gap-3">
          <Button variant="outline" size="sm" asChild className="bg-[#46B1BC] text-[#eeeeee] border-none hover:bg-[#46b0bc99] hover:text-[#eeeeee]">
              <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                <Lock className="mr-2 h-4 w-4" />
                Stake
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="bg-[#00000000] text-[#46B1BC] border-[#46B1BC] border-[0.6px] hover:bg-[#303030] hover:text-[#46B1BC]">
              <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                <Unlock className="mr-2 h-4 w-4" />
                Unstake
              </a>
            </Button> 
          </div>
          </div>
        </CardContent>

      </Card>

      <Tabs defaultValue="team ">
        <TabsList className="grid w-full sm:grid-cols-4 grid-cols-2 sm:gap-6 bg-[#161616] text-[#eeeeee] tracking-wider font-thin">
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="token">Token</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
        </TabsList>
        <TabsContent value="team">
          <Card className="mb-8 bg-[#161616] border-none">
            <CardHeader>
              <CardTitle className="text-[#eeeeee] text-[21px]">Meet the Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {project.team.map((member, index) => (
                  <Card key={index} className="mb-8 bg-[#242424] border-none">
                    <CardContent className="flex items-center space-x-4 pt-6">
                      <Avatar>
                        <AvatarImage src={member.imgLink} alt={member.officialName} />
                        <AvatarFallback>{member.officialName.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-[#eeeeee] text-[18pxx]">{member.officialName}</h3>
                        <p className="text-[15px] text-muted-foreground">{member.role}</p>
                        <div className="flex space-x-4 mt-2">
                          {member.links.github && (
                            <a href={member.links.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-5 w-5 text-[#eeeeee]" />
                            </a>
                          )}
                          {member.links.twitter && (
                            <a href={member.links.twitter} target="_blank" rel="noopener noreferrer">
                              <Twitter className="h-5 w-5 text-[#eeeeee]" />
                            </a>
                          )}
                          {member.links.dribble && (
                            <a href={member.links.dribble} target="_blank" rel="noopener noreferrer">
                              <Dribbble className="h-5 w-5 text-[#eeeeee]" />
                            </a>
                          )}
                          {member.links.discord && (
                            <a href={member.links.discord} target="_blank" rel="noopener noreferrer">
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
          <Card>
            <CardHeader>
              <CardTitle>Token Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Name</h3>
                  <p>{project.token.name}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Ticker</h3>
                  <p>{project.token.ticker}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Process ID</h3>
                  <p>{project.token.processId}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Denomination</h3>
                  <p>{project.token.denomination}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Total Supply</h3>
                  <p>{project.token.totalSupply}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Tokenomics</h3>
                  <p>{project.token.tokenomics.info}</p>
                  <a href={project.token.tokenomics.linkToBlogorPaper} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Read more
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="milestones">
          <Card>
            <CardHeader>
              <CardTitle>Project Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {project.mileStones.map((milestone, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <Badge variant={milestone.status === "Completed" ? "default" : "secondary"}>{milestone.status}</Badge>
                    <div>
                      <h3 className="font-semibold">{milestone.goal}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.date}</p>
                    </div>
                    <a href={milestone.proof} target="_blank" rel="noopener noreferrer" className="ml-auto">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ecosystem">
          <Card>
            <CardHeader>
              <CardTitle>Ecosystem</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Use Cases</h3>
              <ul className="list-disc pl-5 mb-4">
                {project.useCases.map((useCase, index) => (
                  <li key={index}>
                    <strong>{useCase.name}:</strong> {useCase.info}{" "}
                    <a href={useCase.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      Try it
                    </a>
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold mb-2">Collaborations</h3>
              <ul className="list-disc pl-5">
                {project.collaborations.map((collab, index) => (
                  <li key={index}>
                    <a href={collab.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {collab.name}
                    </a>
                    : {collab.info}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}