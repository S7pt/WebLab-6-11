import {SelectForm,Select,SelectLabel} from "../styles/filter-styles.styled.js";

export function SelectForms({ name, options, state: [value, setValue], ...props }) {
    return (
        <SelectForm>       
            <SelectLabel htmlFor='filter'>{name}</SelectLabel>
            <Select name='filter' value={value} onChange={e => setValue(e.target.value)} {...props}>
                <option value='None'>No Filter</option>
                {options.map((thisOption) =>
                    <option key={thisOption} value={thisOption}>{thisOption}</option>
                )}
            </Select>
        </SelectForm>
    );
}