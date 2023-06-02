import { Navigator } from "./components";
import { Routes } from "./models";

function App() {
  return (
    <div>
      <h1>Wellcome to Rick and Morty app</h1>
      <h2>What do you want to see ?</h2>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATION]} />
    </div>
  );
}

export default App;
