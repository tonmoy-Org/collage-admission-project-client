import { Link } from "react-router-dom";

const AdmissionCard = ({ data }) => {
    const { college_image, college_name, admission_dates } = data;
    return (
        <div className="card w-96 h-40 bg-base-100 shadow-xl image-full">
            <figure><img src={college_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{college_name}</h2>
                <p>{admission_dates}</p>
                <div className="card-actions justify-end">
                    <Link to='/admission-field'><button className="btn btn-primary">Admission Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AdmissionCard;