import { Helmet } from "react-helmet-async";
import useAdmission from "../../hooks/useAdmission";
import MyCollageCard from "./MyCollageCard";


const MyCollage = () => {
    const [myCollage] = useAdmission();
    console.log(myCollage)
    return (
        <div>
            <Helmet>
                <title>{`My Collage - Mentoring`}</title>
            </Helmet>
            <div className="hero h-72 bg-fixed pt-14" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">My Collage</h1>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 lg:mx-52 mt-8 mb-20">
                {
                    myCollage.map(data =>
                        <MyCollageCard
                            key={data._id}
                            data={data}
                        ></MyCollageCard>)
                }
            </div>
        </div>
    );
};

export default MyCollage;