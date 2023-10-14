import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ButtonMain = props => {

    return (
        <div>
            <Button onClick={props.onClick} className={props.className} to={props.to} variant={props.variant} as={Link}>{props.children}</Button>
        </div>
    );
};

export default ButtonMain;