import "./App.css";
import { RatingsTable } from "./Components/CharacterRatingsTable";
import { Header } from "./Components/Header";
import { data } from "./fma-data";
import { CardsTable } from "./Components/CardsTable";

function App() {
  return (
    <>
      <Header title="Fullmetal Alchemist" />
      <RatingsTable characters={data} display={5} />
      <CardsTable characters={data} />
    </>
  );
}

export default App;
