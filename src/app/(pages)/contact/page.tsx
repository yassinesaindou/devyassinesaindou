import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div>
      <Link
        href={"https://github.com/yassinesaindou"}
        target="_blank"
        className="flex hover:text-gray-600 gap-5 py-2.5 font-light">
        <Github className="w-6 h-6 text-gray-600" />
        <p>GitHub</p>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/yassinesaindou/"}
        target="_blank"
        className="flex hover:text-gray-600 gap-5 py-2.5 font-light">
        <Linkedin className="w-6 h-6 text-gray-600" />
        <p>Linkedin</p>
      </Link>
      <Link
        href={"https://www.facebook.com/yassine.saindou.3/"}
        target="_blank"
        className="flex hover:text-gray-600 gap-5 py-2.5 font-light">
        <Facebook className="w-6 h-6 text-gray-600" />
        <p>Facebook</p>
      </Link>
      <Link
        href={"https://www.instagram.com/just_lion1?igsh=NTg1amN3NDQ4emx6"}
        target="_blank"
        className="flex hover:text-gray-600 gap-5 py-2.5 font-light">
        <Instagram className="w-6 h-6 text-gray-600" />
        <p>Instagram</p>
      </Link>
    </div>
  );
}
