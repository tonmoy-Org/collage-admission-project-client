import { useQuery } from "react-query";

const useReview = () => {
    const { data: review = [], refetch } = useQuery(['review'], async () => {
        const res = await fetch(`http://localhost:5000/review`); // Replace with the correct URL for fetching user data
        return res.json();
    });
    return [review, refetch];
}

export default useReview;