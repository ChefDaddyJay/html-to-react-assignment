import type { Character } from "../fma-data";
import { CharacterCard } from "./CharacterCard";
import "./CardsTable.css";

export function CardsTable({ characters }: { characters: Character[] }) {
  return (
    <section id="cards-table">
      {characters.map((char) => (
        <CharacterCard character={char} />
      ))}
    </section>
  );
}
