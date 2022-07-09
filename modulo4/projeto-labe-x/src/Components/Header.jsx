import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Menu = styled.div`
    display: none
`

const Header = () => {

    const navigate = useNavigate();

    return <Menu>
        <button onClick={() => {navigate("/")}}>Home</button>
        <button onClick={() => {navigate("/Login")}}>Login</button>
        <button onClick={() => {navigate("/admin/home")}}>AdminHomePage</button>
        <button onClick={() => {navigate("/trips/list")}}>ListTripPage</button>
        <button onClick={() => {navigate("/trips/application/:id")}}>AplicationFormPage</button>
        <button onClick={() => {navigate("/admin/trips/create")}}>CreateTripPage</button>
        <button onClick={() => {navigate("/admin/trips")}}>TripDetailsPage</button>
        <button onClick={() => {navigate("/admin/createUser")}}>Criar Usuario</button>
    </Menu>
}

export default Header;