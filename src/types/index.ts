export interface CategoryItem {
  _id: string;
  mainImage: { _type: string; asset: { _ref: string; _type: string } };
  publishedAt: string;
  slug: { _type: string; current: string };
  title: string;
}
export interface AnimationImageItem {
  _id: string;
  image: { _type: string; asset: { _ref: string; _type: string } };
  publishedAt: string;
  slug: { _type: string; current: string };
  title: string;
  order: number;
}
export interface CategoryImagesItem {
  _id: string;
  beforeImage: { _type: string; asset: { _ref: string; _type: string } };
  afterImage: { _type: string; asset: { _ref: string; _type: string } };
  publishedAt: string;
  slug: { _type: string; current: string };
  title: string;
  isWidescreen: boolean;
  isTwoImages: boolean;
  imageAuthorText: string;
  categories: {
    _id: string;
    title: string;
    slug: { _type: string; current: string };
  }[];
}
