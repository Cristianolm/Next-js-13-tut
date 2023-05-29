import { notFound } from "next/navigation";

function NotFoundComponent() {
  notFound();
  return (
    <div>
      <h1>This is what you will see</h1>
    </div>
  );
}

export default NotFoundComponent;
