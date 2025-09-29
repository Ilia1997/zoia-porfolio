"use client";
import { urlFor } from "@/sanity/client";
import { AnimationImageItem } from "@/types";
import Image from "next/image";

const HorizontalScrollLoop = ({
  animationImages,
}: {
  animationImages: AnimationImageItem[];
}) => {
  // Duplicate images for seamless looping
  const duplicatedImages = [
    ...animationImages,
    ...animationImages,
    ...animationImages,
  ];

  return (
    <div className="overflow-hidden mt-6">
      <div className="flex flex-nowrap animate-infinite-scroll gap-0.5">
        {duplicatedImages.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <ImageWrapper animationImage={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const ImageWrapper = ({
  animationImage,
}: {
  animationImage: AnimationImageItem;
}) => {
  const imageUrl = urlFor(animationImage.image).width(4500).url();

  return (
    <figure className="pointer-events-none">
      <Image
        placeholder="blur"
        src={imageUrl}
        blurDataURL={urlFor(animationImage.image).width(10).url()}
        alt={`Image ${animationImage.order}`}
        className={"w-[250px] h-[490px] object-cover"}
        priority={true}
        width={600}
        height={600}
        quality={95}
      />
    </figure>
  );
};
export default HorizontalScrollLoop;
