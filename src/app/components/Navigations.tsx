import Link from "next/link";
import React from "react";

export default function Navigations() {
  return (
    <nav className="flex gap-5">
      <Link href="/">About Me</Link>
      <Link href="/contact">Contact me</Link>
      <Link href="/stack">My Stack</Link>
      <Link href="/portfolio">Portfolio</Link>
    </nav>
  );
}
