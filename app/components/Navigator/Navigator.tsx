import { Route } from "@/app/models";
import Link from "next/link";

interface Props {
  pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
  return (
    <div style={{ display: "flex", gap: "15px", flexDirection: "row" }}>
      {pathNames.map((pathName, index) => (
        <Link
          className="bg-fuchsia-500 hover:bg-sky-700"
          key={index}
          href={pathName.path}
        >
          {pathName.name}
        </Link>
      ))}
    </div>
  );
}

export default Navigator;
