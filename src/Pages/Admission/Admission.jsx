import { Helmet } from "react-helmet-async";
import useCollageLoader from "../../hooks/useCollageLoader";
import AdmissionCard from "./AdmissionCard";

const Admission = () => {
    const [collage] = useCollageLoader();
    return (
        <div>
            <Helmet>
                <title>{`Admission - Mentoring`}</title>
            </Helmet>
            <div className="hero h-40 bg-fixed" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Admission is going on</h1>
                    </div>
                </div>
            </div>
            <div  className="grid lg:grid-cols-3 gap-10 lg:w-10/12 mx-auto w-96 mt-8 mb-20">
                {collage.map(data => (
                    <AdmissionCard
                    key={data._id}
                    data={data}
                    ></AdmissionCard>
                ))}
            </div>
        </div>
    );
};

export default Admission;