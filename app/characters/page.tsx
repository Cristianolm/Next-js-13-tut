import Card from "../components/Card/Card";
import { getCharacters } from "./services";

async function fetchCharacters() {
  return await getCharacters();
}

async function Characters() {
  const characters = await fetchCharacters();
  return (
    <>
      {characters.map((character) => (
        <Card key={character.id} data={character.location} />
      ))}
    </>
  );
}

export default Characters;
