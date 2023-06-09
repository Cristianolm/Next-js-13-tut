import Image from "next/image";
import { Navigator } from "./components";
import { Routes } from "./models";
import Mustachy from "../public/images/mustachy_.png";
import { mustachyBlur } from "./models/mustachy.blur";

function App() {
  return (
    <div>
      <h1>Wellcome to Rick and Morty app</h1>
      <h2>What do you want to see ?</h2>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATION]} />
      <Image
        src={Mustachy}
        blurDataURL={mustachyBlur}
        placeholder="blur"
        alt="Mustachy"
      />
    </div>
  );
}

export default App;
