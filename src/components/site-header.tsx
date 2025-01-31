import { Link } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 mr-6">
          <Heart className="size-6 text-primary" />
          <Typography.Large className="font-bold text-primary hidden md:block">
            Пожалуйста, Маша
          </Typography.Large>
        </Link>
        <NavigationMenu className="mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <Button variant="ghost" className="text-primary">
                  <Sparkles />
                  Главная
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/reasons">
                <Button variant="ghost" className="text-primary">
                  <Heart />
                  Причины
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/fun">
                <Button variant="ghost" className="text-primary">
                  <Sparkles />
                  Веселье
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}