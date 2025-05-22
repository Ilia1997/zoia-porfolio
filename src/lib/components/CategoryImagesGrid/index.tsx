"use client";
import { cn } from "@/lib/components/utils";
import { urlFor } from "@/sanity/client";
import { CategoryImagesItem } from "@/types";
import Image from "next/image";
import ReactCompareImage from "react-compare-image";

export const CategoryImagesGrid = ({
  categoryItems,
}: {
  categoryItems: CategoryImagesItem[];
}) => {
  console.log("🚀 ~ categoryItems:", categoryItems);
  return (
    <>
      <div className="grid md:grid-cols-2 auto-rows-min gap-3 mt-8 md:mt-14">
        {categoryItems.map((item) => (
          <CategoryImageItem item={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

const CategoryImageItem = ({ item }: { item: CategoryImagesItem }) => {
  const imageBefore = urlFor(item.beforeImage).width(4500).url();
  const imageAfter = urlFor(item.afterImage).width(4500).url();

  if (item.isTwoImages) {
    return (
      <>
        <div
          className={cn(
            "relative md:min-h-[100lvh] category-item-image-slider"
          )}
        >
          <Image
            placeholder="blur"
            src={imageBefore}
            blurDataURL={urlFor(item.beforeImage).width(10).url()}
            alt={item.title}
            className="h-full w-full object-cover"
            priority={true}
            width={4500}
            height={4500}
          />
          {item.imageAuthorText && (
            <span className="mt-2 text-gray-500 hidden md:block">
              {item.imageAuthorText}
            </span>
          )}
        </div>
        <div
          className={cn(
            "relative md:min-h-[100lvh] category-item-image-slider",
            "min-h-[600px]"
          )}
        >
          <Image
            placeholder="blur"
            src={imageAfter}
            className="h-full w-full object-cover"
            blurDataURL={urlFor(item.beforeImage).width(10).url()}
            alt={item.title}
            priority={true}
            width={4500}
            height={4500}
          />
          {item.imageAuthorText && (
            <span className="mt-2 text-gray-500 block md:hidden">
              {item.imageAuthorText}
            </span>
          )}
        </div>
      </>
    );
  }

  return (
    <div
      className={cn(
        "relative md:min-h-[100lvh] category-item-image-slider",
        item.isWidescreen ? "col-span-full" : "min-h-[600px]"
      )}
    >
      <ImageSlider imageBefore={imageBefore} imageAfter={imageAfter} />
      {item.imageAuthorText && (
        <span className="mt-2 text-gray-500">{item.imageAuthorText}</span>
      )}
    </div>
  );
};

const ImageSlider = ({
  imageAfter,
  imageBefore,
}: {
  imageBefore: string;
  imageAfter: string;
}) => {
  return (
    <ReactCompareImage
      leftImage={imageBefore}
      rightImage={imageAfter}
      leftImageCss={{ height: "100%" }}
      rightImageCss={{ height: "100%" }}
      skeleton={<div className="h-full w-full bg-gray-200 animate-pulse" />}
    />
  );
};

// const CategoryImageItem = ({
//   sanityImageUrl,
//   title,
// }: {
//   sanityImageUrl: { _type: string; asset: { _ref: string; _type: string } };
//   title: string;
// }) => {
//   const imageUrl = urlFor(sanityImageUrl).width(2500).url();
//   return (
//     <div className="relative w-full">
//       <Image
//         placeholder="blur"
//         src={imageUrl}
//         blurDataURL={urlFor(sanityImageUrl).width(10).url()}
//         alt={title}
//         priority={true}
//         width={2500}
//         height={2500}
//       />
//     </div>
//   );
// };
