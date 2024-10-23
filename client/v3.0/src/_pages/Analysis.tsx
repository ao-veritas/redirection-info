import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
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
  userMetrics: orbitUserMetrics,
};
const Outcome = {
  name: "Outcome",
  processID: "Dgs1OEsExsPRVcbe_3buCGf0suVKUFwMJFddqMhywbY",
  tokenID: "Dgs1OEsExsPRVcbe_3buCGf0suVKUFwMJFddqMhywbY",
  messageActivity: outcomeMessageActivity,
  messageDistribution: outcomeMessageDistribution,
  tokenBalances: outcomeTokenBalances,
  uniqueUsersData: outcomeUniqueUsersData,
  userMetrics: outcomeUserMetrics,
};
const Apus = {
  name: "Apus",
  processID: "vp4pxoOsilVxdsRqTmLjP86CwwUwtj1RoKeGrFVxIVk",
  tokenID: "al1xXXnWnfJD8qyZJvttVGq60z1VPGn4M5y6uCcMBUM",
  messageActivity: apusMessageActivity,
  messageDistribution: apusMessageDistribution,
  tokenBalances: apusTokenBalances,
  uniqueUsersData: apusUniqueUsersData,
  userMetrics: apusUserMetrics,
};
const Analysis = () => {
  const { processID } = useParams();
  const list = [Orbit, Outcome, Apus];
  const projectWithAnalysis = projects.filter(
    (project) => project.processID === processID && project.analysis === true
  );
  const projectData = list.find((listItem) => {
    return listItem?.name === projectWithAnalysis[0]?.name;
  });

  useEffect(() => {
    console.log("projectWithAnalysis", projectWithAnalysis);
    console.log("projectData", projectData);
  }, []);
  return (
    <>
      <Navbar />
      {projectWithAnalysis.length > 0 ? (
        <main className="bg-[#111111] w-full py-[120px] flex flex-col items-center min-h-[96vh]">
          <nav
            className="flex w-full items-center justify-start md:px-20 px-[18px]"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center md:text-[18px] text-[15px] font-medium text-[#244549] hover:text-[#40959D]"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    to="/projects"
                    className="ms-1 md:text-[18px] text-[15px] font-medium text-[#244549] hover:text-[#40959D]"
                  >
                    Projects
                  </Link>
                </div>
              </li>
              <li aria-current="page">
              <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    to={`/project/${processID}`}
                    className="ms-1 md:text-[18px] text-[15px] font-medium text-[#244549] hover:text-[#40959D]"
                  >
                    {projectData?.name}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
              <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link to={`/project/${processID}/analysis`}>
                    <span className="ms-1 md:text-[18px] text-[15px] font-medium text-[#40959D]">
                        On Chain Analysis
                    </span>
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
          <Dashboard
            project={projectWithAnalysis[0]}
            messageActivity={projectData?.messageActivity}
            messageDistribution={projectData?.messageDistribution}
            tokenBalances={projectData?.tokenBalances}
            uniqueUsersData={projectData?.uniqueUsersData}
            userMetrics={projectData?.userMetrics}
          />
        </main>
      ) : (
        <ComingSoon />
      )}
      <Footer />
    </>
  );
};

export default Analysis;
