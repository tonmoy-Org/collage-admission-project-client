import { useQuery } from 'react-query';
import useAuth from './useAuth';

const useUser = () => {
    const {user} = useAuth();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`http://localhost:5000/users?email=${user?.email}`); // Replace with the correct URL for fetching user data
        return res.json();
    });
    return [users, refetch];
};

export default useUser;