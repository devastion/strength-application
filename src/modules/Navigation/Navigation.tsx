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
    <NavigationMenu className="my-5">
      <NavigationMenuList>{menuItems}</NavigationMenuList>
    </NavigationMenu>
  );
};
