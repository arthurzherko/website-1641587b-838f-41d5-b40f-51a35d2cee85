import { motion } from "framer-motion";
import { FunBanner } from "@/components/fun-banner";
import { Typography } from "@/components/ui/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FunCard } from "@/components/fun-card";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Веселая команда",
      description: "У нас всегда весело и позитивно! Никакой скуки и уныния 🎉",
      icon: "sparkles",
    },
    {
      title: "Гибкий график",
      description: "Работаем когда удобно, главное - с душой и улыбкой 😊",
      icon: "heart",
    },
    {
      title: "Печеньки и котики",
      description: "Обещаем много вкусняшек и милых пушистиков! 🍪🐱",
      icon: "sparkles",
    },
  ];

  return (
    <div className="container py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography.H1 className="text-center text-primary mb-4">
          Маша, присоединяйся к нам! 🌟
        </Typography.H1>
        <Typography.Lead className="text-center max-w-2xl mx-auto">
          Мы создали этот сайт специально для тебя! Здесь ты найдешь все причины,
          почему наш проект - это именно то, что тебе нужно 💖
        </Typography.Lead>
      </motion.div>

      <FunBanner
        title="Специальное предложение только для тебя!"
        description="Присоединяйся к нашей супер-команде и получи бонус в виде бесконечного запаса позитива и хорошего настроения!"
        actionText="Хочу узнать больше!"
        onActionClick={() => navigate("/reasons")}
      />

      <div className="py-8">
        <Typography.H2 className="text-center text-primary mb-8">
          Почему с нами классно? 🤔
        </Typography.H2>
        <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto">
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index}>
                <FunCard {...feature} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center"
      >
        <Typography.H3 className="text-primary mb-4">
          Готова к приключениям? 🚀
        </Typography.H3>
        <Typography.P className="max-w-xl mx-auto mb-8">
          Нажми на любую кнопочку в меню и узнай больше о том, почему тебе точно
          понравится работать с нами! Обещаем, будет интересно! 😉
        </Typography.P>
      </motion.div>
    </div>
  );
}