import heroImage from '../assets/hero-image.jpg';
import { HeroSectionContainer, HeroSectionTitle, HeroSectionTextbox, HeroSectionText } from '../styles/hero-section-styles.styled.js';

function HeroImage() {
    return (<img src={heroImage} width="470px" height="450px"></img>)
}
function HeroSection() {
    return (
        <HeroSectionContainer>
            <HeroImage></HeroImage>
            <HeroSectionTextbox>
                <HeroSectionTitle>Make friends with exotic creatures</HeroSectionTitle>
                <HeroSectionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur quia adipisci, quidem explicabo exercitationem laborum incidunt ut at! Praesentium quidem quo provident! Aspernatur nulla repellat sed. Mollitia, consectetur culpa?</HeroSectionText>
            </HeroSectionTextbox>
        </HeroSectionContainer>
    )
}
export default HeroSection;