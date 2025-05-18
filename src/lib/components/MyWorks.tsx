"use client";
import { CategoryImageItem } from "@/lib/components/CategoryItem";
import { Container } from "@/lib/components/Container";
import { H2 } from "@/lib/components/H2";
import { CategoryItem } from "@/types";
import Link from "next/link";
import { Ref } from "react";

export const MyWorks = ({
  ref,
  categories,
}: {
  ref: Ref<HTMLElement> | undefined;
  categories: CategoryItem[];
}) => {
  return (
    <section className="mt-10 md:mt-40 py-20" id="gallery" ref={ref}>
      <Container>
        <H2>Portfolio</H2>

        <div className="grid md:grid-cols-2 gap-3 mt-10">
          {categories.map((category) => (
            <CategoryImageItem key={category._id} category={category} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href={"/contact"}
            className="mt-40 text-sm w-auto justify-center items-center uppercase transition-all hover:underline underline-offset-2 cursor-pointer rounded-full border border-gray-700 py-2 px-7"
          >
            <p>Звʼязатись</p>
          </Link>
        </div>
      </Container>
    </section>
  );
};
