import { Container } from "@/app/lib/icons/components/Container";
import { H2 } from "@/app/lib/icons/components/H2";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "Враховує всі мої побажання та правки. Задоволена співпрацею.",
      authorName: "Олена, фотограф",
    },
    {
      text: "Терміново потрібна була обробка проєкту, звернувся до Зої, дуже виручила!",
      authorName: "Олександр, фотограф",
    },
    {
      text: "Ретушер працює швидко і якісно.",
      authorName: "Марія, фотограф",
    },
    {
      text: "Чудова співпраця, ретушер врахував всі мої побажання.",
      authorName: "Софія, б'юті майстер",
    },
    {
      text: "Якість ретуші на висоті. Завжди задоволена результатами, тепер тільки з цим спеціалістом.",
      authorName: "Аліна, фотограф",
    },
    {
      text: "Співпрацюємо вже рік, дедлайни завжди вчасні. Якість роботи на висоті.",
      authorName: "Анна, б'юті майстер",
    },
  ];

  return (
    <section className="bg-white py-20">
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
