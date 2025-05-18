"use client";
import { Container } from "@/lib/components/Container";
import Header from "@/lib/components/Header";
import { Footer } from "@/lib/components/Footer";
import { CategoryImagesGrid } from "@/lib/components/CategoryImagesGrid";
import { H2 } from "@/lib/components/H2";
import { motion } from "framer-motion";
import { CategoryImagesItem } from "@/types";

export const CategoryItemPageContent = ({
  title,
  categoryPageItems,
}: {
  title: string;
  categoryPageItems: CategoryImagesItem[];
}) => {
  return (
    <main className="relative z-10 text-gray-700">
      <Header />
      <section className="sm:py-20 py-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <H2>{title}</H2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CategoryImagesGrid categoryItems={categoryPageItems} />
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
};
