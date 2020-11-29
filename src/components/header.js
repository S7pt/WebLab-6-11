import {Logo} from "./utils.js";
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import { HeaderContainer,HeaderButtons,HeaderButton } from "../styles/header-styles.styled";

function Header() {
    return (
        <HeaderContainer>
            <Logo link={logo} size="60px"></Logo>
            <HeaderButtons>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><HeaderButton>Home</HeaderButton></Link>
                <Link to="/catalogue" style={{ color: 'inherit', textDecoration: 'inherit'}}><HeaderButton>Catalogue</HeaderButton></Link>
                <Link to="/catalogue" style={{ color: 'inherit', textDecoration: 'inherit'}}><HeaderButton>Cart</HeaderButton></Link>
            </HeaderButtons>
        </HeaderContainer>
    )
}

export default Header;