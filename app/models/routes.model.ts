/* 
Why ENUMERATORS (const)

The option between `const` and `enum` is relies in limitate the future.
Let´s take a look.
As we can see below, `CHARACTERS` are a lot in the database of Rick and Morty, but let´s imagine that are only 2 personages the `Rick` and the `Morty`. That said we can create a tipe that only accepts one of this two personages; that way we are controling the future.

-----------------------------------------------
1) Let´s define an enum with the personages.
export enum Personages {
  CHARACTERS1 = "Rick",
  CHARACTERS2 = "Morty",
}

2) Let´s attribute a type that embraces the previous enum´s.
interface Characters {
  Personage: Personages;
}

3) Let´s associate the personage with some category.
const badGuy: Characters = {
  Personage: Personages.CHARACTERS1,
};

const goodGuy: Characters = {
  Personage: Personages.CHARACTERS2,
};

4) Let´s access the personages
console.log(badGuy.Personage);


-----------------------------------------------
This way we eforce that the only two personages available are the ones present in `Personages`.  

*/

export const Routes = {
  HOME: {
    path: "/",
    name: "Home",
  },
  CHARACTERS: {
    path: "information/characters",
    name: "Characters",
  },
  LOCATION: {
    path: "information/locations",
    name: "Locations",
  },
};

export interface Route {
  path: string;
  name: string;
}
