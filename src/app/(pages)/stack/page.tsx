import React from "react";
const techStack = {
  frontend: [
    "React.js",
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "Express", "MongoDB", "MySQL", "Supabase", "Appwrite"],
  otherTools: [
    "Figma",
    "ShadCN",
    "Canva",
    "VS Code",
    "AI Tools",
    "Notion",
    "Trello",
    "and many more ...",
  ],
};

export default function Page() {
  return (
    <div className="pl-3">
      <div>
        <h3 className="font-semibold text-gray-600">Frontend</h3>
        <div className=" flex flex-wrap ">
          {techStack.frontend.map((stack) => (
            <span
              className="mx-2 my-1 bg-gray-300 px-2 rounded-sm  text-gray-600 font-light "
              key={stack}>
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div className="my-5">
        <h3 className="font-semibold text-gray-600">Backend</h3>
        <div className=" flex flex-wrap ">
          {techStack.backend.map((stack) => (
            <span
              className="mx-2 my-1 bg-gray-300 px-2 rounded-sm  text-gray-600 font-light "
              key={stack}>
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-600">Other Tools</h3>
        <div className=" flex flex-wrap ">
          {techStack.otherTools.map((stack) => (
            <span
              className="mx-2 my-1 bg-gray-300 px-2 rounded-sm  text-gray-600 font-light "
              key={stack}>
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
