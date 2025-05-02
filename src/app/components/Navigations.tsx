"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // optional, but makes class handling cleaner

export default function Navigations() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "About Me" },
    { href: "/contact", label: "Contact me" },
    { href: "/stack", label: "My Stack" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <nav className="flex gap-5 text-gray-600 mb-5">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            "transition-colors hover:text-gray-700",
            pathname === href
              ? "text-gray-700 underline font-semibold"
              : "text-gray-600"
          )}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
