import { useQuery } from "react-query";

const useReview = () => {
    const { data: review = [], refetch } = useQuery(['review'], async () => {
        const res = await fetch(`https://collage-admission-server-6wm8a1k88-tonmoy-org.vercel.app/review`); // Replace with the correct URL for fetching user data
        return res.json();
    });
    return [review, refetch];
}

export default useReview;