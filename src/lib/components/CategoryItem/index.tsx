import { SanityImage } from "@/lib/components/SanityImage";
import { CategoryItem } from "@/types";
import Link from "next/link";

export const CategoryImageItem = ({ category }: { category: CategoryItem }) => {
  return (
    <Link
      href={`/category/${category.slug.current}`}
      className="relative group w-full h-full overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute opacity-0 bg-gray-900 group-hover:opacity-60 transition-opacity duration-300 w-full h-full"></div>
        <div className="flex items-center justify-center h-full">
          <p className="text-white text-lg font-bold relative z-[2]">
            {category.title}
          </p>
        </div>
      </div>
      <SanityImage
        asset={category.mainImage.asset}
        alt={category.title}
        className={"w-full h-full max-h-[100lvh]"}
        priority={true}
      />
    </Link>
  );
};
