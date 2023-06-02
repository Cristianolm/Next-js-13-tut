import { Card, Navigator } from "@/app/components";
import { getCharacters } from "./services";
import { Routes } from "@/app/models";

async function fetchCharacters() {
  return await getCharacters();
}

async function Characters() {
  const characters = await fetchCharacters();
  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.LOCATION]} />
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
}

export default Characters;
