import { useParams } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from '../components/Layout/Footer'
import { projects } from "../_utils/projects";
import ComingSoon from "./ComingSoon";
import { useEffect } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import {
    orbitMessageActivity,
    orbitMessageDistribution,
    orbitTokenBalances,
    orbitUniqueUsersData,
    orbitUserMetrics,
} from "../data_files/0rbit/data";
import {
    outcomeMessageActivity,
    outcomeMessageDistribution,
    outcomeTokenBalances,
    outcomeUniqueUsersData,
    outcomeUserMetrics,
} from "../data_files/Outcome/data";
import {
    apusMessageActivity,
    apusMessageDistribution,
    apusTokenBalances,
    apusUniqueUsersData,
    apusUserMetrics,
} from "../data_files/Apus/data";
  
const Orbit = {
    name: "0rbit",
    processID: "BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ",
    tokenID: "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc",
    messageActivity: orbitMessageActivity,
    messageDistribution: orbitMessageDistribution,
    tokenBalances: orbitTokenBalances,
    uniqueUsersData: orbitUniqueUsersData,
    userMetrics: orbitUserMetrics
};
const Outcome = {
    name: "Outcome",
    processID: "Dgs1OEsExsPRVcbe_3buCGf0suVKUFwMJFddqMhywbY",
    tokenID: "Dgs1OEsExsPRVcbe_3buCGf0suVKUFwMJFddqMhywbY",
    messageActivity: outcomeMessageActivity,
    messageDistribution: outcomeMessageDistribution,
    tokenBalances: outcomeTokenBalances,
    uniqueUsersData: outcomeUniqueUsersData,
    userMetrics: outcomeUserMetrics
};
const Apus = {
    name: "Apus",
    processID: "vp4pxoOsilVxdsRqTmLjP86CwwUwtj1RoKeGrFVxIVk",
    tokenID: "al1xXXnWnfJD8qyZJvttVGq60z1VPGn4M5y6uCcMBUM",
    messageActivity: apusMessageActivity,
    messageDistribution: apusMessageDistribution,
    tokenBalances: apusTokenBalances,
    uniqueUsersData: apusUniqueUsersData,
    userMetrics: apusUserMetrics
};
const Analysis = () => {
  const { processID } = useParams();
  const list = [Orbit, Outcome, Apus];
  const projectWithAnalysis = projects.filter((project) => project.processID === processID && project.analysis === true);
    const projectData = list.find((listItem) => {
        return listItem?.name === projectWithAnalysis[0]?.name
    })

  useEffect(() => {
    console.log('projectWithAnalysis',projectWithAnalysis)
    console.log('projectData', projectData)
  }, [])
  return (
    <>
        <Navbar />
        {projectWithAnalysis.length > 0 ? 
        <main className="bg-[#111111] w-full py-[120px] flex flex-col items-center min-h-[96vh]">
            <Dashboard project={projectWithAnalysis[0]} messageActivity={projectData?.messageActivity} messageDistribution={projectData?.messageDistribution} tokenBalances={projectData?.tokenBalances} uniqueUsersData={projectData?.uniqueUsersData} userMetrics={projectData?.userMetrics}/>
        </main> : <ComingSoon />}
        <Footer />
    </>
  )
};

export default Analysis;
