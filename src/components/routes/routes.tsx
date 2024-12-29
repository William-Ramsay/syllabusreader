import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Error from "./Error";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
