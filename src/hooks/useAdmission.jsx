import { useQuery } from "react-query";

const useAdmission = () => {
    const { data: myCollage = [], refetch } = useQuery(['myCollage'], async () => {
        const res = await fetch(`http://localhost:5000/admission?email=korim@gmail.com`); // Replace with the correct URL for fetching user data
        return res.json();
    });
    return [myCollage, refetch];
}
export default useAdmission;