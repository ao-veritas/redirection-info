import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Progress } from "./ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Input } from "./ui/input"
import { Switch } from "./ui/switch"
import { CoinsIcon, TrendingUpIcon, LockIcon, UnlockIcon, Hexagon, SunIcon, MoonIcon } from 'lucide-react'
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
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setAoBalance(prevBalance => prevBalance + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const bgColor = isDarkMode ? 'bg-gradient-to-br from-[#111111] to-[#1a1a2e]' : 'bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0]'
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800'
  const accentColor = isDarkMode ? 'from-[#40959D] to-[#5ee7d9]' : 'from-[#3a8a91] to-[#54d1c3]'

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} perspective-1000 transition-colors duration-300`}>
      <div className="container mx-auto p-4 space-y-6 transform-style-3d">
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${accentColor} animate-pulse`}>
            Futuristic User Dashboard
          </h1>
          <div className="flex items-center space-x-2">
            <SunIcon className={isDarkMode ? 'text-gray-400' : 'text-yellow-500'} />
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleDarkMode}
              className={`${isDarkMode ? 'bg-[#40959D]' : 'bg-gray-200'}`}
            />
            <MoonIcon className={isDarkMode ? 'text-[#40959D]' : 'text-gray-400'} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TokenCard 
            title="$tAoEth" 
            held={mockUserData.holdings.tAoEth} 
            staked={mockUserData.staked.tAoEth}
            isDarkMode={isDarkMode}
          />
          <TokenCard 
            title="$tAoDai" 
            held={mockUserData.holdings.tAoDai} 
            staked={mockUserData.staked.tAoDai}
            isDarkMode={isDarkMode}
          />
          <TokenCard 
            title="$tAoSol" 
            held={mockUserData.holdings.tAoSol} 
            staked={mockUserData.staked.tAoSol}
            isDarkMode={isDarkMode}
          />
        </div>

        <Card className={`${isDarkMode ? 'bg-gradient-to-br from-[#111111] to-[#1a1a2e] border-[#40959D]' : 'bg-white border-[#3a8a91]'} transform rotate-x-5 hover:rotate-x-0 transition-all duration-300`}>
          <CardHeader>
            <CardTitle className={`flex items-center ${isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]'}`}>
              <CoinsIcon className="mr-2" />
              $AO Holdings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${textColor}`}>{aoBalance.toLocaleString()}</div>
            <p className={`text-sm ${isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]'}`}>Increasing in real-time</p>
          </CardContent>
        </Card>

        <h2 className={`text-2xl font-bold mt-8 mb-4 text-transparent bg-clip-text bg-gradient-to-r ${accentColor}`}>Your Projects</h2>
        <div className="space-y-4">
          {mockProjects.map((project, index) => (
            <ProjectCard key={index} project={project} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TokenCard({ title, held, staked, isDarkMode }) {
  const total = held + staked
  const stakedPercentage = (staked / total) * 100

  return (
    <Card className={`${isDarkMode ? 'bg-gradient-to-br from-[#111111] to-[#1a1a2e] border-[#40959D]' : 'bg-white border-[#3a8a91]'} transform rotate-y-5 hover:rotate-y-0 transition-all duration-300`}>
      <CardHeader>
        <CardTitle className={`text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-[#40959D] to-[#5ee7d9]' : 'from-[#3a8a91] to-[#54d1c3]'}`}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`flex justify-between mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <span>Held: {held}</span>
          <span>Staked: {staked}</span>
        </div>
        <Progress value={stakedPercentage} className={`h-2 ${isDarkMode ? 'bg-[#FFFFFF] text-[#40959D]' : 'bg-gray-200 text-[#3a8a91]'}`} />
        <p className={`text-sm mt-2 ${isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]'}`}>
          {stakedPercentage.toFixed(2)}% Staked
        </p>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ project, isDarkMode }) {
  const [isStakeModalOpen, setIsStakeModalOpen] = useState(false)
  const [isUnstakeModalOpen, setIsUnstakeModalOpen] = useState(false)

  return (
    <Card className={`${isDarkMode ? 'bg-gradient-to-br from-[#111111] to-[#1a1a2e] border-[#40959D]' : 'bg-white border-[#3a8a91]'} transform rotate-x-3 hover:rotate-x-0 transition-all duration-300`}>
      <CardContent className="flex items-start space-x-4 pt-6">
        <div className="relative">
          <Hexagon className={`w-16 h-16 ${isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]'}`} />
          <img src={project.logo} alt={`${project.name} logo`} className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="flex-grow">
          <h3 className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-[#40959D] to-[#5ee7d9]' : 'from-[#3a8a91] to-[#54d1c3]'}`}>{project.name}</h3>
          <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{project.tagline}</p>
          <div className={`flex items-center mt-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            <CoinsIcon className="w-4 h-4 mr-1" />
            <span className="text-sm">{project.userTokens} tokens</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <YieldInfo token="$tAoEth" value={project.yield.tAoEth} isDarkMode={isDarkMode} />
            <YieldInfo token="$tAoDai" value={project.yield.tAoDai} isDarkMode={isDarkMode} />
            <YieldInfo token="$tAoSol" value={project.yield.tAoSol} isDarkMode={isDarkMode} />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <StakedInfo token="$tAoEth" value={project.staked.tAoEth} isDarkMode={isDarkMode} />
            <StakedInfo token="$tAoDai" value={project.staked.tAoDai} isDarkMode={isDarkMode} />
            <StakedInfo token="$tAoSol" value={project.staked.tAoSol} isDarkMode={isDarkMode} />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <Button size="sm" className={`bg-gradient-to-r ${isDarkMode ? 'from-[#40959D] to-[#5ee7d9]' : 'from-[#3a8a91] to-[#54d1c3]'} text-white hover:from-[#5ee7d9] hover:to-[#40959D] transition-colors duration-300`} onClick={() => setIsStakeModalOpen(true)}>
            <LockIcon className="w-4 h-4 mr-1" />
            Stake
          </Button>
          <Button size="sm" variant="outline" className={`${isDarkMode ? 'border-[#40959D] text-[#40959D]' : 'border-[#3a8a91] text-[#3a8a91]'} hover:bg-opacity-10 transition-colors duration-300`} onClick={() => setIsUnstakeModalOpen(true)}>
            <UnlockIcon className="w-4 h-4 mr-1" />
            Unstake
          </Button>
        </div>
      </CardContent>
      <StakeModal isOpen={isStakeModalOpen} onClose={() => setIsStakeModalOpen(false)} project={project} isDarkMode={isDarkMode} />
      <UnstakeModal isOpen={isUnstakeModalOpen} onClose={() => setIsUnstakeModalOpen(false)} project={project} isDarkMode={isDarkMode} />
    </Card>
  )
}

function YieldInfo({ token, value, isDarkMode }) {
  return (
    <div className={`flex items-center text-xs ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <TrendingUpIcon className={`w-3 h-3 mr-1 ${isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]'}`} />
      <span>{value} {token}</span>
    </div>
  )
}

function StakedInfo({ token, value, isDarkMode }) {
  return (
    <div className={`flex items-center text-xs ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <LockIcon className={`w-3 h-3 mr-1 ${isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]'}`} />
      <span>{value} {token} staked</span>
    </div>
  )
}

function StakeModal({ isOpen, onClose, project, isDarkMode }) {
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
      <DialogContent className={`${isDarkMode ? 'bg-gradient-to-br from-[#111111] to-[#1a1a2e] text-white border-[#40959D]' : 'bg-white text-gray-800 border-[#3a8a91]'}`}>
        <DialogHeader>
          <DialogTitle className={`text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-[#40959D] to-[#5ee7d9]' : 'from-[#3a8a91] to-[#54d1c3]'} flex items-center`}>
            <LockIcon className="mr-2" />
            Stake {selectedToken} and get {project.name} tokens
          </DialogTitle>
        </DialogHeader>
        {stakeStep === 0 ? (
          <div className="space-y-4">
            <Select onValueChange={setSelectedToken} defaultValue={selectedToken}>
              <SelectTrigger className={`w-full ${isDarkMode ? 'bg-[#111111] border-[#40959D] text-white' : 'bg-white border-[#3a8a91] text-gray-800'}`}>
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent className={isDarkMode ? 'bg-[#111111] border-[#40959D] text-white' : 'bg-white border-[#3a8a91] text-gray-800'}>
                <SelectItem value="tAoEth">$tAoEth</SelectItem>
                <SelectItem value="tAoDai">$tAoDai</SelectItem>
                <SelectItem value="tAoSol">$tAoSol</SelectItem>
              </SelectContent>
            </Select>
            <div>
              <p>Available {selectedToken}: {availableTokens[selectedToken]}</p>
            </div>
            <div>
              <label htmlFor="stakeAmount" className={`block text-sm font-medium ${isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]'}`}>
                Enter quantity of {selectedToken} to be staked
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input
                  type="number"
                  name="stakeAmount"
                  id="stakeAmount"
                  className={`block w-full pr-16 ${isDarkMode ? 'text-white bg-[#111111] border-[#40959D]' : 'text-gray-800 bg-white border-[#3a8a91]'}`}
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button
                    type="button"
                    onClick={handleMax}
                    className={`h-full rounded-md border border-transparent bg-gradient-to-r ${isDarkMode ? 'from-[#40959D] to-[#5ee7d9]' : 'from-[#3a8a91] to-[#54d1c3]'} text-white hover:from-[#5ee7d9] hover:to-[#40959D] transition-colors duration-300`}
                  >
                    Max
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <p>You will receive: {projectTokensReceived.toFixed(2)} {project.name} tokens</p>
            </div>
            <Button onClick={handleStake} className={`w-full bg-gradient-to-r ${isDarkMode ? 'from-[#40959D] to-[#5ee7d9]' : 'from-[#3a8a91] to-[#54d1c3]'} text-white hover:from-[#5ee7d9] hover:to-[#40959D] transition-colors duration-300`}>
              Stake
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className={`text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-[#40959D] to-[#5ee7d9]' : 'from-[#3a8a91] to-[#54d1c3]'}`}>Staking Progress</h3>
            <Progress value={(stakeStep / 3) * 100} className={`h-2 ${isDarkMode ? 'bg-[#FFFFFF] text-[#40959D]' : 'bg-gray-200 text-[#3a8a91]'}`} />
            <ul className="space-y-2">
              <li className={`flex items-center ${stakeStep >= 1 ? (isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]') : 'text-gray-500'}`}>
                <LockIcon className="mr-2" /> {amount} {selectedToken} staked on Saturn
              </li>
              <li className={`flex items-center ${stakeStep >= 2 ? (isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]') : 'text-gray-500'}`}>
                <CoinsIcon className="mr-2" /> {projectTokensReceived.toFixed(2)} {project.name} tokens received
              </li>
              <li className={`flex items-center ${stakeStep >= 3 ? (isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]') : 'text-gray-500'}`}>
                <TrendingUpIcon className="mr-2" /> {projectTokensReceived.toFixed(2)} {project.name} tokens added to your wallet
              </li>
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function UnstakeModal({ isOpen, onClose, project, isDarkMode }) {
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
      <DialogContent className={`${isDarkMode ? 'bg-gradient-to-br from-[#111111] to-[#1a1a2e] text-white border-[#40959D]' : 'bg-white text-gray-800 border-[#3a8a91]'}`}>
        <DialogHeader>
          <DialogTitle className={`text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-[#40959D] to-[#5ee7d9]' : 'from-[#3a8a91] to-[#54d1c3]'} flex items-center`}>
            <UnlockIcon className="mr-2" />
            Unstake {selectedToken} from {project.name}
          </DialogTitle>
        </DialogHeader>
        {unstakeStep === 0 ? (
          <div className="space-y-4">
            <Select onValueChange={setSelectedToken} defaultValue={selectedToken}>
              <SelectTrigger className={`w-full ${isDarkMode ? 'bg-[#111111] border-[#40959D] text-white' : 'bg-white border-[#3a8a91] text-gray-800'}`}>
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent className={isDarkMode ? 'bg-[#111111] border-[#40959D] text-white' : 'bg-white border-[#3a8a91] text-gray-800'}>
                <SelectItem value="tAoEth">$tAoEth</SelectItem>
                <SelectItem value="tAoDai">$tAoDai</SelectItem>
                <SelectItem value="tAoSol">$tAoSol</SelectItem>
              </SelectContent>
            </Select>
            <div>
              <p>Staked {selectedToken}: {project.staked[selectedToken]}</p>
            </div>
            <div>
              <label htmlFor="unstakeAmount" className={`block text-sm font-medium ${isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]'}`}>
                Enter quantity of {selectedToken} to be unstaked
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input
                  type="number"
                  name="unstakeAmount"
                  id="unstakeAmount"
                  className={`block w-full pr-16 ${isDarkMode ? 'text-white bg-[#111111] border-[#40959D]' : 'text-gray-800 bg-white border-[#3a8a91]'}`}
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button
                    type="button"
                    onClick={handleMax}
                    className={`h-full rounded-md border border-transparent bg-gradient-to-r ${isDarkMode ? 'from-[#40959D] to-[#5ee7d9]' : 'from-[#3a8a91] to-[#54d1c3]'} text-white hover:from-[#5ee7d9] hover:to-[#40959D] transition-colors duration-300`}
                  >
                    Max
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <p>You will return: {projectTokensReturned.toFixed(2)} {project.name} tokens</p>
            </div>
            <Button onClick={handleUnstake} className={`w-full bg-gradient-to-r ${isDarkMode ? 'from-[#40959D] to-[#5ee7d9]' : 'from-[#3a8a91] to-[#54d1c3]'} text-white hover:from-[#5ee7d9] hover:to-[#40959D] transition-colors duration-300`}>
              Unstake
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className={`text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-[#40959D] to-[#5ee7d9]' : 'from-[#3a8a91] to-[#54d1c3]'}`}>Unstaking Progress</h3>
            <Progress value={(unstakeStep / 3) * 100} className={`h-2 ${isDarkMode ? 'bg-[#FFFFFF] text-[#40959D]' : 'bg-gray-200 text-[#3a8a91]'}`} />
            <ul className="space-y-2">
              <li className={`flex items-center ${unstakeStep >= 1 ? (isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]') : 'text-gray-500'}`}>
                <UnlockIcon className="mr-2" /> {amount} {selectedToken} unstaked from {project.name}
              </li>
              <li className={`flex items-center ${unstakeStep >= 2 ? (isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]') : 'text-gray-500'}`}>
                <CoinsIcon className="mr-2" /> {projectTokensReturned.toFixed(2)} {project.name} tokens returned
              </li>
              <li className={`flex items-center ${unstakeStep >= 3 ? (isDarkMode ? 'text-[#40959D]' : 'text-[#3a8a91]') : 'text-gray-500'}`}>
                <TrendingUpIcon className="mr-2" /> {amount} {selectedToken} added to your wallet
              </li>
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}