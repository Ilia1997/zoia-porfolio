import { Container } from "@/app/lib/icons/components/Container";
import { SocialLinks } from "@/app/lib/icons/components/SocialLinks";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="bg-white mt-10 w-full">
      <Container>
        <div className="border-t border-gray-300 py-4 flex justify-between items-start md:flex-row flex-col w-full gap-4">
          <p className="text-gray-500 text-left w-[125px] text-xs md:block hidden">
            © 2025
          </p>
          <div className="flex flex-col gap-3 items-center justify-center w-full md:w-auto">
            <nav className="flex items-center justify-center gap-4">
              <Link href="/">
                <span className="text-gray-700 hover:text-gray-400 transition-all px-3 py-2 rounded-md text-xs font-medium">
                  Home
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
            <SocialLinks />
          </div>
          <p className="text-gray-500 md:text-left text-center md:w-[125px] w-full text-xs">
            <span className="md:hidden">© 2025 </span>
            Всі права захищені.{" "}
            <span className="w-full h-px bg-gray-200 my-0.5 md:block hidden"></span>
            Розроблено з ❤️
          </p>
        </div>
      </Container>
    </section>
  );
};
