interface IPhraseCard {
  phrase: {
    id: string;
    text: string;
  };
  onDelete: (id: string) => void;
}

export const PhraseCard = ({ phrase, onDelete }: IPhraseCard) => {
  return (
    <div className="p-4 shadow rounded flex justify-between items-center border-1">
      <span>{phrase.text}</span>
      <button
        onClick={() => onDelete(phrase.id)}
        className="text-red-500 hover:underline ml-4"
        aria-label="Eliminar frase"
      >
        Eliminar
      </button>
    </div>
  );
};
