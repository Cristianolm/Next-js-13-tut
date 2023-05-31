import Image from "next/image";
import cardStyles from "./Card.module.css";

// `Partial` will merge all "Character" and "Location" properties and make them all optional.
// type CardData = Partial<Character & Location>;

// Taking into account the properties we need, which are 4, it is not worth using the "Partial".
export interface CardData {
  name?: string;
  type?: string;
  created?: string;
  image?: string;
}

interface Props {
  data: CardData;
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
      {!!data.image && (
        <Image width="100" height="100" alt="Image" src={data.image} />
      )}
    </div>
  );
}
export default Card;