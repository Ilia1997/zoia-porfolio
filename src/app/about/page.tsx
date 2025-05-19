"use client";
import { Footer } from "@/lib/components/Footer";
import Header from "@/lib/components/Header";
import { Container } from "@/lib/components/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="relative z-10 text-gray-700">
      <Header />
      <section className="sm:py-20 py-10">
        <Container>
          <div className="2xl:px-30 lg:px-10 md:px-5 px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-4xl font-base text-center sm:mb-20 mb-10">
                About
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="grid md:grid-cols-2 gap-10">
                <div className="">
                  <Image
                    src="/about_image.jpg"
                    alt="About"
                    className="w-full h-full object-cover md:max-w-[460px]"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="text-gray-900">
                  <p className="text-lg leading-8 mb-3">Привіт!</p>
                  <p className="text-lg leading-8 mb-3">
                    Я Zoia Lu – професійна ретушерка, яка допомагає фотографам
                    вдосконалювати фото, пришвидшувати їх роботу та збільшувати
                    чек на послуги.
                  </p>
                  <p className="text-lg leading-8 mb-3">
                    Мій підхід базується на уважності до деталей, сучасних
                    техніках обробки та креативному баченні, завдяки яким кожне
                    фото набуває унікального характеру.
                  </p>
                  <p className="text-lg leading-8 mb-3">
                    Працюючи зі мною, ви отримаєте не просто ретуш, а мистецький
                    підхід до кожного знімку, який підкреслить його природну
                    красу та емоційність.
                  </p>
                  <p className="text-lg leading-8">
                    Якщо ви шукаєте надійного партнера для обробки фотографій, я
                    готова допомогти вам втілити найсміливіші ідеї. Довірте свої
                    роботи професіоналу, і разом ми створимо щось неймовірне! 🤍
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
