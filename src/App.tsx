import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import MenuMobileFull from "./components/MenuMobileFull/MenuMobileFull";
import { useState } from "react";
import { useGetUserParamQuery } from "./redux/api/UserApi";
import ModalsLayout from "./components/ModalsLayout/ModalsLayout";

function App() {
  const [openFull, setOpenFull] = useState(false);
  const { data } = useGetUserParamQuery(null);
  return (
    <div className="app__layout">
      <Menu />
      {openFull && <MenuMobileFull setOpen={setOpenFull} />}
      <MenuMobile setOpen={setOpenFull} />
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
      <ModalsLayout />
    </div>
  );
}

export default App;
