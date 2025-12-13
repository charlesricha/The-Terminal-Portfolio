"use client";

import { useState, useEffect} from "react";

export function Terminal({
  onCommand,
}: {
  onCommand: (cmd: string) => void;
}) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);

    useEffect(() => {
    setHistory([" Welcome to my Portfolio "," > Type 'help' to get started"]);
  }, []);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Add command to history
      setHistory([...history, `> ${input}`]);

      //testing Responces
      if (input.toLowerCase() === "help") {
        setHistory(prev => [...prev, "Available commands: projects, skills, contact"]);
      } else if (input.toLowerCase() === "projects") {
        setHistory(prev => [...prev, "Opening projects window..."]);
        onCommand("projects");
    
      } else {
        setHistory(prev => [...prev, `Command not recognized: ${input}`]);
      }

      setInput("");
    }
  };

  return (
    <div>
        <div className="absolute w-[55%] h-[90%] bg-black text-blue-500 font-mono p-4 rounded-xl shadow-lg overflow-auto m-5">
            <div className="flex flex-col w-full h-full space-y-1 ">
            {history.map((line, idx) => (
                <div key={idx}>{line}</div>
            ))}
                <div className="flex w-full">
                    <span className="mx-2"> $ </span>
                    <input
                    type="text"
                    className="bg-black text-blue-400 outline-none w-full font-mono"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    autoFocus
                    />
                </div>
            </div>
        </div>

       {/*  <div className="image w-[45%] absolute right-0 flex items-center justify-center h-[90%] m-5 p-4 rounded-md overflow-auto">
            <img src="/charles.png" alt="" />
        </div> */}
    </div>
  );
}

export function Clock() {
   const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const hh = time.getHours().toString().padStart(2, "0");
  const mm = time.getMinutes().toString().padStart(2, "0");
  const ss = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="absolute top-4 right-4 text-white font-mono text-2xl">
      {hh}:{mm}:{ss}
    </div>
  );
}

export function Dock() {
  
}

export function DesktopIcons() {

}