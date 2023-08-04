import { Helmet } from "react-helmet-async";
import useCollageLoader from "../../hooks/useCollageLoader";
import CollageCard from "./CollageCard";


const Collage = () => {
    const [collage] = useCollageLoader();
    return (
        <div>
            <Helmet>
                <title>{`Collage - Mentoring`}</title>
            </Helmet>
            <div className="hero h-40 bg-fixed" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Admission is going on</h1>
                    </div>
                </div>
            </div>
            <div  className="grid lg:grid-cols-3 gap-10 lg:w-8/12 mx-auto mt-8 mb-20">
                {collage.map(data => (
                    <CollageCard
                    key={data._id}
                    data={data}
                    ></CollageCard>
                ))}
            </div>
        </div>
    );
};

export default Collage;