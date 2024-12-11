import { CategoryEnum, Project } from "./types";
import VeritasLogo from '../assets/SqLogoDark.svg'
// export const categories =[
//     'Infrastructure', 'Developer Tools',
//     'Defi',           'Labs',
//     'Wallet',         'AI',
//     'Investment',     'Bridge',
//     'Community',      'Creator Economy',
//     'NFT',            'Memecoin',
//     'Social',         'Game',
//     'Block Explorer'
//   ]
export const projects: Project[] = [
    {
        name: "0rbit",
        category: CategoryEnum.Infrastructure,
        analysis: true,
        processID: "BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ",
        logoImageLink: "https://www.0rbit.co/logos/sqLightFill.svg",
        bannerLink: "https://www.0rbit.co/logos/ogBanner.jpeg",
        links: {
            website: "https://0rbit.co/",
            docs: "https://docs.0rbit.co/",
            discord: "https://discord.gg/JVSjqaKJgV",
            twitter: "https://twitter.com/0rbitco",
            github: "https://github.com/0rbit-co",
            telegram: "",
            other: ["https://www.playground.0rbit.co/", "https://mirror.xyz/0x26B11B188E9E69b2426FD6111302E721F423020E"]
        },
        team: [{
            officialName: "Yash Garg",
            pseudoName: "megabyte",
            role: "Co-Founder",
            imgLink: "https://0rbit.co/team/megabyte.png",
            links: {
                github: "https://github.com/megabyte0x",
                twitter: "https://x.com/megabyte0x?t=WZYKcJAvN-CM7a6yU4lPNQ&s=09",
                dribble: "",
                discord: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Ayush Agrawal",
            pseudoName: "lucifer0x17",
            role: "Co-Founder",
            imgLink: "https://0rbit.co/team/lucifer.png",
            links: {
                discord: "",
                github: "https://github.com/Lucifer0x17",
                twitter: "https://x.com/Lucifer0x17?t=fH5LRms3xy2hSPLJbNubaA&s=09",
                dribble: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Manishi Bhatnagar",
            pseudoName: "",
            role: "UI/ UX Designer",
            imgLink: "https://0rbit.co/team/manishi.png",
            links: {
                discord: "",
                github: "",
                twitter: "https://x.com/0xManishi?t=FKn7XBJwlIXwJR-f4KGkzw&s=09",
                dribble: "https://dribbble.com/0xManishi",
                other: ["", ""],
            },
        },
        {
            officialName: "Sarthak Shah",
            pseudoName: "",
            role: "Engineer",
            imgLink: "https://0rbit.co/team/sarthak.png",
            links: {
                discord: "",
                github: "https://github.com/Not-Sarthak",
                twitter: "https://x.com/0xSarthak13?t=nvsUz9hxhq2hQO25wr8Rtw&s=09",
                dribble: "",
                other: ["", ""],
            },
        }],
        exchangeInfo: {
            cooldownPeriod: 10,
            aoethRewardRate: 60
        },
        description: "The Decentralized Oracle Network on AO for accessing any off-chain data.",
        oneLiner: "Decentralized Oracle Network on Arweave",
        token: {
            name: "0rbt",
            ticker: "0RBT",
            processId: "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            //     {
            //     name:"",
            //     info:"",
            //     liveLink:"",
            //     other:[""]
            // }
        ],
        advisorsInvestors: [{
            name: "",
            role: "",
            moreInfo: "",
            amountIfAny: [""],
        }],
        mileStones: [
            //     {
            //     goal:"",
            //     date:"",
            //     proof:"",
            //     status:""
            // }
        ],
        mediaMentions: [""],
        collaborations: [
            //     {
            //     name:"",
            //     link:"",
            //     info:""
            // }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },
    {
        name: "Veritas",
        category: CategoryEnum.Defi,
        analysis: false,
        processID: "l13OiZyp7T5YpmOqofjHRGyCbrpllLZp4HOyfa2WLPQ",
        logoImageLink: "https://pbs.twimg.com/profile_images/1835382616351965184/Y6TXCCub_400x400.jpg",
        bannerLink: "",
        links: {
            website: "https://redirection-info.vercel.app/",
            docs: "",
            discord: "https://discord.gg/uSR7KWhx9F",
            twitter: "https://x.com/Veritas_ao",
            github: "https://github.com/ao-veritas",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "Taveesha Agarwal",
            pseudoName: "0xLilith",
            role: "Founder",
            imgLink: "https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/team/lilith.png",
            links: {
                discord: "",
                github: "https://github.com/0xLPircy",
                twitter: "https://x.com/0xLPircy",
                dribble: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Manishi Bhatnagar",
            pseudoName: "",
            role: "UI/UX Designer",
            imgLink: "https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/team/manishi.png",
            links: {
                discord: "",
                github: "",
                twitter: "https://x.com/0xManishi",
                dribble: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Parth Shah",
            pseudoName: "",
            role: "Developer",
            imgLink: "https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/team/parth.png",
            links: {
                discord: "",
                github: "https://github.com/parthks",
                twitter: "https://x.com/1human_in/",
                dribble: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Chaitanya Bajpai",
            pseudoName: "",
            role: "Developer",
            imgLink: "",
            links: {
                discord: "",
                github: "https://github.com/cb7chaitanya",
                twitter: "https://x.com/cbajpai7",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "First ever platform on AO and Arweave to enable users to Analyse, Invest and Earnin Projects they can Trust!",
        oneLiner: "Permissionless Ecosystem Fundingand Project Analysis",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Permssionless Ecosystem Funding",
                info: "Stake bridged tokens and earn project tokens",
                liveLink: "https://redirection-info.vercel.app/project/rXQaiyznUgDrt7A0Nzl9OQN2QBJ3we1X3qMe2W5DBXU",
                other: [""]
            },
            {
                name: "Project Analysis",
                info: "Get On-chain and Off-chain data of project son AO and Arweave",
                liveLink: "https://redirection-info.vercel.app/dashboards",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "Arweave India",
                role: "Advisors",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "Arweave HH Cohort 2",
            date: "8-10 Sep 2024",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },
    {
        name: "Saturn",
        category: CategoryEnum.Defi,
        analysis: false,
        processID: "rXQaiyznUgDrt7A0Nzl9OQN2QBJ3we1X3qMe2W5DBXU",
        logoImageLink: "https://wkypibie7ccprx5ujbbqddvhyotazjdchydxq6w4pd6j7hik5ipa.arweave.net/srD0BQT4hPjftEhDAY6nw6YMpGI-B3h63Hj8n50K6h4",
        bannerLink: "/saturnBanner.png",
        links: {
            website: "/",
            docs: "/",
            discord: "https://discord.gg/MTP7BQgr",
            twitter: "https://x.com/Veritas_ao",
            github: "https://github.com/fundars/platform2.0",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "Alice Johnson",
            pseudoName: "JohnDaughter",
            role: "CEO",
            imgLink: "https://jh2ukzgb546squzma2zxtkr6ckignjy7c6thm7xhe43aj7q3norq.arweave.net/SfVFZMHvPShTLAazeao-EpBmpx8XpnZ-5yc2BP4ba6M",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Bob Smith",
            pseudoName: "CryptoSmith",
            role: "Co-Founder",
            imgLink: "https://3v7icsuojvbggeifpyk6avvv5pz4vueyaj3kmzu65xvf5msqlgaq.arweave.net/3X6BSo5NQmMRBX4V4Fa16_PK0JgCdqZmnu3qXrJQWYE",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },
        ],
        exchangeInfo: {
            cooldownPeriod: 10,
            aoethRewardRate: 60
        },
        description: "The Decentralized Dummy Project Functionality of Veritas. Lorem Ipsum Dolor Sit amet.",
        oneLiner: "Decentralized Dummy Placeholder Project",
        token: {
            name: "Sat",
            ticker: "SAT",
            processId: "lrTtKXMhdmMSi8ZfTsdSX24Xpm9FAo47CRHe82HZ7XA",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Dummy Staking for Veritas",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [{
            name: "",
            role: "",
            moreInfo: "",
            amountIfAny: [""],
        }],
        mileStones: [
            //     {
            //     goal:"",
            //     date:"",
            //     proof:"",
            //     status:""
            // }
        ],
        mediaMentions: [""],
        collaborations: [{
            name: "Veritas",
            link: "/",
            info: "",
            logoImageLink: VeritasLogo
        }],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },
    {
        name: "BetterIDEa",
        category: CategoryEnum.DeveloperTools,
        analysis: false,
        processID: "processID for BetterIDEa",
        logoImageLink: "https://betteridea.dev/logo.png",
        bannerLink: "",
        links: {
            website: "https://betteridea.dev",
            docs: "https://docs.betteridea.dev",
            discord: "https://discord.gg/nm6VKUQBrA",
            twitter: "https://x.com/betteridea_dev",
            github: "https://github.com/betteridea-dev",
            telegram: "",
            other: [
                "https://ide.betteridea.dev/",
                "https://apm.betteridea.dev/",
                "https://mirror.xyz/0xCf673b87aFBed6091617331cC895376209d3b923",
                "https://linkedin.com/company/betteridea-dev",
            ],
        },
        team: [
            {
                officialName: "Ankush",
                pseudoName: "weeblet",
                role: "Founder",
                imgLink:
                    "https://pbs.twimg.com/profile_images/1797158678032003072/kD_OsxAF_400x400.jpg",
                links: {
                    github: "https://github.com/ankushKun",
                    twitter: "https://x.com/ankushKun_",
                    dribble: "",
                    discord: "",
                    other: [
                        "https://linkedin.com/in/ankushKun",
                        "https://instagram.com/ankushKun_",
                    ],
                },
            },
        ],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Suite of developer tools to simplify the DevX on Arweave & AO",
        oneLiner: "Suite of developer tools to simplify the DevX on Arweave & AO",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: "",
            },
        },
        gettingStartedGuide: "https://docs.betteridea.dev/new-project",
        projectOrigin: "ArweaveIndia Hackerhouse",
        useCases: [
            {
                name: "Easy development on AO",
                info: "Get started with building your permaweb apps easily",
                liveLink: "https://ide.betteridea.dev",
                other: [""],
            },
            {
                name: "Package management for your processes",
                info: "Using APM you can easily install packages on your AO processes",
                liveLink: "https://apm.betteridea.dev",
                other: [""],
            },
            {
                name: "Live codecells",
                info: "Now you can add runnable ao lua code cells on any webapp, no wallet required",
                liveLink: "https://cookbook_ao.ar.io/tutorials/begin/messaging.html",
                other: ["https://www.npmjs.com/package/@betteridea/codecell"],
            },
        ],
        advisorsInvestors: [
            //   {
            //     name: "",
            //     role: "",
            //     moreInfo: "",
            //     amountIfAny: [""],
            //   },
        ],
        mileStones: [
            //   {
            //     goal: "",
            //     date: "",
            //     proof: "",
            //     status: "",
            //   },
        ],
        mediaMentions: [""],
        collaborations: [
            {
                name: "Bazar",
                link: "",
                info: "Created a marketplace for user built code templates",
                logoImageLink: ""
            },
            {
                name: "0rbit",
                link: "https://www.playground.0rbit.co/",
                info: "Live lua codecells for demoing",
                logoImageLink: ""

            },
        ],
        ownershipPercentages: [
            {
                name: "",
                role: "",
                percentage: "",
            },
        ],
    },
    {
        name: "Outcome",
        category: CategoryEnum.Defi,
        analysis: true,
        processID: "Dgs1OEsExsPRVcbe_3buCGf0suVKUFwMJFddqMhywbY",
        logoImageLink: "https://www.outcome.gg/_next/image?url=%2FOutcomeLogoBlack.png&w=96&q=75",
        bannerLink: "",
        links: {
            website: "https://www.outcome.gg/",
            docs: "",
            discord: "",
            twitter: "https://x.com/outcome_gg",
            github: "",
            telegram: "",
            other: ["", ""]
        },
        team: [],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Outcøme is built on ao Computer to enable individuals to predict outcomes of games, stats, and a bunch of other things.",
        oneLiner: "Can you predict the AO future?",
        token: {
            name: "",
            ticker: "",
            processId: "Dgs1OEsExsPRVcbe_3buCGf0suVKUFwMJFddqMhywbY",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            //     {
            //     name:"",
            //     info:"",
            //     liveLink:"",
            //     other:[""]
            // }
        ],
        advisorsInvestors: [{
            name: "",
            role: "",
            moreInfo: "",
            amountIfAny: [""],
        }],
        mileStones: [],
        mediaMentions: [""],
        collaborations: [
            // {
            // name: "",
            // link: "",
            // info: "",
            // logoImageLink:""
            // }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },
    // {
    //     name: "Pixel Gaming",
    //     processID:"processID for Pixel Gaming",
    //     logoImageLink:"https://drive.google.com/file/d/172Owr-YwsgGZREo3q6tLiNdeE6Xm0hpA/view?usp=sharing",
    //     bannerLink:"",
    //     links: {
    //         website: "https://www.pixelgaming.us/",
    //         docs:"",
    //         discord: "",
    //         twitter: "https://x.com/pixelgamingao",
    //         github: "https://github.com/Panther-Lab/arweave",
    //         telegram:"",
    //         other: ["",""]
    //     },
    //     team: [{
    //         officialName:"Pawan AK",
    //         pseudoName:"",
    //         role:"Backend Developer , Community Opp",
    //         imgLink:"",
    //         links:{
    //             github:"https://github.com/pawanak",
    //             twitter:"https://x.com/pawan__ak",
    //             dribble:"",
    //             other:["",""],
    //         },
    //     }],
    //     exchangeInfo: {
    //         cooldownPeriod: 0,
    //         aoethRewardRate: 0,
    //       },
    //     description: "Gaming platform on AO  Play games to earn real rewards in our Play2Earn ecosystem, and if you're a Unity developer, create games and keep 80% of the revenue. Join us to play, earn, and develop in a secure, decentralized environment!",
    //     oneLiner: "Discover the Future of Gaming on Arweave",
    //     token: {
    //         name:"",
    //         ticker:"",
    //         processId:"5f9UIOFAKmf8kTmiTg_9ScuE330l6kdmu3zUO7Yv_68",
    //         denomination:"",
    //         totalSupply:"",
    //         tokenomics:{
    //             info:"",
    //             linkToBlogorPaper:""
    //         }
    //     },
    //     gettingStartedGuide:"",
    //     projectOrigin:"",
    //     useCases: [{
    //         name:"",
    //         info:"",
    //         liveLink:"",
    //         other:[""]
    //     }],
    //     advisorsInvestors:[{
    //         name:"",
    //         role:"",
    //         moreInfo:"",
    //         amountIfAny:[""],
    //     }],
    //     mileStones:[{
    //         goal:"",
    //         date:"",
    //         proof:"",
    //         status:""
    //     }],
    //     mediaMentions:[""],
    //     collaborations:[{
    //         name:"",
    //         link:"",
    //         info:""
    //     }],
    //     ownershipPercentages:[{
    //         name:"",
    //         role:"",
    //         percentage:""
    //     }]
    // },
    {
        name: "Community Labs",
        category: CategoryEnum.Labs,
        processID: "communityLabs",
        logoImageLink: "https://cdn.prod.website-files.com/66a95bb074e6f8f96d7b59a9/66cccaecde96e7b46c1a2330_Webclip.png",
        links: {
            telegram: "",
            website: "https://www.communitylabs.com",
            docs: "",
            discord: "https://discord.com/invite/GqxX2vtwRj",
            twitter: "https://x.com/CommunityLabs",
            github: "https://github.com/labscommunity",
            other: ["https://www.linkedin.com/company/communitylabs1/mycompany/", "https://www.instagram.com/communitylabsco/"]
        },
        team: [{
            officialName: "Tate Berenbaum",
            pseudoName: "",
            role: "Founder & CEO",
            imgLink: "https://cdn.prod.website-files.com/66c607043f775347e75460f6/66e84d25e9734769c3ac9d40_Placeholder%20Image.avif",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Kyla Witte",
            pseudoName: "",
            role: "Chief Operating Officer",
            imgLink: "https://cdn.prod.website-files.com/66c607043f775347e75460f6/66e9c6a3df81abf88305ddae_image%20(1)-p-500.jpg",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Matthew DiRienzo",
            pseudoName: "",
            role: "Chief Product Officer",
            imgLink: "https://cdn.prod.website-files.com/66c607043f775347e75460f6/66e84d35d08afca4efce936a_Placeholder%20Image-2-p-500.jpg",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Jeff Marsilio",
            pseudoName: "",
            role: "Chief Business Officer",
            imgLink: "https://cdn.prod.website-files.com/66c607043f775347e75460f6/66e84d3e1cb4ae9fdcf92419_Placeholder%20Image-3-p-500.jpg",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Ashlyn Pugh",
            pseudoName: "",
            role: "Chief of Staff",
            imgLink: "https://cdn.prod.website-files.com/66c607043f775347e75460f6/66e84d2dedf43a332bd774f7_Placeholder%20Image-1-p-500.avif",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Fayaz Usmani",
            pseudoName: "",
            role: "Head of Design",
            imgLink: "https://cdn.prod.website-files.com/66c607043f775347e75460f6/66ea20bd2b2a9f233a55f281_fayaz2-p-500.jpg",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Matias Parij",
            pseudoName: "",
            role: "Head of Engineering",
            imgLink: "https://cdn.prod.website-files.com/66c607043f775347e75460f6/66e9eab42fab4c05e86eaa7f_matias-p-500.jpg",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },
        ],
        description: "Community Labs is uniquely placed at the center of the Arweave & AO ecosystem to build foundational tools and infrastructure. Our goal is to create innovative solutions to pain points faced by developers and users alike. Through our venture studio, we provide founders and founding teams with the resources they need to identify product ideas and the ability to create, develop, and scale products from inception to mass adoption.",
        oneLiner: "Fueling technologies redefining the decentralized future.",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [{
            name: "",
            info: "",
            liveLink: "",
            other: [""]
        }],
        advisorsInvestors: [
            {
                name: "Lightspeed Venture Partners",
                role: "Lead Investor",
                moreInfo: "Venture",
                amountIfAny: [""],
            },
            {
                name: "Blockchain Capital ",
                role: "",
                moreInfo: "Venture",
                amountIfAny: [""],
            },
            {
                name: "Distributed Global",
                role: "",
                moreInfo: "Venture",
                amountIfAny: [""],
            },
            {
                name: "Brain Captial Crypto",
                role: "",
                moreInfo: "Venture",
                amountIfAny: [""],
            },
            {
                name: "Arweave",
                role: "",
                moreInfo: "Corporation",
                amountIfAny: [""],
            },
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [{
            logoImageLink: "",
            name: "",
            link: "",
            info: ""
        }],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }],
        analysis: false,
        bannerLink: "",
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0
        }
    },
    {
        name: "Forward Research",
        category: CategoryEnum.Labs,
        processID: "ForwardResearch",
        logoImageLink: "https://pbs.twimg.com/profile_images/1658890940856270848/5cNnfaY__400x400.jpg",
        // logoImageLink: "https://forward.arweave.dev/imgs/logo.png",
        links: {
            telegram: "",
            website: "https://fwd.g8way.io/",
            docs: "https://forward.arweave.dev/",
            discord: "",
            twitter: "https://twitter.com/fwdresearch",
            github: "",
            other: ["", ""]
        },
        team: [{
            officialName: "Sam Williams",
            pseudoName: "",
            role: "Founder & CEO",
            imgLink: "https://miro.medium.com/v2/resize:fit:1278/1*9ZPfD-Q6_BmBOK9xy5y3lg.png",
            links: {
                discord: "",
                github: "",
                twitter: "https://x.com/samecwilliams",
                dribble: "",
                other: ["https://sam.arweave.dev/", ""],
            },
        }],
        description: "Forward Research is a leading research and development incubator for the Arweave ecosystem. Supporting the best builders and founders focused on creating an entirely new class of web services on Arweave that provably respect users rights. Offering an environment tailored to help focus on what matters most: building, from zero to market fit.",
        oneLiner: "1 We are on a mission to make cyberspace freer and fairer for everyone.",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [{
            name: "",
            info: "",
            liveLink: "",
            other: [""]
        }],
        advisorsInvestors: [{
            name: "",
            role: "",
            moreInfo: "",
            amountIfAny: [""],
        }],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [{
            logoImageLink: "",
            name: "",
            link: "",
            info: ""
        }],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }],
        analysis: false,
        bannerLink: "",
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0
        }
    },
    {
        name: "Autonomous Finance",
        category: CategoryEnum.Infrastructure,
        processID: "AutonomousFianance",
        logoImageLink: "https://pbs.twimg.com/profile_images/1777516120498462721/Dx5DxPNC_400x400.jpg",
        links: {
            telegram: "",
            website: "https://www.autonomous.finance/",
            docs: "https://docs.autonomous.finance/",
            discord: "https://discord.gg/AK6C2PPWDc",
            twitter: "https://twitter.com/autonomous_af",
            github: "https://github.com/Autonomous-Finance",
            other: ["https://www.autonomous.finance/research/en-US", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        }],
        description: "Autonomous Finance is an organization focused on research, innovation, and development of AI-powered DeFi on AO. We build novel primitives, platforms, and tools powered by AI agents to provide autonomous, signal-driven financial services within AO's trusted execution environment.",
        oneLiner: "Autonomous Finance is an organization focused on research, innovation, and development of AI-powered DeFi on AO, the hyper-parallel computer.",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "https://docs.autonomous.finance/learn/concepts/products-overview",
        projectOrigin: "",
        useCases: [{
            name: "CoinBurn",
            info: "CoinBurn is a streamlined utility designed to track tokens sent to a designated burner address (0000000000000000000000000000000000000000000) that are permanently removed from circulation. This tool provides a straightforward way to monitor and verify burned tokens, ensuring transparency and ease of access for users and applications. By querying the CoinBurner interface, users can quickly determine the total amount of tokens burned for a specific asset by simply providing the contract address. This eliminates the need to sift through extensive transaction histories, saving time and simplifying the process. While CoinBurner focuses primarily on tracking and querying burned tokens, it also offers a minimalistic frontend for burning tokens directly by sending them to the burn address.",
            liveLink: "https://coinburn.arweave.net/",
            other: [""]
        },
        {
            name: "Botega",
            info: "Botega is a cutting-edge decentralized exchange (DEX) designed to prioritize and integrate autonomous agents as first-class participants. Operating fully permissionless on the ARNS botega (accessible via botega.ar.io, botega.arweave.net, etc.), it offers a robust, innovative trading environment. Botega supports sophisticated order types including trailing stop loss, dollar-cost averaging (DCA), limit orders, and more, each functioning as independent processes structured as simple autonomous agents. Additionally, Botega's AMMs (Automated Market Makers) are architected as autonomous agents, enabling dynamic and flexible liquidity reallocation.",
            liveLink: "https://botega.arweave.net/",
            other: [""]
        },
        {
            name: "AO Link",
            info: "ao.link serves as a message explorer for the ao Network, offering functionalities similar to block explorers in conventional blockchain systems. It includes message compute capabilities, graphical visualization of message links for clarity, real-time message streaming for up-to-date information, and a list of linked messages for organized navigation. Users can also view their token balances and messages inboxes. This tool provides a professional and efficient way to interact with and analyze the ao Network's structure and activity.",
            liveLink: "https://ao.link/",
            other: [""]
        },
        {
            name: "DataOS",
            info: "DataOS is a protocol developed atop the ao Network, leveraging it for computing power and Arweave for data storage, creating a synergistic foundation for its operations. As a ContentFI protocol, it employs autonomous AI agents to source and regenerate content derivatives, aiming to foster engagement and fulfill the intent of consumers. Through this innovative approach, DataOS not only enhances content relevance and accessibility but also establishes a rewarding mechanism for content creators.",
            liveLink: "https://dataos.so/",
            other: [""]
        },

        ],
        advisorsInvestors: [{
            name: "",
            role: "",
            moreInfo: "",
            amountIfAny: [""],
        }],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [{
            logoImageLink: "",
            name: "",
            link: "",
            info: ""
        }],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }],
        analysis: false,
        bannerLink: "",
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0
        }
    },

    {
        name: "BazAR",
        category: CategoryEnum.Defi,
        processID: "BazAR",
        logoImageLink: "https://bazar.arweave.net/favicon.svg",
        links: {
            telegram: "",
            website: "https://bazar.arweave.net/",
            docs: "https://bazar.arweave.net/#/docs/",
            discord: "https://discord.gg/weavers",
            twitter: "https://x.com/OurBazAR",
            github: "https://github.com/permaweb/bazar",
            other: ["https://obj7clfpkxjplizvuipqfygky7hrbijslyt6jivutx2e2qojf2ka.g8way.io/cFPxLK9V0vWjNaIfAuDKx88QoTJeJ-SitJ30TUHJLpQ?", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        }],
        description: "The BazAR Marketplace enables buying and selling of Atomic Assets on Arweave. Using an Arweave.app or ArConnect wallet, anyone can share and trade Atomic Assets on the permaweb with the $U token!",
        oneLiner: "buying and selling of Atomic Assets on Arweave",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [{
            name: "",
            info: "",
            liveLink: "",
            other: [""]
        }],
        advisorsInvestors: [{
            name: "",
            role: "",
            moreInfo: "",
            amountIfAny: [""],
        }],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [{
            logoImageLink: "",
            name: "",
            link: "",
            info: ""
        }],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }],
        analysis: false,
        bannerLink: "",
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0
        }
    },
    {
        name: "Dexi",
        category: CategoryEnum.Defi,
        processID: "Dexi",
        logoImageLink: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAAn1BMVEUYGRo+NTorKCs0LjKphpbruc6AZ3NPQ0kdHh8lIyWZeoinhpTjs8dGPEHVqLuPcn9yXmfQpLe/n62Oe4RjWF3ZsMGcgYy2laSGbHjFnK0cHB28vb1jY2Q9PT7gzNRiUVkjJCXd3d0tLi+4uLl2dnegoaHs7Ow/QEH19fVtbW7HyMiwsLDPz89SUlOnp6f///9JSkuHh4iQkZEzNDWWl5dXq7AqAAABCUlEQVR4AWIgGQAaG6ssi2EYhqaQPGZ+ZWbu/tc2cVIPkz4s6VwnVtSfiKZTHZfYbP6OLJaU0tVUGKXr5QbRbEu5dlPbUNB2p5HNXpOFMlw9yH488XG+iLxHtpPsCr6/iXxHxiR7aA96W9zFvS2yO7T1fUGeClRlv6IXZEe+xxbknZ6GKYNl35wn+SjX84UHJvmqMII5j2X7/BBmEvDhp1kaiCUrD/OCPyrh06rmI25AKW+pSDUpWnxXF/xox9fbvPfJUFTEsPDnr/JcmHn7DaoMYWb+DSsr6XX4mcBpqXlefUKmMcfoGr3IWMfgfe28PpliG3mfbriZERt1XxtxYL5/hLgCueRfegG9JxcIWMWBnAAAAABJRU5ErkJggg==",
        links: {
            telegram: "",
            website: "https://dexi.arweave.dev/",
            docs: "https://discord.gg/AK6C2PPWDc",
            discord: "",
            twitter: "https://twitter.com/autonomous_af",
            github: "https://github.com/Autonomous-Finance",
            other: ["https://www.autonomous.finance/research/en-US/dexi", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        }],
        description: "Dexi is an application on the AO network that autonomously identifies, collects, and aggregates diverse financial data from various events within the AO network. This data spans asset prices, token swaps, liquidity fluctuations, and token asset characteristics like smart contract details. The platform is built on a network of autonomous agents and responsive components. Dexi’s terminal is hosted on the Arweave network, upholding its fully decentralized, permissionless nature.",
        oneLiner: "",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [{
            name: "Real-Time Data for Web Users",
            info: "Dexi provides immediate access to financial data and analytics on its website, helping traders and analysts make informed decisions quickly. This is facilitated via read-only dry run transactions.",
            liveLink: "",
            other: [""]
        },
        {
            name: "Data Subscription for Automated Agents",
            info: "Other applications or automated trading bots can subscribe to receive continuous data updates from Dexi, enabling them to respond instantly to market changes.",
            liveLink: "",
            other: [""]
        }
        ],
        advisorsInvestors: [{
            name: "",
            role: "",
            moreInfo: "",
            amountIfAny: [""],
        }],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [{
            logoImageLink: "",
            name: "",
            link: "",
            info: ""
        }],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }],
        analysis: false,
        bannerLink: "",
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0
        }
    },
    {
        name: "arconnect",
        category: CategoryEnum.Wallet,
        processID: "arconnect",
        logoImageLink: "https://www.arconnect.io/_next/image?url=%2Flogo.png&w=640&q=75",
        links: {
            telegram: "",
            website: "https://www.arconnect.io/",
            docs: "https://docs.arconnect.io/",
            discord: "https://www.arconnect.io/discord",
            twitter: "https://www.arconnect.io/twitter",
            github: "https://www.arconnect.io/github",
            other: ["https://www.arconnect.io/download", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        }],
        description: "A non-custodial Arweave and AO native wallet with extensive features all in your favorite browser and mobile device",
        oneLiner: "Your gateway to Arweave and AO",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "https://docs.arconnect.io/",
        projectOrigin: "",
        useCases: [{
            name: "Manage assets View your activity",
            info: "View Arweave & aoComputer token balances and NFTs across multiple wallets and seamlessly switch between accounts. Oversee real-time on chain transaction history all in 1-click.",
            liveLink: "https://www.arconnect.io/#:~:text=View%20all-,Install%20now,-For%20browser",
            other: [""]
        },
        {
            name: "Send & Receive Tokens with ease",
            info: "Powerful Arweave and aoComputer token management with an easy-to-use interface. All wallet data is backed up by the secure browser extension storage API keeping your assets safe.",
            liveLink: "https://www.arconnect.io/#:~:text=View%20all-,Install%20now,-For%20browser",
            other: [""]
        }
        ],
        advisorsInvestors: [{
            name: "",
            role: "",
            moreInfo: "",
            amountIfAny: [""],
        }],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [{
            logoImageLink: "",
            name: "Bark",
            link: "https://bark.arweave.dev",
            info: "Bark is the AO Computer's first decentralized exchange."
        },
        {
            name: "Protocol.Land",
            link: "https://protocol.land/",
            info: "Protocol.Land is a decentralized home for decentralized codebases",
            logoImageLink: ""
        },
        {
            name: "Astro",
            link: "https://astrousd.com/",
            info: "Astro introduces USDA as the first overcollateralized stablecoin on AO.",
            logoImageLink: ""
        },

        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }],
        analysis: false,
        bannerLink: "",
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0
        }
    },
    {
        name: "Everpay",
        category: CategoryEnum.Infrastructure,
        processID: "Everpay",
        logoImageLink: "https://www.everpay.io/favicon.png",
        links: {
            telegram: "",
            website: "https://www.everpay.io/",
            docs: "https://docs.everpay.io/en/",
            discord: "https://discord.gg/keMNQZY9p4",
            twitter: "https://twitter.com/everPayHQ",
            github: "https://github.com/everFinance",
            other: ["https://ever.vision/#/", "https://news.ever.vision/"]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        }],
        description: "Real-time Arrival Unlike traditional blockchains where transfers have a wait time in order to be packaged, everPay transactions are verified and cached by everPay servers making it that assets arrive in real-time. There is no need to wait for transactions to be packaged, and the server guarantees that transactions are sequentially uploaded to the chain within minutes. everPay protocol follows the SCP (Storage-based consensus paradigm), There is no gas fee required, storing all everPay transactions via Arweave, with one million transactions for one dollar. At this stage users transfer assets, completely free of charge.",
        oneLiner: "Real-time financial protocol for the blockchain",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",

            tokenomics: {
                info: "The paper indicates that everPay will develop a token governance model in the future. At the early stage, everPay uses a DAO joined by established organizations. No detailed token offering plan is provided as they focus on infrastructure and ecological construction first.",
                linkToBlogorPaper: "https://mirror.xyz/everpay.eth/V1mucZp4JAG7j3PnZiL-RcnDBc1VIxBTp2QREqiCIQ"
            },
        },
        gettingStartedGuide: "https://docs.everpay.io/en/docs/guide/server-api/intro",
        projectOrigin: "everFinance",
        useCases: [
            {
                name: "Real-time Payment",
                info: "Provides nearly instant transfer experience similar to traditional payment providers, with verification within milliseconds",
                liveLink: "",
                other: [""]
            },
            {
                name: "Cross-chain Token Transfer",
                info: "Native cross-chain functionality allowing token transfers between different blockchains, starting with Ethereum and Arweave",
                liveLink: "",
                other: [""]
            },
            {
                name: "Smart Account",
                info: "Supports both blockchain and internet accounts with enhanced security through hardware device binding and biometric technology",
                liveLink: "",
                other: [""]
            },
            {
                name: "Swap",
                info: "Decentralized token swaps using bundle transactions and aswap transactions",
                liveLink: "",
                other: [""]
            },
            {
                name: "Financial Management",
                info: "Cross-chain aggregated financial management services with reduced costs through off-chain computation",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [{
            name: "",
            role: "",
            moreInfo: "",
            amountIfAny: [""]
        }],
        mileStones: [
            {
                goal: "Support bundle opAction and decentralized token swaps",
                date: "2021",
                proof: "",
                status: ""
            },
            {
                goal: "Internet account system, payment opActions (aswap, timelock), integration of more blockchains",
                date: "2022",
                proof: "",
                status: ""
            },
            {
                goal: "Aggregated wealth management services, Fiat payment and OTC",
                date: "2023",
                proof: "",
                status: ""
            }
        ],
        mediaMentions: [""],
        collaborations: [
            {
                name: "Community Labs",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [
            {
                name: "",
                role: "",
                percentage: ""
            }
        ],
        analysis: false,
        bannerLink: "",
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0
        }
    },
    {
        name: "ar.io",
        category: CategoryEnum.Infrastructure,
        processID: "ario",
        logoImageLink: "https://ario.arweave.dev/wp-content/uploads/2022/02/ar-io-FINAL-LOGO-SHADOW-1024x525.png",
        links: {
            telegram: "",
            website: "https://ario.arweave.dev/index.html",
            docs: "",
            discord: "https://discord.gg/4VHQrAc8BU",
            twitter: "https://twitter.com/ar_io_network",
            github: "",
            other: ["https://ario.arweave.dev/arns-pilot/index.html", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        }],
        description: "the incentivized and decentralized gateway to the permaweb",
        oneLiner: "the incentivized and decentralized gateway to the permaweb",
        token: {
            name: "ArNS",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: "https://ario.arweave.dev/arns-pilot/index.html"
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [{
            name: "Incentivizes data seeding, serving and indexing",
            info: "Incentivizes data seeding, serving and indexing",
            liveLink: "",
            other: [""]
        },
        {
            name: "Optimize price discovery and quality of service choice",
            info: "Optimizes price discovery and quality of service choice",
            liveLink: "",
            other: [""]
        },
        {
            name: "Customizable fiat / crypto payment integration",
            info: "Customizable fiat / crypto payment integration",
            liveLink: "",
            other: [""]
        },
        {
            name: "Supports fee sponsorship and subsidies",
            info: "Supports fee sponsorship and subsidies",
            liveLink: "",
            other: [""]
        }
        ],
        advisorsInvestors: [{
            name: "",
            role: "",
            moreInfo: "",
            amountIfAny: [""],
        }],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [{
            logoImageLink: "",
            name: "",
            link: "",
            info: ""
        }],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }],
        analysis: false,
        bannerLink: "",
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0
        }
    },
    {
        name: "arns",
        category: CategoryEnum.Infrastructure,
        processID: "arns",
        logoImageLink: "https://avatars.githubusercontent.com/u/95701273?s=200&v=4",
        links: {
            telegram: "",
            website: "https://arns.app/#/?search=",
            docs: "https://docs.ar.io/arns",
            discord: "https://discord.com/invite/HGG52EtTc2",
            twitter: "",
            github: "https://github.com/ar-io/",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        }],
        description: "ArNS names are censorship-resistant domain names for permaweb dApps, web pages, data, and identities.",
        oneLiner: "Arweave Name System",
        token: {
            name: "IO",
            ticker: "ɸ",
            processId: "",
            denomination: "IO",
            totalSupply: "1,000,000,000",
            tokenomics: {
                info: "",
                linkToBlogorPaper: "https://stmnnh3s5hfbfaxxskvhx3d4l5vkbdxnep34ginzy5bsrlzzxxha.arweave.net/lNjWn3LpyhKC95Kqe-x8X2qgju0j98MhucdDKK85vc4"
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [{
            name: "",
            liveLink: "",
            other: [""],
            info: ""
        },

        ],
        advisorsInvestors: [{
            name: "",
            role: "",
            moreInfo: "",
            amountIfAny: [""],
        }],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [{
            logoImageLink: "",
            name: "",
            link: "",
            info: ""
        }],
        ownershipPercentages: [{
            name: "Core Team",
            role: "174,600,000",
            percentage: "17.46"
        },
        {
            name: "Advisors",
            role: "22,600,000",
            percentage: "2.26"
        },

        {
            name: "Backers",
            role: "267,000,000 ",
            percentage: "26.70"
        },

        {
            name: "Community Distribution",
            role: "175,000,000",
            percentage: "17.50"
        },

        {
            name: "Initial Protocol Reward Balance",
            role: "50,000,000",
            percentage: "5.00"
        },

        {
            name: "Foundation",
            role: "100,000,000 ",
            percentage: "10.00"
        },

        {
            name: "Ecosystem and Strategic Partnerships",
            role: "210,800,000",
            percentage: "21.08"
        },


        ],
        analysis: false,
        bannerLink: "",
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0
        }
    },
    {
        name: "Astro",
        category: CategoryEnum.Defi,
        analysis: false,
        processID: "astro",
        logoImageLink: "https://cdn.prod.website-files.com/665f3be1a0fe5f53c9a67b7b/6661cd708b59653cbf1094c9_Webclip.png",
        bannerLink: "",
        links: {
            website: " https://www.astrousd.com/ ",
            docs: "https://docs.astrousd.com/",
            discord: "https://discord.com/invite/NpNRtNE6PN",
            twitter: "https://twitter.com/AstroUSD",
            github: "",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        }],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Astro introduces USDA, an over-collateralized stablecoin developed on AO’s hyper parallel computing environment. ",
        oneLiner: "Unlock True Liquidity on Arweave and ao with USDA",
        token: {
            name: "USDA",
            ticker: "USDA",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Utilising AR",
                info: "Unlock value without sacrificing your long-term exposure to AR with USDA.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Transact",
                info: "Transact effortlessly and avoid volatility with USDA, a more predictable way to navigate the ecosystem.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Trade",
                info: "Enhance your trading strategies without sacrificing price stability with USDA.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Earn",
                info: "Maximize your returns by leveraging USDA in lending and liquidity pools, ensuring a steady income stream while maintaining stability.",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            //     {
            //     name: "",
            //     role: "",
            //     moreInfo: "",
            //     amountIfAny: [""],
            // }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "Ar Connect",
                link: "",
                info: "",
                logoImageLink: "https://cdn.prod.website-files.com/665f3be1a0fe5f53c9a67b7b/66608b2facaead683794995f_arconnect-logo.svg"
            },
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            },
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            },
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            },
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            },
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            },
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            },
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            },
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },
    {
        name: "Apus",
        category: CategoryEnum.AI,
        analysis: true,
        processID: "vp4pxoOsilVxdsRqTmLjP86CwwUwtj1RoKeGrFVxIVk",
        logoImageLink: "https://avatars.githubusercontent.com/u/146177720?s=400&u=b44c0ae4eb6793800a4377468ab6cb0fa44e6b80&v=4",
        bannerLink: "",
        links: {
            website: "https://www.apus.network/",
            docs: "https://apus-network.gitbook.io/apus-console-docs",
            discord: "https://discord.com/invite/NVqpWB2m8k",
            twitter: "https://x.com/apus_network",
            github: "https://github.com/apuslabs",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "Ben",
            pseudoName: "",
            role: "Core of Contributor",
            imgLink: "https://www.apus.network/assets/ben-Dzj21M2H.png",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },
        {
            officialName: "Jason",
            pseudoName: "",
            role: "Core Architect",
            imgLink: "https://www.apus.network/assets/jason-C0T70zFD.png",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            }
        }, {
            officialName: "Mateo Bastidas",
            pseudoName: "",
            role: "Head of Dev-rel",
            imgLink: "https://www.apus.network/assets/mateo-BJtpbOx6.png",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            }
        }, {
            officialName: "Conor Thacker",
            pseudoName: "",
            role: "Head of Community",
            imgLink: "https://www.apus.network/assets/conor-BenAScIP.png",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            }
        }, {
            officialName: "Jax",
            pseudoName: "",
            role: "Core Developer",
            imgLink: "https://www.apus.network/assets/jax-V1ovJirc.png",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            }
        }, {
            officialName: "Phoebe",
            pseudoName: "",
            role: "Core BD",
            imgLink: "https://www.apus.network/assets/phoebe-DL9F5_fz.png",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            }
        }],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Apus Network is building towards a decentralized, trustless GPU network dedicated to providing reliable, efficient, and low-cost computational power for AI training and inference.",
        oneLiner: "Trustless GPU Network for AI on AO",
        token: {
            name: "Apus",
            ticker: "APUS",
            processId: "al1xXXnWnfJD8qyZJvttVGq60z1VPGn4M5y6uCcMBUM",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            //     {
            //     name:"",
            //     info:"",
            //     liveLink:"",
            //     other:[""]
            // }
        ],
        advisorsInvestors: [{
            name: "",
            role: "",
            moreInfo: "",
            amountIfAny: [""],
        }],
        mileStones: [{
            goal: "POC: Edge AI Inference & Decentralized GPU markets",
            date: "Q4 2023",
            proof: "",
            status: ""
        }, {
            goal: "Launch Seed Round",
            date: "Q1 2024",
            proof: "",
            status: ""
        }, {
            goal: "Design trustless GPU Network on AO",
            date: "Q2 2024",
            proof: "",
            status: ""
        }, {
            goal: "AI Competition Pool Test-Net",
            date: "Q3 2024",
            proof: "",
            status: ""
        }, {
            goal: "TGE Deterministic GPU of AO extension",
            date: "Q4 2024",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            // {
            // name: "",
            // link: "",
            // info: "",
            // logoImageLink:""
            // }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },
    {
        name: "Permaswap",
        category: CategoryEnum.Defi,
        analysis: false,
        processID: "permaswap",
        logoImageLink: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABhCAMAAAD8xk/WAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAgGAg378Q70AwUJ+Qz6Bwb69/jxRAXm8AAAKRSURBVGje7djLrpswEIDhwR5fMQGSef9nrVylitoJYzxGR13wL87i5PKBHTAyaPJxK/uCVEO3ly1Cs20yJsfkTyPx6YjntgRi9C64M4cVS6Cj8Gklp+OwjCO5+VjihzXHAwWpnbOCwyjD3x1FpX1OB2P9z7v9TqcLq+DIx5UD9bRYyeGjB+9e1Blm5rQn1S7U37PHQVsZJE2v804QmHbzaSczRgG1nZUxCqjtlHrZII30POFgffFBY5m2U38DTxos2JYz1cmh4ZaGg3XdQxpvkh3DRk1bkhxko6bOSY5hvzV9mTnS6ehD5oino88cOpadzkjuyJnPnI7bogXwKT+QGsXqrNM0u4X9X/5wmDx8ik52CnxKZg9/vqQ+EMgf9F2PXMF/fQzcG8MWDLDktZ09EGZ8rztBYBJnGkdWgFV+3yli80bC24VDA95E9Y+8yvIaa6IFXr1PuPZazIutS5UXWkfWOUXlYAgUpyPeEpfeEUgg5Xp+CNJViiBm6CgP31rpoF12bOe0TsJqLxYuckzDwR9y3O1cOz9wqePpaqfz+l4UjuZG6hSO5nZQrnPEB//1SscKa/2VDorPB+NOe3PG9TvRNieHZxQOfv2Qf5GQ7Xf81428tEiMA8X81G+c49/Kg8SMxinv/cacoObT5kgueI1j6BNiOLXNo3Es9WZVDgTFrpXGcYrT0ThFsfGicbJi90Dj+C4nqh1AxahpnIdi1DTOep6xI07s2qrSO14xORoHFgWjcYqC0TjmDLPCsGPbCkYYd9q3bOfhCmcXCL6hpXfW1h7gRU5CjcIzolPL34fOZaaMODWfy9/XK74MQ8acTylvU20zSTT0Du92budqZ/0hZ7qd27md/8VJ00EJtP0CaOyoPUgAnCcAAAAASUVORK5CYII=",
        bannerLink: "",
        links: {
            website: "https://www.permaswap.network/",
            docs: "https://mirror.xyz/permaswap.eth/ustZcDgavlm4xmYI26thEAj8W2cXlZpRkG5Jqz0iS14",
            discord: "https://discord.gg/BTs4Zud2vk",
            twitter: "https://x.com/Permaswap",
            github: "https://github.com/permadao/permaswap",
            telegram: "https://t.me/PermaDao_ar/5699",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Permaswap is a cross-chain DEX network with 0 gas fees and having all transactions delivered INSTANTLY. All swaps that are done instantly are powered by everPay! Our goal? Allow you to easily swap different assets from different chains in one place for a quick and easy experience.",
        oneLiner: "FusionFi Portal, A Unified Financial Protocol on Permaweb",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""

            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },
    {
        name: "SENTIO",
        category: CategoryEnum.DeveloperTools,
        analysis: false,
        processID: "processID for Sentio",
        logoImageLink: "https://i.imgur.com/wmU7NZ4.png",
        bannerLink: "https://i.imgur.com/PNtsCAB.png",
        links: {
            website: "https://sentio.vercel.app",
            docs: "",
            discord: "",
            twitter: "https://x.com/sentio_AR",
            github: "https://github.com/haard18/Sentio",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "Krish Soni",
            pseudoName: "K-STAR",
            role: "Founder & Developer",
            imgLink: "",
            links: {
                discord: "",
                github: "https://github.com/krishvsoni",
                twitter: "https://twitter.com/krishvsoni",
                dribble: "",
                other: ["https://instagram.com/krishvsoni", ""],
            },
        }, {
            officialName: "Haard Solanki",
            pseudoName: "Hardy",
            role: "Founder & Developer",
            imgLink: "",
            links: {
                discord: "",
                github: "https://github.com/haard18",
                twitter: "https://twitter.com/solanki_haard",
                dribble: "",
                other: ["https://instagram.com/haard.solanki", ""],
            },
        }],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "End To End Analysis for Code, Process and Messages on AO with customizations and User Friendly Setup with sentinel Support to monitor and eliminate threats",
        oneLiner: "You Write We Monitor! Sentinel security for AO Processes ",
        token: {
            name: "",
            ticker: "Sentio",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            //     {
            //     name: "",
            //     info: "",
            //     liveLink: "",
            //     other: [""]
            // }
        ],
        advisorsInvestors: [
            //     {
            //     name: "",
            //     role: "",
            //     moreInfo: "",
            //     amountIfAny: [""],
            // }
        ],
        mileStones: [{
            goal: "To monitor and track messages coming to our Arweave Wallet and give records to respective users who have connected their Arweave Wallet, identify potential threats and suspicious activities in the process, provide CRON reports analyzed by AI for similar threats with easy access via email, and identify vulnerabilities in your LUA code prior to deployment on AO.future scaling to eth bridges and other token bridges",
            date: "",
            proof: "",
            status: "Upcoming"
        }],
        mediaMentions: [""],
        collaborations: [
            //     {
            //     name: "",
            //     link: "",
            //     info: "",
            //     logoImageLink:""

            // }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },
    {
        name: "AoClima Option",
        category: CategoryEnum.Defi,
        analysis: false,
        processID: "aoclima",
        logoImageLink: "https://aoc-rouge.vercel.app/Aco-logo.svg",
        bannerLink: "",
        links: {
            website: "",
            docs: "",
            discord: "",
            twitter: "https://x.com/NotusOptions",
            github: "https://github.com/BrianMburu/ACO",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "It’s unfortunate that Hurricanes Helene and Milton have caused over 200 deaths and tens of billions of dollars in losses. What’s more alarming is that the US has only 4,470 meteorologists, with an average age of 40 years. Only 19% are between 19 and 30 years old.Who’s going to solve this weather problem? This is why we need to inspire more young people to study meteorology. This is what we’re trying to do at AoclimaOptions.",
        oneLiner: "It's Time to Solve the Weather Problem.",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },
    {
        name: "AoVest",
        category: CategoryEnum.Defi,
        analysis: false,
        processID: "aovest",
        logoImageLink: "https://framerusercontent.com/images/L3qy4ICXcxgUijV6YK9BVHbLWQ8.png",
        bannerLink: "",
        links: {
            website: "https://aovest.stream/",
            docs: "",
            discord: "https://discord.gg/SS9vS8e3xr",
            twitter: "https://x.com/aoveststream",
            github: "",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "",
        oneLiner: "",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    // New Additions
    // aolotto

    {
        name: "Aolotto",
        category: CategoryEnum.Defi,
        analysis: false,
        processID: "aolotto",
        logoImageLink: "https://docs.aolotto.com/~gitbook/image?url=https%3A%2F%2F632649932-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FWWmCSvEP25hXbkY0uqAH%252Ficon%252FvpD0dGwh5txOfj8Uzd0B%252Fpure_pattern.png%3Falt%3Dmedia%26token%3D741bcf0a-0487-409d-a07d-8301c60b837b&width=32&dpr=1&quality=100&sign=9607fccd&sv=2",
        bannerLink: "",
        links: {
            website: "https://aolotto.com/",
            docs: "https://docs.aolotto.com/en",
            discord: "https://discord.com/invite/BFhkUCRjmF",
            twitter: "https://x.com/aolotto_dao",
            github: "https://github.com/aolotto/aolotto",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "The first decentralized lottery protocol built on Arweave AO, Simple, Transparent and Open.",
        oneLiner: "The first decentralized lottery protocol built on Arweave AO, Simple, Transparent and Open.",
        token: {
            name: "ALTTOKEN",
            ticker: "ALT",
            processId: "sdqQuIU6WNT1zVNculn814nVhol2XXhDxqgCrUpCtlA",
            denomination: "ALT",
            totalSupply: "210,000,000",
            tokenomics: {
                info: "$ALT is the profit-sharing token of the Aolotto ecosystem, with a total supply of 210,000,000, and it is 100% fairly issued to the community. $ALT holders can share 90% of the profits contributed by all pools in the Aolotto ecosystem.",
                linkToBlogorPaper: "https://docs.aolotto.com/en"
            }
        },
        gettingStartedGuide: "https://docs.aolotto.com",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [
            {
                name: "Faucet",
                role: "Airdrop 10% of the total supply to early birds via the faucet.",
                percentage: "10"
            },
            {
                name: "Betting-as-Mining",
                role: "70% of the total supply is linearly minted by Betting-as-Mining.",
                percentage: "70"
            },
            {
                name: "Contributor's Fund",
                role: "The 20% held by the Aolotto Foundation will be awarded to community contributors",
                percentage: "20"
            }

        ]
    },
    // bark

    {
        name: "bark",
        category: CategoryEnum.Defi,
        analysis: false,
        processID: "bark",
        logoImageLink: "https://bark.arweave.dev/",
        bannerLink: "",
        links: {
            website: "https://bark.arweave.dev/",
            docs: "",
            discord: "",
            twitter: "",
            github: "",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "",
        oneLiner: "",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Convergent",
        category: CategoryEnum.Defi,
        analysis: false,
        processID: "convergent",
        logoImageLink: "https://convergent.vercel.app/Convergent-Logo.png",
        bannerLink: "",
        links: {
            website: "https://convergent.g8way.io/",
            docs: "",
            discord: "",
            twitter: "",
            github: "https://github.com/adisuyash/convergent",
            telegram: "",
            other: ["", ""]
        },
        team: [
            {
                officialName: "Aditya Gupta",
                pseudoName: "",
                role: "",
                imgLink: "https://avatars.githubusercontent.com/u/116362593?v=4",
                links: {
                    discord: "",
                    github: "",
                    twitter: "https://twitter.com/adisuyash",
                    dribble: "",
                    other: ["https://adisuyash.co/", "https://www.linkedin.com/in/adisuyash/"],
                },
            },
            {
                officialName: "Divyansh Goel",
                pseudoName: "",
                role: "",
                imgLink: "https://avatars.githubusercontent.com/u/137148140?s=64&v=4",
                links: {
                    discord: "",
                    github: "",
                    twitter: "",
                    dribble: "",
                    other: ["", ""],
                },
            },
            {
                officialName: "Dayitva Goel",
                pseudoName: "",
                role: "",
                imgLink: "https://avatars.githubusercontent.com/u/34044515?v=4",
                links: {
                    discord: "",
                    github: "",
                    twitter: "https://twitter.com/Dayitva_Goel",
                    dribble: "",
                    other: ["https://dayitva.github.io/", ""],
                },
            },

        ],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Convergent is a decentralized perpetuals exchange on Arweave with best-in-class speed, liquidity, and price.",
        oneLiner: "Trade Perpetuals on AO",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Arweave SCP Ventures",
        category: CategoryEnum.Investment,
        analysis: false,
        processID: "scp",
        logoImageLink: "https://arscp.ventures/favicon.png",
        bannerLink: "",
        links: {
            website: "https://arscp.ventures/",
            docs: "",
            discord: "",
            twitter: "https://twitter.com/ArweaveSCP",
            github: "",
            telegram: "",
            other: ["arscp@ever.vision", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Unlocking the Power of Consensus Data Investing in the Future of the Decentralized and Permanent Web",
        oneLiner: "Building Web3 Off-chain Dapp with SCP on Arweave",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "The world is rapidly moving towards a decentralized and open web, where information flows freely and is stored permanently. Arweave is leading the way in this transformation with its innovative Storage-based Consensus Paradigm (SCP) that enables on-chain, scalable storage with guaranteed persistence. The potential of Arweave goes far beyond just storage, however. By decoupling storage and computation, Arweave unlocks a new era of open applications via a productive and persistent storage-based consensus paradigm at its base layer, leading to a truly decentralized and open web where users have complete control over their data and can access it anywhere, anytime.As a Layer0 network with permanent storage, Arweave offers a unique opportunity for applications to be built on a trustful and censorship-resistant platform. SCP is the optimal solution for DApps in the Web3 era, providing high performance with uncapped TPS while ensuring data traceability and monopoly-free. By leveraging SCP, DApps can achieve high performance and scalability while ensuring security, traceability, and transparency. Applying SCP will unlock new possibilities for decentralized and democratic storage and hosting solutions not subject to censorship or monopoly. Arweave SCP Ventures are committed to identifying and investing in innovative projects that harness SCP consensus to build the next generation of DApps, from social to finance, bringing transparency, security, and scalability to the Web3 era. And this is just the beginning.",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "ao Ventures",
        category: CategoryEnum.Investment,
        analysis: false,
        processID: "aoventures",
        logoImageLink: "https://pbs.twimg.com/profile_images/1778168124967120896/XUi29oqd_400x400.png",
        bannerLink: "",
        links: {
            website: "https://www.aoventures.io/",
            docs: "",
            discord: "https://discord.com/invite/kgdNRwqaPx",
            twitter: "https://x.com/aoTheVentures",
            github: "",
            telegram: "",
            other: ["https://www.linkedin.com/company/aotheventures/", "https://www.aoventures.io/join"]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "ao Ventures is the best opportunity for builders in the Arweave ecosystem to grow their project and secure funding.",
        oneLiner: "Accelerating the Permanent Web",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "AO Web Wallet",
        category: CategoryEnum.Wallet,
        analysis: false,
        processID: "aowebwallet",
        logoImageLink: "https://aoww.net/images/favicon-512x512.png",
        bannerLink: "",
        links: {
            website: "https://aoww.net/",
            docs: "",
            discord: "https://discord.gg/bahdqzpNYW",
            twitter: "https://twitter.com/aoWebWallet",
            github: "https://github.com/michielpost/aoWebWallet",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "Michiel Post",
            pseudoName: "",
            role: "",
            imgLink: "https://avatars.githubusercontent.com/u/1315216?v=4",
            links: {
                discord: "",
                github: "https://github.com/michielpost/",
                twitter: "https://x.com/michielpostnl",
                dribble: "",
                other: ["https://t.co/EHat04IvUY", ""],
            },
        },
        {
            officialName: "Nuno Lopes",
            pseudoName: "",
            role: "",
            imgLink: "https://avatars.githubusercontent.com/u/388476?v=4",
            links: {
                discord: "",
                github: "https://github.com/lopezi",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },
        ],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "",
        oneLiner: "",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Create aoWW Wallet",
                info: "Create a new wallet on the Arweave blockchain",
                liveLink: "https://aoww.net/start",
                other: [""]
            },
            {
                name: "Token Explorer",
                info: "Explore the tokens on the Arweave blockchain",
                liveLink: "https://aoww.net/token-explorer",
                other: [""]
            },
            {
                name: "Action Builder",
                info: "Effortlessly call any process on AO. Simply input the process ID, and aoWebWallet will assist in constructing the call to the process.",
                liveLink: "https://aoww.net/process",
                other: [""]
            },
            {
                name: "Create Token",
                info: "Create a new token on the Arweave blockchain",
                liveLink: "https://aoww.net/create-token",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "Perplex",
                link: "https://arswap.org/",
                info: "Swap Tokens",
                logoImageLink: "https://pbs.twimg.com/profile_images/1819367066190729216/djwB3nC__400x400.jpg"
            },
            {
                name: "Bark",
                link: "https://bark.arweave.dev/",
                info: "Swap Tokens",
                logoImageLink: "https://bark.arweave.dev/icon.png"
            },
            {
                name: "Permaswap",
                link: "https://www.permaswap.network/#/ao",
                info: "Swap Tokens",
                logoImageLink: "https://pbs.twimg.com/profile_images/1612437522029707266/Es2nw5qs_400x400.jpg"
            },
            {
                name: "AOX",
                link: "https://www.aox.xyz/",
                info: "AR to AO Bridge",
                logoImageLink: "https://pbs.twimg.com/profile_images/1777271483477475328/WiYfodZs_400x400.jpg"
            },
            {
                name: "AstroUSD",
                link: "https://www.astrousd.com",
                info: "USD Stable Coin",
                logoImageLink: ""
            },
            {
                name: "TrunkToken",
                link: "https://trunkao.xyz/",
                info: "Meme Token",
                logoImageLink: "https://pbs.twimg.com/profile_images/1823128957023330304/Z7btnMFd_400x400.jpg"
            },
            {
                name: "BazAR Marketplace",
                link: "https://bazar.arweave.net/",
                info: "Trade Atomic Assets",
                logoImageLink: "https://pbs.twimg.com/profile_images/1686990003266568192/El3x-VID_400x400.jpg"
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Othent",
        category: CategoryEnum.Wallet,
        analysis: false,
        processID: "othent",
        logoImageLink: "https://avatars.githubusercontent.com/u/118553412?s=200&v=4",
        bannerLink: "",
        links: {
            website: "https://othent.io/",
            docs: "https://docs.othent.io/",
            discord: "https://discord.gg/BHprrR443t",
            twitter: "https://twitter.com/othent_io",
            github: "https://github.com/othent",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Web3 transactions with existing traditional social logins",
        oneLiner: "Simplicity is key,Keys aren't simple",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Smart Contract Wallets",
                info: "Othent uses JSON web tokens paired with smart contracts, no need for private keys.",
                liveLink: "",
                other: [""]
            },
            {
                name: "(Anti) social recovery",
                info: "Enable recovery of your wallet through social or traditional web3 wallet methods.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Use existing 2FA",
                info: "Add an extra layer of security through a second form of authentication.",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [
            {
                goal: "Othent allows web3 dApps and protocols to seamlessly access web2 users.",
                date: "",
                proof: "",
                status: ""
            },
            {
                goal: "Use our protocol on any device or browser without browser extensions or plugins.",
                date: "",
                proof: "",
                status: ""
            },
            {
                goal: "Our web2 backed protocol is able to reach a wider audience and scale more effectively.",
                date: "",
                proof: "",
                status: ""
            },

        ],
        mediaMentions: [""],
        collaborations: [
            {
                name: "Community Labs",
                link: "https://communitylabs.com/",
                info: "Working with Community Labs",
                logoImageLink: "https://othent.io/clabs-logo.svg"
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Anyone Protocol",
        category: CategoryEnum.Infrastructure,
        analysis: false,
        processID: "anyone",
        logoImageLink: "https://docs.anyone.io/~gitbook/image?url=https%3A%2F%2F3849121521-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252FSDtTViT7t45iXUBMLe4l%252Fsites%252Fsite_cLnW8%252Ficon%252Fa0R6zscopv1ahpZn57Rc%252FATOR%2520MONO%25203.png%3Falt%3Dmedia%26token%3Dff87475b-1474-4dbc-bd2f-faf24afbfa89&width=32&dpr=2&quality=100&sign=aac42cfb&sv=2",
        bannerLink: "",
        links: {
            website: "https://www.anyone.io/",
            docs: "https://docs.anyone.io/",
            discord: "https://discord.com/invite/anyoneprotocol",
            twitter: "https://x.com/AnyoneFDN",
            github: "https://github.com/anyone-protocol",
            telegram: "https://t.me/anyoneprotocol",
            other: ["http://youtube.com/@anyoneprotocol", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Unlike a VPN, the Anyone network can't track you. All data is fragmented among the relay operators that are incentivized to run a node. Find out more about the network",
        oneLiner: "Privacy that Anyone Can Trust",
        token: {
            name: "ANyONe Protocol Token",
            ticker: "ANYONE",
            processId: "0xFeAc2Eae96899709a43E252B6B92971D32F9C0F9",
            denomination: "",
            totalSupply: "100,000,000",
            tokenomics: {
                info: "The ANyONe Token is an ERC20 on Ethereum mainnet with a fixed supply of 100 million tokens. However, as part of the Anyone Incentive Layer, the token exists in a 'wrapped' format on Arweave, where it plays a key role in regulating the network. $ANYONE operates in the Proof-of-Uptime mechanism, which rewards network participants based on their active and useful contributions to the network. Additionally, staking $ANYONE will be a requirement for every software relay, service and authority in the network; the well distributed nature of the token is key to the network's resilience from sybil attacks.",
                linkToBlogorPaper: "https://www.anyone.io/token"
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Anyone Token",
                info: "The ANyONe Protocol Token is the lifeblood of the Anyone ecosystem. It is a utility token used to facilitate access and control of the network and as a means to incentivize relay operators. As the use-cases for Anyone grow and network participation expands into the mainstream, the token naturally accrues value within the ecosystem.",
                liveLink: "https://www.anyone.io/token",
                other: [""]
            },
            {
                name: "Anyone Protocol ‍Hardware",
                info: "Anyone Protocol’s Cutting-edge Hardware. Easy Anonymization,Privatized Traffic Router. Plug-and-Play Setup.Passive Reward Generation. Ease-of-connection.Gigabit Ethernet and Wi-FI Antenna Scalability.Secure Application Updates. How it Works Overview Anonymity Bandwidth Rewards Contribute your bandwidth to the network and earn Anyone tokens in return, supporting the decentralized infrastructure. Use your device as a proxy server to route your traffic through a more secure local IP address. [Future] Use the device as a privacy router! Plug in Ethernet, create a private Wi-Fi signal, and connect any device! Hardware auto-registers and authenticates itself to the network to qualify for hardware-specific rewards. Our relay network works seamlessly to protect your privacy and optimize network performance. By encrypting data, routing it anonymously, and sharing bandwidth, the Anyone Relay allows you to contribute to the network whilst using it!",
                liveLink: "https://www.anyone.io/hardware",
                other: [""]
            },
            {
                name: "AnyOne Network",
                info: "The Anyone Network is a new implementation of onion routing, built with relay incentives, decentralized network management, and new levels of client control. Centralized network functionalities will be decentralized through AO logic in a federated consensus model driven by staked tokens. As the network evolves, clients will be able to select their own paths through the network dependant on their requirements, availability, and token gating.",
                liveLink: "https://www.anyone.io/network",
                other: ["https://www.anyone.io/whitepaper"]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "LiquidOps",
        category: CategoryEnum.Defi,
        analysis: false,
        processID: "liquidops",
        logoImageLink: "https://cdn.prod.website-files.com/668045d81418e5698357a4b2/66c66291f2275f94e0136d29_Webclip.png",
        bannerLink: "https://cdn.prod.website-files.com/668045d81418e5698357a4b2/66c662c6146bc82146977c77_Opengraph%20Img.jpg",
        links: {
            website: "https://www.liquidops.io/",
            docs: "",
            discord: "",
            twitter: "https://x.com/Liquid_Ops",
            github: "",
            telegram: "",
            other: ["https://t.co/jG5HscPfOA", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Seamless lending and borrowing on AR & AO",
        oneLiner: "Liquidity on arweave and ao,unlocked",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Lenders",
                info: "Deposit Lenders deposit their arweave & ao assets into a pool.Lend The pool lends out the assets to borrowers.Earn Lenders are paid interest based on a recurring fee charged to borrowers.",
                liveLink: "http://waitlist.liquidops.io",
                other: [""]
            },
            {
                name: "Borrowers",
                info: "Access liquidity with your AR tokens. Post collateral Borrowers post collateral based on the amount they want to borrow. Receive The borrower then receives the loan and pays a recurring fee. Repay The borrower repays the loan back to the pool, which unlocks their initial posted collateral.",
                liveLink: "http://waitlist.liquidops.io/",
                other: [""]
            },

            {
                name: "Liquidation",
                info: "At the core of our lending protocol is the liquidation engine, which works by checking the loan to value (LTV) ratios via a oracle to ensure lending pools stay whole.Collateral ratio In the event a borrower's collateral drops below the LTV ratio of their loan, the user's collateral is liquidated automatically.Liquidating collateral Collateral is sold via a dutch auction where anyone can buy it at a discounted rate.Repaying lenders After the collateral is sold, the initial loan amount is then sent back to the lending pool.The remaining collateral is then sent back to the borrower, minus a fee.",
                liveLink: "http://waitlist.liquidops.io/",
                other: [""]
            },



        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "Community Labs",
                link: "https://www.communitylabs.com/",
                info: "collaboration with community labs",
                logoImageLink: "https://cdn.prod.website-files.com/66a95bb074e6f8f96d7b59a9/66c4e4b2dfe1f08711cbca3f_CL-Black-Text.svg"
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "WeaveVM",
        category: CategoryEnum.Infrastructure,
        analysis: false,
        processID: "weavevm",
        logoImageLink: "https://www.wvm.dev/favicon.ico",
        bannerLink: "",
        links: {
            website: "https://www.wvm.dev/",
            docs: "https://docs.wvm.dev/",
            discord: "https://dsc.gg/wvm",
            twitter: "https://twitter.com/weavevm",
            github: "https://github.com/weaveVM",
            telegram: "https://t.me/weavevm_chat",
            other: ["https://explorer.wvm.dev/", "https://www.wvm.dev/calculator"]
        },
        team: [
            {
                officialName: "Rani Elhusseini",
                pseudoName: "",
                role: "Co-Founder",
                imgLink: "https://www.wvm.dev/_next/image?url=%2Fteam%2Frani.png&w=750&q=75",
                links: {
                    discord: "",
                    github: "https://www.github.com/charmful0x",
                    twitter: "",
                    dribble: "",
                    other: ["https://www.linkedin.com/in/rani-elhusseini-76977319a/", ""],
                },
            },
            {
                officialName: "Benjamin Brandall",
                pseudoName: "",
                role: "Co-Founder",
                imgLink: "https://www.wvm.dev/_next/image?url=%2Fteam%2Fbenjamin.png&w=750&q=75",
                links: {
                    discord: "",
                    github: "https://www.github.com/xylophonezy",
                    twitter: "",
                    dribble: "",
                    other: ["https://linkedin.com/in/benjbrandall", ""],
                },
            },

            {
                officialName: "Nil Medvedev",
                pseudoName: "",
                role: "Dev Team",
                imgLink: "https://www.wvm.dev/_next/image?url=%2Fteam%2Fnil.png&w=750&q=75",
                links: {
                    discord: "",
                    github: "https://github.com/allnil",
                    twitter: "",
                    dribble: "",
                    other: ["https://linkedin.com/in/nilmedvedev/", ""],
                },
            },

            {
                officialName: "Andres Pirela",
                pseudoName: "",
                role: "Dev Team",
                imgLink: "https://www.wvm.dev/_next/image?url=%2Fteam%2Fandres.png&w=750&q=75",
                links: {
                    discord: "",
                    github: "https://github.com/andreespirela",
                    twitter: "",
                    dribble: "",
                    other: ["https://www.linkedin.com/in/andres-pireela/", ""],
                },
            },

            {
                officialName: "Max Knivets",
                pseudoName: "",
                role: "Dev Team",
                imgLink: "https://www.wvm.dev/_next/image?url=%2Fteam%2Fmax.png&w=750&q=75",
                links: {
                    discord: "",
                    github: "https://github.com/maxknivets",
                    twitter: "",
                    dribble: "",
                    other: ["https://www.linkedin.com/in/max-knivets-6050511a7/", ""],
                },
            },

            {
                officialName: "Joel Mugalu",
                pseudoName: "",
                role: "Dev Team",
                imgLink: "https://www.wvm.dev/_next/image?url=%2Fteam%2Fjoel.png&w=750&q=75",
                links: {
                    discord: "",
                    github: "https://github.com/codingknite",
                    twitter: "",
                    dribble: "",
                    other: ["https://www.linkedin.com/in/joelmugalu/", ""],
                },
            },

            {
                officialName: "Suzu",
                pseudoName: "",
                role: "Dev Team",
                imgLink: "https://www.wvm.dev/_next/image?url=%2Fteam%2Fsuzu.png&w=750&q=75",
                links: {
                    discord: "",
                    github: "https://github.com/dotsuzu",
                    twitter: "",
                    dribble: "",
                    other: ["", ""],
                },
            },


        ],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Permanent storage at a fraction of the cost With a dedicated storage layer, WeaveVM guarantees decentralized data storage and availability without breaking the bank",
        oneLiner: "Permanent.Affordable.Always onchain",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "https://docs.wvm.dev/",
        projectOrigin: "",
        useCases: [
            {
                name: "The next-gen EVM storage layer",
                info: "Deploy data-heavy dApps, settle L2 data, archive anything with confidence on WeaveVM. Fast, scalable, and permanent storage—at a fraction of the cost of competitors",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "MEM",
                link: "https://mem.tech/",
                info: "Lightning-fast serverless functions for web3 ",
                logoImageLink: "https://www.mem.tech/icons/mem/mem-logo-v2.svg"
            },
            {
                name: "Tapestry Finance",
                link: "https://tapestry.fi/",
                info: "",
                logoImageLink: "https://www.tapestry.fi/static/media/TapestryLogo.a886f452.svg"
            },
            {
                name: "RISE",
                link: "https://riselabs.xyz/",
                info: "RISE is revolutionizing the Blockchain landscape with unprecedented performance, targetting over 100,000 transactions per second and ushering in the Gigagas Era. As a next-generation Layer 2, RISE makes the full potential of blockchain technology accessible to everyone, from developers to end-users.",
                logoImageLink: "https://www.riselabs.xyz/icons/rise.svg"
            },
            {
                name: "Joke Race",
                link: "https://www.jokerace.io/",
                info: "",
                logoImageLink: ""
            },
            {
                name: "RSS3",
                link: "https://rss3.io/",
                info: "RSS3 is a decentralized network indexing and structuring open information, making it accessible and valuable for the next Twitter, Google, and OpenAI.",
                logoImageLink: ""
            },
            {
                name: "Dymension",
                link: "https://dymension.xyz/",
                info: "Dymension is a layer 1 blockchainconnecting users and liquidity with modular blockchains called RollApps.",
                logoImageLink: "https://dymension.xyz/_next/static/media/dymension-logo.709c5330.svg"
            },
            {
                name: "HUMANODE",
                link: "https://humanode.io/",
                info: "Humanode conducts private biometric verification of its validators to ensure that there is only one unique living human being behind each node.Humanode considers all humans to be equal, thus all nodes deployed are equal in terms of fee distribution, validation, and voting.1 human = 1 node = 1 vote.",
                logoImageLink: ""
            },


        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Liteseed",
        category: CategoryEnum.DeveloperTools,
        analysis: false,
        processID: "liteseed",
        logoImageLink: "https://liteseed.xyz/images/icon.webp",
        bannerLink: "",
        links: {
            website: "https://liteseed.xyz/",
            docs: "",
            discord: "https://liteseed.xyz/images/discord.webp",
            twitter: "https://liteseed.xyz/images/x.webp",
            github: "https://liteseed.xyz/images/github.webp",
            telegram: "",
            other: ["hello@liteseed.xyz", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Liteseed Network is a Decentralized Physical Infrastructure Network (DePIN) to upload data onto Arweave.",
        oneLiner: "Decentralized Physical Infrastructure Network to make Arweave faster.",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "https://docs.liteseed.xyz/",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },


    {
        name: "Protocol Land",
        category: CategoryEnum.DeveloperTools,
        analysis: false,
        processID: "protocolland",
        logoImageLink: "https://pbs.twimg.com/profile_images/1858825222142529536/PBFjc3Uo_400x400.jpg",
        bannerLink: "",
        links: {
            website: "https://protocol.land",
            docs: "https://docs.protocol.land/",
            discord: "https://discord.com/invite/GqxX2vtwRj",
            twitter: "https://twitter.com/ProtocolLand",
            github: "https://github.com/labscommunity/protocol-land",
            telegram: "",
            other: ["https://www.linkedin.com/company/protocol-land/", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Decentralized, source controlled, code collaboration where you own your code.",
        oneLiner: "Code collaboration, reimagined",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Issue tracking",
                info: "Keep track of tasks, bugs, development for your project",
                liveLink: "",
                other: [""]
            },
            {
                name: "Pull Requests",
                info: "Submit changes to your repository hosted in Protocol.Land",
                liveLink: "",
                other: [""]
            },
            {
                name: "Forking",
                info: "Seamlessly create a copy of your repository",
                liveLink: "",
                other: [""]
            },
            {
                name: "User Profiles",
                info: "Create your unique profile connected to your wallet address",
                liveLink: "",
                other: [""]
            },
            {
                name: "Bounties",
                info: "Your contributions don’t just shape the future, they’re rewarded in real time. Whether it’s open source projects, repository maintenance, or code reviews",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "Commmunity Labs",
                link: "https://www.communitylabs.com/",
                info: "Collaborator",
                logoImageLink: "https://cdn.prod.website-files.com/66a95bb074e6f8f96d7b59a9/66c4e4b2dfe1f08711cbca3f_CL-Black-Text.svg"
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "AOX",
        category: CategoryEnum.Bridge,
        analysis: false,
        processID: "aox",
        logoImageLink: "https://aox.arweave.net/favicon-dark.png",
        bannerLink: "",
        links: {
            website: "https://aox.arweave.net/#/",
            docs: "",
            discord: "https://discord.gg/ERXDrzyqF8",
            twitter: "https://twitter.com/aox_xyz",
            github: "",
            telegram: "https://t.me/PermaDao_ar/5700",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "",
        oneLiner: "",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Transfer from Web3 Wallet",
                info: "Transfer your tokens from one network to AO",
                liveLink: "https://aox.arweave.net/#/wallet-deposit",
                other: [""]
            },
            {
                name: "Transfer from Exchange",
                info: "Transfer your tokens from one CEX (eg. Binance) to AO",
                liveLink: "https://aox.arweave.net/#/cex-deposit",
                other: [""]
            },
            {
                name: "Buy crypto on AO",
                info: "Purchase assets on AO with fiat currency",
                liveLink: "Comming Soon",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "everVison",
                link: "https://ever.vision/#/",
                info: "Incubator",
                logoImageLink: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZJSURBVHgB7Z3xlZs4EIe1964Al0AJKYHrYDs4l7Ad2Kkg28FuB5sOvB04HeAOkg5+h8wQEw7DCAmYked7jz8sC2ngQ8iWZeGcYRiGYRiGYRiGYRiGYRgCALCrt2/19kqvy3o719vBGbqpJRb1VqHhTGklbvj3Cmfooyf3KpPSu4Kzl/yXyxASdqq3gpH9mtdashIGWm7LT3q/xDBZt+QsGJF7hfLcE3y9COrti8uIbG7RJMZ/kCrcfHauuV1nIzkLwSTE97k7F092klXjRdCtdRLKX4BHdrdrdTDlnkcEf8Aky4Qp94jOhyraryu4pDwmWRJcuZR3VDClmWQphMil/JOCKd0kb02oXNqHJZjeM8lbMUcu7ccWTO+b5LWZK5f2DRJMeUzyWsTIpf2DBVM+k7w0sXKpjLKTd8cVTPua5KVIIZfK6QouECCY9lctWfJY9LMbH1v++vT0dHQLQ3V8HcniY3x2QtH6Y8MqclsYksWiUXCo3F8uAVolaxM8p+UmEezRKFmT4FVvy/fQJlmLYBFyWzRJ1iBYlNwWLZL/drIRKbfFx4ZmgMwIBYmmsPYGNoIHOph1pJgLtgirt2Aa9ZkaGHivW8fFKaGO9RdJbo9r54YHab7XeX+4XEk1/BhY5+ItuFPX445dbyGX6l1NMNX3eJK3kkt1jwle5EQ/lOQt5VL9Y4ILtxB12e/IXfLWcimGTQRT3flKliCX4thMMNWfn2QpcimWTQVTDPlIliSX4tlcMMWhX7I0uRRTV+huK8EUi17JEuVSXL+F9l+vLZjq1ydZqlyKTZRgikGPZMlyKb5WaNV7vZlgikO+ZOlyKcZW6Gcn7bS1YIpDrmSm3He3MR3B+07aUYJgioUjuXBrgonVbKTI9XRiLTppu01O3B0YkqvVYtUk10Px7gfSXyBEsEeEZG1yPRA826IPbp8N1peM5rZWTQTw6YzZ0Dk+MySnv2gxfQs5Q1FrkQpT8hu3vJBps/9OvH+pN/srZTyFa87lGKVj8sTNCN70Fv83kYufhOYMEbAFG2mh7mx2l5Z81il17qwlA+/wgYGvK48E9a/+69kJkbjUYPpDFhd/kbxhgRmNUkGzysAb4hpIF/aHrJAgOV+TQqnq7RWCBhxSgUbqAemkds/ZMt9WwBvomIv/arCHYtlIeAu+Q4WVRrNSX5V9kvXXFO/LQHqSiwmNVF/WCctSYcXxaO4azSfEEd1f43ZB7nppVcwJQ3MLfkX8xV4x8qz/syF4kis0J2KP+Ft7hRn9NW4/F7500vaUVrgA6JgPiJd6QfOTJafLE/+b8O8hTDSy3xF/gtj9NW6CT520E6Vx9k/Vr/pj9sdedso9M/ZRMavjj3Fq3PqtH4hntL+m+FoKSjt3Xw/s4+N7Rpp+9RPNBdI/fvlyWzBDcm9ff2VXiGOwv0ZvpTtKaxnKm6Jf/UnllAPHq0tuCyIkd8rwrfoT8VRoZPvb86hgpOtXPf9rrQPHqE9uC3iSJ0dh0IhJ0arRK8OXu8OfJzOWu6114LjeGGVl8e8G9lAb0rVqTwH+Y3Wm8DH5fpo1qoQc5LYgsWQqM0WrjhXsj+mIQBHISW4LFpDcKXtuq54r2Nfl++vgMWDkKLcFC0qm8kNbdYjgtrXOHthHznJbsLDkTj2cVs0RfG2tLpKHkNvClPzNJQDjrfqe4OjW2ovhgEeR28KUfHAJQdOqzyOCk7TWXp0HPJrclo0kP48ILl1CJMpddSlDv4xffYD/uPGlDJ+8hISTylaZ4YlmlMxPYhxbgTbvpQxDQLrFSMulW3CqWJdA8nrR+9S36yWgGPdOKNIXBD9KlkyxHZ1gNKz4LlKyBrkeLc9sECVZi1yPpqeuiJCsSa5H23OTNpWsTa5H45PPNpGsUa5H67MLV5WsVa5oUg1rxg50SBx+zIYUkmMEm9wViJWMgGmzvf0OMLnrECN5jmCTuwFzJYcKNrkbMkdyiGCTK4BQyVzBJlcQIZI5gk2uQLiSpwTD5MqFKfljRPAJJlc2TMn3BJtcDQRI/kL5Ta42mJJLymtyNcKQXFI+k6uVCckl5TG5miHJ1YjgSy/d5y2coQcMr0FV0nsXk5sBA5JLSr+Y3ExAs+jKe0/wdzT/311m1VbDMAzDMAzDMAzDMAzDMAL5D42FbTR1syEGAAAAAElFTkSuQmCC"
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Quantum",
        category: CategoryEnum.Bridge,
        analysis: false,
        processID: "quantum",
        logoImageLink: "https://cdn.prod.website-files.com/6690496aaf262323d4a4ba1f/6696e927236e99d109093f2a_Webclip.png",
        bannerLink: "",
        links: {
            website: "https://quantum.astrousd.com/",
            docs: "https://docs.astrousd.com/what-is-quantum-coming-soon",
            discord: "https://discord.com/invite/NpNRtNE6PN",
            twitter: "https://twitter.com/AstroUSD",
            github: "",
            telegram: "",
            other: ["https://www.astrousd.com/blog", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Seamless Liquidity from Arweave to AO",
        oneLiner: "Seamless Liquidity from Arweave to AO",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "https://bridge.astrousd.com/",
        projectOrigin: "",
        useCases: [
            {
                name: "Trading",
                info: "",
                liveLink: "",
                other: [""]
            },
            {
                name: "Lending/Borrowing",
                info: "",
                liveLink: "",
                other: [""]
            },
            {
                name: "GameFi",
                info: "",
                liveLink: "",
                other: [""]
            },
            {
                name: "Prediction Markets",
                info: "",
                liveLink: "",
                other: [""]
            },
            {
                name: "AgentFi",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "Astro",
                role: "Founding Team",
                moreInfo: "Built by Astrousd",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Permadao",
        category: CategoryEnum.Community,
        analysis: false,
        processID: "Permadao",
        logoImageLink: "https://avatars.githubusercontent.com/u/122953514?s=200&v=4",
        bannerLink: "",
        links: {
            website: "https://permadao.com/permadao/PermaDAO-76e627a9044548498d02b8fe4e962720",
            docs: "",
            discord: "https://discord.gg/y6CmaAdVD8",
            twitter: "https://x.com/perma_dao?lang=en",
            github: "https://github.com/permadao",
            telegram: "https://t.me/+UEnIssIHTn0wZDc1",
            other: ["https://www.youtube.com/@permadao", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "The permanent storage of data is of great significance to human beings! Arweave is the infrastructure responsible for permanently storing the crystallization of human wisdom as the Library of Alexandria in the Web3.0 era. Web3 is accelerating its development, and Arweave as an infrastructure will be adopted by more developers, creating a new and more colorful ecosystem. PermaDAO is the co-builder community established for this purpose. All participants can find their role here to contribute to the Arweave ecosystem. Any proposals and tasks related to Arweave can be posted here and receive support and feedback from the entire community. The great migration from Web2 to Web3 is underway, and we hope to help you find your place in this great migration through this community!",
        oneLiner: "co-builder community",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "AO Computer Club",
        category: CategoryEnum.Community,
        analysis: false,
        processID: "aocomputerclub",
        logoImageLink: "https://pbs.twimg.com/profile_images/1757175667450621952/PtB2bb0-_400x400.jpg",
        bannerLink: "",
        links: {
            website: "https://computerclub.arweave.net/",
            docs: "",
            discord: "",
            twitter: "",
            github: "",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "ao Computer Club is for inventors and wild thinkers. Welcome. You're one of us if you're reading this.",
        oneLiner: "For inventors and wild thinkers",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Weavers",
        category: CategoryEnum.Community,
        analysis: false,
        processID: "onlyweavers",
        logoImageLink: "https://pbs.twimg.com/profile_images/1823767838823182336/ewYUK9HU_400x400.png",
        bannerLink: "",
        links: {
            website: "https://www.weaversofficial.com/",
            docs: "",
            discord: "",
            twitter: "https://x.com/Weavers_Org",
            github: "",
            telegram: "",
            other: ["https://linktr.ee/Weavers_org", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "A community of devs + creatives in the Arweave ecosystem.",
        oneLiner: "A community of devs + creatives in the Arweave ecosystem.",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Only Arweave",
        category: CategoryEnum.Community,
        analysis: false,
        processID: "arweave",
        logoImageLink: "https://pbs.twimg.com/profile_images/1235596780047339521/oRt6SiEN_400x400.jpg",
        bannerLink: "",
        links: {
            website: "https://arweave.org/",
            docs: "",
            discord: "",
            twitter: "https://twitter.com/arweaveeco",
            github: "",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "The Arweave network is like Bitcoin, but for data: A permanent and decentralized web inside an open ledger.Permanent storage has many applications: from the preservation of humanity's most important data, to the hosting of truly decentralized and provably neutral web apps. The Arweave protocol is stable, mature and widely adopted. As such, its ecosystem is fully decentralized. This site is just the tip of the iceberg. It acts as a map that points you to places you can learn about, use and build on Arweave. Dive in! The rabbit hole is deep, and the possibilities are endless.",
        oneLiner: "Arweave: Permanent information storage.",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "https://arweave.org/use/",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "odysee",
        category: CategoryEnum.CreatorEconomy,
        analysis: false,
        processID: "odysee",
        logoImageLink: "https://pbs.twimg.com/profile_images/1299848979207696385/7DlBlMYH_400x400.jpg",
        // logoImageLink: "https://help.odysee.tv/img/Logo_White_Background_Black_Text.png",
        bannerLink: "",
        links: {
            website: "https://odysee.com/",
            docs: "",
            discord: "https://chat.odysee.com/",
            twitter: "https://twitter.com/odyseeteam",
            github: "https://github.com/OdyseeTeam",
            telegram: "",
            other: ["https://www.reddit.com/r/OdyseeForever/", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Odysee is a blockchain-based media platform. We host all kinds of media such as images, articles, PDFs, audio files, etc., but we're best known for hosting videos.Odysee seeks to recapture the spirit of the early 2000s era internet. Rather than favouring corporate content such as late night talk shows, network television, and TV news, Odysee is a place for everyone, including independent creators.Referring to Odysee as blockchain-based isn't just sloganeering. All content on Odysee is hosted on blockchain technology, which Odysee then pulls from. For those interested in blockchain, this is really cool. For those who don't know a thing about blockchain, that's totally fine because Odysee requires zero blockchain knowledge to use.",
        oneLiner: "Decentralized video hosting platform",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "https://help.odysee.tv/category-basics/",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "solarplex",
        category: CategoryEnum.CreatorEconomy,
        analysis: false,
        processID: "solarplex",
        logoImageLink: "https://www.alchemy.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Falchemy-website%2Fimage%2Fupload%2Fv1694675985%2Fdapp-store%2Fdapp-logos%2FSolarplex.png&w=256&q=75",
        bannerLink: "",
        links: {
            website: "https://www.solarplex.xyz/",
            docs: "",
            discord: "",
            twitter: "https://x.com/solarplex_xyz",
            github: "",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Solarplex helps creators build authentic relationships with their audience and earn an income without ads",
        oneLiner: "Creator Economy Platform",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "DumDumz",
        category: CategoryEnum.NFT,
        analysis: false,
        processID: "dumdumz",
        logoImageLink: "https://dumdumz.xyz/images/profile/Jonny_Ringo_nft.png",
        bannerLink: "",
        links: {
            website: "https://dumdumz.xyz/",
            docs: "",
            discord: "https://discord.gg/p6WMtXJF",
            twitter: "https://x.com/dumdumznfts",
            github: "",
            telegram: "",
            other: ["https://ao-bazar.arweave.dev/#/collection/JAHF1fo4MECRZZFKGcT0B6XM94Lqe-3FtB4Ht_kTEK0", ""]
        },
        team: [
            {
                officialName: "Crypto Cherie",
                pseudoName: "",
                role: "Founder",
                imgLink: "https://dumdumz.xyz/images/profile/Crypto_Cherie_Profile.jpg",
                links: {
                    discord: "",
                    github: "",
                    twitter: "https://x.com/Crypto_Cherie",
                    dribble: "",
                    other: ["", ""],
                },
            },
            {
                officialName: "Josh Burleson",
                pseudoName: "",
                role: "Builder",
                imgLink: "https://dumdumz.xyz/images/profile/FUDBear_Profile.jpg",
                links: {
                    discord: "",
                    github: "",
                    twitter: "https://x.com/Josh_Burleson",
                    dribble: "",
                    other: ["", ""],
                },
            },
            {
                officialName: "Jonny Ringo",
                pseudoName: "Advisor",
                role: "",
                imgLink: "https://dumdumz.xyz/images/profile/Jonny_Ringo_Profile.jpg",
                links: {
                    discord: "",
                    github: "",
                    twitter: "https://x.com/JonnyRingo711",
                    dribble: "",
                    other: ["", ""],
                },
            },

        ],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Feeling like an edgelord? Then maybe a 1984 shirt with some synth glasses is your style, or perhaps get fancy with a top hat and a gold chain? Whatever vibe you’re going for you can use the DumDumz attribute search tool to find your perfect DumDum.",
        oneLiner: "our home for the #1984 piece NFT collection exclusive to the AO blockchain.",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "https://ao-bazar.arweave.dev/#/collection/JAHF1fo4MECRZZFKGcT0B6XM94Lqe-3FtB4Ht_kTEK0",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "MekaHuman",
        category: CategoryEnum.NFT,
        analysis: false,
        processID: "mekahuman",
        logoImageLink: "https://djv7c3mya7wpbo6q7t2477mc5asjd4arlkiieqi5oxoq7b73s3nq.arweave.net/GmvxbZgH7PC70Pz1z_2C6CSR8BFakIJBHXXdD4f7lts",
        bannerLink: "",
        links: {
            website: "https://mekahuman.ar.io",
            docs: "",
            discord: "",
            twitter: "https://x.com/Meka_Human",
            github: "",
            telegram: "",
            other: ["https://bazar.arweave.dev/#/collection/McohDUAntHJVSduf2PNw3ugh6pHca1p2w1L-31mtBPo/assets/", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "From warrior guardians to wise sages, the Meka Humans tell a story of a world where organic and synthetic life forms coexist and evolve together. Each 3D-rendered Meka Human is meticulously crafted, embodying a harmonious blend of human emotions and futuristic mechanical designs.",
        oneLiner: "3D-rendered blend of human emotions and futuristic mechanical designs",
        token: {
            name: "Cyber Kredit",
            ticker: "$Kredit",
            processId: "kaKX-WblbPwj9XoHfeyU7Rb2RZC2I3iT2fG-wTYk-Pk",
            denomination: "Kredit",
            //circulating supply as of now
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: "https://www.ao.link/#/token/kaKX-WblbPwj9XoHfeyU7Rb2RZC2I3iT2fG-wTYk-Pk?tab=chart"
            }
        },
        gettingStartedGuide: "https://mekahuman.ar.io/#/meka-world",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "DataOS",
        category: CategoryEnum.AI,
        analysis: false,
        processID: "dataos",
        logoImageLink: "https://stats.dataos.so/dataos_gray.svg",
        bannerLink: "",
        links: {
            website: "",
            docs: "",
            discord: "https://discord.gg/AK6C2PPWDc",
            twitter: "https://twitter.com/thedataos",
            github: "",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "The Protocol for AI-generated apps on top of Open Data Lakes.We are decentralizing computation intelligence, one app at a time",
        oneLiner: "Protocol for AI-generated apps on top of Open Data Lakes",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Trunk",
        category: CategoryEnum.Memecoin,
        analysis: false,
        processID: "trunk",
        logoImageLink: "https://arweave.net/hqg-Em9DdYHYmMysyVi8LuTGF8IF_F7ZacgjYiSpj0k",
        bannerLink: "",
        links: {
            website: "https://trunkao.xyz/#/",
            docs: "",
            discord: "",
            twitter: "https://x.com/TrunkToken",
            github: "",
            telegram: "https://t.me/TRUNKchat",
            other: ["https://www.ao.link/#/token/wOrb8b_V8QixWyXZub48Ki5B6OIDyf_p1ngoonsaRpQ", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "The first Meme token on AO  @aothecomputer and #Arweave",
        oneLiner: "The first Meme token on AO  @aothecomputer and #Arweave",
        token: {
            name: "Trunk Token",
            ticker: "TRUNK",
            processId: "wOrb8b_V8QixWyXZub48Ki5B6OIDyf_p1ngoonsaRpQ",
            denomination: "",
            //circulating supply as of now
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: "https://www.ao.link/#/token/wOrb8b_V8QixWyXZub48Ki5B6OIDyf_p1ngoonsaRpQ"
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Stake",
                info: "stake and unstake trunk tokens",
                liveLink: "",
                other: [""]
            },
            {
                name: "Vote",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Typr",
        category: CategoryEnum.Social,
        analysis: false,
        processID: "typr",
        logoImageLink: "https://www.typr.day/favicon.png",
        bannerLink: "",
        links: {
            website: "https://www.typr.day/",
            docs: "",
            discord: "",
            twitter: "https://x.com/TyprDay",
            github: "",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "iamgamelover",
            pseudoName: "iamgamelover",
            role: "Founder",
            imgLink: "https://pbs.twimg.com/profile_images/1440922591342989314/_aPyQ-v3_400x400.jpg",
            links: {
                discord: "",
                github: "",
                twitter: "https://x.com/digyourinsight",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "A Self-Sustaining Community - The first and unique social platform on AO  @aoThecomputer and Arweave.",
        oneLiner: "social platform on AO",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "AstroUSD",
                link: "https://www.astrousd.com/",
                info: "Partnership with Typr, the innovative social platform built on @aothecomputer, is part of our mission to bring a new path of stability and liquidity to the AO ecosystem!",
                logoImageLink: "https://www.astrousd.com/"
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "DecentraMind",
        category: CategoryEnum.Social,
        analysis: false,
        processID: "decentramind",
        logoImageLink: "https://pbs.twimg.com/profile_images/1806545056436043776/XgEzPPcz_400x400.jpg",
        bannerLink: "",
        links: {
            website: "https://decentramind.club/",
            docs: "https://decentramind.gitbook.io/decentramind",
            discord: "",
            twitter: "",
            github: "",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "DecentraMind is a web3 contribution market for real builders and a place to help projects to build better communities by progressive ownership model. In short, progressive ownership proposes a fairer and more efficient community token distribution model than the airdrop model.",
        oneLiner: "",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Creating Token",
                info: "create custom token for your community",
                liveLink: "https://decentramind.gitbook.io/decentramind/tutorials-for-communities/how-to-create-token-with-1-click",
                other: [""]
            },
            {
                name: CategoryEnum.Community,
                info: "Create your community",
                liveLink: "https://decentramind.gitbook.io/decentramind/tutorials-for-communities/how-to-create-a-community",
                other: [""]
            },
            {
                name: "Quests",
                info: "Add Quests for your bounty and reward communtiy",
                liveLink: "https://decentramind.gitbook.io/decentramind/tutorials-for-communities/know-more-about-quest-tags",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Atomic Notes",
        category: CategoryEnum.Social,
        analysis: false,
        processID: "atomicnotes",
        logoImageLink: "https://note.ar.io/icon.png",
        bannerLink: "",
        links: {
            website: "https://note.ar.io/#/",
            docs: "https://github.com/ocrybit/atomic-notes/tree/master/sdk",
            discord: "",
            twitter: "https://x.com/atomic_notes",
            github: "https://github.com/weavedb/atomic-notes",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "A New Decentralized Social Primitive.",
        oneLiner: "A New Decentralized Social Primitive.",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Atomic Assets",
                info: "Data, licenses and smart contracts are all stored together on Arweave as tradable atomic assets on UCMs like BazAR.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Universal Data License",
                info: "Profit sharing and royalty distribution are to be automated by Universal Content Marketplaces with onchain UDLs.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Editable Notes on AO",
                info: "AO enables delta updates on permanent data, co-authoring, and semantic version control with AO processes / smart contracts.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Built for Developers",
                info: "Atomic notes introduce a new social primitive built with a developer-first approach, providing an SDK and APIs.",
                liveLink: "",
                other: [""]
            },
            {
                name: "ArNS Integration",
                info: "ArNSdomains provide censorship-resistant access to your content through thousands of decentralized gateways.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Atomic Timelines",
                info: "Atomic Timelines are horizontally scalable social timelines built with Atomic Notes, distributing rewards to content creators.",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "llamaland",
        category: CategoryEnum.Game,
        analysis: false,
        processID: "llamaland",
        logoImageLink: "https://llamaland.arweave.dev/assets/branding/LLAMA_coin_large.png",
        bannerLink: "",
        links: {
            website: "https://llamaland.g8way.io/#/",
            docs: "",
            discord: "",
            twitter: "https://x.com/LlamaLandAO",
            github: "",
            telegram: "",
            other: ["", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "AI powered MMO game built on  @aoTheComputer. Petition the Llama King for Llama Coin! 100% onchain",
        oneLiner: "AI powered MMO game built on  @aoTheComputer",
        token: {
            name: "Llama Coin",
            ticker: "LLAMA",
            processId: "pazXumQI-HPH7iFGfTC-4_7biSnqz_U67oFAGry5zUY",
            denomination: "LLAMA",
            // circulating supply
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: "https://www.ao.link/#/token/pazXumQI-HPH7iFGfTC-4_7biSnqz_U67oFAGry5zUY"
            }
        },
        gettingStartedGuide: "https://llamaland.arweave.dev/#/",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "ao Builders",
        category: CategoryEnum.Game,
        analysis: false,
        processID: "aobuilders",
        logoImageLink: "https://aobuilders.space/wp-content/uploads/2024/05/cropped-AO_builders_logo_black-1.png",
        bannerLink: "",
        links: {
            website: "https://aobuilders.space/",
            docs: "",
            discord: "https://t.co/iCCj9l85QD",
            twitter: "https://x.com/ao_builders",
            github: "",
            telegram: "",
            other: ["", ""]
        },
        team: [

            {
                officialName: "Marcin Kazmierczak",
                pseudoName: "",
                role: "Co-founder, COO",
                imgLink: "https://aobuilders.space/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-30-12.09.22-Modify-the-digital-art-portrait-of-Marcin-to-depict-him-with-blonde-hair-maintaining-the-modern-and-authoritative-COO-look-in-a-crypto-oriented-setti-630x630.webp",
                links: {
                    discord: "",
                    github: "",
                    twitter: "",
                    dribble: "",
                    other: ["", ""],
                },
            },
            {
                officialName: "Jakub Wojciechowski",
                pseudoName: "",
                role: "Founder, CEO",
                imgLink: "https://aobuilders.space/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-30-11.40.42-Create-a-pixel-art-portrait-inspired-by-the-photo-of-a-man-in-his-mid-30s-featuring-tousled-hair-and-a-friendly-expression.-This-time-dress-him-in-a-630x630.webp",
                links: {
                    discord: "",
                    github: "",
                    twitter: "",
                    dribble: "",
                    other: ["", ""],
                },
            },
            {
                officialName: "Piotr",
                pseudoName: "Co-Founder, CTO",
                role: "",
                imgLink: "https://aobuilders.space/wp-content/uploads/2020/04/DALL%C2%B7E-2024-04-29-11.10.35-Create-a-pixel-art-portrait-of-a-character-named-Peter-Pedziwiatr-for-the-AO-Builders-Space-designed-to-align-with-the-style-commonly-found-on-profes-768x1344.webp",
                links: {
                    discord: "",
                    github: "",
                    twitter: "https://twitter.com/ThemerexThemes",
                    dribble: "",
                    other: ["", ""],
                },
            },

            {
                officialName: "Tadeusz",
                pseudoName: "",
                role: "Senior Backend Developer",
                imgLink: "https://aobuilders.space/wp-content/uploads/2024/04/DALL%C2%B7E-2024-05-08-16.07.00-Pixel-art-illustration-of-a-character-named-Tadeusz-dubbed-The-Technomancer.-He-is-a-tech-savvy-programmer-depicted-in-a-cyberpunk-style-Japanese-s-630x630.webp",
                links: {
                    discord: "",
                    github: "",
                    twitter: "https://twitter.com/Tadeuczi",
                    dribble: "",
                    other: ["", ""],
                },
            },
            {
                officialName: "Michal Szynwelski",
                pseudoName: "",
                role: "Head of Research",
                imgLink: "https://aobuilders.space/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-30-14.27.51-Create-a-pixel-art-portrait-of-a-40-year-old-man-weighing-90-kg-based-on-the-provided-photo.-He-should-have-brown-hair-brown-eyes-and-wear-black-gl-630x630.webp",
                links: {
                    discord: "",
                    github: "",
                    twitter: "",
                    dribble: "",
                    other: ["", ""],
                },
            },

        ],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "A premier innovation hub to realize the vision of @aoTheComputer",
        oneLiner: "A premier innovation hub to realize the vision of @aoTheComputer",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "Satoshi's Palace",
        category: CategoryEnum.Game,
        analysis: false,
        processID: "satoshispalace",
        logoImageLink: "https://framerusercontent.com/images/GLo91iBvS59sboDvWgDGvlDyLY.png?scale-down-to=512",
        bannerLink: "",
        links: {
            website: "https://satoshispalace.casino/",
            docs: "https://docs.satoshispalace.casino/",
            discord: "https://t.co/8z9TTAaK2h",
            twitter: "https://x.com/SatoshisPalaceX",
            github: "https://github.com/SatoshisPalace/",
            telegram: "https://t.co/ne6UYhBGWT",
            other: ["", ""]
        },
        team: [
            {
                officialName: "Caitlyn",
                pseudoName: "",
                role: "Queen",
                imgLink: "https://framerusercontent.com/images/BiY0kG1fTgfO2UTU3KnNQSoTXA.png?scale-down-to=1024",
                links: {
                    discord: "",
                    github: "",
                    twitter: "",
                    dribble: "",
                    other: ["", ""],
                },
            },
            {
                officialName: "Kenny",
                pseudoName: "",
                role: "King",
                imgLink: "https://framerusercontent.com/images/PvtQomZyl6dp4hzK9tFAn7JjTw.jpg",
                links: {
                    discord: "",
                    github: "",
                    twitter: "",
                    dribble: "",
                    other: ["", ""],
                },
            },
            {
                officialName: "Ethan",
                pseudoName: "",
                role: "Court Jester",
                imgLink: "https://framerusercontent.com/images/fVbrtJhZ6pj7ZowxhdPowXZJmR0.png",
                links: {
                    discord: "",
                    github: "",
                    twitter: "",
                    dribble: "",
                    other: ["", ""],
                },
            },
        ],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "to revolutionize the gaming experience by seamlessly merging the excitement of gaming with the innovation of blockchain technology, delivering a fun, secure, and provably fair environment.",
        oneLiner: "Provably Fair Gaming",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "",
                info: "",
                liveLink: "",
                other: [""]
            }
        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [
            {
                goal: "In-Game Ownership",
                date: "",
                proof: "We empower players with true ownership of their in-game assets through blockchain technology. By leveraging NFTs, gamers can fully control, trade, and collect their unique digital items, giving them unprecedented freedom and autonomy in the gaming world.",
                status: ""
            },
            {
                goal: "Immersive Experience",
                date: "",
                proof: "We are redefining gaming with an exciting, fun-filled user experience that captivates from the start. With intuitive design, stunning visuals, and interactive gameplay, every session is an immersive journey. ",
                status: ""
            }

        ],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "ao Link",
        category: CategoryEnum.BlockExplorer,
        analysis: false,
        processID: "aolink",
        logoImageLink: "https://www.ao.link/ao.svg",
        bannerLink: "",
        links: {
            website: "https://www.ao.link/",
            docs: "https://docs.autonomous.finance/products/ecosystem-tooling/ao-link",
            discord: "",
            twitter: "https://x.com/autonomous_af",
            github: "https://github.com/Autonomous-Finance",
            telegram: "",
            other: ["https://gygbo2cdld7i3t624il5zxa3ezyv6sa2ikvhrlmabah2etw45wua.arweave.net/NgwXaENY_o3P2uIX3NwbJnFfSBpCqnitgAgPok7c7ag/#/spec", ""]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "AOlink (accessible at aolink.ar.io or ao.link) is a fully decentralized transaction explorer for the AO network. It provides a comprehensive view of on-chain transaction messages and computations, offering an interactive experience similar to block explorers but tailored for the unique structure of the AO network.",
        oneLiner: "Transaction explorer for the AO network",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "",
        useCases: [
            {
                name: "Decentralized Transaction Explorer",
                info: "AOlink reflects all on-chain transaction messages and computational processes in real-time, allowing users to explore the AO network’s activities transparently.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Message Explorer",
                info: " It serves as a powerful message explorer, organizing and displaying linked messages to make navigating the network easier, much like traditional blockchain explorers.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Graphical Visualization",
                info: "Message links are visually represented, helping users understand the connections and flow between different transactions and processes on the network.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Manual Message Interaction",
                info: "Users can manually interact with on-chain processes by sending messages, enabling direct engagement with decentralized applications or smart contracts.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Real-Time Message Streaming",
                info: "AOlink streams messages in near real-time, with data retrieval coming from public gateways. The information is nearly immediate, only limited by the small delay typically associated with the gateway.",
                liveLink: "",
                other: [""]
            },
            {
                name: "Additional Tools",
                info: "Users can also view their token balances, inboxes, and even the code behind processes, giving full control and insight into network interactions.",
                liveLink: "",
                other: [""]
            },

        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "AUTONOMOUS FINANCE",
                link: "https://autonomous.finance/",
                info: "Powered by",
                logoImageLink: "https://2188048125-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/organizations%2FxHddqjLtN1m0DZlGTCGx%2Fsites%2Fsite_kaquA%2Flogo%2FLcI7Z8ad9kNwlbFt3xmk%2FFrame%206.svg?alt=media&token=057c490f-9965-43e2-a68f-02db0e896ace"
            },
            {
                name: "GOLDSKY.COM",
                link: "https://goldsky.com/",
                info: "Powered By",
                logoImageLink: "https://goldsky.com/images/favicon.svg"
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

    {
        name: "View Block",
        category: CategoryEnum.BlockExplorer,
        analysis: false,
        processID: "viewblock",
        logoImageLink: "https://blog.viewblock.io/content/images/2022/07/android-chrome-512x512.png",
        bannerLink: "",
        links: {
            website: "https://viewblock.io/",
            docs: "",
            discord: "",
            twitter: "https://twitter.com/viewblock",
            github: "https://github.com/ViewBlock",
            telegram: "",
            other: ["https://keybase.io/team/viewblock", "https://blog.viewblock.io/"]
        },
        team: [{
            officialName: "",
            pseudoName: "",
            role: "",
            imgLink: "",
            links: {
                discord: "",
                github: "",
                twitter: "",
                dribble: "",
                other: ["", ""],
            },
        },],
        exchangeInfo: {
            cooldownPeriod: 0,
            aoethRewardRate: 0,
        },
        description: "Blockchain exploration for the masses",
        oneLiner: "Blockchain exploration for the masses",
        token: {
            name: "",
            ticker: "",
            processId: "",
            denomination: "",
            totalSupply: "",
            tokenomics: {
                info: "",
                linkToBlogorPaper: ""
            }
        },
        gettingStartedGuide: "",
        projectOrigin: "ViewBlock was started back in 2018 with the mission to build chain-agnostic explorers and various other easy-to-use tools to help crypto adoption.Since then, we kept on expanding to different chains and projects we believed had potential to disrupt an already disruptive crypto space.",
        useCases: [
            {
                name: "Thorchain",
                info: "explorer for thorchain",
                liveLink: "https://viewblock.io/thorchain",
                other: [""]
            },
            {
                name: "arweave",
                info: "explorer for arweave",
                liveLink: "https://viewblock.io/arweave",
                other: [""]
            },
            {
                name: "ao",
                info: "explorer for ao",
                liveLink: "https://viewblock.io/ao",
                other: [""]
            },
            {
                name: "kyve",
                info: "explorer for kyve",
                liveLink: "https://viewblock.io/kyve",
                other: [""]
            },
            {
                name: "zilliqa",
                info: "explorer for zilliqa",
                liveLink: "https://viewblock.io/zilliqa",
                other: [""]
            },
            {
                name: "starknet",
                info: "explorer for starknet",
                liveLink: "https://viewblock.io/starknet",
                other: [""]
            },
            {
                name: "Mixin",
                info: "explorer for Mixin",
                liveLink: "https://viewblock.io/Mixin",
                other: [""]
            },


        ],
        advisorsInvestors: [
            {
                name: "",
                role: "",
                moreInfo: "",
                amountIfAny: [""],
            }
        ],
        mileStones: [{
            goal: "",
            date: "",
            proof: "",
            status: ""
        }],
        mediaMentions: [""],
        collaborations: [
            {
                name: "",
                link: "",
                info: "",
                logoImageLink: ""
            }
        ],
        ownershipPercentages: [{
            name: "",
            role: "",
            percentage: ""
        }]
    },

]