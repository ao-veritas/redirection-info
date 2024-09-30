import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Progress } from "./ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Input } from "./ui/input"
import { CoinsIcon, TrendingUpIcon, LockIcon, UnlockIcon } from 'lucide-react'
import confetti from 'canvas-confetti'

// Mock data (replace with actual data fetching in a real application)
const mockUserData = {
  holdings: {
    tAoEth: 100,
    tAoDai: 500,
    tAoSol: 200,
  },
  staked: {
    tAoEth: 50,
    tAoDai: 200,
    tAoSol: 100,
  },
  ao: 1000,
}

const mockProjects = [
  {
    name: "Project Alpha",
    logo: "/placeholder.svg?height=50&width=50",
    tagline: "Revolutionizing DeFi",
    userTokens: 1000,
    yield: { tAoEth: 0.1, tAoDai: 0.5, tAoSol: 0.2 },
    staked: {
      tAoEth: 20,
      tAoDai: 100,
      tAoSol: 50,
    },
  },
  {
    name: "Project Beta",
    logo: "/placeholder.svg?height=50&width=50",
    tagline: "Next-gen NFT Platform",
    userTokens: 500,
    yield: { tAoEth: 0.2, tAoDai: 0.3, tAoSol: 0.4 },
    staked: {
      tAoEth: 30,
      tAoDai: 100,
      tAoSol: 50,
    },
  },
]

