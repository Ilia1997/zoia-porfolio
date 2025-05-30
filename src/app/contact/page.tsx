"use client";
import { sendEmail } from "@/app/contact/actions";
import { Footer } from "@/lib/components/Footer";
import Header from "@/lib/components/Header";
import { Container } from "@/lib/components/Container";
import { SocialLinks } from "@/lib/components/SocialLinks";
import { useActionState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [state, handleSubmit, pending] = useActionState(sendEmail, null);

  return (
    <main className="relative z-10 text-gray-700 flex flex-col items-center justify-between min-h-screen">
      <Header />
      <section className="sm:py-20 py-10 w-full">
        <Container>
          {!state ? (
            <div className="2xl:px-30 lg:px-10 md:px-5 px-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-4xl md:text-5xl font-base text-left sm:mb-8 mb-5">
                  Звʼяжіться зі мною &#128075;
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="sm:mb-8 mb-5">
                  <p className="mb-2">
                    Якщо у вас є запитання чи пропозиції щодо співпраці –
                    залиште повідомлення.
                  </p>
                  <p className="mb-2">
                    Я із задоволенням відповім на всі ваші питання.
                  </p>
                  <p className="mb-4">
                    Чекаю на ваше звернення та сподіваюся на плідну співпрацю!
                  </p>
                  <SocialLinks />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <form
                  className="grid md:grid-cols-2 gap-5"
                  action={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-500 block mb-1"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="border border-gray-300 p-3 w-full bg-gray-50 text-gray-700 placeholder:text-gray-500 focus-within:ring-1 focus-within:ring-black focus-within:ring-opacity-50 outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-500 block mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="border border-gray-300 p-3 w-full bg-gray-50 text-gray-700 placeholder:text-gray-500 focus-within:ring-1 focus-within:ring-black focus-within:ring-opacity-50 outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-500 block mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="border border-gray-300 p-3 w-full bg-gray-50 text-gray-700 placeholder:text-gray-500 focus-within:ring-1 focus-within:ring-black focus-within:ring-opacity-50 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`bg-black text-white p-3 w-full md:col-span-2 cursor-pointer hover:bg-gray-700 transition-all ${
                      pending
                        ? "pointer-events-none opacity-45 animate-pulse"
                        : ""
                    }`}
                  >
                    {pending ? "Sending..." : "Send"}
                  </button>
                </form>
              </motion.div>
            </div>
          ) : (
            ""
          )}
          {state?.data ? (
            <div>
              <p className="text-4xl md:text-5xl font-base text-center sm:mb-8 mb-4">
                Дякую за заповнення форми!
              </p>
              <p className="text-4xl md:text-5xl font-base text-center">
                Звʼяжусь з вами найближчим часом.
              </p>
            </div>
          ) : (
            ""
          )}
        </Container>
      </section>

      <Footer />
    </main>
  );
}
