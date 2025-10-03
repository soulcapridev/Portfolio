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
    from: "Soul Capricorn - [Rust",
    to: "Engineer]",
    description: [
      {
        title:
          "Hello 👋",
      },
      {
        title:
          "I am a software engineer focused on Rust development in the Web3 space, particularly with platforms like Solana and Bitcoin, where I leverage my expertise in AI and ML to build innovative decentralized applications.",
      },
      {
        title:
          "Currently, I am working on enhancing the scalability and performance of blockchain solutions by integrating machine learning into decentralized finance (DeFi) systems.",
      },
      {
        title:
          "Previously, I contributed to various open-source projects and collaborated with teams to advance blockchain technologies and improve developer tooling.",
      },
      {
        title:
          "I am also passionate about fostering community engagement in the Rust and Web3 ecosystems and would love to explore collaboration opportunities or discuss community-building initiatives",
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
