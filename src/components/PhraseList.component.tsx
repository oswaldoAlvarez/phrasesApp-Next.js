import { PhraseCard } from "./PhraseCard.component";

interface IPhraseList {
  phrases: {
    id: string;
    text: string;
  }[];
  onDelete: (id: string) => void;
}

export const PhraseList = ({ phrases, onDelete }: IPhraseList) => {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {phrases.map((phrase) => (
        <PhraseCard key={phrase.id} phrase={phrase} onDelete={onDelete} />
      ))}
    </div>
  );
};
