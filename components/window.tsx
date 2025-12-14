"use client";

import { useState, useRef } from "react";
import {FileStack, SquareX} from "lucide-react";
import { Outfit } from "next/font/google";

type WindowProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  sidebar?: React.ReactNode;
};
const outfit = Outfit({ 
  subsets: ["latin"], 
  /* variable: "--font-outfit", */
});


export default function Window({ title, children, onClose , sidebar}: WindowProps) {
   
  const windowRef = useRef<HTMLDivElement>(null);

  // Window position
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Maximize toggle
  const [maximized, setMaximized] = useState(false);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && !maximized) {
      setPos({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleMaximize = () => {
    setMaximized(!maximized);
  };

  return (
    <div
      ref={windowRef}
      className={`absolute bg-zinc-950/90 backdrop-blur-md text-white shadow-lg rounded-lg flex flex-col border-2 border-amber-50 p-4 ${outfit.className} shadow-[0_0_15px_rgba(34,211,238,0.6)]`}
      style={{
        width: maximized ? "100%" : "50rem",
        height: maximized ? "100%" : "35rem",
        top: maximized ? 0 : pos.y,
        left: maximized ? 0 : pos.x,
        zIndex: 50,
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Title Bar */}
      <div
        className="flex justify-between items-center bg-zinc-900 px-3 py-2 rounded-lg cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <span className="font-semibold">{title}</span>
        <div className="flex space-x-2">
          <button
            onClick={toggleMaximize}
            className="p-2 bg-gray-600 hover:bg-gray-400 rounded"
          ><FileStack /></button>
          <button
            onClick={onClose}
            className="p-2 bg-red-500 hover:bg-red-400 rounded"
          ><SquareX /></button>
        </div>
      </div>

      {/* Content */}
      <div className="flex h-full overflow-auto">
        {/* Sidebar */}
        {sidebar && (
        <div className="w-1/4 bg-zinc-900 p-2 border-r border-gray-700 my-2 rounded-xl py-4">
            {sidebar}
        </div>)}

        {/* Main content */}
        <div className="flex-1 p-3">{children}</div>
      </div>
    </div>
  );
}
