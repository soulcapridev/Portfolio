import Type from "./Type";
import {
  BitcoinIcon,
  NextjsIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  SolanaIcon,
  Web3Icon,
  AIIcon,
} from "./SvgIcons";
import SocialBox from "./SocialBox";
// import Notice from "./Notice";
import { FC } from "react";

const AboutMe: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="" id="home">
        <div className="mt-20 about-me">
          {/* <Notice /> */}
          <p className="text-[12px] pt-10 text-gray-500 font-bold">
            WELCOME TO MY PROFILE
          </p>
          <h2 className="font-bold text-[28px] md:text-[32px] py-2.5 text-gray-800 dark:text-white">
            This is <span className="text-purple-800 dark:text-purple-500">{"Jay West"}</span>, &nbsp;<span></span>&nbsp;
            <Type />
          </h2>
          <h2 className="text-gray-800 dark:text-gray-300 font-bold text-xl w-full flex items-center gap-2">
            just call me{" "}
            <span className="text-purple-800 dark:text-purple-500 font-bold flex items-center gap-1">
            🐐DegenCap 
            </span>
          </h2>
          {/*           <div className="text-white font-bold text-md bg-purple-700 inline-block py-0.5 px-4 rounded-3xl my-3">
            # Open to work
          </div> */}
          <p className="text-[14px] md:text-[16px] text-gray-800 dark:text-gray-200 font-medium max-w-[600px]">
            {/* Results-driven Frontend and Web3 Developer with{" "} */}
            <span className="text-purple-800 dark:text-purple-500 font-bold">
              <span>MABGA: Make AI &apos;n&apos; Blockchain Great Again</span>
            </span>{" "}
            {/* of experience in frontend development and expertise in{" "}
            <span className="text-purple-800 dark:text-purple-500 font-bold">
              Web3
            </span>{" "}
            technologies, seeking opportunities to contribute technical prowess
            and innovative solutions to dynamic projects. */}
          </p>
          <div className="mt-10 best-skill">
            <p className="text-gray-800 dark:!text-gray-500 font-semibold mb-2">
              BEST SKILL ON
            </p>
            <div className="flex flex-wrap">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
                title="Rust"
              >
                <RustIcon />
              </div>
              <div
                className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
                title="Python"
              >
                <PythonIcon />
              </div>
              <div
                className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
                title="AI"
              >
                <AIIcon />
              </div>
              <div
                className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
                title="Web3"
              >
                <Web3Icon />
              </div>
              <div
                className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
                title="Bitcoin"
              >
                <BitcoinIcon />
              </div>
              {/* <div
                className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
                title="Ethereum"
              >
                <EthereumIcon />
              </div> */}
              <div
                className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
                title="Solana"
              >
                <SolanaIcon />
              </div>
              {/* <div
                className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
                title="Solidity"
              >
                <SolidityIcon />
              </div> */}
              <div
                className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
                title="React"
              >
                <ReactIcon />
              </div>
              <div
                className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
                title="Nextjs"
              >
                <NextjsIcon />
              </div>
            </div>
          </div>
          <div className="font-bold uppercase mt-7">
            <p className="!text-gray-800 dark:!text-gray-500">Contact Info</p>
            <SocialBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
