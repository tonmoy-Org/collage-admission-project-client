import { useQuery } from "react-query";

const useGallery = () => {
    const { data: gallery = [], refetch } = useQuery(['gallery'], async () => {
        const res = await fetch(`https://collage-admission-server-6wm8a1k88-tonmoy-org.vercel.app/gallery`); // Replace with the correct URL for fetching user data
        return res.json();
    });
    return [gallery, refetch];
}

export default useGallery;