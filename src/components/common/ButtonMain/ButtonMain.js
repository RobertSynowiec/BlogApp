import Button from 'react-bootstrap/Button';

const ButtonMain = props => {

    return (
        <div>
            <Button onClick={props.onClick} className={props.className} href={props.href} variant={props.variant} >{props.children}</Button>{' '}
        </div>
    );
};

export default ButtonMain;