export default function UserDashboard() {
  const [aoBalance, setAoBalance] = useState(mockUserData.ao)

  useEffect(() => {
    const timer = setInterval(() => {
      setAoBalance(prevBalance => prevBalance + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="container mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-[#40959D]">User Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TokenCard 
            title="$tAoEth" 
            held={mockUserData.holdings.tAoEth} 
            staked={mockUserData.staked.tAoEth} 
          />
          <TokenCard 
            title="$tAoDai" 
            held={mockUserData.holdings.tAoDai} 
            staked={mockUserData.staked.tAoDai} 
          />
          <TokenCard 
            title="$tAoSol" 
            held={mockUserData.holdings.tAoSol} 
            staked={mockUserData.staked.tAoSol} 
          />
        </div>

        <Card className="bg-[#111111] border-[#40959D]">
          <CardHeader>
            <CardTitle className="flex items-center text-[#40959D]">
              <CoinsIcon className="mr-2" />
              $AO Holdings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{aoBalance.toLocaleString()}</div>
            <p className="text-sm text-[#40959D]">Increasing in real-time</p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-[#40959D]">Your Projects</h2>
        <div className="space-y-4">
          {mockProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TokenCard({ title, held, staked }) {
  const total = held + staked
  const stakedPercentage = (staked / total) * 100

  return (
    <Card className="bg-[#111111] border-[#40959D]">
      <CardHeader>
        <CardTitle className="text-[#40959D]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-2 text-white">
          <span>Held: {held}</span>
          <span>Staked: {staked}</span>
        </div>
        <Progress value={stakedPercentage} className="h-2 bg-[#FFFFFF] text-[#40959D]" />
        <p className="text-sm text-[#40959D] mt-2">
          {stakedPercentage.toFixed(2)}% Staked
        </p>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ project }) {
  const [isStakeModalOpen, setIsStakeModalOpen] = useState(false)
  const [isUnstakeModalOpen, setIsUnstakeModalOpen] = useState(false)

  return (
    <Card className="bg-[#111111] border-[#40959D]">
      <CardContent className="flex items-start space-x-4 pt-6">
        <img src={project.logo} alt={`${project.name} logo`} className="w-12 h-12 rounded" />
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-[#40959D]">{project.name}</h3>
          <p className="text-sm text-white">{project.tagline}</p>
          <div className="flex items-center mt-2 text-white">
            <CoinsIcon className="w-4 h-4 mr-1" />
            <span className="text-sm">{project.userTokens} tokens</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <YieldInfo token="$tAoEth" value={project.yield.tAoEth} />
            <YieldInfo token="$tAoDai" value={project.yield.tAoDai} />
            <YieldInfo token="$tAoSol" value={project.yield.tAoSol} />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <StakedInfo token="$tAoEth" value={project.staked.tAoEth} />
            <StakedInfo token="$tAoDai" value={project.staked.tAoDai} />
            <StakedInfo token="$tAoSol" value={project.staked.tAoSol} />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <Button size="sm" className="bg-[#40959D] text-white hover:bg-[#40959D]/80" onClick={() => setIsStakeModalOpen(true)}>
            <LockIcon className="w-4 h-4 mr-1" />
            Stake
          </Button>
          <Button size="sm" variant="outline" className="border-[#40959D] text-[#40959D] hover:bg-[#40959D]/10" onClick={() => setIsUnstakeModalOpen(true)}>
            <UnlockIcon className="w-4 h-4 mr-1" />
            Unstake
          </Button>
        </div>
      </CardContent>
      <StakeModal isOpen={isStakeModalOpen} onClose={() => setIsStakeModalOpen(false)} project={project} />
      <UnstakeModal isOpen={isUnstakeModalOpen} onClose={() => setIsUnstakeModalOpen(false)} project={project} />
    </Card>
  )
}

function YieldInfo({ token, value }) {
  return (
    <div className="flex items-center text-xs text-white">
      <TrendingUpIcon className="w-3 h-3 mr-1 text-[#40959D]" />
      <span>{value} {token}</span>
    </div>
  )
}

function StakedInfo({ token, value }) {
  return (
    <div className="flex items-center text-xs text-white">
      <LockIcon className="w-3 h-3 mr-1 text-[#40959D]" />
      <span>{value} {token} staked</span>
    </div>
  )
}

function StakeModal({ isOpen, onClose, project }) {
  const [selectedToken, setSelectedToken] = useState('tAoEth')
  const [amount, setAmount] = useState('')
  const [stakeStep, setStakeStep] = useState(0)

  const availableTokens = {
    tAoEth: 500,
    tAoDai: 1000,
    tAoSol: 750
  }

  const handleStake = () => {
    setStakeStep(1)
    const timer = setInterval(() => {
      setStakeStep(prev => {
        if (prev >= 3) {
          clearInterval(timer)
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          })
          return 3
        }
        return prev + 1
      })
    }, 1500)
  }

  const handleMax = () => {
    setAmount(availableTokens[selectedToken].toString())
  }

  const projectTokensReceived = parseFloat(amount) * project.yield[selectedToken]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#111111] text-white border border-[#40959D]">
        <DialogHeader>
          <DialogTitle className="text-[#40959D] flex items-center">
            <LockIcon className="mr-2" />
            Stake {selectedToken} and get {project.name} tokens
          </DialogTitle>
        </DialogHeader>
        {stakeStep === 0 ? (
          <div className="space-y-4">
            <Select onValueChange={setSelectedToken} defaultValue={selectedToken}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tAoEth">$tAoEth</SelectItem>
                <SelectItem value="tAoDai">$tAoDai</SelectItem>
                <SelectItem value="tAoSol">$tAoSol</SelectItem>
              </SelectContent>
            </Select>
            <div>
              <p>Available {selectedToken}: {availableTokens[selectedToken]}</p>
            </div>
            <div>
              <label htmlFor="stakeAmount" className="block text-sm font-medium text-[#40959D]">
                Enter quantity of {selectedToken} to be staked
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input
                  type="number"
                  name="stakeAmount"
                  id="stakeAmount"
                  className="block w-full pr-16 text-white bg-[#111111] border-[#40959D]"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button
                    type="button"
                    onClick={handleMax}
                    className="h-full rounded-md border border-transparent bg-[#40959D] text-white hover:bg-[#40959D]/80"
                  >
                    Max
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <p>You will receive: {projectTokensReceived.toFixed(2)} {project.name} tokens</p>
            </div>
            <Button onClick={handleStake} className="w-full bg-[#40959D] text-white hover:bg-[#40959D]/80">
              Stake
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#40959D]">Staking Progress</h3>
            <Progress value={(stakeStep / 3) * 100} className="h-2 bg-[#FFFFFF] text-[#40959D]" />
            <ul className="space-y-2">
              <li className={`flex items-center ${stakeStep >= 1 ? 'text-[#40959D]' : 'text-gray-500'}`}>
                <LockIcon className="mr-2" /> {amount} {selectedToken} staked on Saturn
              </li>
              <li className={`flex items-center ${stakeStep >= 2 ? 'text-[#40959D]' : 'text-gray-500'}`}>
                <CoinsIcon className="mr-2" /> {projectTokensReceived.toFixed(2)} {project.name} tokens received
              </li>
              <li className={`flex items-center ${stakeStep >= 3 ? 'text-[#40959D]' : 'text-gray-500'}`}>
                <TrendingUpIcon className="mr-2" /> {projectTokensReceived.toFixed(2)} {project.name} tokens added to your wallet
              </li>
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function UnstakeModal({ isOpen, onClose, project }) {
  const [selectedToken, setSelectedToken] = useState('tAoEth')
  const [amount, setAmount] = useState('')
  const [unstakeStep, setUnstakeStep] = useState(0)

  const handleUnstake = () => {
    setUnstakeStep(1)
    const timer = setInterval(() => {
      setUnstakeStep(prev => {
        if (prev >= 3) {
          clearInterval(timer)
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          })
          return 3
        }
        return prev + 1
      })
    }, 1500)
  }

  const handleMax = () => {
    setAmount(project.staked[selectedToken].toString())
  }

  const projectTokensReturned = parseFloat(amount) / project.yield[selectedToken]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#111111] text-white border border-[#40959D]">
        <DialogHeader>
          <DialogTitle className="text-[#40959D] flex items-center">
            <UnlockIcon className="mr-2" />
            Unstake {selectedToken} from {project.name}
          </DialogTitle>
        </DialogHeader>
        {unstakeStep === 0 ? (
          <div className="space-y-4">
            <Select onValueChange={setSelectedToken} defaultValue={selectedToken}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tAoEth">$tAoEth</SelectItem>
                <SelectItem value="tAoDai">$tAoDai</SelectItem>
                <SelectItem value="tAoSol">$tAoSol</SelectItem>
              </SelectContent>
            </Select>
            <div>
              <p>Staked {selectedToken}: {project.staked[selectedToken]}</p>
            </div>
            <div>
              <label htmlFor="unstakeAmount" className="block text-sm font-medium text-[#40959D]">
                Enter quantity of {selectedToken} to be unstaked
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input
                  type="number"
                  name="unstakeAmount"
                  id="unstakeAmount"
                  className="block w-full pr-16 text-white bg-[#111111] border-[#40959D]"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button
                    type="button"
                    onClick={handleMax}
                    className="h-full rounded-md border border-transparent bg-[#40959D] text-white hover:bg-[#40959D]/80"
                  >
                    Max
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <p>You will return: {projectTokensReturned.toFixed(2)} {project.name} tokens</p>
            </div>
            <Button onClick={handleUnstake} className="w-full bg-[#40959D] text-white hover:bg-[#40959D]/80">
              Unstake
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#40959D]">Unstaking Progress</h3>
            <Progress value={(unstakeStep / 3) * 100} className="h-2 bg-[#FFFFFF] text-[#40959D]" />
            <ul className="space-y-2">
              <li className={`flex items-center ${unstakeStep >= 1 ? 'text-[#40959D]' : 'text-gray-500'}`}>
                <UnlockIcon className="mr-2" /> {amount} {selectedToken} unstaked from {project.name}
              </li>
              <li className={`flex items-center ${unstakeStep >= 2 ? 'text-[#40959D]' : 'text-gray-500'}`}>
                <CoinsIcon className="mr-2" /> {projectTokensReturned.toFixed(2)} {project.name} tokens returned
              </li>
              <li className={`flex items-center ${unstakeStep >= 3 ? 'text-[#40959D]' : 'text-gray-500'}`}>
                <TrendingUpIcon className="mr-2" /> {amount} {selectedToken} added to your wallet
              </li>
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}