import { getCategories, getLoopAnimationImages } from "@/app/actions";
import { HomePage } from "@/lib/components/HomePage";

export default async function HomeWrapper() {
  const [categories, animationImages] = await Promise.all([
    getCategories(),
    getLoopAnimationImages(),
  ]);

  return <HomePage categories={categories} animationImages={animationImages} />;
}
