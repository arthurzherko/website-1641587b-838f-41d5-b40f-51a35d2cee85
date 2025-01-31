import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { FunBanner } from "@/components/fun-banner";
import { Button } from "@/components/ui/button";
import { Heart, PartyPopper, Sparkles } from "lucide-react";
import { useState } from "react";

export function Fun() {
  const [clickCount, setClickCount] = useState(0);
  const [showExtra, setShowExtra] = useState(false);

  const handleMoreFun = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 3) {
      setShowExtra(true);
    }
  };

  return (
    <div className="container py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Typography.H1 className="text-primary mb-4">
          Время веселиться! 🎉
        </Typography.H1>
        <Typography.Lead className="max-w-2xl mx-auto">
          Нажимай на кнопки, получай удовольствие и присоединяйся к самой позитивной команде!
        </Typography.Lead>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-6">
        <FunBanner
          title="Специальное предложение дня!"
          description="Нажми на кнопку ниже несколько раз и получи супер-секретный бонус! 🎁"
          actionText="Хочу больше веселья!"
          onActionClick={handleMoreFun}
        />

        {clickCount > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center gap-4"
          >
            {Array(clickCount).fill(null).map((_, i) => (
              <PartyPopper key={i} className="h-8 w-8 text-primary animate-bounce" />
            ))}
          </motion.div>
        )}

        {showExtra && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 p-6 border rounded-lg bg-card"
          >
            <Typography.H2 className="text-primary">
              Ура! Ты нашла секретное сообщение! 🎈
            </Typography.H2>
            <Typography.P className="text-primary">
              Маша, ты просто супер! Мы уже готовим для тебя особенное рабочее место 
              с любимыми вкусняшками и самыми милыми котиками! 
            </Typography.P>
            <div className="flex justify-center gap-2">
              <Heart className="h-6 w-6 text-primary animate-pulse" />
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              <Heart className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <Button variant="secondary" className="mt-4">
              Я согласна! 🌟
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}