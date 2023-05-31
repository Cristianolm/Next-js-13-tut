import Image from "next/image";
import { Character } from "@/app/characters/models";
import cardStyles from "./Card.module.css";

interface Props {
  data: Character;
}

function Card({ data }: Props) {
  let formatedType = data.type;
  // ||= -> if a variable have some value do not assing any value but if is empty, it will return "No Type"
  formatedType ||= "No Type";

  return (
    <div className={cardStyles.Card}>
      <p>Name: {data.name}</p>
      <p>Type: {data.type ? data.type : "No type"}</p>
      {/* <p>Created: {data.created}</p> */}
      <p>Created: {formatedType}</p>
      <Image width="100" height="100" alt="Image" src={data.image} />
    </div>
  );
}
export default Card;
