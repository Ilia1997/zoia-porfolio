import { Container } from "@/app/lib/icons/components/Container";
import { H2 } from "@/app/lib/icons/components/H2";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "Відмінний ретушер, який дбайливо обробляє кожну фотографію. Рекомендую всім фотографам.",
      authorName: "Олена, фотограф",
    },
    {
      text: "Професіоналізм і уважність до деталей – саме те, що потрібно для моїх фото сесій.",
      authorName: "Ілона, бюті майстер",
    },
    {
      text: "Ретушер працює швидко і якісно. Моє портфоліо засяяло завдяки його роботі!",
      authorName: "Марія, фотограф",
    },
    {
      text: "Чудова співпраця, ретушер врахував всі мої побажання і дав нове життя моїм знімкам.",
      authorName: "Софія, бюті майстер",
    },
    {
      text: "Якість ретуші на висоті. Завжди задоволена результатами, тепер тільки з цим спеціалістом.",
      authorName: "Аліна, фотограф",
    },
    {
      text: "Професійна обробка зображень, яка допомагає моїм роботам виглядати ще більш виразно та естетично.",
      authorName: "Аннф, бюті майстер",
    },
  ];

  return (
    <section className="bg-white mt-10 py-20">
      <Container>
        <H2>Відгуки</H2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const Testimonial = ({
  text,
  authorName,
}: {
  text: string;
  authorName: string;
}) => {
  return (
    <div>
      <p className="text-gray-700 bg-gray-100 p-4 rounded-2xl shadow-md rounded-bl-none">
        {text}
      </p>
      <p className="text-gray-500 text-base uppercase mt-2">{authorName}</p>
    </div>
  );
};
