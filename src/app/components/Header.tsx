import { AvatarFallback, Avatar, AvatarImage } from "@/components/ui/avatar";

import React from "react";

export default function Header() {
  return (
    <div className="flex gap-7">
      <Avatar>
        <AvatarImage src="https://vgithub.com/shadcn.png" alt="Avatar" />
        <AvatarFallback>YS</AvatarFallback>
      </Avatar>

      <div className="">
        <h1>Yassine Saindou</h1>
        <h2>UI/UX Designer aand FullStack Developer</h2>
      </div>
    </div>
  );
}
