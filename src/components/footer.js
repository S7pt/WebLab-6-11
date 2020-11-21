import logo from "../assets/logo.png"
import { FooterContainer, FooterInformation, FooterContent, FooterMedia,DividingLine, CopyrightText } from "../styles/footer-styles.styled.js";
import { Logo,Links } from "./utils.js";

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
            <FooterInformation>
                <h1>Best Friends:</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nunc maximus, nulla ut commodo</p></FooterInformation>
                <Logo link={logo} size="60px"></Logo>
            <FooterMedia>
            <Links></Links>
            </FooterMedia>
            </FooterContent>
            <CopyrightText>@Pavlo Trademark</CopyrightText>
        </FooterContainer>
    )
}
export default Footer;