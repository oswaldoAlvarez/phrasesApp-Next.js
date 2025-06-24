"use client";

import { AddPhrase, PhraseList, ThemeSwitcher } from "@/components";
import { usePhrases } from "@/hooks";

export const PhrasesLayout = () => {
  const { filteredPhrases, addPhrase, removePhrase, filter, setFilter } =
    usePhrases();

  return (
    <main className="font-[family-name:var(--font-geist-sans)] p-8">
      <div className="w-[100%] flex justify-end">
        <ThemeSwitcher />
      </div>
      <div className="w-[100%] flex justify-center items-center mt-20">
        <h1 className="font-bold text-8xl">Gestor de Frases</h1>
      </div>
      <div className="flex items-center justify-center flex-col mt-10">
        <AddPhrase onAdd={addPhrase} />
        <input
          type="text"
          placeholder="Buscar frase..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-4 mt-4 p-2 border rounded w-full max-w-md"
        />
        <PhraseList phrases={filteredPhrases} onDelete={removePhrase} />
      </div>
    </main>
  );
};
