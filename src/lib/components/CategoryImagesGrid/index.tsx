"use client";
import { cn } from "@/lib/components/utils";
import { urlFor } from "@/sanity/client";
import { CategoryImagesItem } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import ReactCompareImage from "react-compare-image";

export const CategoryImagesGrid = ({
  categoryItems,
}: {
  categoryItems: CategoryImagesItem[];
}) => {
  return (
    <>
      <div className="md:grid-cols-2 gap-3 mt-8 md:mt-14 hidden lg:grid">
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
      <div className="gap-3 mt-8 md:mt-14 flex flex-wrap lg:hidden">
        {categoryItems.map((item) => (
          <Fragment key={item._id}>
            <CategoryImageItem
              sanityImageUrl={item.beforeImage}
              title="image-1"
            />
            <CategoryImageItem
              sanityImageUrl={item.afterImage}
              title="image-2"
            />
          </Fragment>
        ))}
      </div>
    </>
  );
};

const ImageSlider = ({ item }: { item: CategoryImagesItem }) => {
  const imageBefore = urlFor(item.beforeImage).width(4500).url();
  const imageAfter = urlFor(item.afterImage).width(4500).url();

  if (typeof window !== "undefined" && window?.innerWidth < 1024) {
    return null;
  }

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

const CategoryImageItem = ({
  sanityImageUrl,
  title,
}: {
  sanityImageUrl: { _type: string; asset: { _ref: string; _type: string } };
  title: string;
}) => {
  const imageUrl = urlFor(sanityImageUrl).width(4500).url();
  return (
    <div className="relative w-full">
      <Image
        placeholder="blur"
        src={imageUrl}
        blurDataURL={urlFor(sanityImageUrl).width(10).url()}
        alt={title}
        priority={true}
        width={3500}
        height={3500}
      />
    </div>
  );
};
