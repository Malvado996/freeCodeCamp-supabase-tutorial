import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const { session } = useAuth();

    if (session === undefined) {
        return <div>Loading...</div>;
    }

    // If no session - navigate to .signin
    // If session, render children
    return


};

export default ProtectedRoute;