import { Route } from "@/app/models";
import Link from "next/link";

interface Props {
  pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
  return (
    <div style={{ display: "flex", gap: "15px", flexDirection: "row" }}>
      {pathNames.map((pathName, index) => (
        <Link key={index} href={pathName.path}>
          {pathName.name}
        </Link>
      ))}
    </div>
  );
}

export default Navigator;
