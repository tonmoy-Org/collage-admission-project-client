import { Link } from "react-router-dom";


const CollageCard = ({ data }) => {
    const { _id, college_image, college_name, admission_dates } = data;
    return (
        <div className="w-80 bg-base-100 shadow-xl mx-auto ">
            <figure><img className="w-full h-60" src={college_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{college_name}</h2>
                <p>{admission_dates}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CollageCard;