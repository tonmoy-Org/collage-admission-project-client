import { useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData();
    console.log(data)
    const { college_image, college_name, admission_dates, research_history,
        events, sports } = data;
    return (
        <div>
             <div className="hero h-40 bg-fixed" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Admission is going on</h1>
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
                    <div className="mt-16">
                        <h2 className="card-title mb-0">Collage Name: {college_name}</h2>
                        <p className="pt-2">{admission_dates}</p>
                        <p className="pt-5">{research_history}</p>
                        <div className="lg:flex  gap-10 mt-8">
                            <ul>
                                <label className="text-xl font-semibold">Events</label>
                                <li>{events[0]}</li>
                                <li>{events[1]}</li>
                                <li>{events[2]}</li>
                            </ul>
                            <ul>
                                <label className="text-xl font-semibold">Sports</label>
                                <li>{sports[0]}</li>
                                <li>{sports[1]}</li>
                                <li>{sports[2]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;