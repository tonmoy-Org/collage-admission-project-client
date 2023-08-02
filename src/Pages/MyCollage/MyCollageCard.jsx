

const MyCollageCard = ({data}) => {
    const {image, college_name, admission_dates } = data;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl mx-auto ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{college_name}</h2>
                <p>{admission_dates}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default MyCollageCard;