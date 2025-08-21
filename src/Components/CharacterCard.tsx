import { Component } from "react";
import type { Character } from "../fma-data";
import "./CharacterCard.css";

export class CharacterCard extends Component<{ character: Character }> {
  render() {
    const { character } = this.props;
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
}
