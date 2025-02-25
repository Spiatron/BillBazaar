import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import LightPage from "@/pages/Electricity/light";
import LightBillPage from "@/pages/Electricity/lightBill";
import Gaspage from "@/pages/Gas/gas"
import SSGCPage from "@/pages/Gas/SSGC"
import SNGPLPage from "@/pages/Gas/SNGPL"


function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<LightPage />} path="/Light" />
      <Route element={<LightBillPage />} path="/bill/:id" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<Gaspage />} path="/gas" />
      <Route element={<SNGPLPage />} path="/gas/sui-gas-northern" />
      <Route element={<SSGCPage />} path="/gas/sui-gas-southern" />
    </Routes>
  );
}

export default App;
