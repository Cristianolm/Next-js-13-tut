import Link from "next/link";
import { Routes } from "./models";

function App() {
  return (
    <div>
      <h1>Wellcome to Rick and Morty app</h1>
      <h2>What do you want to see ?</h2>
      <Link href={Routes.CHARACTERS}>Characters</Link>
    </div>
  );
}

export default App;
