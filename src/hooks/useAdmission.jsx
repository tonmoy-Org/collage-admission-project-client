import { useQuery } from "react-query";
import useAuth from "./useAuth";


const useAdmission = () => {
    const {user} = useAuth();
    console.log(user?.email)
    const { data: myCollage = [], refetch } = useQuery(['myCollage'], async () => {
        const res = await fetch(`https://collage-admission-project-server.vercel.app/myAdmission/admission/${user?.email}`);
        return res.json();
    });
    return [myCollage, refetch];
}
export default useAdmission;