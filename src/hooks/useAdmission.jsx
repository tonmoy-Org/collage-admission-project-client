import { useQuery } from "react-query";
import useAuth from "./useAuth";


const useAdmission = () => {
    const {user} = useAuth();
    const { data: myCollage = [], refetch } = useQuery(['myCollage'], async () => {
        const res = await fetch(`https://collage-admission-server-six.vercel.app/admission?email=${user?.email}`); // Replace with the correct URL for fetching user data
        return res.json();
    });
    return [myCollage, refetch];
}
export default useAdmission;