import { getCategoryItemsBySlug, getCategoryTitleBySlug } from "@/app/actions";
import { CategoryImagesGrid } from "@/lib/components/CategoryImagesGrid";
import { Container } from "@/lib/components/Container";
import { Footer } from "@/lib/components/Footer";
import { H2 } from "@/lib/components/H2";
import Header from "@/lib/components/Header";
import { PageProps } from "../../../../.next/types/app/page";

export default async function CategoryItemPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    return <div>CategoryItemPage</div>;
  }
  const [categoryPageItems, title] = await Promise.all([
    getCategoryItemsBySlug(slug as string),
    getCategoryTitleBySlug({ slug: slug as string }),
  ]);

  if (!categoryPageItems) {
    return (
      <main className="relative z-10 text-gray-700">
        <Header />
        <section className="sm:py-20 py-10">
          <Container>
            <div>Category does not have any Items</div>;
          </Container>
        </section>

        <Footer />
      </main>
    );
  }
  return (
    <main className="relative z-10 text-gray-700">
      <Header />
      <section className="sm:py-20 py-10">
        <Container>
          <H2>{title}</H2>
          <CategoryImagesGrid categoryItems={categoryPageItems} />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
