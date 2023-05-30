import { Card } from "@/components";
import { getCharacters } from "./services";

async function fetchCharacters() {
  return await getCharacters();
}

async function Characters() {
  const characters = await fetchCharacters();
  return (
    <>
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
}

export default Characters;
