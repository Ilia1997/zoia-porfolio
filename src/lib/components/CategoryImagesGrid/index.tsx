"use client";
import { cn } from "@/lib/components/utils";
import { urlFor } from "@/sanity/client";
import { CategoryImagesItem } from "@/types";
import ReactCompareImage from "react-compare-image";

export const CategoryImagesGrid = ({
  categoryItems,
}: {
  categoryItems: CategoryImagesItem[];
}) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-3 mt-8 md:mt-14">
        {categoryItems.map((item) => (
          <div
            key={item._id}
            className={cn(
              "relative md:min-h-[100lvh] min-h-[600px] category-item-image-slider",
              item.isWidescreen ? "col-span-full" : ""
            )}
          >
            <ImageSlider item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

const ImageSlider = ({ item }: { item: CategoryImagesItem }) => {
  const imageBefore = urlFor(item.beforeImage).width(4500).url();
  const imageAfter = urlFor(item.afterImage).width(4500).url();

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
