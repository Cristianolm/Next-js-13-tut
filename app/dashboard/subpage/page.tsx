import { FC } from "react";
import NotFoundComponent from "./components/NotFound";

interface subPageProps {}

const SubPage: FC<subPageProps> = ({}) => {
  return (
    <div>
      Sub page
      <NotFoundComponent />
    </div>
  );
};

export default SubPage;
