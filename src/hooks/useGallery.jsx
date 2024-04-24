import { useQuery } from "react-query";

const useGallery = () => {
    const { data: gallery = [], refetch } = useQuery(['gallery'], async () => {
        const res = await fetch(`https://collage-admission-project-server.vercel.app/gallery`); // Replace with the correct URL for fetching user data
        return res.json();
    });
    return [gallery, refetch];
}

export default useGallery;