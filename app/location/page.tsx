import Card from "../components/Card/Card";
import { getLocations } from "./services";

async function fetchLocations() {
  return await getLocations();
}

async function Characters() {
  const locations = await fetchLocations();
  return (
    <>
      {locations.map((Location) => (
        <Card key={Location.id} data={Location} />
      ))}
    </>
  );
}

export default Location;
