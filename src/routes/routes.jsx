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
import MyCollage from "../Pages/MyCollage/MyCollage";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import MyCollegeDetails from "../Pages/MyCollegeDetails/MyCollegeDetails";
import Review from "../Pages/Review/Review";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><Admission></Admission></PrivateRoute>
      },
      {
        path: 'admission-field/:id',
        element: <PrivateRoute><AdmissionFields></AdmissionFields></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/collage/${params.id}`)
      },
      {
        path: 'my-collage',
        element: <PrivateRoute><MyCollage></MyCollage></PrivateRoute>
      },
      {
        path: 'my-collage-details/:id',
        element: <PrivateRoute><MyCollegeDetails></MyCollegeDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/admission/${params.id}`)
      },
      {
        path: 'review/:id',
        element: <PrivateRoute><Review></Review></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/admission/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

export default router;