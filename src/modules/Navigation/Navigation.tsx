/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// Eslint rules disabled due to next-themes

"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@components/ui/navigation-menu";
import { cn } from "@root/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const paths = [
  {
    name: "1RM Calculator",
    url: "/",
  },
  {
    name: "Wilks Calculator",
    url: "/wilks",
  },
];

export const Navigation = () => {
  const pathName = usePathname();
  const { setTheme } = useTheme();

  const menuItems = paths.map((path, key) => (
    <NavigationMenuItem key={key}>
      <Link
        href={path.url}
        legacyBehavior
        passHref
      >
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "dark:bg-transparent dark:text-slate-100"
          )}
          active={pathName === path.url}
        >
          {path.name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  ));
  return (
    <>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>

      <NavigationMenu className="mt-5">
        <NavigationMenuList>{menuItems}</NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
