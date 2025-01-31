import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { FunCard } from "@/components/fun-card";
import { useNavigate } from "react-router-dom";

export function Reasons() {
  const navigate = useNavigate();

  const reasons = [
    {
      title: "Дружелюбная атмосфера",
      description: "У нас все свои! Никакого токсичного окружения, только поддержка и взаимопомощь 🤗",
      icon: "heart",
      buttonText: "Это мне нравится!",
    },
    {
      title: "Интересные задачи",
      description: "Никакой рутины! Только креативные и увлекательные проекты 🎨",
      icon: "sparkles",
      buttonText: "Звучит здорово!",
    },
    {
      title: "Профессиональный рост",
      description: "Учимся новому каждый день, но без занудства и лишнего стресса 📚",
      icon: "heart",
      buttonText: "Хочу развиваться!",
    },
    {
      title: "Командные печеньки",
      description: "Регулярные чаепития с вкусняшками и душевными разговорами 🍪",
      icon: "sparkles",
      buttonText: "Обожаю печеньки!",
    },
  ];

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <Typography.H1 className="text-primary mb-4">
          Почему тебе у нас понравится ❤️
        </Typography.H1>
        <Typography.Lead className="max-w-2xl mx-auto">
          Мы собрали самые важные причины, почему наша команда - это именно то, что ты ищешь!
        </Typography.Lead>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <FunCard
              {...reason}
              onClick={() => navigate("/fun")}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}