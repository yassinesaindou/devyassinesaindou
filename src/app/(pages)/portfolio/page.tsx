import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <div className="text-gray-600 font-light text-lg space-y-5">
      Feel free to check out some of my projects on&nbsp;
      <Link
        href={"https://github.com/yassinesaindou"}
        className="underline font-normal" target="_blank">
        GitHub
      </Link>
      &nbsp; to see what I&apos;ve been working on.
    </div>
  );
}
