import type { Character } from "../fma-data";
import { CharacterCard } from "./CharacterCard";
import "./CharacterCard.css";

export function CardsTable({ characters }: { characters: Character[] }) {
  return (
    <section id="character-cards">
      {characters.map((char) => (
        <CharacterCard character={char} />
      ))}
    </section>
  );
}
