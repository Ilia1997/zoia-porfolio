import { getCategoryItemsBySlug, getCategoryTitleBySlug } from "@/app/actions";
import { Container } from "@/lib/components/Container";
import { Footer } from "@/lib/components/Footer";
import Header from "@/lib/components/Header";
import { PageProps } from "../../../../.next/types/app/page";
import { CategoryItemPageContent } from "@/lib/components/CategoryItemPageContent";

export default async function CategoryItemPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    return <div>CategoryItemPage</div>;
  }
  const [categoryPageItems, title] = await Promise.all([
    getCategoryItemsBySlug(slug as string),
    getCategoryTitleBySlug({ slug: slug as string }),
  ]);

  if (!categoryPageItems || !title) {
    return (
      <main className="relative z-10 text-gray-700">
        <Header />
        <section className="sm:py-14 py-10">
          <Container>
            <div>Category does not have any Items</div>;
          </Container>
        </section>

        <Footer />
      </main>
    );
  }
  return (
    <CategoryItemPageContent
      categoryPageItems={categoryPageItems}
      title={title}
    />
  );
}
