import {CatalogueInteractionContainer,Input,SearchButton,SearchContainer} from '../styles/filter-and-search-styles.styled';
import {useEffect, useState} from 'react'; 
import {ItemsContainer, ViewMoreButton} from '../styles/items-showcase-style.styled';
import {Tile} from '../components/tile.js';
import {CatalogueInteractionTile} from '../components/filter-and-search-section.js';

export default function CatalogPage(itemsList) { 
    const [border, setBorder] = useState(8);
    const [insect, setItems] = useState(itemsList.slice(0,border));
    const [speciesFilter, setSpeciesFilter] = useState('None');
    const [difficultyFilter, setDifficultyFilter] = useState('None');
    const [searchText, setSearchText] = useState('')

    function showMore() {
        setBorder(border + 4);
    }


    useEffect(() => {
    const pattern = new RegExp(searchText, 'i');

    let filteredItems = itemsList.filter(item => (searchText === '' ||
        pattern.test(item.header) || pattern.test(item.text) ||
        pattern.test(item.price)));

    filteredItems = filteredItems.filter(item => (item.species === speciesFilter ||
        speciesFilter === 'None'));

    setItems(filteredItems.filter(item => (item.difficulty === difficultyFilter ||
        difficultyFilter === 'None')).slice(0, border));
    }, [border, speciesFilter, difficultyFilter, searchText, itemsList]);

    function ItemShowcase(){
    return(
        <ItemsContainer>
            {insect.map((insect)=>
            <Tile source={insect.img} title={insect.header} text={insect.text} price={insect.price}></Tile>)}
            <ViewMoreButton onClick={showMore}></ViewMoreButton>
        </ItemsContainer>
        )
    }
    return(<>
        <CatalogueInteractionTile type={[speciesFilter, setSpeciesFilter]}
                    condition={[difficultyFilter, setDifficultyFilter]}
                    search={[searchText, setSearchText]}/>
                    <ItemShowcase/>
             </>)
}