import {Logo} from "./utils.js";
import logo from "../assets/logo.png"
import { HeaderContainer,HeaderButtons,HeaderButton } from "../styles/header-styles.styled";

function Header() {
    return (
        <HeaderContainer>
            <Logo link={logo} size="60px"></Logo>
            <HeaderButtons>
                <HeaderButton>Home</HeaderButton>
                <HeaderButton>Catalogue</HeaderButton>
                <HeaderButton>Cart</HeaderButton>
            </HeaderButtons>
        </HeaderContainer>
    )
}

export default Header;