import Button from 'react-bootstrap/Button';

const ButtonMain = props => {

    return (
        <div>
            <Button href={props.href} variant={props.variant} >{props.children}</Button>{' '}
        </div>
    );
};

export default ButtonMain;