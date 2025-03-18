import { sendEmail } from "@/app/contact/actions";
import { Footer } from "@/app/Footer";
import Header from "@/app/Header";
import { Container } from "@/app/lib/icons/components/Container";

export default function Contact() {
  return (
    <main className="relative z-10 text-gray-700 flex flex-col items-center justify-between min-h-screen">
      <Header />
      <section className="sm:py-20 py-10 w-full">
        <Container>
          <div className="2xl:px-30 lg:px-10 md:px-5 px-0">
            <h2 className="text-4xl md:text-5xl font-base text-left sm:mb-10 mb-5">
              Get it touch &#128075;
            </h2>
            <form
              className="grid md:grid-cols-2 gap-5"
              action={sendEmail}
              method="POST"
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
                  placeholder="Full Name"
                  className="border border-gray-300 p-3 w-full bg-gray-50 text-gray-700 placeholder:text-gray-500 focus-within:ring-1 focus-within:ring-black focus-within:ring-opacity-50 outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-500 block mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 p-3 w-full bg-gray-50 text-gray-700 placeholder:text-gray-500 focus-within:ring-1 focus-within:ring-black focus-within:ring-opacity-50 outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-500 block mb-1"
                >
                  Email
                </label>
                <textarea
                  placeholder="Message"
                  className="border border-gray-300 p-3 w-full bg-gray-50 text-gray-700 placeholder:text-gray-500 focus-within:ring-1 focus-within:ring-black focus-within:ring-opacity-50 outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white p-3 w-full md:col-span-2 cursor-pointer hover:bg-gray-700 transition-all"
              >
                Send
              </button>
            </form>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
