import useCollageLoader from "../../hooks/useCollageLoader";
import CollageCard from "./CollageCard";


const Collage = () => {
    const [collage] = useCollageLoader();
    console.log(collage)
    return (
        <div>
            <div className="hero h-72 bg-fixed pt-14" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Our Collage</h1>
                    </div>
                </div>
            </div>
            <div  className="grid lg:grid-cols-3 lg:mx-52 mt-8 mb-20">
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