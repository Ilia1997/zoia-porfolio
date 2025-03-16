import { Container } from "@/app/lib/icons/components/Container";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="bg-white mt-10">
      <Container>
        <div className="border-t border-gray-300 py-4 flex justify-between items-start md:flex-row flex-col w-full gap-4">
          <p className="text-gray-500 text-left w-[125px] text-xs md:block hidden">
            © 2025
          </p>
          <div className="flex flex-col gap-3 items-center justify-center w-full md:w-auto">
            <nav className="flex items-center justify-center gap-4">
              <Link href="/">
                <span className="text-gray-700 hover:text-gray-400 transition-all px-3 py-2 rounded-md text-xs font-medium">
                  Portfolio
                </span>
              </Link>
              <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
              <Link href="/about">
                <span className="text-gray-700 hover:text-gray-400 transition-all px-3 py-2 rounded-md text-xs font-medium">
                  About
                </span>
              </Link>
              <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
              <Link href="/contact">
                <span className="text-gray-700 hover:text-gray-400 transition-all px-3 py-2 rounded-md text-xs font-medium">
                  Contact
                </span>
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.instagram.com/retouching_phsh?igsh=MXhjcWxpYTJkdGdocA=="
                className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://t.me/retouch_phsh"
                className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-3.5 h-3.5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                    fill="#000000"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <p className="text-gray-500 md:text-left text-center md:w-[125px] w-full text-xs">
            <span className="md:hidden">© 2025 </span>
            Всі права захищені.{" "}
            <div className="w-full h-px bg-gray-200 my-0.5 md:block hidden"></div>
            Розроблено з ❤️
          </p>
        </div>
      </Container>
    </section>
  );
};
