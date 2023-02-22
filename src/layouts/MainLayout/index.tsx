import "./_index.scss";

type MainLayoutProps = {
  children: any;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
