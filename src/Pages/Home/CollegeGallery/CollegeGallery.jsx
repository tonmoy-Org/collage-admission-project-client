import useGallery from "../../../hooks/useGallery";
import GalleryCard from "./GalleryCard";

const CollegeGallery = () => {
    const [gallery] = useGallery();

    return (
        <div>
            <div className="text-center py-20">
                <h2 className="text-4xl font-bold">College Gallery</h2>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias.</p>
            </div>
            {gallery.length === 0 ? (<p className="w-16 mx-auto"><span className="loading loading-spinner text-primary w-16"></span></p>) :
                (<div className="grid lg:grid-cols-3 gap-8 w-9/12 mx-auto">
                    {
                        gallery.map(data =>
                            <GalleryCard
                                key={data._id}
                                data={data}
                            ></GalleryCard>)
                    }
                </div>)}
        </div>
    );
};

export default CollegeGallery;