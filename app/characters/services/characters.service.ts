import { Character } from "../models";

// The function returns a Promise that resolves to an array of Character objects.
export const getCharacters = (): Promise<Character[]> => {
  const url = `https://rickandmortyapi.com/api/character`;

  //   const urlWithId = `${url}/${id}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results);
};
