import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Collage from "../Pages/Collage/Collage";
import Search from "../Pages/Search/Search";
import Details from "../Pages/Details/Details";
import Admission from "../Pages/Admission/Admission";
import AdmissionFields from "../Pages/AdmissionFields/AdmissionFields";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'collages',
        element: <Collage></Collage>   
      },
      {
        path: 'search',
        element: <Search></Search>
      },
      {
        path: 'details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/collage/${params.id}`)
      },
      {
        path: 'admission',
        element: <Admission></Admission>
      },
      {
        path: 'admission-field',
        element: <AdmissionFields></AdmissionFields>
      }
    ]
  },
]);

export default router;