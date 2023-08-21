import { useQuery } from "react-query";

const useGallery = () => {
    const { data: gallery = [], refetch } = useQuery(['gallery'], async () => {
        const res = await fetch(`http://localhost:5000/gallery`); // Replace with the correct URL for fetching user data
        return res.json();
    });
    return [gallery, refetch];
}

export default useGallery;