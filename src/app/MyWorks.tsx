"use client";
import { Container } from "@/app/lib/icons/components/Container";
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
    <section className="mt-60 px-4" id="gallery" ref={ref}>
      <Container>
        <h2 className="text-4xl font-semibold text-center text-gray-800">
          My Works
        </h2>
        <div className="grid md:grid-cols-2 gap-3 mt-6">
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
      </Container>
    </section>
  );
};
