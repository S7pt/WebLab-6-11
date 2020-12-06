import {SelectForms} from './select.js'
import {FilterContainer} from '../styles/filter-styles.styled.js';

export function FilterTile({species,difficulty}) {
    return(
        <FilterContainer>
            <SelectForms name='Species' options={[ 'Caterpillar', 'Spider','Moth']} state={species} />
            <SelectForms name='Difficulty' options={[ 'Easy', 'Challenging']} state={difficulty} />
        </FilterContainer>
    )
} 