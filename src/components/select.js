import {SelectForm,Select} from "../styles/filter-styles.styled.js";
export function SelectForms() {
    return (
        <SelectForm>       
            <Select name='by species' >
                <option value='any'>Any species</option>
                <option value='spider'>Spider</option>
                <option value='butterfly'>Butterfly</option>
                <option value='butterfly'>Caterpillar</option>
            </Select>
            <Select name='by price'>
                <option value='any'>Any price</option>
                <option value='price'>By lowest price</option>
                <option value='weight'>By biggest price</option>
            </Select>
            <Select name='by difficulty'>
                <option value='any'>Any difficulty</option>
                <option value='easy'>Easy</option>
                <option value='easy'>Challenging</option>
            </Select>
        </SelectForm>
    );
}