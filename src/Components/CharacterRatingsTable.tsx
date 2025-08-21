import type { Character } from "../fma-data";
import { CharacterRating } from "./CharacterRating";
import "./CharacterRating.css";

export function RatingsTable({
  characters,
  display,
}: {
  characters: Character[];
  display: number;
}) {
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        {characters.map((char, i) =>
          i < display ? (
            <CharacterRating
              character={char}
              background={i % 2 === 0 ? "light" : "dark"}
            />
          ) : (
            <></>
          )
        )}
      </table>
    </section>
  );
}
