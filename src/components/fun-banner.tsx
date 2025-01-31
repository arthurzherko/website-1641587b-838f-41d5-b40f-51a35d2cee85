import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Heart, PartyPopper, Sparkles } from "lucide-react";

interface FunBannerProps {
  title: string;
  description: string;
  onActionClick?: () => void;
  actionText?: string;
}

export function FunBanner({
  title,
  description,
  onActionClick,
  actionText = "Присоединиться к веселью!",
}: FunBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-lg"
    >
      <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 bg-secondary/20 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 bg-primary/20 blur-2xl" />
      
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <PartyPopper className="h-8 w-8 text-primary" />
          <Typography.H2 className="text-primary">{title}</Typography.H2>
        </div>
        
        <Typography.P className="text-primary max-w-[600px]">
          {description}
        </Typography.P>
        
        {onActionClick && (
          <Button
            onClick={onActionClick}
            size="lg"
            className="mt-4 gap-2 animate-pulse hover:animate-none"
          >
            <Heart className="h-5 w-5" />
            {actionText}
            <Sparkles className="h-5 w-5" />
          </Button>
        )}
      </div>
    </motion.div>
  );
}