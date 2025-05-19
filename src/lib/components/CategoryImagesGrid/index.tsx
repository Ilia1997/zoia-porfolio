"use client";
import { cn } from "@/lib/components/utils";
import { urlFor } from "@/sanity/client";
import { CategoryImagesItem } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactCompareImage from "react-compare-image";

export const CategoryImagesGrid = ({
  categoryItems,
}: {
  categoryItems: CategoryImagesItem[];
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-3 mt-8 md:mt-14">
      {categoryItems.map((item) => (
        <div
          key={item._id}
          className={cn(
            "relative min-h-[100lvh] category-item-image-slider",
            item.isWidescreen ? "col-span-full" : ""
          )}
        >
          <ImageSlider item={item} />
        </div>
      ))}
    </div>
  );
};

const ImageSlider = ({ item }: { item: CategoryImagesItem }) => {
  const imageBefore = urlFor(item.beforeImage).width(4500).url();
  const imageAfter = urlFor(item.afterImage).width(4500).url();
  const [isChanging, setIsChanging] = useState(false);

  const sliderPositionChangingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const blockScroll = useCallback(() => {
    if (window?.innerWidth > 991) {
      return;
    }
    document.body.style.overflow = "hidden";
    setIsChanging(true);
  }, []);

  const unblockScroll = useCallback(() => {
    document.body.style.overflow = "auto";
    setIsChanging(false);
  }, []);

  useEffect(() => {
    if (!isChanging) {
      return;
    }
    sliderPositionChangingTimerRef.current = setTimeout(() => {
      unblockScroll();
    }, 500);
    return () => {
      if (sliderPositionChangingTimerRef.current)
        clearTimeout(sliderPositionChangingTimerRef.current);
    };
  }, [isChanging, unblockScroll]);

  return (
    <ReactCompareImage
      onSliderPositionChange={blockScroll}
      leftImage={imageBefore}
      rightImage={imageAfter}
      leftImageCss={{ height: "100%" }}
      rightImageCss={{ height: "100%" }}
      skeleton={<div className="h-full w-full bg-gray-200 animate-pulse" />}
    />
  );
};
