"use client";

import { useState, useRef } from "react";

type WindowProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Window({ title, children, onClose }: WindowProps) {
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
      className={`absolute bg-gray-900 text-white shadow-lg border border-gray-700 rounded-lg flex flex-col`}
      style={{
        width: maximized ? "100%" : "24rem",
        height: maximized ? "100%" : "15rem",
        top: maximized ? 0 : pos.y,
        left: maximized ? 0 : pos.x,
        zIndex: 50,
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Title Bar */}
      <div
        className="flex justify-between items-center bg-gray-800 px-3 py-2 rounded-t-lg cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <span className="font-semibold">{title}</span>
        <div className="flex space-x-2">
          <button
            onClick={toggleMaximize}
            className="w-4 h-4 bg-gray-500 hover:bg-gray-400 rounded"
          ></button>
          <button
            onClick={onClose}
            className="w-4 h-4 bg-red-500 hover:bg-red-400 rounded"
          ></button>
        </div>
      </div>

      {/* Content */}
      <div className="flex h-full overflow-auto">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800 p-2 border-r border-gray-700">
          <ul className="space-y-1 text-sm">
            <li>Directory 1</li>
            <li>Directory 2</li>
            <li>Directory 3</li>
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 p-3">{children}</div>
      </div>
    </div>
  );
}
