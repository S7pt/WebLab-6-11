import { useField, ErrorMessage } from 'formik';
import { Label, Input, Field, Error } from '../styles/checkout-page-styles.styled.js'

function ValidationField({ label, ...props }) {

    const [field,meta] = useField(props);

    return (
        <Field>
            <Label htmlFor={props.name}>{label}</Label>
            <Input {...field} {...props} />
            <ErrorMessage name={field.name}>{error => <Error>{error}</Error>}</ErrorMessage>
        </Field>
    );
}

export default ValidationField; 