import { Heart } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-4 py-10">
        <div className="flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Heart className="h-6 w-6 text-primary" />
            <Typography.P className="text-center text-primary leading-loose md:text-left">
              Сделано с любовью для Маши
            </Typography.P>
          </div>
          <Typography.P className="text-center text-primary leading-loose md:text-left">
            Присоединяйся к нашей команде! 🌟
          </Typography.P>
        </div>
        <Separator className="bg-primary/20" />
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <Typography.Small className="text-center text-primary md:text-left">
            Этот сайт использует печеньки 🍪 (но не настоящие, а только для темы)
          </Typography.Small>
          <Typography.Small className="text-center text-primary md:text-left">
            © 2024 Команда мечты
          </Typography.Small>
        </div>
      </div>
    </footer>
  );
}