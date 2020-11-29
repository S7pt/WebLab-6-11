import {CatalogueInteractionContainer,Input,SearchButton,SearchContainer} from '../styles/filter-and-search-styles.styled';
import {useState} from 'react'; 
import { FilterTile } from './filter-tiles';

function SearchBar(){
    const [text, setText] = useState('');

    return (
        <SearchContainer>
            <Input value={text} placeholder="Search..." onChange={e => (setText(e.target.value))} />
            <SearchButton onClick={e => (e.preventDefault())}>Search</SearchButton>
        </SearchContainer>
    );
}

function CatalogueInteractionTile(){
    return (
        <CatalogueInteractionContainer>
            <FilterTile></FilterTile>
            <SearchBar></SearchBar>
        </CatalogueInteractionContainer>
    )
}
export default CatalogueInteractionTile;