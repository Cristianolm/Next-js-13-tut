import { Card } from "@/app/components";
import { getLocations } from "./services";

async function fetchLocation() {
  return await getLocations();
}

async function Location() {
  const locations = await fetchLocation();
  return (
    <>
      {locations.map((Location) => {
        // return <CardLocation key={Location.id} data={Location} />;
        return <Card key={Location.id} data={Location} />;
      })}
    </>
  );
}

export default Location;
