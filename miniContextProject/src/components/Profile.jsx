import { useContext } from 'react';
import UserContext from '../contexts/UserContext.js';

function Profile() {

    const { user } = useContext(UserContext);

    return (
        <h2
            className="text-2xl font-bold text-center text-gray-800 mb-6 dark:text-white light:text-red">
            {user == null ? "Please Login" : `Welcome ${user.username}`}
        </h2>
    )
}

export default Profile