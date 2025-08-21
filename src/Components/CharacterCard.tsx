import type { Character } from "../fma-data";
import "./CharacterCard.css";

export function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{character.name}</h3>
        <h4>{character.nickName}</h4>
      </div>
      <img src={character.imageUrl} alt="" />
      <p>{character.background}</p>
    </div>
  );
}
