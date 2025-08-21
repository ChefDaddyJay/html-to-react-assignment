import type { Character } from "../fma-data";
import "./CharacterRating.css";

export function CharacterRating({
  character,
  background,
}: {
  character: Character;
  background: "light" | "dark";
}) {
  return (
    <tr className={background}>
      <td>{character.name}</td>
      <td>{character.skillset}</td>
      <td>{character.votes}</td>
    </tr>
  );
}
