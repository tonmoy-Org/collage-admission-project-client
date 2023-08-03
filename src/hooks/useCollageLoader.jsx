import { useQuery } from "react-query";

const useCollageLoader = () => {
    const { data: collage = [], refetch } = useQuery(['collage'], async () => {
        const res = await fetch(`https://collage-admission-server-six.vercel.app/collage`); // Replace with the correct URL for fetching user data
        return res.json();
    });
    return [collage, refetch];
}

export default useCollageLoader;