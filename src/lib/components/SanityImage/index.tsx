import Image from "next/image";
import { urlFor } from "@/sanity/client";
import { CategoryItem } from "@/types";

export const SanityImage = ({
  category,
  className,
}: {
  category: CategoryItem;
  className?: string;
}) => {
  const imageUrl = urlFor(category.mainImage).width(4500).url();

  return (
    <figure>
      <Image
        placeholder="blur"
        src={imageUrl}
        blurDataURL={urlFor(category.mainImage).width(10).url()}
        alt={category.title}
        className={className}
        priority={true}
        width={4500}
        height={4500}
      />
    </figure>
  );
};
