import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import Essentials from "./pages/Essentials";
import Resources from "./pages/Resources";
import Viewpoints from "./pages/Viewpoints";
import Bars from "./pages/Bars";
import SocialComunity from "./pages/SocialComunity";
import SportCenters from "./pages/SportCenters";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="essentials" element={<Essentials />} />
          <Route path="resources" element={<Resources />} />
          <Route path="viewpoints" element={<Viewpoints />} />
          <Route path="bars" element={<Bars />} />
          <Route path="sports-center" element={<SportCenters />} />
          <Route path="social-community" element={<SocialComunity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
