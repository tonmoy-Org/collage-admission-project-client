

const GalleryCard = ({ data }) => {
    const { url } = data;
    return (
        <div>
            <div className="shadow-xl">
                <figure><img src={url} /></figure>
            </div>
        </div>
    );
};

export default GalleryCard;