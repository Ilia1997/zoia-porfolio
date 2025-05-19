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
        setClickedState(true);
        await new Promise((resolve) => setTimeout(resolve, 250));
        router.push(`/category/${category.slug.current}`, {});
      }}
      className="relative group w-full h-full overflow-hidden cursor-pointer"
    >
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
          clickedState && "opacity-100"
        )}
      >
        <div
          className={cn(
            "absolute opacity-0 z-[2] bg-gray-900 group-hover:opacity-60 transition-opacity duration-300 w-full h-full",
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
        className={"w-full h-full max-h-[100lvh] object-cover"}
      />
    </button>
  );
};
