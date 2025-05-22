import { client } from "@/sanity/client";
import { CategoryImagesItem, CategoryItem } from "@/types";

export const getCategories = async (): Promise<CategoryItem[]> => {
  const QUERY = `*[
  _type == "category"
  && defined(slug.current)
]|order(order asc)[0...12]{_id, title, slug, publishedAt, mainImage, order}`;
  const categories = await client.fetch<CategoryItem[]>(QUERY, {});

  return categories;
};

export const getCategoryItemsBySlug = async (
  slug: string
): Promise<CategoryImagesItem[]> => {
  const QUERY = `*[
  _type == "imageItem" &&   category->slug.current == "${slug}"
]|order(order asc)[0...12]{_id, title, slug, publishedAt, beforeImage, afterImage, order, isWidescreen, isTwoImages, imageAuthorText}`;

  const categoryItems = await client.fetch<CategoryImagesItem[]>(QUERY, {
    slug,
  });

  return categoryItems;
};

export const getCategoryTitleBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<string | undefined> => {
  const QUERY = `*[
  _type == "category"
  && slug.current == "${slug}"
][0...2]{ title}`;
  const categoryResponse = await client.fetch(QUERY, {});

  return categoryResponse[0]?.title;
};
