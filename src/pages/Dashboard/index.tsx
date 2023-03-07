import MainLayout from "../../layouts/MainLayout";
import Home from "./Home";
import "./_index.scss";

const index = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export default index;
