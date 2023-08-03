import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Collage from "../Collage/Collage";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>{`Home - Mentoring`}</title>
            </Helmet>
            <Banner></Banner>
            <Collage></Collage>
        </div>
    );
};

export default Home;