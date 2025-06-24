import { useState, useMemo } from "react";

export interface Phrase {
  id: string;
  text: string;
}

export function usePhrases() {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [filter, setFilter] = useState("");

  const addPhrase = (text: string) => {
    if (!text.trim()) return;
    setPhrases((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: text.trim() },
    ]);
  };

  const removePhrase = (id: string) => {
    setPhrases((prev) => prev.filter((phrase) => phrase.id !== id));
  };

  const filteredPhrases = useMemo(
    () =>
      filter.trim() === ""
        ? phrases
        : phrases.filter((phrase) =>
            phrase.text.toLowerCase().includes(filter.toLowerCase())
          ),
    [phrases, filter]
  );

  return {
    phrases,
    filteredPhrases,
    filter,
    setFilter,
    addPhrase,
    removePhrase,
  };
}
