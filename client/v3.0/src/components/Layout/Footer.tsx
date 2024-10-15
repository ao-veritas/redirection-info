import { Link } from "react-router-dom";

const Footer = () => {
  return (

<footer className="bg-[#151515] w-full border-t-[1px] border-[#212121]">
    <div className="mx-auto w-full py-6 lg:py-8 max-w-[1800px]">
        <div className="md:flex md:justify-between px-20">
          <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                  <img src="/logos/RecLogoDark.svg" className="h-[45px] me-3" alt="FlowBite Logo" />
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2> */}
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link to="/staking" className="hover:underline">Staking</Link>
                      </li>
                      <li className="mb-4">

                        
                        <div className="relative sm:max-w-xl sm:mx-auto">
                          <div className="group cursor-pointer relative inline-block text-center">
                            <span className="text-gray-500 dark:text-gray-400 font-medium">
                            Analysis Dashboard
                            </span>
                            <div className="opacity-0 w-[120px] bg-[#244549] text-[#46B1BC] text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-[9px] pointer-events-none">
                              <div className="min-h-[3px] min-w-[3px] rounded-full bg-[#46B1BC] mr-[3px] inline">
                                ....
                              </div>
                              Coming Soon
                              <svg
                                className="absolute text-[#244549] h-2 w-full left-0 top-full"
                                x="0px"
                                y="0px"
                                viewBox="0 0 255 255"
                              >
                                <polygon
                                  className="fill-current"
                                  points="0,0 127.5,127.5 255,0"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                          {/* <Link to="/dashboard" className="hover:underline">Analysis Dashboard</Link> */}
                      </li>
                      <li>
                          <Link to="https://drive.google.com/file/d/15b_b2sBowymI460agBPJKLP_4sHVbcSq/view?usp=sharing" target="_blank" className="hover:underline">Product Demo</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2> */}
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link to="https://discord.gg/Ee84m9Cf" target="_blank" className="hover:underline ">Help Center</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="https://hashnode.com/@Veritas-ao" target="_blank" className="hover:underline">Blogs</Link>
                      </li>
                      <li>
                          <Link to="/about" className="hover:underline">Collaborations</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2> */}
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link to="https://discord.gg/Ee84m9Cf" target="_blank" className="hover:underline">Careers</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="/about" className="hover:underline">About Team</Link>
                      </li>
                      <li >
                      <div className="relative sm:max-w-xl sm:mx-auto">
                          <div className="group cursor-pointer relative inline-block text-center">
                            <span className="text-gray-500 dark:text-gray-400 font-medium">
                            Security & Compliance
                            </span>
                            <div className="opacity-0 w-[120px] bg-[#244549] text-[#46B1BC] text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-[9px] pointer-events-none">
                              <div className="min-h-[3px] min-w-[3px] rounded-full bg-[#46B1BC] mr-[3px] inline">
                                ....
                              </div>
                              Coming Soon
                              <svg
                                className="absolute text-[#244549] h-2 w-full left-0 top-full"
                                x="0px"
                                y="0px"
                                viewBox="0 0 255 255"
                              >
                                <polygon
                                  className="fill-current"
                                  points="0,0 127.5,127.5 255,0"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                          {/* <Link to="/" className="hover:underline">Security & Compliance</Link> */}
                      </li>
                  </ul>
              </div>

          </div>
        </div>
      <hr className="my-6 border-[#212121] sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between px-20">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Veritas</Link>. All Rights Reserved.
          </span>
          <div className="flex flex-row md:gap-[36px] gap-[18px] items-center justify-between pt-[9px]">
          <Link to="https://discord.gg/Ee84m9Cf" target="_blank"><img src="/socials/gradient/discordCTA.svg" alt="" className="w-[27px] h-[27px]"/></Link>
            <Link to="https://x.com/Veritas_ao" target="_blank"><img src="/socials/gradient/twitterCTA.svg" alt="" className="w-[27px] h-[27px]"/></Link>
            <Link to="https://github.com/ao-veritas" target="_blank"><img src="/socials/gradient/githubCTA.svg" alt="" className="w-[27px] h-[27px]"/></Link>
            <Link to="https://calendly.com/taveesha-agarwal/collab-calls" target="_blank"><img src="/socials/gradient/calendlyCTA.svg" alt="" className="w-[27px] h-[27px]"/></Link>
            <Link to="https://hashnode.com/@Veritas-ao" target="_blank" ><img src="/socials/gradient/hashnodeCTA.svg" alt="" className="w-[27px] h-[27px]"/></Link>
        </div>
      </div>
    </div>
</footer>

  );
};

export default Footer;
