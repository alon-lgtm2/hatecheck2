"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export interface NavItem {
  key: string;
  href: string;
}

export function useNavItems(): NavItem[] {
  const locale = useLocale();

  return [
    { key: "home", href: `/${locale}` },
    { key: "product", href: `/${locale}/product` },
    { key: "standards", href: `/${locale}/standards` },
    { key: "about", href: `/${locale}/about` },
    { key: "contact", href: `/${locale}/contact` },
  ];
}

export function useIsActive(href: string): boolean {
  const pathname = usePathname();
  const locale = useLocale();
  if (href === `/${locale}`) {
    return pathname === href || pathname === `/${locale}/`;
  }
  return pathname.startsWith(href);
}
