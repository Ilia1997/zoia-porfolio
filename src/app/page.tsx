import { getCategories } from "@/app/actions";
import { HomePage } from "@/lib/components/HomePage";

export default async function HomeWrapper() {
  const categories = await getCategories();

  return <HomePage categories={categories} />;
}
