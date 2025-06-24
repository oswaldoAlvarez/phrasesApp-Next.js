import { ThemeSwitcher } from "@/components";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] p-8">
      <div className="w-[100%] flex justify-end">
        <ThemeSwitcher />
      </div>
      <div className="w-[100%] flex justify-center items-center mt-20">
        <h1 className="font-bold text-8xl">Gestor de Frases</h1>
      </div>
    </div>
  );
}
