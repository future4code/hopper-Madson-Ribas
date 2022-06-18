import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return <>
        <button onClick={() => {navigate("/")}}>Home</button>
        <button onClick={() => {navigate("/Login")}}>Login</button>
        <button onClick={() => {navigate("/admin/trips/list")}}>AdminHomePage</button>
        <button onClick={() => {navigate("/trips/list")}}>ListTripPage</button>
        <button onClick={() => {navigate("/trips/application")}}>AplicationFormPage</button>
        <button onClick={() => {navigate("/admin/trips/create")}}>CreateTripPage</button>
        <button onClick={() => {navigate("/admin/trips/:id")}}>TripDetailsPage</button>
    </>
}

export default Header;