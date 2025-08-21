import { Navbar } from "./Navbar";
import "./Header.css";

export function Header({ title }: { title: string }) {
  return (
    <header>
      <h1>{title}</h1>
      <Navbar />
    </header>
  );
}
