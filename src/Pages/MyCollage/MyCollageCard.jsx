import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const MyCollageCard = ({ data }) => {
    const { _id, college_image, college_name, name, subject } = data;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="w-80 bg-base-100 shadow-xl mx-auto ">
            <figure><img className="h-60" src={college_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{college_name}</h2>
                <h2 className="text-[16px]"><span className="font-bold">Student Name: </span>{name}</h2>
                <h2 className="text-[16px]"><span className="font-bold">Subject: </span>{subject}</h2>
                <div className="card-actions justify-end pt-3">
                    <Link to={`/my-collage-details/${_id}`}><button className="btn btn-sm btn-primary">Details</button></Link>
                    <Link to={`/review/${_id}`}><button className="btn btn-sm btn-primary">Feedback</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyCollageCard;