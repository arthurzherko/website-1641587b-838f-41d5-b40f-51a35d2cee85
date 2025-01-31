import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface FunCardProps {
  title: string;
  description: string;
  icon?: "heart" | "sparkles";
  onClick?: () => void;
  buttonText?: string;
}

export function FunCard({
  title,
  description,
  icon = "heart",
  onClick,
  buttonText = "Я согласна!",
}: FunCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          {icon === "heart" ? (
            <Heart className="h-6 w-6 text-primary" />
          ) : (
            <Sparkles className="h-6 w-6 text-primary" />
          )}
        </div>
        <div className="p-6 flex flex-col gap-4">
          <Typography.H3 className="text-primary">{title}</Typography.H3>
          <Typography.P className="text-primary">{description}</Typography.P>
          {onClick && (
            <Button
              onClick={onClick}
              className="w-full mt-4"
              variant="secondary"
            >
              {buttonText}
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
}