import type { Character } from "../fma-data";
import { CharacterRating } from "./CharacterRating";
import "./RatingsTable.css";

export function RatingsTable({
  characters,
  display,
}: {
  characters: Character[];
  display: number;
}) {
  return (
    <section id="ratings-table">
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        {characters
          .sort((charA, charB) => charB.votes - charA.votes)
          .map((char, i) =>
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
