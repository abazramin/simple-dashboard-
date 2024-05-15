import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//
import RootLayout from "./layout/RootLayout";
import Dashborad from "./pages/Dashborad";
import Create from "./pages/Create";
import Prodfile from "./pages/Prodfile";
import Setting from "./pages/Setting";
//
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashborad />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Prodfile />} />
      <Route path="setting" element={<Setting />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
