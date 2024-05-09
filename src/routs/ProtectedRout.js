import { Navigate } from "react-router-dom";

export const ProtectedRout = (props) => {
    const isLoggedIn = !!localStorage.getItem("ecom-token");
    if(isLoggedIn) return props.element;
    return <Navigate to="/login" replace />
}