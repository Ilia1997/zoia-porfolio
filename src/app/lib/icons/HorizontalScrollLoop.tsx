"use client";

import Image from "next/image";

const Img_1 = "/loop-scroll-images/image_1.webp";
const Img_2 = "/loop-scroll-images/image_2.webp";
const Img_3 = "/loop-scroll-images/image_3.webp";
const Img_4 = "/loop-scroll-images/image_4.webp";
const Img_5 = "/loop-scroll-images/image_5.webp";
const Img_6 = "/loop-scroll-images/image_6.webp";

const HorizontalScrollLoop = () => {
  // Replace these URLs with your actual images
  const images = [Img_1, Img_2, Img_3, Img_4, Img_5, Img_6];

  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden mt-6">
      <div className="flex flex-nowrap animate-infinite-scroll gap-0.5">
        {duplicatedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={src}
              alt={`Image ${index}`}
              className="w-[250px] h-[490px] object-cover"
              width={250}
              height={490}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollLoop;
