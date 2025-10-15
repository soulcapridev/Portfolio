import React, { FC } from "react";
import EmploymentItem from "./EmploymentItem";
import { SectionTitle } from "./StyledComponent";

const Employment: FC = () => {
  return (
    <div id="about" className="container mx-auto">
      <div className="about mt-20">
        <SectionTitle>About</SectionTitle>
        <div className="grid gap-10 mt-10 mb-10">
          {emplyments.map((item, key) => (
            <EmploymentItem
              key={key}
              role={item.role}
              from={item.from}
              to={item.to}
              description={item.description}
              stack={item.stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employment;

const emplyments = [
  {
    role: "Skilled Rust engineer with expertise in developing, deploying, and optimizing high-performance Web3 solutions across blockchain ecosystems like Solana and Bitcoin, while integrating AI/ML capabilities.",
    from: "Soul Cr@ncr",
    to: "[Rust Engineer]",
    description: [
      {
        title:
          "Hello 👋",
      },
      {
        title:
          "As blockchain and software engineer specializing in Solana smart contracts, built secure, scalable smart contracts with advanced features.",
      },
      {
        title:
          "As skilled in Rust, Anchor, Web3, and full- stack development, created high-performance decentralized apps and trading bots.",
      },
      {
        title:
          "Experienced in backend and frontend blockchain solutions, focused on onchain arbitrage and DeFi platform development.",
      },
      {
        title:
          "Now preparing myself to be super in the next coming 4th breakthrough in blockchain and AI innovation.",
      },
    ],
    stack: [
      { title: "Rust" },
      { title: "C/C++" },
      { title: "Python" },
      { title: "React" },
      { title: "Next.js" },
      { title: "Solana Smart Contract" },
      { title: "Bitcoin Layer1/Layer2" },
    ],
  },
];
