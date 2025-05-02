import { AvatarFallback, Avatar, AvatarImage } from "@/components/ui/avatar";

import React from "react";

export default function Header() {
  return (
    <div className="flex gap-7 mb-10 items-center">
      <Avatar className="w-[100px] h-[100px] border-2 border-gray-600">
        <AvatarImage   src="https://vgithub.com/shadcn.png" alt="Avatar" />
        <AvatarFallback className="text-gray-600 text-2xl font-bold">YS</AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-600 ">Yassine Saindou</h1>
        <h2 className="text-gray-600 ">
          UI/UX Designer and FullStack Developer
        </h2>
      </div>
    </div>
  );
}
