import { getCharacters } from "./services";

async function fetchCharacters() {
  return await getCharacters();
}

async function Characters() {
  const characters = await fetchCharacters();

  return <div>{JSON.stringify(characters)}</div>;
}

export default Characters;
