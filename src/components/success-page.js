import successCheckmark from '../assets/checkmark.svg'
import { SuccessContainer } from '../styles/success-page-styles.styled.js'
import { Link } from 'react-router-dom';

export function SuccessPage() {
    return (
        <SuccessContainer>
            <h1>Success!</h1>
            <div>Your order is being processed!</div>
            <Link to='/catalogue'>
                <button> Back to catalogue</button>
            </Link>
        </SuccessContainer>
    );
}

export default SuccessPage; 