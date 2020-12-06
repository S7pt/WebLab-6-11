import {CatalogueInteractionContainer,Input,SearchButton,SearchContainer} from '../styles/filter-and-search-styles.styled';
import {useState} from 'react'; 
import { FilterTile } from './filter-tiles';

function SearchBar({ state: [searchText, setSearchText] }){
    const [text, setText] = useState('');

    return (
        <SearchContainer>
            <Input value={text} placeholder="Search..." onChange={e => (setText(e.target.value))} />
            <SearchButton onClick={e => (e.setSearchText(text))}>Search</SearchButton>
        </SearchContainer>
    );
}

export function CatalogueInteractionTile({species,difficulty,search}){
    return (
        <CatalogueInteractionContainer>
            <FilterTile species={species} difficulty={difficulty}></FilterTile>
            <SearchBar state={search}></SearchBar>
        </CatalogueInteractionContainer>
    )
}
