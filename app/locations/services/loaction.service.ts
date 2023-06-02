import { Location } from "../models";

// The function returns a Promise that resolves to an array of Character objects.
export const getLocations = (): Promise<Location[]> => {
  const url = `https://rickandmortyapi.com/api/location`;

  //   const urlWithId = `${url}/${id}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results);
};
