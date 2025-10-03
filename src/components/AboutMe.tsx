import SocialBox from "./SocialBox";
import Image from "next/image";
import { FC } from "react";

const AboutMe: FC = () => {
  return (
    <div className="container flex justify-center mx-auto mb-16">
      <div className="" id="home">
        <div className="mt-36 about-me">
          {/* <Notice /> */}
          <div className="flex justify-center p-2 relative m-auto my-2 rounded-full w-[160px] h-[160px] group-hover:hidden overflow-hidden">
            <Image
              src={`/avatar/cap (4).png`}
              fill
              sizes="(max-width: 768px) auto, (max-width: 1200px) auto"
              className="object-cover"
              alt=""
            />
          </div>
          <h2 className="font-bold text-[36px] md:text-[40px] text-gray-800 dark:text-white flex justify-center">
            <span className="text-white-800 dark:text-white-500">{"Soul Capricorn"}</span><span></span>&nbsp;
            {/* <Type /> */}
          </h2>
          {/*           <div className="text-white font-bold text-md bg-purple-700 inline-block py-0.5 px-4 rounded-3xl my-3">
            # Open to work
          </div> */}
          <p className="text-[20px] md:text-[22px] text-gray-800 dark:text-gray-200 font-medium max-w-[600px]">
            {/* Results-driven Frontend and Web3 Developer with{" "} */}
            <span className="text-gray-800 dark:text-gray-400 font-medium">
              <span>rust engineer | blockchain | ai/ml | full-stack</span>
              <p className="text-[16px] text-center text-gray-500 font-bold">
                solana•₿itcoin•sui•solidity
              </p>
            </span>{" "}
          </p>
          <div className="font-bold uppercase">
            <SocialBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
