// import { ConnectButton, useConnection } from "arweave-wallet-kit";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  brandLightText,
  brandSecondaryBg,
  brandSecondaryText,
} from "../../_utils/colors";
import { Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  // let path = window.location.hash.split("#");
  const path = location.pathname.split("/");
  // const address = useActiveAddress();
  // const { connected } = useConnection();
  // console.log(path[1])
  // const validPaths = ["about", "profile", "faucet", "project", "addProject", ""];
  // let pageTitle = validPaths.includes(path[1]?.toLowerCase()) ? path[1] : "Home";
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  //   // event({
  //   //   action: 'toggle_menu',
  //   //   category: 'Navigation',
  //   //   label: 'Menu Toggle',
  //   //   value: isOpen ? 'Close' : 'Open',
  //   // });
  // };
  return (
    <>
      <nav className="lg:flex hidden justify-between items-center px-[15px] py-[21px] fadeIn fixed w-full z-50 bg-[#40959d00] backdrop-blur-[9px]">
        <Link to="/">
          <img
            alt="Home"
            src={"/logos/RecLogoDark.svg"}
            className="xl:h-[48px] xl:w-[300px] h-[30px] w-[180px]"
          />
        </Link>
        <div className="flex flex-row xl:gap-[45px] gap-[24px] justify-end items-center">
          <div className="flex flex-row xl:gap-[45px] gap-[24px] text-[#eeeeee] xl:text-[16.5px] text-[12px] tracking-wider">
            <Link
              to="/"
              className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
            ${
              path[1] == "" ? `${brandSecondaryText} underline` : brandLightText
            }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
            ${
              path[1] == "about"
                ? `${brandSecondaryText} underline`
                : brandLightText
            }`}
            >
              About Us
            </Link>
            <Link
              className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
          ${
            path[1] == "projects"
              ? `${brandSecondaryText} underline`
              : brandLightText
          }`}
              to="/projects"
            >
              Projects
            </Link>{" "}
            {/* <Link
              className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
          ${path[1] == "dashboard" ? `${brandSecondaryText} underline` : brandLightText}`}
              to="/dashboard"
            >
              Analysis Dashboards
            </Link>{" "} */}
            {/* <Link
              className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
          ${path[1] == "faucet" ? `${brandSecondaryText} underline` : brandLightText}`}
              to="/faucet"
            >
              Faucet
            </Link>{" "} */}
            <h3
              className={`hover:cursor-not-allowed underline-offset-[3px]
          ${
            path[1] == "faucet"
              ? `${brandSecondaryText} underline`
              : brandLightText
          }`}
            >
              Faucet
            </h3>{" "}
          </div>

          <div className="lg:flex hidden bg-white flex-row justify-between items-center rounded-[10px] xl:scale-100 scale-75 xl:mx-0 mx-[-39px]">
            {/* {connected && (
              <Link
                to="/profile"
                className="px-[21px] hover:underline underline-offset-[3px] hover:opacity-75 text-[16.5]"
              >
                Your Profile
              </Link>
            )} */}
            {/* <ConnectButton accent="rgb(14, 156, 156)" /> */}
            <a href="https://veritas-ao.app" target="_blank">
              <button
                className="hover:bg-[#40959da0] rounded-[9px] 
          xl:w-[210px] sm:w-[180px] w-[120px]
          xl:text-[18px] sm:text-[15px] text-[13.5px]
         
          py-[10.5px] bg-[#40959D] text-white hover:opacity-95 "
              >
                Go To Dapp
              </button>
            </a>
          </div>
        </div>
      </nav>
      {/* PHONE  */}
      <nav
        className={`flex flex-row lg:hidden justify-between items-start px-[21px] py-[21px] fadeIn fixed w-full z-50 
        ${
          isOpen
            ? "h-[100vh] bg-[#40959d7e] backdrop-blur-[3px]"
            : "h-[11vh] bg-[#40959d00] backdrop-blur-[9px]"
        }`}
      >
        <Link to="/">
          <img
            alt="Home"
            src={"/logos/RecLogoDark.svg"}
            className="h-[30px] w-[180px]"
          />
        </Link>
        <div className="flex flex-col justify-start gap-6 items-end pt-[6px]">
          <div
            onClick={() => {
              console.log("clicked");
              setIsOpen(!isOpen);
            }}
            className="flex flex-col gap-[4.5px] hover:cursor-pointer"
          >
            <div
              className={`w-[30px] py-[1.5px] rounded-3xl ${brandSecondaryBg} ${
                isOpen ? "rotate-45 mb-[-15px]" : ""
              }`}
            ></div>
            <div
              className={`w-[30px] py-[1.5px] rounded-3xl ${brandSecondaryBg} ${
                isOpen ? "scale-0" : " scale-100"
              }`}
            ></div>
            <div
              className={`w-[30px] py-[1.5px] rounded-3xl ${brandSecondaryBg} ${
                isOpen ? " -rotate-45" : ""
              }`}
            ></div>
          </div>
          <div
            className={`flex flex-col justify-start items-end gap-[30px] text-[#eeeeee] mt-9 text-[16.5px] tracking-wider text-right
        ${isOpen ? " translate-x-0" : " translate-x-52"}`}
          >
            <Link
              to="/"
              className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
          ${
            path[1] == "" ? `${brandSecondaryText} underline` : "text-[#ffffff]"
          }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
          ${
            path[1] == "about"
              ? `${brandSecondaryText} underline`
              : "text-[#ffffff]"
          }`}
            >
              About Us
            </Link>
            <Link
              className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
        ${
          path[1] == "projects"
            ? `${brandSecondaryText} underline`
            : "text-[#ffffff]"
        }`}
              to="/projects"
            >
              Projects
            </Link>{" "}
            {/* <Link
              className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
        ${path[1] == "faucet" ? `${brandSecondaryText} underline` : "text-[#ffffff]"}`}
              to="/faucet"
            >
              Faucet
            </Link>{" "} */}
            <Link
              className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
        ${
          path[1] == "faucet"
            ? `${brandSecondaryText} underline`
            : "text-[#ffffff]"
        }`}
              to="/faucet"
            >
              Faucet
            </Link>{" "}
          </div>
        </div>
      </nav>
    </>
  );
}
