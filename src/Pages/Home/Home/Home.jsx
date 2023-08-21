import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Collage from "../Collage/Collage";
import CollegeGallery from "../CollegeGallery/CollegeGallery";
import Research from "../AboutCollage/AboutCollage";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>{`Home - Mentoring`}</title>
            </Helmet>
            <Banner></Banner>
            <Collage></Collage>
            <CollegeGallery></CollegeGallery>
            <Research></Research>
        </div>
    );
};

export default Home;