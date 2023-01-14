import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import ComponentsLoading from "./Components/ComponentsLoading/ComponentsLoading";
import Layout from "./Layout/Layout";
import PageLogin from "./Pages/LoginSystem/PageLogin/PageLogin";
import { routes, router } from "./Routes/routes";

function App() {
  return (
    <div>
      <ComponentsLoading />
      {/* <BrowserRouter>
        <Routes>
          {routes.map(({ path, element }, index) => {
            return <Route key={index} path={path} element={element} />;
          })} */}
      {/* <Route
            path={["/login", "/users", "/widgets"]}
            element={<Layout component={PageLogin} />}
          /> */}
      {/* </Routes>
      </BrowserRouter> */}
      {/* <RouterProvider router={router} fallbackElement={<BigSpinner />} /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
