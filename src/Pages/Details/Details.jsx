import { useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData();
    console.log(data)
    const { college_image, college_name, admission_dates, research_history
    } = data;
    return (
        <div>
            <div className="hero h-72" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold pt-10">Our Collage Details</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl lg:p-20 gap-24 lg:w-9/12 mx-auto">
                    <div className="lg:mt-9">
                        <figure>
                            <img style={{ width: "300px", height: "300px" }} src={college_image} alt="Album" />
                        </figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title mb-0">Collage Name: {college_name}</h2>
                        <p>{admission_dates}</p>
                        <p>{research_history}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;