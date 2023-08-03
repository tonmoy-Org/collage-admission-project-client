import { Link } from "react-router-dom";


const MyCollageCard = ({data}) => {
    const {_id, college_image, college_name,name, subject} = data;
    return (
        <div className="card card-compact w-80 h-96 bg-base-100 shadow-xl mx-auto ">
            <figure><img src={college_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{college_name}</h2>
                <h2 className="text-xl"><span className="font-bold">Student Name: </span>{name}</h2>
                <h2 className="text-[18px]"><span className="font-bold">Subject: </span>{subject}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/my-collage-details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyCollageCard;