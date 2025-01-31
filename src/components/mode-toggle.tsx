import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative group"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all text-primary dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all text-primary dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Переключить тему</span>
      <Typography.Small className="absolute top-10 scale-0 group-hover:scale-100 transition-all whitespace-nowrap text-primary">
        {theme === "light" ? "Стало темно?" : "Нужно больше света!"}
      </Typography.Small>
    </Button>
  );
}