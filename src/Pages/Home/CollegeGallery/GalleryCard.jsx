const GalleryCard = ({ data }) => {
    const { url } = data;
    return (
        <div>
            <div className="shadow-xl">
                <figure>
                    <img 
                        className="object-cover transition-transform transform hover:scale-110"
                        src={url} 
                        style={{ transition: "transform 0.3s ease" }} // Add transition style inline
                    />
                </figure>
            </div>
        </div>
    );
};

export default GalleryCard;
