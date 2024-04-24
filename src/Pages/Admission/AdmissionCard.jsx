import { Link } from "react-router-dom";

const AdmissionCard = ({ data }) => {
    const { _id, college_image, college_name, admission_dates } = data;
    return (
        <div className="lg:w-[300px] w-80 shadow-md rounded-none overflow-hidden">
            <img className="w-full h-52" src={college_image} alt={college_name} />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{college_name}</h2>
                <p>{admission_dates}</p>
                <div className="mt-4 flex justify-end">
                    <Link to={`/admission-field/${_id}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Admission Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdmissionCard;
