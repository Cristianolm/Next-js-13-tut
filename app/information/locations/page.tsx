import { Card, Navigator } from "@/app/components";
import { getLocations } from "./services";
import { Routes } from "@/app/models";

async function fetchLocation() {
  return await getLocations();
}

async function Location() {
  const locations = await fetchLocation();
  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.CHARACTERS]} />
      {locations.map((Location) => {
        // return <CardLocation key={Location.id} data={Location} />;
        return <Card key={Location.id} data={Location} />;
      })}
    </>
  );
}

export default Location;
