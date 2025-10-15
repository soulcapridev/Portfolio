import { FC, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="h-[48px] lg:h-[68px]">
      <div className="flex justify-between items-center pl-6 py-2 lg:py-0 lg:pl-20 px-4 lg:px-3 border-b dark:border-gray-800 backdrop-blur-lg">
        <Link href="/#home" className="font-bold">
          soul cr@ncr blog
        </Link>
        <ul className="lg:flex items-center hidden gap-2">
          <li className="font-semibold capitalize text-[14px] py-2 hover:text-purple-500">
            <Link href="/#work" className="font-bold capitalize">
              work
            </Link>
          </li>
          <li className="font-semibold capitalize text-[14px] py-2 hover:text-purple-500">
            <Link href="/#about" className="font-bold capitalize">
              about
            </Link>
          </li>
          <li className="font-semibold px-3 text-[14px] py-2 hover:text-purple-500">
            <ThemeToggle />
          </li>
        </ul>
        <div className="mobile-nav">
          <div
            className="hamburger"
            style={{ position: !open ? "absolute" : "fixed" }}
          >
            <button onClick={() => setOpen(!open)}>
              {!open ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="2"
                    width="16"
                    height="2"
                    rx="1"
                    fill="#7B7B7B"
                  />
                  <rect
                    x="1"
                    y="8"
                    width="16"
                    height="2"
                    rx="1"
                    fill="#7B7B7B"
                  />
                  <rect
                    x="1"
                    y="14"
                    width="16"
                    height="2"
                    rx="1"
                    fill="#7B7B7B"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_7_12)">
                    <path
                      d="M15.5668 1.42462L9.20279 7.78859L2.83883 1.42463C2.13173 0.717514 0.717513 2.13173 1.42462 2.83884L7.78858 9.2028L1.42462 15.5668C0.717514 16.2739 2.13173 17.6881 2.83883 16.981L9.20279 10.617L15.5668 16.981C16.2739 17.6881 17.6881 16.2739 16.981 15.5668L10.617 9.2028L16.981 2.83884C17.6881 2.13173 16.2739 0.717515 15.5668 1.42462Z"
                      fill="#7B7B7B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_12">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </button>
          </div>
          <div
            className={
              !open
                ? "mobile-content bg-white dark:bg-gray-900"
                : "mobile-content bg-white dark:bg-gray-900 open"
            }
            onClick={() => setOpen(false)}
          >
            <Link href="/#home" className="font-bold">
              soul capri blog
            </Link>
            <Link href="/#work" className="font-bold">
              work
            </Link>
            <Link href="/#about" className="font-bold">
              about
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
