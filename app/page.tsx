"use client";

import { Terminal, Clock } from "@/components/terminal";
import AboutWindow from "@/components/aboutwindow";
import ProjectsWindow from "@/components/projectwindow";
import { useState } from "react";

export default function Page() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const handleCommand = (cmd: string) => {
    if (!openWindows.includes(cmd)) {
      setOpenWindows((prev) => [...prev, cmd]);
      console.log(cmd);
    }
  };
  
  return (
    <div className="relative w-screen h-screen bg-zinc-950 overflow-hidden">
      <Clock />
      <Terminal onCommand={handleCommand}/>

      {openWindows.includes("projects") && (<ProjectsWindow onClose={() =>
      setOpenWindows((prev) => prev.filter((w) => w !== "projects"))}/>)}

      {openWindows.includes("about") && (<AboutWindow onClose={() =>
      setOpenWindows((prev) => prev.filter((w) => w !== "projects"))}/>)}

      {openWindows.includes("contact") && (<ProjectsWindow onClose={() =>
      setOpenWindows((prev) => prev.filter((w) => w !== "projects"))}/>)}
    </div>
  );
}

