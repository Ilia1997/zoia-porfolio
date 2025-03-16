"use client";
import { Container } from "@/app/lib/icons/components/Container";
import { H2 } from "@/app/lib/icons/components/H2";
import { Ref } from "react";
import ReactCompareImage from "react-compare-image";

const Img_1_before = "/gallery/gallery_img_1_before.webp";
const Img_1_after = "/gallery/gallery_img_1_after.jpg";
const Img_2_before = "/gallery/gallery_img_2_before.jpg";
const Img_2_after = "/gallery/gallery_img_2_after.jpg";
const Img_3_before = "/gallery/gallery_img_3_before.jpg";
const Img_3_after = "/gallery/gallery_img_3_after.jpg";
const Img_4_before = "/gallery/gallery_img_4_before.jpg";
const Img_4_after = "/gallery/gallery_img_4_after.jpg";
const Img_5_before = "/gallery/gallery_img_5_before.webp";
const Img_5_after = "/gallery/gallery_img_5_after.jpg";
const Img_6_before = "/gallery/gallery_img_6_before.jpg";
const Img_6_after = "/gallery/gallery_img_6_after.jpg";

export const MyWorks = ({ ref }: { ref: Ref<HTMLElement> | undefined }) => {
  return (
    <section className="mt-60 py-20" id="gallery" ref={ref}>
      <Container>
        <H2>Портфоліо</H2>

        <div className="grid md:grid-cols-2 gap-3 mt-10">
          <ReactCompareImage
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
          />
        </div>
        <div className="flex justify-center">
          <button className="mt-40 text-sm w-auto justify-center items-center uppercase transition-all hover:underline underline-offset-2 cursor-pointer rounded-full border border-gray-700 py-2 px-7">
            <p>Send a message</p>
          </button>
        </div>
      </Container>
    </section>
  );
};
