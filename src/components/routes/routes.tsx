import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";

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
      {
        path: "/courses",
        element: <Courses />,
      },
    ],
  },
];

export default routes;
