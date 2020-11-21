import HeroSection from "../components/hero-section.js"
import {MainBodyContainer} from "../styles/main-body-styles.styled.js"
import {Tiles} from "../components/tiles.js"


function MainBody(){
    return(
        <MainBodyContainer>
        <HeroSection/>
        <Tiles/>
        </MainBodyContainer>
    )
}
export default MainBody;