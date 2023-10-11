import Button from 'react-bootstrap/Button';

const ButtonAdd = props => {

    return (
        <div>
            <Button href={props.href} variant="outline-info" >{props.children}</Button>{' '}
        </div>
    );
};

export default ButtonAdd;