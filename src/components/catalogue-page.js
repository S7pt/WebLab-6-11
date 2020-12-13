import {CatalogueInteractionContainer} from '../styles/filter-and-search-styles.styled';
import {useEffect, useState} from 'react'; 
import {ItemsContainer, ViewMoreButton,ItemsMap} from '../styles/items-showcase-style.styled';
import {Tile} from '../components/tile.js';
import {CatalogueInteractionTile} from '../components/filter-and-search-section.js';
import { getFilteredItems } from '../connection';

export default function CatalogPage(props) { 
    const [border, setBorder] = useState(4);
    const [insect,setItems]=useState(null);
    const [insectsToShow,setInsectsToShow]=useState(null);
    const [speciesFilter, setSpeciesFilter] = useState('None');
    const [difficultyFilter, setDifficultyFilter] = useState('None');
    const [searchText, setSearchText] = useState('')

    function showMore() {
        setBorder(border + 4);
    }

    useEffect(() => {
        (async function (){
            setItems(await getFilteredItems(speciesFilter,difficultyFilter))
        })()
    }, [speciesFilter,difficultyFilter])

    useEffect(() => {
    const pattern = new RegExp(searchText, 'i');
    let filteredItems = insect.filter(item => (searchText === '' ||
        pattern.test(item.header) || pattern.test(item.text) ||
        pattern.test(item.price)));
    setInsectsToShow(filteredItems.slice(0,border));
    }, [border, searchText, props.itemsList]);

    function ItemShowcase(){
    return(
        <ItemsContainer>
            <ItemsMap>
            {insectsToShow.map((insect)=>
            <Tile source={insect.img} title={insect.header} text={insect.text} price={insect.price} id={insect.id}></Tile>)}
            </ItemsMap>
            <ViewMoreButton onClick={showMore}>View More</ViewMoreButton>
        </ItemsContainer>
        )
    }
    return(<>
    <CatalogueInteractionContainer>
        <CatalogueInteractionTile species={[speciesFilter, setSpeciesFilter]}
                    difficulty={[difficultyFilter, setDifficultyFilter]}
                    search={[searchText, setSearchText]}/>
               </CatalogueInteractionContainer>     
                    <ItemShowcase/>
             </>)
}