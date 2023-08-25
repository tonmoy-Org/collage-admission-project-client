import { Link } from "react-router-dom";


const CollageCard = ({ data }) => {
    const { _id, college_image, college_name, admission_dates, research_history } = data;
    return (
        <div className="w-80 bg-base-100 shadow-xl mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300">
            <figure><img className="h-60" src={college_image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="">
                    <h2 className="card-title">{college_name}</h2>
                    <p>{admission_dates}</p>
                    <p><span className="text-[18px] font-semibold">Research: </span>{research_history}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-sm btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CollageCard;