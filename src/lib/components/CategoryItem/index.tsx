import { SanityImage } from "@/lib/components/SanityImage";
import { cn } from "@/lib/components/utils";
import { CategoryItem } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CategoryImageItem = ({ category }: { category: CategoryItem }) => {
  const [clickedState, setClickedState] = useState(false);
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={async () => {
        if (window?.innerWidth > 991) {
          router.push(`/category/${category.slug.current}`, {});
          return;
        }
        setClickedState(true);
        await new Promise((resolve) => setTimeout(resolve, 300));
        router.push(`/category/${category.slug.current}`, {});
      }}
      onMouseEnter={() => {
        router.prefetch(`/category/${category.slug.current}`);
        if (window?.innerWidth > 991) {
          return;
        }
        setClickedState(true);
      }}
      onMouseLeave={() => {
        if (window?.innerWidth > 991) {
          return;
        }
        setClickedState(false);
      }}
      onTouchStart={() => {
        setClickedState(true);
      }}
      className="relative group w-full h-full overflow-hidden cursor-pointer"
    >
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none",
          clickedState && "opacity-100"
        )}
      >
        <div
          className={cn(
            "absolute opacity-0 z-[2] bg-gray-900 group-hover:opacity-60 transition-opacity duration-500 w-full h-full",
            clickedState && "opacity-60"
          )}
        ></div>
        <div className="flex items-center justify-center h-full">
          <p className="text-white text-lg font-bold relative z-[2]">
            {category.title}
          </p>
        </div>
      </div>
      <SanityImage
        category={category}
        className={cn(
          "w-full h-full max-h-[100lvh] object-cover group-hover:scale-105 transition-transform duration-500",
          clickedState && "scale-105"
        )}
      />
    </button>
  );
};
