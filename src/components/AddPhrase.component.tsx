"use client";

import React, { useState } from "react";

interface IAddPhrase {
  onAdd: (phrase: string) => void;
}

export const AddPhrase = ({ onAdd }: IAddPhrase) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim().length === 0) return;
    onAdd(input.trim());
    setInput("");
  };

  return (
    <div className="flex gap-2 w-full max-w-md">
      <input
        className="flex-1 p-2 border rounded"
        type="text"
        placeholder="Escribe una frase..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
        onClick={handleAdd}
        disabled={input.trim().length === 0}
      >
        Agregar
      </button>
    </div>
  );
};
