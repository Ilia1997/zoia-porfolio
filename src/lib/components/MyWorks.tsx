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
    <section className="mt-60 py-20" id="gallery" ref={ref}>
      <Container>
        <H2>Portfolio</H2>

        <div className="grid md:grid-cols-2 gap-3 mt-10">
          {categories.map((category) => (
            <CategoryImageItem key={category._id} category={category} />
          ))}
          {/* <ReactCompareImage
            leftImage={Img_1_before}
            rightImage={Img_1_after}
          />
          <ReactCompareImage
            leftImage={Img_3_before}
            rightImage={Img_3_after}
          />
          <ReactCompareImage
            leftImage={Img_5_before}
            rightImage={Img_5_after}
          />

          <ReactCompareImage
            leftImage={Img_2_before}
            rightImage={Img_2_after}
          />
          <ReactCompareImage
            leftImage={Img_6_before}
            rightImage={Img_6_after}
          />
          <ReactCompareImage
            leftImage={Img_4_before}
            rightImage={Img_4_after}
          /> */}
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
