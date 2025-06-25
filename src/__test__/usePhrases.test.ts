import { renderHook, act } from "@testing-library/react";
import { usePhrases } from "@/hooks/usePhrases.hook";

describe("usePhrases hook", () => {
  it("agrega una frase correctamente", () => {
    const { result } = renderHook(() => usePhrases());

    act(() => {
      result.current.addPhrase("Hola mundo");
    });

    expect(result.current.phrases).toHaveLength(1);
    expect(result.current.phrases[0].text).toBe("Hola mundo");
    expect(result.current.phrases[0].id).toBeDefined();
  });

  it("no agrega frases vacías ni espacios", () => {
    const { result } = renderHook(() => usePhrases());

    act(() => {
      result.current.addPhrase("");
      result.current.addPhrase("     ");
    });

    expect(result.current.phrases).toHaveLength(0);
  });

  it("elimina frases correctamente", () => {
    const { result } = renderHook(() => usePhrases());

    act(() => {
      result.current.addPhrase("Frase 1");
      result.current.addPhrase("Frase 2");
    });

    const idToDelete = result.current.phrases[0].id;

    act(() => {
      result.current.removePhrase(idToDelete);
    });

    expect(result.current.phrases).toHaveLength(1);
    expect(result.current.phrases[0].text).toBe("Frase 2");
  });

  it("filtra frases por texto correctamente", () => {
    const { result } = renderHook(() => usePhrases());

    act(() => {
      result.current.addPhrase("React es genial");
      result.current.addPhrase("Vue también mola");
    });

    act(() => {
      result.current.setFilter("react");
    });

    expect(result.current.filteredPhrases).toHaveLength(1);
    expect(result.current.filteredPhrases[0].text).toBe("React es genial");
  });
});
