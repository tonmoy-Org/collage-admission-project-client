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
        path: 'admission-field/:id',
        element: <AdmissionFields></AdmissionFields>,
        loader: ({params}) => fetch(`http://localhost:5000/collage/${params.id}`)
      },
      {
        path: 'my-collage',
        element: <MyCollage></MyCollage>
      },
      {
        path: 'my-collage-details/:id',
        element: <MyCollegeDetails></MyCollegeDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/admission/${params.id}`)
      },
      {
        path: 'review/:id',
        element: <Review></Review>,
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
        element: <Profile></Profile>
      }
    ]
  },
]);

export default router;