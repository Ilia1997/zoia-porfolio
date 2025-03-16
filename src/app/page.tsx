"use client";
import Header from "@/app/Header";
import { HeroBgIcon } from "@/app/lib/icons/HeroBgIcon";
import HorizontalScrollLoop from "@/app/lib/icons/HorizontalScrollLoop";
import { ScrollDownIcon } from "@/app/lib/icons/ScrollDownIcon";
import { MyWorks } from "@/app/MyWorks";
import { Testimonials } from "@/app/Testimonials";
import { useRef } from "react";

export default function Home() {
  const galleryRef = useRef<HTMLElement | null>(null);
  return (
    <main className="relative z-10 text-gray-700">
      <Header />
      <HeroBgIcon className="absolute top-0 left-1/2 -z-1 -translate-x-1/2 text-gray-500 max-w-[60%] h-auto" />

      <button
        className="flex gap-2 text-sm w-full justify-center items-center mt-12 uppercase transition-all hover:underline underline-offset-2 cursor-pointer"
        onClick={() =>
          galleryRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        <ScrollDownIcon className="w-3 h-3 text-gray-700" />
        <p>Scroll down</p>
      </button>

      <HorizontalScrollLoop />
      <MyWorks ref={galleryRef} />
      <Testimonials />
    </main>
  );
}
