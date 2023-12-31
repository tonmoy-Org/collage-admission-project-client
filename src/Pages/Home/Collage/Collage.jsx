import useCollageLoader from "../../../hooks/useCollageLoader";
import CollageCard from "./CollageCard";

const Collage = () => {
    const [collage] = useCollageLoader();

    const slicedCollage = collage.slice(0, 3);
    
    return (
        <div className="mb-20">
            <div className="text-center pt-20 pb-10 px-6">
                <h2 className="text-4xl font-bold">Our Collage</h2>
                <p className="lg:text-xl pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias.</p>
            </div>
            
            {/* Conditional rendering based on collage data */}
            {collage.length === 0 ? (
                <p className="w-16 mx-auto"><span className="loading loading-spinner text-primary w-16"></span></p>
            ) : (
                <div className="grid lg:grid-cols-3 gap-5 lg:mx-52">
                    {slicedCollage.map(data => (
                        <CollageCard
                            key={data._id}
                            data={data}
                        ></CollageCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Collage;
