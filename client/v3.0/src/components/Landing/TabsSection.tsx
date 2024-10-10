import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Check, Zap, Shield } from "lucide-react"

const tabData = [
  {
    id: "tab1",
    title: "Tab 1",
    heading: "Amazing Feature Set",
    image: "/placeholder.svg?height=400&width=400",
    features: [
      { icon: Check, text: "Easy to use interface" },
      { icon: Zap, text: "Lightning fast performance" },
      { icon: Shield, text: "Secure and reliable" },
    ],
  },
  {
    id: "tab2",
    title: "Tab 2",
    heading: "Powerful Integrations",
    image: "/placeholder.svg?height=400&width=400",
    features: [
      { icon: Check, text: "Seamless third-party connections" },
      { icon: Zap, text: "Real-time data synchronization" },
      { icon: Shield, text: "Enterprise-grade security" },
    ],
  },
]

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(tabData[0].id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={tabData.find((tab) => tab.id === activeTab)?.image || ""}
            alt="Feature illustration"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-auto bg-slate-400"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="">
            <TabsList className="grid w-[450px] h-[60px] grid-cols-2 bg-[#2A2A2A] rounded-full px-6 gap-6">
              {tabData.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="bg-[#2a2a2a] border-[#40959D] border-[3px] rounded-full py-[6px] text-[18px] text-[#40959D]">
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabData.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <h2 className="text-2xl font-bold mb-4">{tab.heading}</h2>
                <ul className="space-y-4">
                  {tab.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <feature.icon className="w-5 h-5 text-primary" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}