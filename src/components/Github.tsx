import { FC } from "react";
import GitHubCalendar from "react-github-calendar";
import { SectionTitle } from "./StyledComponent";

const Footer: FC = () => {
  return (
    <div className="flex items-center justify-center py-20 lg:py-[20px] flex-col">
      <SectionTitle>
        Work History <span className="highlight"></span>
      </SectionTitle>
      <a
        href="https://github.com/soulcapridev"
        target="_blank"
        rel="noreferrer"
        className="text-purple-800 dark:text-purple-500 font-bold"
        style={{ textAlign: "center", padding: "10px 0" }}
      >
        https://github.com/soulcapridev
      </a>
      <GitHubCalendar
        username="soulcapridev"
        blockSize={17}
        blockMargin={1}
        fontSize={12}
      />
    </div>
  );
};

export default Footer;
