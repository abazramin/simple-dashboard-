import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Create from "./pages/Create";
import Prodfile from "./pages/Prodfile";
import Dashborad from "./pages/Dashborad";

//
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashborad />}  />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Prodfile />} />
    </Route>
  )
);
