import Image from "next/image";

async function getData() {
  const res = await fetch("https://rickandmortyapi.com/api/character/2");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Dashboard() {
  const data = await getData();
  return (
    <div>
      <Image width="100" height={100} src={data.image} alt="Morty"></Image>
    </div>
  );
}

export default Dashboard;
